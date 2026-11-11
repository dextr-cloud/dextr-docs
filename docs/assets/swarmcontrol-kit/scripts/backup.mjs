#!/usr/bin/env node
/** SAMPLE CODE — Not a supported installer or final solution. Review, adapt, and test in a non-production ACXD workspace before use. Never run against a production workspace. */
/**
 * Read-only snapshot of everything install.mjs and connect-block.mjs will change:
 * each target application, each listed flow, and each Connect contact flow.
 * Writes to state/backup/. A pristine backup is never overwritten by a hooked copy.
 */
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { loadKitConfig, stateDir } from "./lib/kit-config.mjs";
import { acxdClient } from "./lib/acxd-client.mjs";
import { describeContactFlow } from "./lib/aws-cli.mjs";
import { isKitNode } from "./lib/flow-helpers.mjs";
import { backupPaths } from "./lib/backup-paths.mjs";
import { log, run } from "./lib/cli.mjs";

function save(path, value) {
  mkdirSync(join(path, ".."), { recursive: true });
  writeFileSync(path, JSON.stringify(value, null, 2) + "\n");
}

run(async () => {
  const cfg = loadKitConfig();
  const { client, sdk } = acxdClient(cfg);
  for (const t of cfg.TARGETS) {
    const paths = backupPaths(t.applicationId);
    const app = await client.send(new sdk.GetApplicationCommand({ applicationIdentifier: t.applicationId }));
    const deps = await client.send(new sdk.ListApplicationDeploymentsCommand({ applicationIdentifier: t.applicationId }));
    const installed = (app.flows ?? []).some((f) => f.flowId === t.hooks.input);
    if (!installed || !existsSync(paths.app)) {
      save(paths.app, app);
      save(paths.deployments, deps);
    }
    for (const flowId of t.flows) {
      const flow = await client.send(
        new sdk.GetFlowCommand({ applicationIdentifier: t.applicationId, flowIdentifier: flowId, mainLanguageCode: cfg.LANG })
      );
      const hooked = Object.values(flow.nodes ?? {}).some(isKitNode);
      const path = paths.flow(flowId);
      if (hooked && existsSync(path)) {
        log("backup-keep", { flowId, reason: "flow is already hooked; keeping the earlier pristine backup", path });
        continue;
      }
      if (hooked) throw new Error(`${flowId} is already hooked and there is no pristine backup at ${path}. Restore the flow by hand before continuing.`);
      save(path, { flowId, description: flow.description, contextVariables: flow.contextVariables, nodes: flow.nodes, languageCodes: flow.languageCodes });
      log("backup-flow", { applicationId: t.applicationId, flowId, path });
    }
    if (t.connectContactFlowId) {
      const path = paths.connect(t.connectContactFlowId);
      if (existsSync(path)) {
        log("backup-keep", { contactFlowId: t.connectContactFlowId, reason: "keeping the first backup, taken before connect-block.mjs", path });
      } else {
        const flow = describeContactFlow(cfg, t.connectContactFlowId);
        save(path, { Name: flow.Name, Id: flow.Id, Content: flow.Content, savedAt: new Date().toISOString() });
        log("backup-connect", { contactFlowId: t.connectContactFlowId, name: flow.Name, path });
      }
    }
  }
  log("backup-complete", { dir: join(stateDir(), "backup") });
});
