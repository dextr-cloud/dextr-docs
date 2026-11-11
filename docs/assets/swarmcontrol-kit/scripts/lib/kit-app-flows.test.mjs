/** SAMPLE CODE — Not a supported installer or final solution. Review, adapt, and test in a non-production ACXD workspace before use. Never run against a production workspace. */
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { planApplicationFlowMerge, planApplicationFlowRemoval } from "./kit-app-flows.mjs";
import { hookFlowIds } from "./kit-config.mjs";

const hooks = hookFlowIds({ channel: "chat" });

describe("hookFlowIds", () => {
  it("derives per-target ids from key or channel", () => {
    assert.deepEqual(hooks, { input: "cpSupervisedInputChat", output: "cpSupervisedOutputChat" });
    assert.equal(hookFlowIds({ channel: "voice", key: "billingVoice" }).input, "cpSupervisedInputBillingVoice");
  });
});

describe("planApplicationFlowMerge", () => {
  it("keeps every existing flow and adds the hook flows", () => {
    const plan = planApplicationFlowMerge(["mainFlow", "fallbackFlow"], hooks);
    assert.deepEqual(plan.next, ["mainFlow", "fallbackFlow", "cpSupervisedInputChat", "cpSupervisedOutputChat"]);
    assert.deepEqual(plan.added, ["cpSupervisedInputChat", "cpSupervisedOutputChat"]);
  });

  it("is idempotent when hook flows are already registered", () => {
    const plan = planApplicationFlowMerge(["mainFlow", "cpSupervisedInputChat", "cpSupervisedOutputChat"], hooks);
    assert.deepEqual(plan.next, ["mainFlow", "cpSupervisedInputChat", "cpSupervisedOutputChat"]);
    assert.deepEqual(plan.added, []);
  });
});

describe("planApplicationFlowRemoval", () => {
  it("removes only the hook flows", () => {
    const plan = planApplicationFlowRemoval(["mainFlow", "cpSupervisedInputChat", "other", "cpSupervisedOutputChat"]);
    assert.deepEqual(plan.next, ["mainFlow", "other"]);
    assert.deepEqual(plan.removed, ["cpSupervisedInputChat", "cpSupervisedOutputChat"]);
  });
});
