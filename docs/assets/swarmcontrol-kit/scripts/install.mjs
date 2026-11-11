#!/usr/bin/env node
/** SAMPLE CODE — Not a supported installer or final solution. Review, adapt, and test in a non-production ACXD workspace before use. Never run against a production workspace. */
/**
 * Install SwarmControl supervision into your existing ACXD applications.
 *
 *   node install.mjs --dry-run              plan only; no changes
 *   node install.mjs                        install every target (asks for confirmation)
 *   node install.mjs --only workspace       data requests and context variables only
 *   node install.mjs --yes                  skip the confirmation prompt
 *
 * Always hooks from the pristine copies backup.mjs saved, so re-running is safe.
 * Never deletes or unregisters any of your flows. Never touches Amazon Connect (see connect-block.mjs).
 */
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { loadKitConfig, readStackOutputs, kitContextNames, stateDir } from "./lib/kit-config.mjs";
import { acxdClient, isConflict } from "./lib/acxd-client.mjs";
import { fetchWebhookSecretFromArn } from "./lib/fetch-webhook-secret.mjs";
import { hookCustomerFlow, prepareHookFlow, attachDispatch, withKitContext } from "./lib/hook-rewriter.mjs";
import { wireApprovalSite } from "./lib/gate-wire.mjs";
import { planApplicationFlowMerge } from "./lib/kit-app-flows.mjs";
import { checkFlowReferences, formatIssues } from "./lib/flow-reference-check.mjs";
import { buildAndDeploy } from "./lib/acxd-deploy.mjs";
import { backupPaths, readBackup } from "./lib/backup-paths.mjs";
import { hasFlag, confirm, log, writeState, run } from "./lib/cli.mjs";

const ASSETS = join(dirname(fileURLToPath(import.meta.url)), "..", "assets");
const readAsset = (rel) => JSON.parse(readFileSync(join(ASSETS, rel), "utf8"));
const argValue = (name) => {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : undefined;
};

/** Pure plan from backups and assets. Throws on any blocker before anything is changed. */
function planInstall(cfg) {
  const hookTemplates = {
    input: prepareHookFlow(readAsset("flows/cpSupervisedInput.json"), cfg),
    output: prepareHookFlow(readAsset("flows/cpSupervisedOutput.json"), cfg),
  };
  const targets = [];
  const blockers = [];
  for (const t of cfg.TARGETS) {
    const paths = backupPaths(t.applicationId);
    const flows = [];
    const sites = [];
    const warnings = [];
    for (const flowId of t.flows) {
      const pristine = readBackup(paths.flow(flowId));
      let hooked;
      try {
        hooked = hookCustomerFlow(flowId, pristine, cfg.CTX, t.hooks);
      } catch (e) {
        blockers.push(...(e.blockers ?? [e.message]));
        continue;
      }
      for (const site of t.approvalSites.filter((s) => s.flowId === flowId)) {
        try {
          wireApprovalSite(hooked.nodes, site, hooked.sites, cfg);
        } catch (e) {
          blockers.push(e.message);
        }
      }
      flows.push({ flowId, description: pristine.description, nodes: hooked.nodes, contextVariables: hooked.contextVariables });
      sites.push(...hooked.sites);
      warnings.push(...hooked.warnings);
    }
    const hookFlows = ["input", "output"].map((kind) => {
      const tpl = hookTemplates[kind];
      return {
        flowId: t.hooks[kind],
        description: tpl.description,
        contextVariables: withKitContext(tpl.contextVariables, cfg.CTX),
        nodes: attachDispatch(tpl.nodes, sites.filter((s) => s.hook === kind), cfg.CTX),
      };
    });
    targets.push({ target: t, flows, hookFlows, sites, warnings });
  }
  return { targets, blockers };
}

function dataRequestBodies(cfg, apiUrl, secret) {
  const fill = (tpl, id) => {
    let s = JSON.stringify(tpl);
    s = s.split(`{{${id}}}`).join(cfg.DR[{ DR_TURN_CALLER: "turnCaller", DR_TURN_AI: "turnAi", DR_REQUEST_APPROVAL: "requestApproval" }[id]]);
    s = s.split("{{AI_SWARM_API_BASE}}").join(apiUrl);
    s = s.split("{{WEBHOOK_SECRET_INJECTED_AT_RUNTIME}}").join(secret);
    return JSON.parse(s);
  };
  return [
    fill(readAsset("data-requests/turnCaller.template.json"), "DR_TURN_CALLER"),
    fill(readAsset("data-requests/turnAi.template.json"), "DR_TURN_AI"),
    fill(readAsset("data-requests/requestApproval.template.json"), "DR_REQUEST_APPROVAL"),
  ];
}

