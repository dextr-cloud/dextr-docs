/** SAMPLE CODE — Not a supported installer or final solution. Review, adapt, and test in a non-production ACXD workspace before use. Never run against a production workspace. */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { stateDir } from "./kit-config.mjs";

export function backupPaths(appId) {
  const root = join(stateDir(), "backup");
  return {
    root,
    app: join(root, "acxd", appId, "application.json"),
    deployments: join(root, "acxd", appId, "deployments.json"),
    flow: (flowId) => join(root, "acxd", appId, "flows", `${flowId}.json`),
    connect: (contactFlowId) => join(root, "connect", `${contactFlowId}.json`),
  };
}

export function readBackup(path, hint = "Run backup.mjs first.") {
  if (!existsSync(path)) throw new Error(`Missing backup ${path}. ${hint}`);
  return JSON.parse(readFileSync(path, "utf8"));
}
