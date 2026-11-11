/** SAMPLE CODE — Not a supported installer or final solution. Review, adapt, and test in a non-production ACXD workspace before use. Never run against a production workspace. */
import { existsSync } from "node:fs";
import { homedir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));

export const DEFAULT_SDK_ROOT = join(homedir(), ".cache", "swarmcontrol-acxd-sdk");

/** SDK install dir, outside the kit. See README.md. */
export function resolveSdkRoot() {
  if (process.env.ACXD_SDK_ROOT) return process.env.ACXD_SDK_ROOT;
  let dir = HERE;
  for (let depth = 0; depth < 10; depth++) {
    for (const rel of ["docs/amazon-connect-ai-agents/sdk", "amazon-connect-ai-agents/sdk"]) {
      const sdkDir = join(dir, rel);
      if (existsSync(join(sdkDir, "package.json")) || existsSync(join(sdkDir, "node_modules", "amazon-connect-acxd-sdk"))) {
        return sdkDir;
      }
    }
    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return DEFAULT_SDK_ROOT;
}

/** Directory containing `amazon-connect-acxd-sdk` (and AWS SDK peers). */
export function resolveSdkNodeModules() {
  if (process.env.ACXD_SDK_NODE_MODULES) return process.env.ACXD_SDK_NODE_MODULES;
  const candidates = [
    join(resolveSdkRoot(), "node_modules"),
    join(DEFAULT_SDK_ROOT, "node_modules"),
  ];
  for (const nm of candidates) {
    if (existsSync(join(nm, "amazon-connect-acxd-sdk"))) return nm;
  }
  throw new Error(
    "ACXD SDK not installed. From any directory (outside this repo is fine):\n" +
      `  mkdir -p ${DEFAULT_SDK_ROOT} && cd ${DEFAULT_SDK_ROOT} && \\\n` +
      "  npm init -y >/dev/null && npm install amazon-connect-acxd-sdk@0.2.0\n" +
      "Or set ACXD_SDK_ROOT / ACXD_SDK_NODE_MODULES to your install."
  );
}

export function acxdSdkPath() {
  return join(resolveSdkNodeModules(), "amazon-connect-acxd-sdk");
}
