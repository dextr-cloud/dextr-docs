/** SAMPLE CODE — Not a supported installer or final solution. Review, adapt, and test in a non-production ACXD workspace before use. Never run against a production workspace. */
import { execFileSync } from "node:child_process";

/** Read the webhook secret into memory only. The value is never printed or written to disk. */
export function fetchWebhookSecretFromArn(arn, { region, profile } = {}) {
  const args = ["secretsmanager", "get-secret-value", "--secret-id", arn, "--region", region, "--query", "SecretString", "--output", "text"];
  if (profile) args.push("--profile", profile);
  const secret = execFileSync("aws", args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
  if (!secret) throw new Error("Empty webhook secret from Secrets Manager");
  return secret;
}
