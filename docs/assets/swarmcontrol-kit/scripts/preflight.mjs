#!/usr/bin/env node
/** SAMPLE CODE — Not a supported installer or final solution. Review, adapt, and test in a non-production ACXD workspace before use. Never run against a production workspace. */
/**
 * Read-only checks P1–P7. Writes state/stack-outputs.json for the other scripts.
 * Makes no changes to ACXD, Amazon Connect, or your ConnectPath stack.
 */
import { loadKitConfig } from "./lib/kit-config.mjs";
import { acxdClient, listAllPages } from "./lib/acxd-client.mjs";
import { stackOutputs, describeContactFlow, aws } from "./lib/aws-cli.mjs";
import { fetchWebhookSecretFromArn } from "./lib/fetch-webhook-secret.mjs";
import { findAcxBlock } from "./lib/connect-block.mjs";
import { log, writeState, run } from "./lib/cli.mjs";

const REQUIRED_OUTPUTS = ["AiSwarmApiUrl", "AiSwarmWebhookSecretArn", "AiSwarmTableName", "RealtimeWebSocketWssUrl"];

run(async () => {
  const cfg = loadKitConfig();
  const results = [];
  const check = (id, name, ok, detail) => {
    results.push({ id, name, ok, detail });
    log("preflight", { id, name, ok, detail });
  };

  const { client, sdk } = acxdClient(cfg);
  check("P1", "ACXD SDK loads", true, cfg.SDK_PATH);

  const apps = await listAllPages(client, sdk.ListApplicationsCommand, {});
  for (const t of cfg.TARGETS) {
    const app = apps.find((a) => a.applicationId === t.applicationId);
    check("P2", `ACXD application ${t.applicationId} (${t.channel})`, Boolean(app), app?.name ?? "not found in workspace");
  }

  const { outputs, params } = stackOutputs(cfg);
  const missing = REQUIRED_OUTPUTS.filter((k) => !outputs[k]);
  check("P3", "ConnectPath stack outputs", missing.length === 0 && params.AiSwarmEnabled === "true",
    missing.length ? `missing ${missing.join(", ")}` : `AiSwarmEnabled=${params.AiSwarmEnabled}`);
  if (missing.length) throw new Error("SwarmControl is not enabled on your ConnectPath stack. Contact ConnectPath Support.");
  const apiUrl = outputs.AiSwarmApiUrl.replace(/\/$/, "");
  writeState("stack-outputs.json", {
    apiUrl,
    webhookSecretArn: outputs.AiSwarmWebhookSecretArn,
    table: outputs.AiSwarmTableName,
    wssUrl: outputs.RealtimeWebSocketWssUrl,
    readAt: new Date().toISOString(),
  });

  const secret = fetchWebhookSecretFromArn(outputs.AiSwarmWebhookSecretArn, { region: cfg.REGION, profile: cfg.PROFILE });
  check("P4", "Webhook secret readable (value not shown)", secret.length > 0, `length ${secret.length}`);

  const noAuth = await fetch(`${apiUrl}/turn`, { method: "POST", headers: { "content-type": "application/json" }, body: "{}" });
  const withAuth = await fetch(`${apiUrl}/turn`, {
    method: "POST",
    headers: { "content-type": "application/json", "x-cp-webhook-secret": secret },
    body: "{}",
  });
  check("P5", "POST /turn auth", noAuth.status === 401 && withAuth.status === 400, `no header ${noAuth.status}, header + {} ${withAuth.status}`);

  const instance = aws(cfg, ["connect", "describe-instance", "--instance-id", cfg.INSTANCE]).Instance;
  check("P6", "Connect instance", Boolean(instance), instance?.InstanceAlias);
  if (cfg.aws.escalationQueueId) {
    const q = aws(cfg, ["connect", "describe-queue", "--instance-id", cfg.INSTANCE, "--queue-id", cfg.aws.escalationQueueId]).Queue;
    check("P6", "Escalation queue", Boolean(q), q?.Name);
  }
  for (const t of cfg.TARGETS) {
    if (!t.connectContactFlowId) continue;
    const flow = describeContactFlow(cfg, t.connectContactFlowId);
    const block = findAcxBlock(JSON.parse(flow.Content), t.applicationId);
    check("P6", `Connect flow ${flow.Name} (${t.channel})`, Boolean(block),
      block ? `ACXD block ${block.Identifier}` : `no ConnectParticipantWithAgenticCX block for application ${t.applicationId}`);
  }

  for (const t of cfg.TARGETS) {
    const app = await client.send(new sdk.GetApplicationCommand({ applicationIdentifier: t.applicationId }));
    const lang = app.settings?.languageCode;
    check("P7", `Application language (${t.channel})`, lang === cfg.LANG, `${lang} (config ${cfg.LANG})`);
    const deps = await client.send(new sdk.ListApplicationDeploymentsCommand({ applicationIdentifier: t.applicationId }));
    const dep = (deps.items ?? []).find((d) => d.deploymentId === t.deploymentId);
    check("P7", `Deployment ${t.deploymentId} (${t.channel})`, Boolean(dep), dep ? `alias ${dep.deploymentAlias}` : "not found");
    const registered = (app.flows ?? []).map((f) => f.flowId);
    for (const f of t.flows) {
      let found = true;
      try {
        await client.send(new sdk.GetFlowCommand({ flowIdentifier: f, languageCode: cfg.LANG }));
      } catch {
        found = false;
      }
      const onApp = registered.includes(f);
      check("P7", `Flow ${f} (${t.channel})`, found && onApp, !found ? "not found" : onApp ? "found" : "exists but is not registered on the application");
    }
  }

  const failed = results.filter((r) => !r.ok);
  log("preflight-complete", { passed: results.length - failed.length, failed: failed.length });
  if (failed.length) process.exit(1);
});
