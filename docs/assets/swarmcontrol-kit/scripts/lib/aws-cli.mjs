/** SAMPLE CODE — Not a supported installer or final solution. Review, adapt, and test in a non-production ACXD workspace before use. Never run against a production workspace. */
import { execFileSync } from "node:child_process";

/** Run an AWS CLI command for the configured profile and region and parse JSON output. */
export function aws(cfg, args, { json = true } = {}) {
  const full = [...args, "--region", cfg.REGION];
  if (cfg.PROFILE) full.push("--profile", cfg.PROFILE);
  if (json) full.push("--output", "json");
  const out = execFileSync("aws", full, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], maxBuffer: 64 * 1024 * 1024 });
  return json ? (out.trim() ? JSON.parse(out) : {}) : out;
}

export function stackOutputs(cfg) {
  const res = aws(cfg, ["cloudformation", "describe-stacks", "--stack-name", cfg.connectPath.stackName]);
  const stack = res.Stacks?.[0];
  if (!stack) throw new Error(`Stack ${cfg.connectPath.stackName} not found`);
  const out = Object.fromEntries((stack.Outputs ?? []).map((o) => [o.OutputKey, o.OutputValue]));
  const params = Object.fromEntries((stack.Parameters ?? []).map((p) => [p.ParameterKey, p.ParameterValue]));
  return { outputs: out, params };
}

export function describeContactFlow(cfg, contactFlowId) {
  return aws(cfg, ["connect", "describe-contact-flow", "--instance-id", cfg.INSTANCE, "--contact-flow-id", contactFlowId]).ContactFlow;
}

export function updateContactFlowContent(cfg, contactFlowId, content) {
  aws(cfg, [
    "connect",
    "update-contact-flow-content",
    "--instance-id",
    cfg.INSTANCE,
    "--contact-flow-id",
    contactFlowId,
    "--content",
    typeof content === "string" ? content : JSON.stringify(content),
  ], { json: false });
}
