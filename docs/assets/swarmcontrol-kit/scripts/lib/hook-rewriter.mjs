/** SAMPLE CODE — Not a supported installer or final solution. Review, adapt, and test in a non-production ACXD workspace before use. Never run against a production workspace. */
/**
 * Pure transforms: hook a customer flow's Listen and Speak sites into the ConnectPath
 * supervision flows, and prepare the hook flow templates. No network calls.
 */
import { NODE_PREFIX } from "./kit-config.mjs";
import {
  uid,
  payConst,
  paySys,
  payLocal,
  payContext,
  nodeShell,
  setContextSplit,
  condNodeStatus,
  isKitNode,
  buildReturnDispatchNodes,
} from "./flow-helpers.mjs";

export const SUPPORTED_NODE_TYPES = new Set([
  "start",
  "basic",
  "user_input",
  "define",
  "split",
  "generative_text",
  "data_request",
  "redirect",
  "escalate",
  "end",
  "loop",
  "transform",
]);

const ZWSP = "\u200b";
const LOCAL_TOKEN_ONLY = /^\{([A-Za-z0-9_]+):NLX\.Local\}$/;
const ANY_TOKEN = /\{[^}:]+:NLX\.[A-Za-z]+\}/;

const clone = (v) => JSON.parse(JSON.stringify(v));
const P = (name) => `${NODE_PREFIX}${name}`;

function canvasNear(node, dx, dy) {
  const c = node?.canvasMetadata ?? { x: 400, y: 400 };
  return { x: (c.x ?? 400) + dx, y: (c.y ?? 400) + dy, width: 180, height: 72 };
}

function startNodeId(nodes) {
  return Object.entries(nodes).find(([, n]) => n.type === "start")?.[0];
}

/** Nodes reachable from start without passing a Listen (greetings and other pre-turn lines). */
function preListenNodeIds(nodes) {
  const seen = new Set();
  const stack = [startNodeId(nodes)].filter(Boolean);
  while (stack.length) {
    const id = stack.pop();
    if (seen.has(id) || !nodes[id]) continue;
    seen.add(id);
    if (nodes[id].type === "user_input") continue;
    for (const c of nodes[id].childNodes ?? []) if (c.nodeId) stack.push(c.nodeId);
  }
  return seen;
}

function listenInputEdge(node) {
  const kids = node.childNodes ?? [];
  return (
    kids.find((c) => c.name === "Input") ??
    kids.find((c) => c.nodeId && !(c.conditions ?? []).some((k) => k.left?.type === "node_status"))
  );
}

/**
 * Read-only analysis. `blockers` means the installer must stop; nothing is changed.
 */
export function analyzeCustomerFlow(flowId, flow, CTX) {
  const nodes = flow.nodes ?? {};
  const blockers = [];
  const warnings = [];
  const preListen = preListenNodeIds(nodes);
  const listenSites = [];
  const speakSites = [];

  for (const [id, n] of Object.entries(nodes)) {
    const name = n.metadata?.name ?? id;
    if (isKitNode(n)) {
      blockers.push(`${flowId}: node "${name}" is already a ConnectPath hook. Restore the flow from your backup (uninstall.mjs) before installing again.`);
      continue;
    }
    if (n.type === "generative_journey") {
      blockers.push(`${flowId}: node "${name}" is a Generative Journey. Generative Journey nodes are not supported; migrate to generative text nodes first.`);
      continue;
    }
    if (!SUPPORTED_NODE_TYPES.has(n.type)) {
      blockers.push(`${flowId}: node "${name}" has unsupported type "${n.type}".`);
      continue;
    }
    if (n.type === "user_input") {
      const edge = listenInputEdge(n);
      if (!edge?.nodeId) blockers.push(`${flowId}: Listen node "${name}" has no Input edge to hook.`);
      else listenSites.push(id);
    }
    if (n.type === "basic" && !preListen.has(id)) {
      const texts = (n.messages ?? []).filter((m) => m.type === "text");
      const kids = (n.childNodes ?? []).filter((c) => c.nodeId);
      if (texts.length !== 1 || (n.messages ?? []).length !== 1) {
        blockers.push(`${flowId}: Speak node "${name}" must have exactly one text message to be supervised (found ${(n.messages ?? []).length}).`);
      } else if (kids.length !== 1) {
        blockers.push(`${flowId}: Speak node "${name}" must have exactly one next node to be supervised (found ${kids.length}).`);
      } else {
        const body = texts[0].body ?? "";
        if (!LOCAL_TOKEN_ONLY.test(body) && ANY_TOKEN.test(body)) {
          blockers.push(`${flowId}: Speak node "${name}" mixes text and variables ("${body.slice(0, 60)}"). Speak a single local (for example {aiReply:NLX.Local}) or plain text.`);
        } else {
          speakSites.push(id);
        }
      }
    }
    if (n.type === "redirect" && n.metadata?.redirect?.flowId && !n.metadata.redirect.nodeId) {
      warnings.push(`${flowId}: node "${name}" redirects to flow ${n.metadata.redirect.flowId}. List that flow in targets[].flows if it also talks to the customer.`);
    }
  }
  if (!listenSites.length) blockers.push(`${flowId}: no Listen (user_input) node found.`);
  if (!speakSites.length) warnings.push(`${flowId}: no Speak node after a Listen was found; AI replies will not be supervised.`);
  return { blockers, warnings, listenSites, speakSites, preListen: [...preListen] };
}

