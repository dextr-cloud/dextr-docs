/** SAMPLE CODE — Not a supported installer or final solution. Review, adapt, and test in a non-production ACXD workspace before use. Never run against a production workspace. */
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { analyzeCustomerFlow, hookCustomerFlow, attachDispatch, prepareHookFlow } from "./hook-rewriter.mjs";
import { wireApprovalSite } from "./gate-wire.mjs";
import { hookFlowIds } from "./kit-config.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const FIXTURES = join(HERE, "test-fixtures");
const ASSETS = join(HERE, "..", "..", "assets", "flows");
const load = (p) => JSON.parse(readFileSync(p, "utf8"));

const cp = "cp_swarm_";
const CTX = Object.fromEntries(
  ["lastCustomerText", "exitReason", "customerText", "replyDraft", "speakText", "whisperNote", "history", "returnTo", "approvalStatus", "approvalRequestId"].map((k) => [k, `${cp}${k}`])
);
const DR = { turnCaller: "acmeturnCaller", turnAi: "acmeturnAi", requestApproval: "acmerequestApproval" };
const hooks = hookFlowIds({ channel: "chat" });
const chat = load(join(FIXTURES, "sampleChat.json"));
const byName = (nodes, name) => Object.entries(nodes).find(([, n]) => n.metadata?.name === name);

describe("analyzeCustomerFlow", () => {
  it("finds the Listen and every Speak after it, skipping the greeting", () => {
    const a = analyzeCustomerFlow("sampleChat", chat, CTX);
    assert.deepEqual(a.blockers, []);
    assert.equal(a.listenSites.length, 1);
    const names = a.speakSites.map((id) => chat.nodes[id].metadata.name).sort();
    assert.deepEqual(names, ["Refund processed", "Say generative reply", "Static hours"]);
  });

  it("blocks Generative Journey nodes", () => {
    const f = structuredClone(chat);
    f.nodes.gj = { nodeId: "gj", type: "generative_journey", childNodes: [], metadata: { name: "Journey" } };
    assert.match(analyzeCustomerFlow("sampleChat", f, CTX).blockers.join(), /Generative Journey/);
  });
});

describe("hookCustomerFlow", () => {
  const hooked = hookCustomerFlow("sampleChat", chat, CTX, hooks);

  it("returns one input site and three output sites", () => {
    assert.equal(hooked.sites.filter((s) => s.hook === "input").length, 1);
    assert.equal(hooked.sites.filter((s) => s.hook === "output").length, 3);
  });

  it("redirects into this target's hook flows", () => {
    const redirects = Object.values(hooked.nodes).filter((n) => n.type === "redirect").map((n) => n.metadata.redirect.flowId);
    assert.ok(redirects.includes(hooks.input));
    assert.ok(redirects.includes(hooks.output));
  });

  it("adds dedupe conditions to the Listen Input edge", () => {
    const listen = Object.values(hooked.nodes).find((n) => n.type === "user_input");
    const input = listen.childNodes.find((c) => c.name === "Input");
    assert.ok(input.conditions.some((c) => c.right?.type === "context" && c.right.name === CTX.lastCustomerText));
    assert.equal(hooked.nodes[input.nodeId].metadata.name, `cp:Set ${CTX.returnTo} (input)`);
  });

  it("keeps the customer's own System.utterance conditions", () => {
    const f = structuredClone(chat);
    const listen = Object.values(f.nodes).find((n) => n.type === "user_input");
    const own = { left: { type: "system", name: "System.utterance" }, operator: "neq", right: { type: "context", name: "acmeLastText" } };
    listen.childNodes.find((c) => c.name === "Input").conditions = [own];
    const out = hookCustomerFlow("sampleChat", f, CTX, hooks);
    const input = Object.values(out.nodes).find((n) => n.type === "user_input").childNodes.find((c) => c.name === "Input");
    assert.equal(input.conditions.length, 3);
    assert.ok(input.conditions.some((c) => c.right?.name === "acmeLastText"));
  });

  it("stubs supervised Speak nodes and keeps the greeting", () => {
    assert.equal(byName(hooked.nodes, "Greeting")[1].messages[0].body, "Hello! How can I help you today?");
    assert.equal(byName(hooked.nodes, "cp:(stub) Say generative reply")[1].messages[0].body, "\u200b");
  });

  it("declares contactId and every kit context variable", () => {
    const names = hooked.contextVariables.map((c) => c.name);
    for (const n of ["contactId", ...Object.values(CTX)]) assert.ok(names.includes(n), n);
  });

  it("appends the supervisor prompt block once", () => {
    const gt = Object.values(hooked.nodes).find((n) => n.type === "generative_text").metadata.generativeText.prompt;
    assert.equal(gt.split(`{${CTX.whisperNote}:NLX.Context}`).length, 2);
  });

  it("refuses to hook an already hooked flow", () => {
    assert.throws(() => hookCustomerFlow("sampleChat", { ...chat, nodes: hooked.nodes }, CTX, hooks), /already a ConnectPath hook/);
  });

  it("wires no approval gate on its own", () => {
    assert.equal(Object.values(hooked.nodes).filter((n) => /approval|Gate/i.test(n.metadata?.name ?? "")).length, 0);
    assert.equal(Object.values(hooked.nodes).find((n) => n.type === "user_input").metadata.timeout, 300);
  });
});

