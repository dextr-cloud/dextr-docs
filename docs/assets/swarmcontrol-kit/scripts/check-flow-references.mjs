#!/usr/bin/env node
/** SAMPLE CODE — Not a supported installer or final solution. Review, adapt, and test in a non-production ACXD workspace before use. Never run against a production workspace. */
/**
 * Check data request, context, and local references in every target's flows and hook flows.
 * Exit 1 when a reference cannot be resolved (the same class of error as Designer Validate).
 *
 *   node check-flow-references.mjs
 *   node check-flow-references.mjs --flow-json=path/to/flow.json [--dr-json=path/to/data-requests.json]
 */
import { readFileSync } from "node:fs";
import { acxdClient } from "./lib/acxd-client.mjs";
import { loadKitConfig } from "./lib/kit-config.mjs";
import { checkFlowReferences, checkFlowExportFile, formatIssues } from "./lib/flow-reference-check.mjs";
import { run, log } from "./lib/cli.mjs";

const argEq = (name) => process.argv.find((a) => a.startsWith(`${name}=`))?.slice(name.length + 1);

run(async () => {
  const flowJson = argEq("--flow-json");
  if (flowJson) {
    const drDump = argEq("--dr-json");
    const drById = new Map((drDump ? JSON.parse(readFileSync(drDump, "utf8")) : []).map((d) => [d.dataRequestId, d]));
    const issues = checkFlowExportFile(flowJson, { drById });
    if (issues.length) throw new Error(formatIssues(issues));
    return log("check-complete", { flowJson, issueCount: 0 });
  }
  const cfg = loadKitConfig();
  const { client, sdk } = acxdClient(cfg);
  const flowIds = cfg.TARGETS.flatMap((t) => [...t.flows, t.hooks.input, t.hooks.output]);
  const issues = await checkFlowReferences(client, sdk, { lang: cfg.LANG }, flowIds);
  if (issues.length) throw new Error(formatIssues(issues));
  log("check-complete", { flowIds, issueCount: 0 });
});