const PROMPT_BLOCK = (CTX) => `

Conversation so far (C = customer, A = you; for context only):
{${CTX.history}:NLX.Context}

Internal supervisor policy (never quote aloud):
{${CTX.whisperNote}:NLX.Context}

Supervisor approval status (if any; never read this label aloud): {${CTX.approvalStatus}:NLX.Context}
If APPROVED, tell the customer it's approved and go ahead with the action you asked about. If DENIED, explain politely that it can't be done. If UNAVAILABLE, say you couldn't reach a manager right now and offer next steps. If PENDING or empty, say nothing about approval.`;

function hookListen(nodes, flowId, listenId, CTX, hooks) {
  const listen = nodes[listenId];
  const edge = listenInputEdge(listen);
  const target = edge.nodeId;
  const setRt = uid();
  const redir = uid();
  const after = uid();
  const siteId = `${flowId}:${redir}`;

  nodes[setRt] = setContextSplit(setRt, {
    name: P(`Set ${CTX.returnTo} (input)`),
    ctxName: CTX.returnTo,
    value: payConst(siteId),
    nextId: redir,
    canvas: canvasNear(listen, 40, -120),
  });
  nodes[redir] = nodeShell({
    nodeId: redir,
    type: "redirect",
    childNodes: [{ nodeId: after, name: "Return", conditions: [condNodeStatus("continuation")] }],
    metadata: { redirect: { type: "flow", flowId: hooks.input }, name: P("Redirect supervised input"), stateModifications: [] },
    canvasMetadata: canvasNear(listen, 40, -80),
  });
  nodes[after] = nodeShell({
    nodeId: after,
    type: "split",
    childNodes: [{ nodeId: target, name: "Continue", conditions: [] }],
    metadata: { name: P("After input hook"), stateModifications: [] },
    canvasMetadata: canvasNear(listen, 40, -40),
  });

  const dedupe = [
    { left: paySys("System.utterance"), operator: "neq", right: payConst("") },
    { left: paySys("System.utterance"), operator: "neq", right: payContext(CTX.lastCustomerText) },
  ];
  const isDedupe = (c) =>
    c.left?.name === "System.utterance" &&
    c.operator === "neq" &&
    ((c.right?.type === "constant" && c.right.value === "") || (c.right?.type === "context" && c.right.name === CTX.lastCustomerText));
  const existing = (edge.conditions ?? []).filter((c) => !isDedupe(c));
  edge.conditions = [...dedupe, ...existing];
  edge.nodeId = setRt;
  return { id: siteId, flowId, resumeNodeId: after, hook: "input", listenId };
}