describe("attachDispatch", () => {
  it("routes the hook flow tail to a dispatch with one branch per site plus unknown", () => {
    const hooked = hookCustomerFlow("sampleChat", chat, CTX, hooks);
    const tpl = prepareHookFlow(load(join(ASSETS, "cpSupervisedInput.json")), { DR, CONTEXT_PREFIX: cp }, "chat");
    const nodes = attachDispatch(tpl.nodes, hooked.sites.filter((s) => s.hook === "input"), CTX);
    const dispatch = byName(nodes, "cp:Return dispatch")[1];
    assert.equal(dispatch.childNodes.length, 2);
    assert.ok(!JSON.stringify(nodes).includes("{{DR_"));
  });
});

describe("prepareHookFlow", () => {
  for (const file of ["cpSupervisedInput.json", "cpSupervisedOutput.json"]) {
    it(`posts the target channel as a constant in ${file}`, () => {
      const tpl = prepareHookFlow(load(join(ASSETS, file)), { DR, CONTEXT_PREFIX: cp }, "voice");
      const s = JSON.stringify(tpl);
      assert.ok(s.includes('"channel":{"type":"constant","value":"voice"}'));
      assert.ok(!s.includes("{{CHANNEL}}"));
      assert.ok(!s.includes(`${cp}channel`));
    });
  }

  it("requires a channel", () => {
    assert.throws(() => prepareHookFlow(load(join(ASSETS, "cpSupervisedInput.json")), { DR, CONTEXT_PREFIX: cp }), /channel/);
  });
});

describe("wireApprovalSite", () => {
  it("inserts the approval request on the configured edge and polls on Listen timeout", () => {
    const hooked = hookCustomerFlow("sampleChat", chat, CTX, hooks);
    const [routeId, route] = byName(hooked.nodes, "Route customer");
    wireApprovalSite(hooked.nodes, { flowId: "sampleChat", fromNodeId: routeId, edgeName: "Refund", action: "refund" }, hooked.sites, { DR, CTX });
    const refundEdge = route.childNodes.find((c) => c.name === "Refund");
    assert.equal(hooked.nodes[refundEdge.nodeId].metadata.name, "cp:POST /approval (refund)");
    assert.ok(byName(hooked.nodes, "cp:Gate check"));
    assert.equal(Object.values(hooked.nodes).find((n) => n.type === "user_input").metadata.timeout, 8);
  });

  it("fails clearly on a missing edge", () => {
    const hooked = hookCustomerFlow("sampleChat", chat, CTX, hooks);
    const [routeId] = byName(hooked.nodes, "Route customer");
    assert.throws(
      () => wireApprovalSite(hooked.nodes, { flowId: "sampleChat", fromNodeId: routeId, edgeName: "Nope", action: "x" }, hooked.sites, { DR, CTX }),
      /edge "Nope" not found/
    );
  });
});
