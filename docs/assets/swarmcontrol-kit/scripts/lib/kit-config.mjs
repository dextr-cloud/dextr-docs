/** SAMPLE CODE — Not a supported installer or final solution. Review, adapt, and test in a non-production ACXD workspace before use. Never run against a production workspace. */
/** Load and validate config.json (ids only; never secrets). */
import { readFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { acxdSdkPath } from "./sdk-root.mjs";

const KIT_DIR = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");

export const HOOK_FLOW_PREFIX = "cpSupervised";
export const NODE_PREFIX = "cp:";
export const CHANNELS = ["chat", "voice"];

/**
 * ACXD flow ids are workspace-wide, so each target gets its own pair of hook flows.
 * Their return dispatch then only redirects into that target's own flows.
 */
export function hookFlowIds(target) {
  const key = target.key || target.channel;
  const suffix = key[0].toUpperCase() + key.slice(1);
  return { input: `${HOOK_FLOW_PREFIX}Input${suffix}`, output: `${HOOK_FLOW_PREFIX}Output${suffix}` };
}

export const isHookFlowId = (id) => id.startsWith(HOOK_FLOW_PREFIX);

function argValue(name) {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : undefined;
}

export function configPath() {
  return argValue("--config") || process.env.SWARM_KIT_CONFIG || join(KIT_DIR, "config.json");
}

/** Install state (backups, stack outputs, rollback ids). Never committed. */
export function stateDir() {
  const dir = process.env.SWARM_KIT_STATE_DIR || join(KIT_DIR, "state");
  mkdirSync(dir, { recursive: true });
  return dir;
}

export function validateConfig(raw) {
  const errors = [];
  const need = (cond, msg) => {
    if (!cond) errors.push(msg);
  };
  need(raw?.aws?.region, "aws.region is required");
  need(raw?.aws?.connectInstanceId, "aws.connectInstanceId is required");
  need(raw?.connectPath?.stackName, "connectPath.stackName is required");
  need(raw?.acxd?.workspaceId, "acxd.workspaceId is required");
  const prefix = raw?.naming?.dataRequestPrefix;
  need(prefix, "naming.dataRequestPrefix is required");
  if (prefix) need(/^[a-z][a-zA-Z0-9]*$/.test(prefix), "naming.dataRequestPrefix must be camelCase letters and digits (no underscores or hyphens)");
  need(Array.isArray(raw?.targets) && raw.targets.length > 0, "targets must list at least one ACXD application");
  const seenFlows = new Set();
  const seenKeys = new Set();
  (raw?.targets ?? []).forEach((t, i) => {
    const at = `targets[${i}]`;
    need(CHANNELS.includes(t.channel), `${at}.channel must be "chat" or "voice"`);
    const key = t.key || t.channel;
    if (key) {
      need(/^[a-z][a-zA-Z0-9]*$/.test(key), `${at}.key must be camelCase letters and digits`);
      need(!seenKeys.has(key), `${at}: two targets share key "${key}". Set a unique targets[].key when two targets use the same channel.`);
      seenKeys.add(key);
    }
    need(t.applicationId, `${at}.applicationId is required`);
    need(t.deploymentId, `${at}.deploymentId is required`);
    need(Array.isArray(t.flows) && t.flows.length > 0, `${at}.flows must list at least one flow id to hook`);
    for (const f of t.flows ?? []) {
      need(!isHookFlowId(f), `${at}.flows must not include the hook flow ${f}`);
      need(!seenFlows.has(f), `${at}.flows: flow ${f} is listed more than once across targets`);
      seenFlows.add(f);
    }
    const gatedFlows = (t.approvalSites ?? []).map((s) => s.flowId);
    need(new Set(gatedFlows).size === gatedFlows.length, `${at}.approvalSites: at most one approval site per flow`);
    (t.approvalSites ?? []).forEach((s, j) => {
      need((t.flows ?? []).includes(s.flowId), `${at}.approvalSites[${j}].flowId must be one of ${at}.flows`);
      need(s.fromNodeId, `${at}.approvalSites[${j}].fromNodeId is required`);
      need(s.edgeName, `${at}.approvalSites[${j}].edgeName is required`);
      need(s.action, `${at}.approvalSites[${j}].action is required`);
    });
  });
  return errors;
}

export function loadKitConfig(path = configPath()) {
  if (!existsSync(path)) {
    throw new Error(`Config not found at ${path}. Copy config.example.json to config.json and fill in your ids, or pass --config <path>.`);
  }
  const raw = JSON.parse(readFileSync(path, "utf8"));
  const errors = validateConfig(raw);
  if (errors.length) throw new Error(`Invalid config ${path}:\n  - ${errors.join("\n  - ")}`);
  const p = raw.naming.dataRequestPrefix;
  const cp = raw.naming.contextPrefix || "cp_swarm_";
  return {
    ...raw,
    CONFIG_PATH: path,
    LANG: raw.acxd.languageCode || "en-US",
    REGION: raw.aws.region,
    PROFILE: raw.aws.profile || process.env.AWS_PROFILE,
    WS: raw.acxd.workspaceId,
    INSTANCE: raw.aws.connectInstanceId,
    TARGETS: raw.targets.map((t) => ({ approvalSites: [], ...t, key: t.key || t.channel, hooks: hookFlowIds(t) })),
    DR: {
      turnCaller: `${p}turnCaller`,
      turnAi: `${p}turnAi`,
      requestApproval: `${p}requestApproval`,
    },
    CTX: {
      lastCustomerText: `${cp}lastCustomerText`,
      exitReason: `${cp}exitReason`,
      customerText: `${cp}customerText`,
      replyDraft: `${cp}replyDraft`,
      speakText: `${cp}speakText`,
      whisperNote: `${cp}whisperNote`,
      history: `${cp}history`,
      returnTo: `${cp}returnTo`,
      approvalStatus: `${cp}approvalStatus`,
      approvalRequestId: `${cp}approvalRequestId`,
      channel: `${cp}channel`,
    },
    CONTEXT_PREFIX: cp,
    SDK_PATH: acxdSdkPath(),
  };
}

/**
 * Workspace context variables the kit creates (all prefixed). The Connect block sets
 * cp_swarm_channel, so every kit variable keeps external modification allowed.
 */
export function kitContextNames(cfg) {
  return Object.values(cfg.CTX);
}

export function readStackOutputs() {
  const path = join(stateDir(), "stack-outputs.json");
  if (!existsSync(path)) throw new Error(`Missing ${path}. Run preflight.mjs first.`);
  return JSON.parse(readFileSync(path, "utf8"));
}