async function ensureWorkspace(client, sdk, cfg, stack) {
  const secret = fetchWebhookSecretFromArn(stack.webhookSecretArn, { region: cfg.REGION, profile: cfg.PROFILE });
  for (const body of dataRequestBodies(cfg, stack.apiUrl, secret)) {
    const { dataRequestId, ...rest } = body;
    try {
      await client.send(new sdk.CreateDataRequestCommand(body));
      log("data-request", { dataRequestId, action: "created" });
    } catch (e) {
      if (!isConflict(e)) throw e;
      await client.send(new sdk.UpdateDataRequestCommand({ dataRequestIdentifier: dataRequestId, ...rest }));
      log("data-request", { dataRequestId, action: "updated" });
    }
  }
  for (const name of ["contactId", ...kitContextNames(cfg)]) {
    try {
      await client.send(new sdk.CreateContextVariableCommand({ name, schema: { type: "string" }, disallowExternalModification: false }));
      log("context-variable", { name, action: "created" });
    } catch (e) {
      if (!isConflict(e)) throw e;
      await client.send(new sdk.UpdateContextVariableCommand({ contextVariableIdentifier: name, disallowExternalModification: false }));
      log("context-variable", { name, action: "exists" });
    }
  }
}

async function upsertFlow(client, sdk, cfg, flow) {
  const payload = {
    mainLanguageCode: cfg.LANG,
    languageCodes: [cfg.LANG],
    untrained: false,
    description: flow.description,
    contextVariables: flow.contextVariables,
    nodes: flow.nodes,
  };
  try {
    await client.send(new sdk.CreateFlowCommand({ flowId: flow.flowId, ...payload }));
    return "created";
  } catch (e) {
    if (!isConflict(e)) throw e;
    await client.send(new sdk.UpdateFlowCommand({ flowIdentifier: flow.flowId, ...payload }));
    return "updated";
  }
}

async function installTarget(client, sdk, cfg, plan) {
  const t = plan.target;
  for (const f of plan.hookFlows) log("hook-flow", { flowId: f.flowId, action: await upsertFlow(client, sdk, cfg, f) });
  for (const f of plan.flows) log("customer-flow", { flowId: f.flowId, action: await upsertFlow(client, sdk, cfg, f) });

  const app = await client.send(new sdk.GetApplicationCommand({ applicationIdentifier: t.applicationId }));
  const flowPlan = planApplicationFlowMerge((app.flows ?? []).map((f) => f.flowId), t.hooks);
  if (flowPlan.added.length) {
    await client.send(
      new sdk.UpdateApplicationCommand({
        applicationIdentifier: t.applicationId,
        flows: flowPlan.next.map((flowId) => ({ flowId })),
        settings: app.settings,
      })
    );
  }
  log("application-flows", { applicationId: t.applicationId, added: flowPlan.added });

  const issues = await checkFlowReferences(client, sdk, { lang: cfg.LANG }, [...t.flows, t.hooks.input, t.hooks.output]);
  if (issues.length) throw new Error(`Flow reference check failed before build:\n${formatIssues(issues)}`);

  const statePath = join(stateDir(), `install-${t.applicationId}.json`);
  const previous = existsSync(statePath) ? JSON.parse(readFileSync(statePath, "utf8")) : null;
  const result = await buildAndDeploy(client, sdk, {
    appId: t.applicationId,
    deploymentId: t.deploymentId,
    lang: cfg.LANG,
    description: "ConnectPath SwarmControl install",
  });
  writeState(`install-${t.applicationId}.json`, {
    applicationId: t.applicationId,
    channel: t.channel,
    deploymentId: result.deploymentId,
    alias: result.alias,
    buildId: result.buildId,
    preInstallBuildId: previous?.preInstallBuildId ?? result.priorBuildId,
    hooks: t.hooks,
    sites: plan.sites.map(({ id, hook }) => ({ id, hook })),
    installedAt: new Date().toISOString(),
  });
  log("deployed", { applicationId: t.applicationId, channel: t.channel, buildId: result.buildId, alias: result.alias });
}

run(async () => {
  const cfg = loadKitConfig();
  const only = argValue("--only");
  if (only && only !== "workspace") throw new Error(`--only supports "workspace"`);
  const stack = readStackOutputs();
  const { client, sdk } = acxdClient(cfg);

  const plan = only ? null : planInstall(cfg);
  if (plan) {
    for (const p of plan.targets) {
      log("plan", {
        applicationId: p.target.applicationId,
        channel: p.target.channel,
        flows: p.flows.map((f) => f.flowId),
        hookFlows: p.hookFlows.map((f) => f.flowId),
        inputSites: p.sites.filter((s) => s.hook === "input").length,
        outputSites: p.sites.filter((s) => s.hook === "output").length,
        approvalSites: p.target.approvalSites.length,
      });
      for (const w of p.warnings) log("warning", { message: w });
    }
    if (plan.blockers.length) throw new Error(`Install blocked; nothing was changed:\n  - ${plan.blockers.join("\n  - ")}`);
  }
  if (hasFlag("--dry-run")) {
    log("dry-run-complete", { note: "No changes made." });
    return;
  }
  await confirm(`Install SwarmControl into workspace ${cfg.WS}${only ? " (workspace resources only)" : ` for ${cfg.TARGETS.length} application(s)`}?`);
  await ensureWorkspace(client, sdk, cfg, stack);
  if (!plan) return;
  for (const p of plan.targets) await installTarget(client, sdk, cfg, p);
  log("install-complete", { next: "Run connect-block.mjs to point your Connect flows at the new deployment." });
});