function hookSpeak(nodes, flowId, speakId, CTX, hooks) {
  const speak = nodes[speakId];
  const next = (speak.childNodes ?? []).find((c) => c.nodeId).nodeId;
  const body = speak.messages[0].body ?? "";
  const localMatch = body.match(LOCAL_TOKEN_ONLY);
  const cap = uid();
  const setDraft = uid();
  const setRt = uid();
  const redir = uid();
  const siteId = `${flowId}:${redir}`;

  speak.messages = [{ ...speak.messages[0], body: ZWSP }];
  speak.metadata = { ...speak.metadata, name: P(`(stub) ${speak.metadata?.name ?? "Speak"}`) };
  speak.childNodes = [{ nodeId: cap, name: "Next", conditions: [] }];

  nodes[cap] = nodeShell({
    nodeId: cap,
    type: "define",
    childNodes: [{ nodeId: setDraft, name: "", conditions: [] }],
    metadata: {
      define: { name: "cpReplyDraftLocal", value: localMatch ? payLocal(localMatch[1]) : payConst(body) },
      name: P("Capture reply draft local"),
      stateModifications: [],
    },
    canvasMetadata: canvasNear(speak, 120, -80),
  });
  nodes[setDraft] = setContextSplit(setDraft, {
    name: P(`Set ${CTX.replyDraft}`),
    ctxName: CTX.replyDraft,
    value: payLocal("cpReplyDraftLocal"),
    nextId: setRt,
    canvas: canvasNear(speak, 120, -40),
  });
  nodes[setRt] = setContextSplit(setRt, {
    name: P(`Set ${CTX.returnTo} (output)`),
    ctxName: CTX.returnTo,
    value: payConst(siteId),
    nextId: redir,
    canvas: canvasNear(speak, 120, 0),
  });
  nodes[redir] = nodeShell({
    nodeId: redir,
    type: "redirect",
    childNodes: [{ nodeId: next, name: "Return", conditions: [condNodeStatus("continuation")] }],
    metadata: { redirect: { type: "flow", flowId: hooks.output }, name: P("Redirect supervised output"), stateModifications: [] },
    canvasMetadata: canvasNear(speak, 120, 40),
  });
  return { id: siteId, flowId, resumeNodeId: next, hook: "output", setReturnToId: setRt };
}

/**
 * Hook every Listen and Speak site of a pristine customer flow into the target's
 * hook flows (`hooks` from hookFlowIds). Throws when analyzeCustomerFlow reports blockers.
 */
export function hookCustomerFlow(flowId, flow, CTX, hooks) {
  const analysis = analyzeCustomerFlow(flowId, flow, CTX);
  if (analysis.blockers.length) {
    const err = new Error(`Cannot hook ${flowId}:\n  - ${analysis.blockers.join("\n  - ")}`);
    err.blockers = analysis.blockers;
    throw err;
  }
  const nodes = clone(flow.nodes);
  const sites = [];
  for (const id of analysis.listenSites) sites.push(hookListen(nodes, flowId, id, CTX, hooks));
  for (const id of analysis.speakSites) sites.push(hookSpeak(nodes, flowId, id, CTX, hooks));

  for (const n of Object.values(nodes)) {
    if (n.type !== "generative_text") continue;
    const gt = n.metadata?.generativeText;
    if (!gt?.prompt || gt.prompt.includes(CTX.approvalStatus)) continue;
    gt.prompt = `${gt.prompt}${PROMPT_BLOCK(CTX)}`;
  }

  const ctxVars = clone(flow.contextVariables ?? []);
  return { nodes, contextVariables: withKitContext(ctxVars, CTX), sites, warnings: analysis.warnings };
}

/** Flow context variable declarations plus contactId and every kit variable. */
export function withKitContext(contextVariables, CTX) {
  const out = clone(contextVariables ?? []);
  for (const name of ["contactId", ...Object.values(CTX)]) {
    if (!out.some((c) => c.name === name)) out.push({ name, type: "text" });
  }
  return out;
}

/**
 * Substitute data-request ids, the context prefix, and the target's channel into a hook flow template.
 * The channel is a constant because Connect block context variables do not reach the flow.
 */
export function prepareHookFlow(template, { DR, CONTEXT_PREFIX }, channel) {
  if (!channel) throw new Error("prepareHookFlow needs the target channel");
  let s = JSON.stringify(template);
  s = s.split("{{CHANNEL}}").join(channel);
  s = s.split("{{DR_TURN_CALLER}}").join(DR.turnCaller);
  s = s.split("{{DR_TURN_AI}}").join(DR.turnAi);
  s = s.split("{{DR_REQUEST_APPROVAL}}").join(DR.requestApproval);
  if (CONTEXT_PREFIX !== "cp_swarm_") s = s.split("cp_swarm_").join(CONTEXT_PREFIX);
  return JSON.parse(s);
}

/** Wire the hook flow tail nodes to a freshly built return dispatch for all call sites. */
export function attachDispatch(hookNodes, sites, CTX) {
  const nodes = clone(hookNodes);
  const { dispatchId, nodes: dNodes } = buildReturnDispatchNodes(sites, CTX);
  Object.assign(nodes, dNodes);
  const tails = ["Set history", "Say speakText", "Say safe generic"];
  for (const n of Object.values(nodes)) {
    const name = String(n.metadata?.name ?? "");
    if (tails.some((t) => name === P(t))) n.childNodes = [{ nodeId: dispatchId, name: "Next", conditions: [] }];
  }
  return nodes;
}
