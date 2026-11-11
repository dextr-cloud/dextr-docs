#!/usr/bin/env node
/** SAMPLE CODE — Not a supported installer or final solution. Review, adapt, and test in a non-production ACXD workspace before use. Never run against a production workspace. */
/**
 * Read-only checks that the install is live (V1–V6), then one simulated caller and AI
 * turn against your ConnectPath stack. Run after install.mjs and connect-block.mjs --apply.
 *
 *   node verify.mjs                 all checks
 *   node verify.mjs --skip-connect  skip V6 (before connect-block.mjs --apply)
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { loadKitConfig, readStackOutputs, kitContextNames, stateDir } from "./lib/kit-config.mjs";
import { acxdClient, listAllPages } from "./lib/acxd-client.mjs";
import { fetchWebhookSecretFromArn } from "./lib/fetch-webhook-secret.mjs";
import { describeContactFlow } from "./lib/aws-cli.mjs";
import { findAcxBlock } from "./lib/connect-block.mjs";
import { isKitNode } from "./lib/flow-helpers.mjs";
import { hasFlag, log, run } from "./lib/cli.mjs";

async function postTurn(apiUrl, secret, body) {
  const res = await fetch(`${apiUrl}/turn`, {
    method: "POST",
    headers: { "content-type": "application/json", "x-cp-webhook-secret": secret },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  let json = null;
  try {
    json = JSON.parse(text);
  } catch {}
  return { status: res.status, json };
}

run(async () => {
  const cfg = loadKitConfig();
  const stack = readStackOutputs();
  const { client, sdk } = acxdClient(cfg);
  const results = [];
  const check = (id, name, ok, detail) => {
    results.push({ ok });
    log("verify", { id, name, ok, detail });
  };

  const drs = await listAllPages(client, sdk.ListDataRequestsCommand, {});
  for (const id of Object.values(cfg.DR)) {
    if (!drs.some((d) => d.dataRequestId === id)) {
      check("V1", `Data request ${id}`, false, "missing");
      continue;
    }
    const dr = await client.send(new sdk.GetDataRequestCommand({ dataRequestIdentifier: id }));
    const url = dr.webhook?.environments?.production?.url ?? "";
    check("V1", `Data request ${id}`, url.startsWith(stack.apiUrl), url);
  }

  const ctx = await listAllPages(client, sdk.ListContextVariablesCommand, {});
  for (const name of kitContextNames(cfg)) {
    const v = ctx.find((c) => c.name === name);
    check("V2", `Context variable ${name}`, Boolean(v) && v.disallowExternalModification !== true,
      v ? `disallowExternalModification=${v.disallowExternalModification ?? false}` : "missing");
  }

  for (const t of cfg.TARGETS) {
    const statePath = join(stateDir(), `install-${t.applicationId}.json`);
    const state = existsSync(statePath) ? JSON.parse(readFileSync(statePath, "utf8")) : null;
    check("V3", `Install state (${t.channel})`, Boolean(state), state ? statePath : "run install.mjs");
    if (!state) continue;

    const app = await client.send(new sdk.GetApplicationCommand({ applicationIdentifier: t.applicationId }));
    const appFlows = (app.flows ?? []).map((f) => f.flowId);
    const missing = [t.hooks.input, t.hooks.output, ...t.flows].filter((f) => !appFlows.includes(f));
    check("V3", `Application flows (${t.channel})`, missing.length === 0, missing.length ? `not registered: ${missing.join(", ")}` : "hook and customer flows registered");

    for (const flowId of t.flows) {
      const flow = await client.send(new sdk.GetFlowCommand({ flowIdentifier: flowId, languageCode: cfg.LANG }));
      const hooks = Object.values(flow.nodes ?? {}).filter(isKitNode).length;
      check("V4", `Flow ${flowId} hooked`, hooks > 0, `${hooks} ConnectPath nodes`);
    }

    const dep = await client.send(
      new sdk.GetApplicationDeploymentCommand({ applicationIdentifier: t.applicationId, deploymentIdentifier: t.deploymentId })
    );
    check("V5", `Deployment ${t.deploymentId} (${t.channel})`, dep.buildId === state.buildId,
      `live build ${dep.buildId}, installed build ${state.buildId}`);

    if (t.connectContactFlowId && !hasFlag("--skip-connect")) {
      const block = findAcxBlock(JSON.parse(describeContactFlow(cfg, t.connectContactFlowId).Content), t.applicationId);
      const p = block?.Parameters ?? {};
      const ok = p.AgentConfiguration?.Alias === state.alias && p.ContextVariables?.contactId === "$.ContactId";
      check("V6", `Connect block (${t.channel})`, ok,
        block ? `alias ${p.AgentConfiguration?.Alias}, contactId=${p.ContextVariables?.contactId}` : "block not found");
    }
  }

  const secret = fetchWebhookSecretFromArn(stack.webhookSecretArn, { region: cfg.REGION, profile: cfg.PROFILE });
  const contactId = `cp-verify-${Date.now()}`;
  const caller = await postTurn(stack.apiUrl, secret, { contactId, role: "caller", text: "Hello from verify.mjs", channel: "chat" });
  check("V7", "Simulated caller turn", caller.status === 200 && caller.json?.ok === true, `HTTP ${caller.status}`);
  const ai = await postTurn(stack.apiUrl, secret, { contactId, role: "ai", aiDraft: "Simulated AI draft line.", channel: "chat" });
  check("V7", "Simulated AI turn", ai.status === 200 && typeof ai.json?.speakText === "string" && ai.json.speakText.length > 0, `HTTP ${ai.status}`);

  const failed = results.filter((r) => !r.ok).length;
  log("verify-complete", { passed: results.length - failed, failed, simulatedContactId: contactId });
  if (failed) process.exit(1);
});
