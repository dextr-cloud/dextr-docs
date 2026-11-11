/** SAMPLE CODE — Not a supported installer or final solution. Review, adapt, and test in a non-production ACXD workspace before use. Never run against a production workspace. */
import { createRequire } from "node:module";

export function acxdClient(cfg) {
  const envName = cfg.acxd?.apiKeyEnv || "ACXD_API_KEY";
  const key = process.env[envName];
  if (!key) throw new Error(`${envName} is not set. Export it in your shell (read -rs ${envName} && export ${envName}).`);
  const require = createRequire(import.meta.url);
  const sdk = require(cfg.SDK_PATH);
  return {
    client: new sdk.AgenticCXDesignerClient({ region: cfg.REGION, apiKey: key, workspaceId: cfg.WS }),
    sdk,
  };
}

export async function listAllPages(client, Command, input = {}) {
  const items = [];
  let nextToken;
  do {
    const res = await client.send(new Command({ ...input, nextToken }));
    items.push(...(res.items ?? []));
    nextToken = res.nextToken;
  } while (nextToken);
  return items;
}

export function isConflict(e) {
  return /exists|Conflict/i.test(String(e?.message ?? e));
}

export function isNotFound(e) {
  return /not ?found|NotFound|does not exist|404/i.test(String(e?.message ?? e)) || e?.$metadata?.httpStatusCode === 404;
}
