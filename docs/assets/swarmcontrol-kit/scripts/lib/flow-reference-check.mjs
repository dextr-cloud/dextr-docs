/** SAMPLE CODE — Not a supported installer or final solution. Review, adapt, and test in a non-production ACXD workspace before use. Never run against a production workspace. */
/**
 * Static reference check for ACXD flows (SDK schemas + flow JSON).
 * Catches Designer "Unavailable field reference" class errors before human Validate.
 */
import { readFileSync } from "node:fs";
import { listAllPages } from "./acxd-client.mjs";

const TOKEN_RE = /\{([^}:]+):NLX\.(Variable|Local|Context)\}/g;


function drResponseFields(dr) {
  const props = dr?.responseSchema?.properties ?? dr?.responseSchema?.fields ?? {};
  return new Set(Object.keys(props));
}

function flowContextNames(flow) {
  const names = new Set(["contactId"]);
  for (const v of flow.contextVariables ?? []) {
    if (v?.name) names.add(v.name);
  }
  return names;
}

function collectLocals(nodes) {
  const locals = new Set();
  for (const n of Object.values(nodes ?? {})) {
    const define = n.metadata?.define;
    const defineList = Array.isArray(define) ? define : define ? [define] : [];
    for (const d of defineList) {
      if (d?.name) locals.add(d.name);
    }
    const out = n.metadata?.generative?.outputLocalName ?? n.metadata?.outputLocalName;
    if (out) locals.add(out);
    const genName = n.metadata?.generativeText?.name;
    if (genName) locals.add(genName);
    if (define?.name) locals.add(define.name);
  }
  return locals;
}

function splitDrField(ref) {
  const dot = ref.indexOf(".");
  if (dot <= 0) return null;
  return { drId: ref.slice(0, dot), field: ref.slice(dot + 1) };
}

function walk(value, path, visit) {
  if (value == null) return;
  if (typeof value === "string") {
    for (const m of value.matchAll(TOKEN_RE)) {
      visit({ ref: m[1], kind: m[2], path: `${path} (template)` });
    }
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((v, i) => walk(v, `${path}[${i}]`, visit));
    return;
  }
  if (typeof value !== "object") return;

  if (value.type === "variable" && value.name) {
    visit({ ref: value.name, kind: "Variable", path: `${path}.variable` });
  }
  if (value.type === "context" && value.name) {
    visit({ ref: value.name, kind: "Context", path: `${path}.context` });
  }
  if (value.type === "local" && value.name) {
    visit({ ref: value.name, kind: "Local", path: `${path}.local` });
  }
  for (const [k, v] of Object.entries(value)) {
    walk(v, `${path}.${k}`, visit);
  }
}

/**
 * @param {object} opts
 * @param {Map<string, object>} opts.drById dataRequestId -> GetDataRequest response
 * @param {Set<string>} opts.appContextNames workspace + flow context variable names
 * @param {string} opts.flowId
 * @param {object} flow GetFlow-shaped { nodes, contextVariables }
 * @returns {Array<{flowId,nodeId,nodeName,path,message}>}
 */
export function checkFlowJson({ drById, appContextNames, flowId, flow }) {
  const issues = [];
  const nodes = flow.nodes ?? {};
  const locals = collectLocals(nodes);
  const flowCtx = flowContextNames(flow);
  const ctxNames = new Set([...appContextNames, ...flowCtx]);

  const report = (nodeId, nodeName, issue) => {
    issues.push({ flowId, nodeId, nodeName, ...issue });
  };

  for (const [nodeId, node] of Object.entries(nodes)) {
    const nodeName = node.metadata?.name ?? node.type ?? nodeId;
    const visit = ({ ref, kind, path }) => {
      if (kind === "Local") {
        if (!locals.has(ref)) {
          report(nodeId, nodeName, {
            path,
            message: `Unresolved local "${ref}"`,
          });
        }
        return;
      }
      if (kind === "Context") {
        if (!ctxNames.has(ref)) {
          report(nodeId, nodeName, {
            path,
            message: `Unresolved context variable "${ref}"`,
          });
        }
        return;
      }
      const drField = splitDrField(ref);
      if (drField && drById.has(drField.drId)) {
        const fields = drResponseFields(drById.get(drField.drId));
        if (!fields.has(drField.field)) {
          report(nodeId, nodeName, {
            path,
            message: `Unavailable field "${drField.field}" on data request "${drField.drId}" (not in responseSchema)`,
          });
        }
        return;
      }
      if (drField && !drById.has(drField.drId)) {
        report(nodeId, nodeName, {
          path,
          message: `Unknown data request "${drField.drId}" in reference "${ref}"`,
        });
      }
    };
    walk(node, `nodes.${nodeId}`, visit);
  }
  return issues;
}

/**
 * Check live flows against workspace data requests and context variables.
 * Flows are workspace-wide, so no application id is needed.
 */
export async function checkFlowReferences(client, sdk, { lang }, flowIds) {
  const { GetFlowCommand, ListContextVariablesCommand, ListDataRequestsCommand, GetDataRequestCommand } = sdk;
  const appContextNames = new Set();
  for (const c of await listAllPages(client, ListContextVariablesCommand, {})) if (c?.name) appContextNames.add(c.name);

  const drById = new Map();
  for (const d of await listAllPages(client, ListDataRequestsCommand, {})) {
    const full = await client.send(new GetDataRequestCommand({ dataRequestIdentifier: d.dataRequestId }));
    drById.set(full.dataRequestId, full);
  }

  const issues = [];
  for (const flowId of flowIds) {
    const flow = await client.send(new GetFlowCommand({ flowIdentifier: flowId, languageCode: lang }));
    issues.push(...checkFlowJson({ drById, appContextNames, flowId, flow }));
  }
  return issues;
}

/** Offline check from a GetFlow JSON export (for proof backups). */
export function checkFlowExportFile(filePath, { drById, appContextNames = new Set(["contactId"]) }) {
  const flow = JSON.parse(readFileSync(filePath, "utf8"));
  const flowId = flow.flowId ?? flow.flowIdentifier ?? filePath;
  const drMap = drById instanceof Map ? drById : new Map(Object.entries(drById ?? {}));
  return checkFlowJson({
    drById: drMap,
    appContextNames,
    flowId,
    flow,
  });
}

export function formatIssues(issues) {
  return issues
    .map(
      (i) =>
        `${i.flowId} / ${i.nodeName} (${i.nodeId}): ${i.message} @ ${i.path}`
    )
    .join("\n");
}
