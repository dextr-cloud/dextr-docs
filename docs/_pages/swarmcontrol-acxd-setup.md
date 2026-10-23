---
title: "SwarmControl — AI agent (ACXD) setup"
permalink: /swarmcontrol-acxd-setup/
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "docs"
---

This guide wires **Amazon Connect Agentic CX Designer (ACXD)** voice and chat agents to ConnectPath **SwarmControl**. Hooking is done with the **supervision kit**, a set of install scripts, flow templates, and data-request templates that ConnectPath provides. Contact ConnectPath Support to get the kit for your account.

Prerequisites and admin enablement: **[SwarmControl](/swarmcontrol/)**.

- - - -

## Architecture (two entry shapes)

Supervision is **built into the conversation**: each turn calls ConnectPath **before** the AI speaks.

```text
Chat:  Connect chat flow → customer ACXD flows + cpSupervisedInput/Output → POST /turn (channel: chat)
Voice: Connect voice flow → ACXD turnLoop clone (Say→Listen) only → POST /turn (channel: voice)
```

Both channels share workspace **data requests** `{prefix}turnCaller`, `{prefix}turnAi`, `{prefix}requestApproval` with header `x-cp-webhook-secret`.

| Data request | HTTP route | Role |
| --- | --- | --- |
| `{prefix}turnCaller` | `POST {AiSwarmApiUrl}/turn` | Customer utterance (`role: caller`) |
| `{prefix}turnAi` | `POST {AiSwarmApiUrl}/turn` | AI draft (`role: ai`) |
| `{prefix}requestApproval` | `POST {AiSwarmApiUrl}/approval` | Sticky approval gate |

**Context variables** use the `cp_swarm_*` prefix (for example `cp_swarm_customerText`, `cp_swarm_replyDraft`, `cp_swarm_returnTo`).

**Reusable hook flows** (fixed ids):

- `cpSupervisedInput` — capture utterance, caller `/turn`, intercept/whisper/history, return dispatch.
- `cpSupervisedOutput` — AI `/turn`, speak `speakText`, return dispatch.

Customer flows are **hooked** at each Listen (input) and Speak (output) site via `cp_returnTo` dispatch—never `redirect { flowId: "previous_redirect" }`.

- - - -

## One-page checklist

