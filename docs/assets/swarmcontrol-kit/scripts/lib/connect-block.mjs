/** SAMPLE CODE — Not a supported installer or final solution. Review, adapt, and test in a non-production ACXD workspace before use. Never run against a production workspace. */
/** Pure helpers for the ConnectParticipantWithAgenticCX block in a Connect flow's content. */

export const ACX_BLOCK_TYPE = "ConnectParticipantWithAgenticCX";

export function findAcxBlock(content, applicationId) {
  return (content.Actions ?? []).find(
    (a) => a.Type === ACX_BLOCK_TYPE && a.Parameters?.AgentConfiguration?.ApplicationId === applicationId
  );
}

/**
 * Point the block at the new deployment alias and pass contactId in.
 * Every other parameter and transition is left as the customer built it.
 */
export function patchAcxBlock(content, { applicationId, alias }) {
  const next = JSON.parse(JSON.stringify(content));
  const block = findAcxBlock(next, applicationId);
  if (!block) throw new Error(`No ${ACX_BLOCK_TYPE} block for application ${applicationId}`);
  const before = JSON.parse(JSON.stringify(block.Parameters));
  block.Parameters.AgentConfiguration.Alias = alias;
  block.Parameters.ContextVariables = {
    ...(block.Parameters.ContextVariables ?? {}),
    contactId: "$.ContactId",
  };
  return { content: next, blockId: block.Identifier, before, after: block.Parameters };
}

/** Undo patchAcxBlock using the saved original block parameters. */
export function restoreAcxBlock(content, { applicationId, originalParameters }) {
  const next = JSON.parse(JSON.stringify(content));
  const block = findAcxBlock(next, applicationId);
  if (!block) throw new Error(`No ${ACX_BLOCK_TYPE} block for application ${applicationId}`);
  block.Parameters = originalParameters;
  return next;
}
