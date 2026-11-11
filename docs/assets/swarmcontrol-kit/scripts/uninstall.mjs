#!/usr/bin/env node
/** SAMPLE CODE — Not a supported installer or final solution. Review, adapt, and test in a non-production ACXD workspace before use. Never run against a production workspace. */
/**
 * Remove SwarmControl from every target and redeploy.
 *
 *   node uninstall.mjs                  restore flows from backup, remove hook flows, rebuild, redeploy
 *   node uninstall.mjs --connect        also restore each Connect block's original parameters
 *   node uninstall.mjs --workspace      also delete the kit's data requests and context variables
 *   node uninstall.mjs --yes            skip the confirmation prompt
 *
 * Restoring from backup discards edits made to a hooked flow after install. Your other flows
 * and applications are never touched.
 */
import { existsSync, rmSync } from "node:fs";
import { join } from "node:path";
import { loadKitConfig, kitContextNames, stateDir } from "./lib/kit-config.mjs";
import { acxdClient, isNotFound } from "./lib/acxd-client.mjs";
import { planApplicationFlowRemoval } from "./lib/kit-app-flows.mjs";
import { buildAndDeploy } from "./lib/acxd-deploy.mjs";
import { describeContactFlow, updateContactFlowContent } from "./lib/aws-cli.mjs";
import { findAcxBlock, restoreAcxBlock } from "./lib/connect-block.mjs";
import { backupPaths, readBackup } from "./lib/backup-paths.mjs";
import { hasFlag, confirm, log, run } from "./lib/cli.mjs";

async function ignoreMissing(p) {
  try {
    await p;
    return "deleted";
  } catch (e) {
    if (isNotFound(e)) return "absent";
    throw e;
  }
}

run(async () => {
  const cfg = loadKitConfig();
  const { client, sdk } = acxdClient(cfg);
  const withConnect = hasFlag("--connect");
  const withWorkspace = hasFlag("--workspace");

  for (const t of cfg.TARGETS) {
    const paths = backupPaths(t.applicationId);
    for (const flowId of t.flows) readBackup(paths.flow(flowId), "Without a pristine backup the flow cannot be restored automatically.");
    if (withConnect && t.connectContactFlowId) readBackup(paths.connect(t.connectContactFlowId));
  }
  await confirm(
    `Remove SwarmControl from ${cfg.TARGETS.length} application(s) in workspace ${cfg.WS}` +
      `${withConnect ? ", restore Connect blocks" : ""}${withWorkspace ? ", and delete kit data requests and context variables" : ""}?`
  );

  for (const t of cfg.TARGETS) {
    const paths = backupPaths(t.applicationId);
    for (const flowId of t.flows) {
      const pristine = readBackup(paths.flow(flowId));
      await client.send(
        new sdk.UpdateFlowCommand({
          flowIdentifier: flowId,
          mainLanguageCode: cfg.LANG,
          languageCodes: [cfg.LANG],
          untrained: false,
          description: pristine.description,
          contextVariables: pristine.contextVariables,
          nodes: pristine.nodes,
        })
      );
      log("flow-restored", { flowId });
    }

    const app = await client.send(new sdk.GetApplicationCommand({ applicationIdentifier: t.applicationId }));
    const plan = planApplicationFlowRemoval((app.flows ?? []).map((f) => f.flowId));
    if (plan.removed.length) {
      await client.send(
        new sdk.UpdateApplicationCommand({
          applicationIdentifier: t.applicationId,
          flows: plan.next.map((flowId) => ({ flowId })),
          settings: app.settings,
        })
      );
    }
    log("application-flows", { applicationId: t.applicationId, removed: plan.removed });

    const result = await buildAndDeploy(client, sdk, {
      appId: t.applicationId,
      deploymentId: t.deploymentId,
      lang: cfg.LANG,
      description: "ConnectPath SwarmControl uninstall",
    });
    log("deployed", { applicationId: t.applicationId, buildId: result.buildId, alias: result.alias });

    for (const flowId of [t.hooks.input, t.hooks.output]) {
      log("hook-flow", { flowId, action: await ignoreMissing(client.send(new sdk.DeleteFlowCommand({ flowIdentifier: flowId }))) });
    }

    if (withConnect && t.connectContactFlowId) {
      const original = JSON.parse(readBackup(paths.connect(t.connectContactFlowId)).Content);
      const originalParameters = findAcxBlock(original, t.applicationId)?.Parameters;
      const live = JSON.parse(describeContactFlow(cfg, t.connectContactFlowId).Content);
      updateContactFlowContent(cfg, t.connectContactFlowId, restoreAcxBlock(live, { applicationId: t.applicationId, originalParameters }));
      log("connect-block-restored", { contactFlowId: t.connectContactFlowId });
    }
    const statePath = join(stateDir(), `install-${t.applicationId}.json`);
    if (existsSync(statePath)) rmSync(statePath);
  }

  if (withWorkspace) {
    for (const id of Object.values(cfg.DR)) {
      log("data-request", { dataRequestId: id, action: await ignoreMissing(client.send(new sdk.DeleteDataRequestCommand({ dataRequestIdentifier: id }))) });
    }
    for (const name of kitContextNames(cfg)) {
      log("context-variable", { name, action: await ignoreMissing(client.send(new sdk.DeleteContextVariableCommand({ contextVariableIdentifier: name }))) });
    }
  }
  log("uninstall-complete", { backupsKept: join(stateDir(), "backup") });
});
