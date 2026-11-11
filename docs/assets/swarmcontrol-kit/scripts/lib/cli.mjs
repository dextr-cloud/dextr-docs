/** SAMPLE CODE — Not a supported installer or final solution. Review, adapt, and test in a non-production ACXD workspace before use. Never run against a production workspace. */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { stateDir } from "./kit-config.mjs";

export const hasFlag = (name) => process.argv.includes(name);

export async function confirm(message) {
  if (hasFlag("--yes")) return;
  if (!process.stdin.isTTY) throw new Error(`${message}\nRe-run in an interactive shell, or pass --yes.`);
  process.stdout.write(`${message} Type yes to continue: `);
  const line = await new Promise((resolve) => {
    let s = "";
    process.stdin.on("data", (d) => {
      s += d;
      if (s.includes("\n")) resolve(s.trim());
    });
  });
  process.stdin.pause();
  if (line !== "yes") throw new Error("Aborted");
}

export function log(step, data = {}) {
  console.log(JSON.stringify({ step, ...data }));
}

export function writeState(name, value) {
  const path = join(stateDir(), name);
  writeFileSync(path, JSON.stringify(value, null, 2) + "\n");
  return path;
}

export function run(main) {
  main().catch((e) => {
    console.error(`ERROR: ${e.message || e}`);
    process.exit(1);
  });
}
