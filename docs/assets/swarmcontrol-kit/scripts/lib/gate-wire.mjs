/** SAMPLE CODE — Not a supported installer or final solution. Review, adapt, and test in a non-production ACXD workspace before use. Never run against a production workspace. */
/**
 * Sticky approval gate at a customer-chosen edge. Pure transform on an already hooked flow.
 *
 * site = { flowId, fromNodeId, edgeName, action, summaryContext? }
 * The edge fromNodeId --edgeName--> T becomes:
 *   POST /approval -> outcome split (APPROVED|DENIED -> T, PENDING -> hold)
 * hold = clear reply draft -> output hook (server speaks a hold line) -> resume Listen.
 * The resumed Listen times out after 8 s into a poll of /approval until decided.
 */
import { NODE_PREFIX } from "./kit-config.mjs";
import { uid, payConst, paySys, payVar, payContext, nodeShell, drStandardChildNodes, escalateNode, setContextSplit } from "./flow-helpers.mjs";

const P = (name) => `${NODE_PREFIX}${name}`;
const LISTEN_POLL_SECONDS = 8;

function outcomeSplit(nodeId, name, DR, targets) {
  const cond = (status) => [{ left: payVar(`${DR.requestApproval}.status`), operator: "eq", right: payConst(status) }];
  const kids = [
    { nodeId: targets.decided, name: "APPROVED", conditions: cond("APPROVED") },
    { nodeId: targets.decided, name: "DENIED", conditions: cond("DENIED") },
  ];
  if (targets.unavailable) kids.push({ nodeId: targets.unavailable, name: "UNAVAILABLE", conditions: cond("UNAVAILABLE") });
  kids.push({ nodeId: targets.pending, name: "PENDING", conditions: [] });
  return nodeShell({ nodeId, type: "split", childNodes: kids, metadata: { name, stateModifications: [] } });
}

function approvalDr(nodeId, { DR, CTX, name, payload, successId, failId }) {
  return nodeShell({
    nodeId,
    type: "data_request",
    dataRequests: [
      {
        dataRequestId: DR.requestApproval,
        name: DR.requestApproval,
        urlParams: {},
        headers: {},
        alwaysRetrigger: false,
        payload: { type: "recursive", value: payload },
      },
    ],
    childNodes: drStandardChildNodes({ successId, failureId: failId, timeoutId: failId }),
    metadata: {
      name,
      timeout: 30000,
      stateModifications: [
        { type: "context", name: CTX.approvalRequestId, modification: "set", value: payVar(`${DR.requestApproval}.requestId`) },
        { type: "context", name: CTX.approvalStatus, modification: "set", value: payVar(`${DR.requestApproval}.status`) },
      ],
    },
  });
}

/**
 * @param nodes hooked flow nodes (mutated)
 * @param sites call sites returned by hookCustomerFlow for this flow
 */
export function wireApprovalSite(nodes, site, sites, { DR, CTX }) {
  const from = nodes[site.fromNodeId];
  if (!from) throw new Error(`approvalSites: node ${site.fromNodeId} not found in ${site.flowId}`);
  const edge = (from.childNodes ?? []).find((c) => c.name === site.edgeName);
  if (!edge?.nodeId) throw new Error(`approvalSites: edge "${site.edgeName}" not found on node "${from.metadata?.name ?? site.fromNodeId}" in ${site.flowId}`);
  const target = edge.nodeId;

  const holdSite = sites.find((s) => s.hook === "output" && nodes[s.resumeNodeId]?.type === "user_input");
  if (!holdSite) throw new Error(`approvalSites: ${site.flowId} needs a supervised Speak node that returns to a Listen, for the hold line.`);
  const listenId = holdSite.resumeNodeId;
  const listen = nodes[listenId];

  let escFail = Object.entries(nodes).find(([, n]) => n.type === "escalate" && n.metadata?.name === P("Escalate approval failure"))?.[0];
  if (!escFail) {
    escFail = uid();
    nodes[escFail] = escalateNode(escFail, undefined, P("Escalate approval failure"), "failure", CTX.exitReason);
  }

  let hold = Object.entries(nodes).find(([, n]) => n.metadata?.name === P("Clear reply draft (gate hold)"))?.[0];
  if (!hold) {
    hold = uid();
    nodes[hold] = setContextSplit(hold, {
      name: P("Clear reply draft (gate hold)"),
      ctxName: CTX.replyDraft,
      value: payConst(""),
      nextId: holdSite.setReturnToId,
    });
  }

  const raise = uid();
  const outcome = uid();
  nodes[raise] = approvalDr(raise, {
    DR,
    CTX,
    name: P(`POST /approval (${site.action})`),
    payload: {
      contactId: paySys("System.conversationId"),
      action: payConst(site.action),
      summary: payContext(site.summaryContext || CTX.customerText),
      amount: payConst(""),
      waitSeconds: payConst(3),
    },
    successId: outcome,
    failId: escFail,
  });
  nodes[outcome] = outcomeSplit(outcome, P(`Approval outcome (${site.action})`), DR, { decided: target, pending: hold });
  edge.nodeId = raise;

  const alreadyPolling = Object.values(nodes).some((n) => n.metadata?.name === P("Gate check"));
  if (!alreadyPolling) {
    const timeoutEdge = (listen.childNodes ?? []).find(
      (c) => c.name === "Timeout" || (c.conditions ?? []).some((k) => k.right?.value === "timeout")
    );
    if (!timeoutEdge) throw new Error(`approvalSites: Listen "${listen.metadata?.name}" has no Timeout edge for approval polling.`);
    const gate = uid();
    const poll = uid();
    const pollOut = uid();
    nodes[gate] = nodeShell({
      nodeId: gate,
      type: "split",
      childNodes: [
        { nodeId: poll, name: "Pending", conditions: [{ left: payContext(CTX.approvalStatus), operator: "eq", right: payConst("PENDING") }] },
        { nodeId: listenId, name: "Continue", conditions: [] },
      ],
      metadata: { name: P("Gate check"), stateModifications: [] },
    });
    nodes[poll] = approvalDr(poll, {
      DR,
      CTX,
      name: P("Poll approval"),
      payload: {
        contactId: paySys("System.conversationId"),
        requestId: payContext(CTX.approvalRequestId),
        waitSeconds: payConst(1),
      },
      successId: pollOut,
      failId: escFail,
    });
    nodes[pollOut] = outcomeSplit(pollOut, P("Poll outcome"), DR, { decided: target, unavailable: hold, pending: hold });
    timeoutEdge.nodeId = gate;
    listen.metadata = { ...listen.metadata, timeout: LISTEN_POLL_SECONDS };
  }
  return { raiseNodeId: raise, listenId };
}
