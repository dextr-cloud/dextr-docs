#!/usr/bin/env node
/** SAMPLE CODE — Not a supported installer or final solution. Review, adapt, and test in a non-production ACXD workspace before use. Never run against a production workspace. */
/**
 * Fast rollback: point each target deployment back at the build that was live before
 * the first install. Flows are not changed; run uninstall.mjs afterwards for a full removal.
 *
 *   node rollback.mjs [--yes]
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { loadKitConfig, stateDir } from "./lib/kit-config.mjs";
import { acxdClient } from "./lib/acxd-client.mjs";
import { redeployBuild } from "./lib/acxd-deploy.mjs";
import { confirm, log, run } from "./lib/cli.mjs";

run(async () => {
  const cfg = loadKitConfig();
  const { client, sdk } = acxdClient(cfg);
  const plans = cfg.TARGETS.map((t) => {
    const path = join(stateDir(), `install-${t.applicationId}.json`);
    if (!existsSync(path)) throw new Error(`Missing ${path}; nothing to roll back for ${t.applicationId}.`);
    return { t, state: JSON.parse(readFileSync(path, "utf8")) };
  });
  for (const { t, state } of plans) log("plan", { applicationId: t.applicationId, from: state.buildId, to: state.preInstallBuildId });
  await confirm(`Redeploy the pre-install build for ${plans.length} application(s)?`);
  for (const { t, state } of plans) {
    await redeployBuild(client, sdk, { appId: t.applicationId, deploymentId: t.deploymentId, lang: cfg.LANG, buildId: state.preInstallBuildId });
    log("rolled-back", { applicationId: t.applicationId, buildId: state.preInstallBuildId });
  }
  log("rollback-complete", { next: "Run uninstall.mjs to remove the hook flows and restore your flows." });
});