| Step | Done when |
| --- | --- |
| 1. Prerequisites | Live Lens + SwarmControl enabled for your stack and instance + permissions ([overview](/swarmcontrol/#prerequisites-checklist)) |
| 1b. Runnable install | Backup → teardown (if needed) → `install-supervision-kit.mjs` → chat e2e |
| 2. Workspace resources | Three data requests + `cp_swarm_*` context variables |
| 3. Hook flows | `cpSupervisedInput` / `cpSupervisedOutput` Validate-clean |
| 4. Customer flows | Input/output hooks + call-site registry + dispatch |
| 5. Connect side | Chat block **or** voice turnLoop clone + escalation queue |
| 6. Verify | P1–P7 preflight, designer Validate, `/swarmcontrol` Live vs Simulated |
| 7. Rollback | Prior `buildId` + Connect association documented |

- - - -

## SDK and working directory

Install the ACXD SDK in its own folder, outside the supervision kit:

```bash
export ACXD_SDK_ROOT="${ACXD_SDK_ROOT:-$HOME/.cache/swarmcontrol-acxd-sdk}"
mkdir -p "$ACXD_SDK_ROOT" && cd "$ACXD_SDK_ROOT"
npm install amazon-connect-acxd-sdk@0.2.0 \
  @aws-sdk/client-connect @aws-sdk/client-connectparticipant \
  @aws-sdk/client-dynamodb @aws-sdk/lib-dynamodb @aws-sdk/client-secrets-manager ws
```

Copy the example config that ships with the kit to a local `config.json` and fill in your own values. Keep it out of version control. Then:

```bash
export KIT_DIR=/path/to/supervision-kit
export SWARM_KIT_CONFIG="$KIT_DIR/config.json"
cd "$KIT_DIR/scripts"
```

**Ground rules**

1. **No API keys or webhook secrets** in chat, version control, or tickets. Set `ACXD_API_KEY` as an environment variable only. The scripts fetch the webhook secret directly from `AiSwarmWebhookSecretArn`.
2. **Build + deploy** after every flow change; Connect block **Alias** must match deployment.
3. **Designer Validate** (toolbar) after every build—target **0 errors** (no validation API).
4. **Voice:** do not route PSTN through chat kit hooks—clone **turnLoop** instead.

- - - -

## 0. Shared exports (runnable proof)

Replace placeholders with your customer values. **Do not** paste real secrets into documentation or shell history.

```bash
# --- ConnectPath customer account ---
export AWS_PROFILE=<your-aws-profile>
export AWS_REGION=us-east-1
export STACK=<your-connectpath-stack-name>
export INSTANCE_ID=<connect-instance-uuid>

# --- From stack outputs ---
export AI_SWARM_API_URL="$(aws cloudformation describe-stacks --stack-name "$STACK" \
  --query "Stacks[0].Outputs[?OutputKey=='AiSwarmApiUrl'].OutputValue" --output text)"
export AI_SWARM_WEBHOOK_SECRET_ARN="$(aws cloudformation describe-stacks --stack-name "$STACK" \
  --query "Stacks[0].Outputs[?OutputKey=='AiSwarmWebhookSecretArn'].OutputValue" --output text)"
export AI_SWARM_TABLE="$(aws cloudformation describe-stacks --stack-name "$STACK" \
  --query "Stacks[0].Outputs[?OutputKey=='AiSwarmTableName'].OutputValue" --output text)"
export WSS_URL="$(aws cloudformation describe-stacks --stack-name "$STACK" \
  --query "Stacks[0].Outputs[?OutputKey=='RealtimeWebSocketWssUrl'].OutputValue" --output text)"

# --- ACXD (set in shell only) ---
export ACXD_API_KEY=...   # read -rs ACXD_API_KEY && export ACXD_API_KEY
export ACXD_REGION=us-east-1
export ACXD_WORKSPACE_ID=<workspace-uuid>

export SWARM_PROOF_DIR="$HOME/swarmcontrol-proof-$(date +%Y-%m-%d)"
mkdir -p "$SWARM_PROOF_DIR"
export SWARM_KIT_CONFIG="$KIT_DIR/config.json"

cd "$KIT_DIR/scripts"
```

Preflight:

```bash
aws cloudformation describe-stacks --stack-name "$STACK" \
  --query "Stacks[0].Parameters[?ParameterKey=='AiSwarmEnabled'].ParameterValue" --output text
# expect: true
```

If the result is not `true`, SwarmControl is not yet enabled on your stack. Contact ConnectPath Support to enable it before you continue.

- - - -

## 1. Backup (before teardown)

```bash
export SWARM_PROOF_DIR=/path/to/proof-folder
export SWARM_KIT_CONFIG="$SWARM_PROOF_DIR/config.json"
node backup-supervision-kit.mjs
# writes acxd/, connect/, rollback.json under SWARM_PROOF_DIR
```

## 2. Teardown supervision kit (safe scope)

Skips unrelated voice apps and demo numbers configured in your `config.json`.

```bash
export UNHOOKED_CUSTOMER_FLOW_JSON="$SWARM_PROOF_DIR/customerFlow-unhooked.json"
node teardown-supervision-kit.mjs
```

## 3. Install supervision kit (full)

```bash
node install-supervision-kit.mjs
# expect JSON: apply-complete, buildId, inputSites 2, outputSites 3
```

**Human step:** In ACXD Designer, **Validate** `cpSupervisedInput`, `cpSupervisedOutput`, and each hooked customer flow—**0 errors**.

Dry-run partial push (data requests + hooks from assets only):

```bash
node push-supervision-kit.mjs --dry-run
node push-supervision-kit.mjs --step data-requests
```

## 4. Connect chat flow (verify)

```bash
export CHAT_FLOW_ID=<contact-flow-uuid>
aws connect describe-contact-flow --instance-id "$INSTANCE_ID" \
  --contact-flow-id "$CHAT_FLOW_ID" \
  --query "ContactFlow.{Name:Name,Type:Type,State:State}" --output table
```

Connect block parameters (chat):

| Parameter | Value |
| --- | --- |
| `ApplicationId` | Kit ACXD application uuid |
| `Alias` | Current deployment alias id |
| `ContextVariables.contactId` | `$.ContactId` |
| `ContextVariables.cp_swarm_channel` | `chat` |
| `AMAZON_AGENTIC_VOICE` | `false` |

Wire **Escalation** to your human queue.

## 5. Chat end-to-end test

```bash
node chat-e2e.mjs | tee "$SWARM_PROOF_DIR/e2e-console.log"

aws dynamodb query --table-name "$AI_SWARM_TABLE" \
  --key-condition-expression "PK = :pk AND begins_with(SK, :pre)" \
  --expression-attribute-values "{\":pk\":{\"S\":\"AIC#<contactId-from-log>\"},\":pre\":{\"S\":\"TURN#\"}}" \
  --output json
```

## 6. `/swarmcontrol` visibility

| Mode | Needs |
| --- | --- |
| **Simulated** | `aiSwarmEnabled` false—page visible to all authenticated users |
| **Live** | `aiSwarmEnabled` true + Settings **Live data** + **SwarmControl** + **Transcripts** + WSS URL |

## 7. Rollback to prior ACXD build

```bash
node push-supervision-kit.mjs --step rollback --yes \
  --build-id "$(jq -r .buildId "$SWARM_PROOF_DIR/rollback.json")"
```

Connect DID rollback (example):

```bash
aws connect associate-phone-number-contact-flow \
  --instance-id "$INSTANCE_ID" \
  --phone-number-id <PHONE_NUMBER_ID> \
  --contact-flow-id <PRIOR_FLOW_ID> \
  --profile "$AWS_PROFILE" --region "$AWS_REGION"
```

Stack rollback (`AiSwarmEnabled=false`) is **destructive**—see [SwarmControl rollback](/swarmcontrol/#rollback--turning-live-mode-off).

- - - -

## Workspace resources (manual reference)

The supervision kit includes templates for these in `assets/data-requests/`. The install script creates them for you. Use this section as a reference or to create them by hand.

| Id pattern | Notes |
| --- | --- |
| Data-request id | **camelCase**, no underscores (`acmeturnCaller`) |
| Context vars | `cp_swarm_*` prefix |
| Hook flow ids | Fixed: `cpSupervisedInput`, `cpSupervisedOutput` |

**Webhook auth:** header `x-cp-webhook-secret` = plain secret from `AiSwarmWebhookSecretArn` (fetch in Node only).

**Caller payload example:**

```json
{
  "contactId": "<System.conversationId>",
  "role": "caller",
  "text": "<utterance>",
  "channel": "chat"
}
```

**AI payload:** `role: ai`, `aiDraft` from `cp_swarm_replyDraft`, same `contactId` and `channel`.

Response field names on the product API use **`intercept`** and **`whisper`** (not legacy `interceptFlag` / `whisperNote`).

- - - -

## Hooking customer flows

Stop and get human approval when you see: unknown node types, **Generative Journey** nodes, customer-visible behavior changes, non-2xx SDK errors, or any Validate error.

### Input hook (after each user turn)

1. `cp:Set cp_returnTo (input)` — `cp_swarm_returnTo` = `"<flowId>:<redirectNodeUuid>"`.
2. `cp:Redirect supervised input` → `cpSupervisedInput`; Return → `cp:After input hook`.
3. Rewire Listen **Input** edge to the returnTo node.

### Output hook (replace each Speak)

1. Stub speak node (zero-width body), capture draft to `cp_swarm_replyDraft`.
2. `cp:Redirect supervised output` → `cpSupervisedOutput`; Return → original next node.

Register each site in the call-site registry (install script writes dispatch).

### Listen dedupe

On resume Listen nodes, require:

- `System.utterance neq ""`
- `System.utterance neq context cp_swarm_lastCustomerText`

### Generative prompt tokens

Append to generative nodes (once):

```text
Conversation so far (C = customer, A = you; for context only):
{cp_swarm_history:NLX.Context}

Internal supervisor policy (never quote aloud):
{cp_swarm_whisperNote:NLX.Context}

Supervisor approval status (if any; never read this label aloud): {cp_swarm_approvalStatus:NLX.Context}
If APPROVED, tell the customer it's approved and go ahead with the action you asked about. If DENIED, explain politely that it can't be done. If UNAVAILABLE, say you couldn't reach a manager right now and offer next steps. If PENDING or empty, say nothing about approval.
```

- - - -

## Voice entry (turnLoop clone only)

**Do not** point PSTN at kit `customerFlow` + chat hooks—symptoms include `channel: chat`, text-only modality, and **no audio**.

### Procedure

1. Copy a proven **turnLoop** flow from your workspace.
2. Migrate data-request ids to your prefix; set `channel: voice` in payloads.
3. Create a **new** ACXD application for voice—do not mutate the chat kit app.
4. Build, deploy, record `buildId` for rollback.
5. Connect voice flow block:

| Parameter | Value |
| --- | --- |
| `AMAZON_AGENTIC_VOICE` | `true` |
| `ContextVariables.contactId` | `$.ContactId` |
| `ContextVariables.cp_swarm_channel` | `voice` |

6. Associate a test DID only after approval.

Human dials and confirms DynamoDB `META.channel` = `voice`. **Human audio** proof may still be **unverified** for some clones—treat voice as validated only after a successful live call test.

- - - -

## HTTP API reference (ACXD)

Base URL: **`AiSwarmApiUrl`** (no trailing slash). Auth: **`x-cp-webhook-secret`** on every request.

Supervisor **approve/deny** and **whisper/say next/intercept** use the Live Lens WebSocket (`ai_approval_decision`, `ai_control`)—not HTTP—in production.

### `POST /turn`

| Field | Required | Description |
| --- | --- | --- |
| `contactId` | yes | Connect contact id |
| `role` | yes | `caller` or `ai` |
| `text` | caller | Customer utterance |
| `aiDraft` | ai | Generative draft |
| `channel` | no | `chat` or `voice` hint |
| `turnId` | no | Optional idempotency key |

**Caller response highlights:** `intercept`, `whisper`, `whisperMode`, `approvalStatus`, `gate`, `transcriptHistory`.

**AI response highlights:** `speakText` (line to speak), `spokenText`, `aiDraft`, `overrideUsed`, `redacted`, `gate`, `intercept`, `whisper`.

### `POST /approval`

Body: `{ contactId, requestId?, action?, summary?, amount?, waitSeconds? }`.  
Response: `{ requestId, status, decidedBy?, note? }` with `status` in `PENDING|APPROVED|DENIED|UNAVAILABLE`.

### `GET /escalation/{contactId}`

Returns `{ target: "default" }` or `{ target: "supervisor", queueArn?, supervisorId? }`. Connect escalation consumer is **not** wired yet.

### Errors

| HTTP | Body |
| --- | --- |
| 401 | `{ "error": "unauthorized" }` |
| 404 | `{ "error": "not found" }` |
| 400 | `{ "error": "<message>" }` |

### Runnable `curl` checks

Prefer `node simulate-turns.mjs` so the secret is not stored in shell history. For ad-hoc checks in a private shell:

```bash
export AI_SWARM_API_URL="https://<api-id>.execute-api.<region>.amazonaws.com"
export CONTACT_ID="smoke-$(date +%s)"
# Load AI_SWARM_WEBHOOK_SECRET in-process only (Secrets Manager), then:

curl -sS -o /tmp/turn-body.txt -w "%{http_code}\n" \
  -X POST "$AI_SWARM_API_URL/turn" -H 'content-type: application/json' -d '{}'
# Expect 401

curl -sS -o /tmp/turn-body.txt -w "%{http_code}\n" \
  -X POST "$AI_SWARM_API_URL/turn" \
  -H "content-type: application/json" \
  -H "x-cp-webhook-secret: $AI_SWARM_WEBHOOK_SECRET" \
  -d '{}'
# Expect 400

curl -sS -X POST "$AI_SWARM_API_URL/turn" \
  -H "content-type: application/json" \
  -H "x-cp-webhook-secret: $AI_SWARM_WEBHOOK_SECRET" \
  -d "{\"contactId\":\"$CONTACT_ID\",\"role\":\"caller\",\"text\":\"Hello\",\"channel\":\"chat\"}"

curl -sS -X POST "$AI_SWARM_API_URL/turn" \
  -H "content-type: application/json" \
  -H "x-cp-webhook-secret: $AI_SWARM_WEBHOOK_SECRET" \
  -d "{\"contactId\":\"$CONTACT_ID\",\"role\":\"ai\",\"aiDraft\":\"Thanks for calling.\",\"channel\":\"chat\"}"

curl -sS "$AI_SWARM_API_URL/escalation/$CONTACT_ID" \
  -H "x-cp-webhook-secret: $AI_SWARM_WEBHOOK_SECRET"
```

Or from `scripts/`: `node simulate-turns.mjs --contactId "$CONTACT_ID" --channel chat`.

The supervision kit includes a full field-by-field HTTP reference (`reference-http-api.md`).

- - - -

## Preflight P1–P7

| # | Check | Pass |
| --- | --- | --- |
| P1 | SDK loads from `scripts/lib/sdk-root.mjs` | path printed |
| P2 | `ListApplications` with API key | target app listed |
| P3 | Stack `AiSwarm*` outputs | three outputs |
| P4 | Secret readable in-process | ok |
| P5 | `/turn` 401 without header; 400 with header and `{}` | both |
| P6 | Connect instance + escalation queue | found |
| P7 | Application `languageCode` | e.g. `en-US` |

- - - -

## Script map

| Script | Purpose |
| --- | --- |
| `backup-supervision-kit.mjs` | Snapshot before changes |
| `teardown-supervision-kit.mjs` | Remove kit DRs/hooks in safe scope |
| `install-supervision-kit.mjs` | Full migrate + build + deploy |
| `push-supervision-kit.mjs` | Partial steps / rollback |
| `simulate-turns.mjs` | HTTP smoke |
| `chat-e2e.mjs` | Connect StartChatContact e2e |

The kit's `scripts/README.md` describes every option for each script.

- - - -

## Troubleshooting ACXD flows

### Designer Validate and build errors

| Error | Fix |
| --- | --- |
| `Unavailable field reference` for `speakText` on a data request | A stale flow from an earlier experiment is still registered on the application. Remove it from the application's flows (the install script can prune stale flows listed in your config), then run the flow-reference check from the kit. |
| `variableId is not in the expected format` | Use camelCase data-request ids (`acmeturnCaller`), not names with underscores |
| `previous_redirect` is invalid | Use the `cp_returnTo` dispatch registry |
| `ne` operator rejected | Use `neq` |
| Missing define metadata | Add `metadata.define` to every define node |
| Data-request name differs from its id | `name` must equal `dataRequestId` |

Designer **Validate** and deploy pre-checks run against **every flow on the application**, not only your customer flows. Remove abandoned flows from the application before you validate.

### Runtime and API behavior

| Symptom | Action |
| --- | --- |
| `interceptFlag` is undefined | Bind `intercept`. The legacy name is no longer used. |
| Speech is empty but a draft exists | The output hook must run. Check whether an approval gate is pending. |
| Duplicate turns on the dashboard | Turn storage de-duplicates repeated turns. The HTTP response is still fresh each time. |
| `404` when deciding an approval over HTTP | Approvals are decided by supervisors in SwarmControl, not over HTTP. |
| Calls fail with a malformed URL | Remove any trailing slash from `AiSwarmApiUrl`. |

### Connect and ACXD pitfalls

| Pitfall | What to do |
| --- | --- |
| Saving a flow does not change live traffic | Build, deploy, and point the Connect block **Alias** at the new deployment |
| Application updates overwrite default flows | Merge the `flows` list. Do not replace it. |
| Voice routed through the chat kit | Use a turnLoop clone for voice |
| Generative Journey nodes | Not supported. Migrate to standard generative nodes. |
| Webhook header shows masked in the designer | Expected. Confirm with the `/turn` 401/400 check (P5). |

Expect roughly **1.3 to 2.5 seconds** of added latency per turn from supervision.

### Contacting support

Include the contact id, ACXD build id, Connect flow id, the host of your `AiSwarmApiUrl` (never the secret), a Validate screenshot, and your P5 status codes.
