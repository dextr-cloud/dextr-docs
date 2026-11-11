#!/usr/bin/env node
/** SAMPLE CODE — Not a supported installer or final solution. Review, adapt, and test in a non-production ACXD workspace before use. Never run against a production workspace. */
/**
 * Point each target's Amazon Connect contact flow at the SwarmControl deployment.
 * Changes only the ConnectParticipantWithAgenticCX block: Alias and ContextVariables.
 * Never touches phone numbers, queues, or any other block.
 *
 *   node connect-block.mjs            show the change (default; no writes)
 *   node connect-block.mjs --apply    write it (asks you to type yes, or pass --yes)
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { loadKitConfig, stateDir } from "./lib/kit-config.mjs";
import { describeContactFlow, updateContactFlowContent } from "./lib/aws-cli.mjs";
import { patchAcxBlock } from "./lib/connect-block.mjs";
import { backupPaths } from "./lib/backup-paths.mjs";
import { hasFlag, confirm, log, run } from "./lib/cli.mjs";

run(async () => {
  const cfg = loadKitConfig();
  const apply = hasFlag("--apply");
  const changes = [];
  for (const t of cfg.TARGETS) {
    if (!t.connectContactFlowId) {
      log("skip", { applicationId: t.applicationId, reason: "no connectContactFlowId in config" });
      continue;
    }
    const statePath = join(stateDir(), `install-${t.applicationId}.json`);
    if (!existsSync(statePath)) throw new Error(`Missing ${statePath}. Run install.mjs first.`);
    if (!existsSync(backupPaths(t.applicationId).connect(t.connectContactFlowId))) {
      throw new Error(`No backup of Connect flow ${t.connectContactFlowId}. Run backup.mjs first.`);
    }
    const { alias } = JSON.parse(readFileSync(statePath, "utf8"));
    const flow = describeContactFlow(cfg, t.connectContactFlowId);
    const patch = patchAcxBlock(JSON.parse(flow.Content), {
      applicationId: t.applicationId,
      alias,
      channel: t.channel,
      channelContextName: cfg.CTX.channel,
    });
    const unchanged = JSON.stringify(patch.before) === JSON.stringify(patch.after);
    log("connect-block", {
      contactFlow: flow.Name,
      contactFlowId: t.connectContactFlowId,
      blockId: patch.blockId,
      alias: { before: patch.before.AgentConfiguration?.Alias, after: alias },
      contextVariables: { before: patch.before.ContextVariables ?? {}, after: patch.after.ContextVariables },
      unchanged,
    });
    if (!unchanged) changes.push({ t, patch });
  }
  if (!apply) {
    log("dry-run-complete", { pending: changes.length, next: changes.length ? "Re-run with --apply to write these changes." : "Nothing to change." });
    return;
  }
  if (!changes.length) return log("apply-complete", { updated: 0 });
  await confirm(`Update ${changes.length} Amazon Connect contact flow(s) in instance ${cfg.INSTANCE}?`);
  for (const { t, patch } of changes) {
    updateContactFlowContent(cfg, t.connectContactFlowId, patch.content);
    log("connect-block-updated", { contactFlowId: t.connectContactFlowId });
  }
  log("apply-complete", { updated: changes.length });
});
