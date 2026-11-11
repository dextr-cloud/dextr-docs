/** SAMPLE CODE — Not a supported installer or final solution. Review, adapt, and test in a non-production ACXD workspace before use. Never run against a production workspace. */
import { isHookFlowId } from "./kit-config.mjs";

/** app.flows after install: every existing flow kept, this target's hook flows added. Never removes a flow. */
export function planApplicationFlowMerge(previousAppFlowIds, hooks) {
  const previous = [...previousAppFlowIds];
  const next = [...previous];
  for (const id of [hooks.input, hooks.output]) if (!next.includes(id)) next.push(id);
  return { previous, next, added: next.filter((id) => !previous.includes(id)) };
}

/** app.flows after uninstall: only kit hook flows are removed. */
export function planApplicationFlowRemoval(previousAppFlowIds) {
  const previous = [...previousAppFlowIds];
  const next = previous.filter((id) => !isHookFlowId(id));
  return { previous, next, removed: previous.filter((id) => !next.includes(id)) };
}
