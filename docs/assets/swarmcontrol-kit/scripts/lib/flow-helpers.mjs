/** SAMPLE CODE — Not a supported installer or final solution. Review, adapt, and test in a non-production ACXD workspace before use. Never run against a production workspace. */
import { randomUUID } from "node:crypto";
import { NODE_PREFIX } from "./kit-config.mjs";

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
export const uid = () => randomUUID();

export function payConst(value) {
  return { type: "constant", value };
}
export function paySys(name) {
  return { type: "system", name };
}
export function payVar(name) {
  return { name, type: "variable" };
}
export function payLocal(name) {
  return { name, type: "local" };
}
export function payContext(name) {
  return { name, type: "context" };
}

export function condNodeStatus(status) {
  return {
    left: { type: "node_status" },
    operator: "eq",
    right: { type: "constant", value: status },
  };
}

export function drStandardChildNodes({ successId, failureId, timeoutId }) {
  return [
    { name: "", conditions: [condNodeStatus("in_progress")] },
    { nodeId: successId, name: "Success", conditions: [condNodeStatus("success")] },
    { nodeId: timeoutId, name: "Timeout", conditions: [condNodeStatus("timeout")] },
    { nodeId: failureId, name: "Failure", conditions: [condNodeStatus("failure")] },
  ];
}

export function nodeShell(extra) {
  const node = { messages: [], modalities: {}, ...extra };
  if (!node.canvasMetadata) node.canvasMetadata = { x: 640, y: 640, width: 180, height: 72 };
  return node;
}

export function setContextSplit(nodeId, { name, ctxName, value, nextId, canvas }) {
  return nodeShell({
    nodeId,
    type: "split",
    childNodes: [{ nodeId: nextId, name: "Continue", conditions: [] }],
    metadata: {
      name,
      stateModifications: [{ type: "context", name: ctxName, modification: "set", value }],
    },
    canvasMetadata: canvas,
  });
}

export function escalateNode(nodeId, canvasMetadata, name, exitReason, exitReasonCtx) {
  return nodeShell({
    nodeId,
    type: "escalate",
    childNodes: [{ name: "", conditions: [condNodeStatus("continuation")] }],
    metadata: {
      name,
      stateModifications:
        exitReason && exitReasonCtx
          ? [{ type: "context", name: exitReasonCtx, modification: "set", value: payConst(exitReason) }]
          : [],
    },
    canvasMetadata,
  });
}

export function isKitNode(node) {
  return String(node?.metadata?.name ?? "").startsWith(NODE_PREFIX);
}

/** Dispatch split that redirects back to the call site recorded in cp_swarm_returnTo. */
export function buildReturnDispatchNodes(callSites, CTX, { x = 640, y = 400 } = {}) {
  const escId = uid();
  const dispatchId = uid();
  const nodes = {};
  const childNodes = [];

  for (const site of callSites) {
    const redirId = uid();
    nodes[redirId] = nodeShell({
      nodeId: redirId,
      type: "redirect",
      childNodes: [{ name: "", conditions: [condNodeStatus("continuation")] }],
      metadata: {
        name: `${NODE_PREFIX}Return → ${site.id}`,
        redirect: { type: "flow", flowId: site.flowId, nodeId: site.resumeNodeId },
        stateModifications: [],
      },
      canvasMetadata: { x: x + 200, y, width: 180, height: 72 },
    });
    childNodes.push({
      nodeId: redirId,
      name: site.id,
      conditions: [{ left: payContext(CTX.returnTo), operator: "eq", right: payConst(site.id) }],
    });
    y += 90;
  }

  childNodes.push({ nodeId: escId, name: "Unknown return", conditions: [] });
  nodes[escId] = escalateNode(
    escId,
    { x: x + 200, y, width: 160, height: 72 },
    `${NODE_PREFIX}Escalate unknown return`,
    "unknown_return",
    CTX.exitReason
  );
  nodes[dispatchId] = nodeShell({
    nodeId: dispatchId,
    type: "split",
    childNodes,
    metadata: { name: `${NODE_PREFIX}Return dispatch`, stateModifications: [] },
    canvasMetadata: { x, y: 400, width: 200, height: 72 },
  });
  return { dispatchId, nodes };
}
