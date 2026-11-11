---
title: "SwarmControl — connect your ACXD agents"
permalink: /swarmcontrol-acxd-setup/
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "docs"
---

> **SAMPLE CODE** — The SwarmControl kit is a **worked example**, not a supported installer or a final solution. Review it, adapt it, and test it in a non-production ACXD workspace before you use it. Never run it against a production workspace first.

This guide connects AI agents you have already built in **Amazon Connect Agentic CX Designer (ACXD)** to ConnectPath **SwarmControl**, so supervisors can watch each conversation and whisper, override, intercept, or approve actions in real time.

- - - -

## Before you start: you already have ACXD

This guide assumes your ACXD agents are already built and taking contacts. It does not create ACXD applications, Connect flows, or phone numbers. It adds the ConnectPath pieces and connects your flows to them.

**You already own:**

| Item | Example |
| --- | --- |
| An ACXD workspace and an API key for it | Workspace id, key in your password manager |
| One ACXD application per channel, with a deployment | `acme-chat` (deployment id), `acme-voice` (deployment id) |
| The ACXD flows those applications run | `supportChat`, `supportVoice` |
| An Amazon Connect flow per channel with a **Connect participant with Agentic CX** block pointing at that application | `acme-chat-entry`, `acme-voice-entry` |
| A human escalation queue | `Support` |

**ConnectPath provides (enabled by ConnectPath Support):** SwarmControl on your ConnectPath stack. Your stack then has the outputs `AiSwarmApiUrl`, `AiSwarmWebhookSecretArn`, `AiSwarmTableName`, and `RealtimeWebSocketWssUrl`. Prerequisites and admin settings are on the **[SwarmControl](/swarmcontrol/)** page.

**This guide adds, in your ACXD workspace:**

- Three data requests that call ConnectPath: `{prefix}turnCaller`, `{prefix}turnAi`, `{prefix}requestApproval`.
- The `cp_swarm_*` context variables, plus `contactId` if you do not already have it.
- Two hook flows per application: `cpSupervisedInput<Channel>` and `cpSupervisedOutput<Channel>`.
- Hooks in the flows you list: every Listen and every Speak after the first Listen is routed through the hook flows. Your greeting is left alone.
- Optionally, an approval gate on the edges you choose.

**And in Amazon Connect:** on each Connect flow you list, the ACXD block gets `ContextVariables.contactId`. No other block, queue, or phone number is changed.

- - - -

## How it works

Supervision is built into the conversation. Each turn calls ConnectPath before the AI speaks.

```text
Customer speaks  -> Listen -> cpSupervisedInput<Channel>  -> POST /turn (role: caller) -> your flow continues
Your flow drafts -> Speak  -> cpSupervisedOutput<Channel> -> POST /turn (role: ai)     -> approved line is spoken
```

The same design works for chat and voice. Each application's hook flows report its `targets[].channel` to ConnectPath, so SwarmControl shows the contact as chat or voice.

| Data request | HTTP route | Role |
| --- | --- | --- |
| `{prefix}turnCaller` | `POST {AiSwarmApiUrl}/turn` | Customer utterance (`role: caller`) |
| `{prefix}turnAi` | `POST {AiSwarmApiUrl}/turn` | AI draft (`role: ai`) |
| `{prefix}requestApproval` | `POST {AiSwarmApiUrl}/approval` | Approval gate |

Every request carries the header `x-cp-webhook-secret`. The install script reads that secret from `AiSwarmWebhookSecretArn` into memory and writes it only into the data request. It is never printed or saved to disk.

- - - -

## Download

- **[swarmcontrol-kit.zip](/assets/swarmcontrol-kit.zip)**
- [Browse the kit on GitHub](https://github.com/dextr-cloud/dextr-docs/tree/master/docs/assets/swarmcontrol-kit)

```bash
unzip swarmcontrol-kit.zip -d ~
cd ~/swarmcontrol-kit/scripts
```

All commands below run from that `scripts` folder.

- - - -

## 1. SDK setup

Install the ACXD SDK in its own folder, outside the kit. The kit finds it at `~/.cache/swarmcontrol-acxd-sdk`, or wherever `ACXD_SDK_ROOT` points.

```bash
export ACXD_SDK_ROOT="$HOME/.cache/swarmcontrol-acxd-sdk"
mkdir -p "$ACXD_SDK_ROOT" && (cd "$ACXD_SDK_ROOT" && npm init -y >/dev/null && npm install amazon-connect-acxd-sdk@0.2.0)
```

`npm init -y` gives the folder its own `package.json`. Without it, npm installs into the nearest parent folder that has one.

You also need Node.js 20 or later and the AWS CLI v2, signed in to the AWS account that runs your ConnectPath stack and your Connect instance.

Set the ACXD API key in your shell only. Never put it in a file, a ticket, or chat.

```bash
read -rs ACXD_API_KEY && export ACXD_API_KEY
```

- - - -

## 2. Config

```bash
cp ../config.example.json ../config.json
```

Edit `../config.json`. It holds ids only, never secrets. Keep it out of version control.

```json
{
  "aws": {
    "profile": "your-aws-profile",
    "region": "us-east-1",
    "connectInstanceId": "CONNECT_INSTANCE_UUID",
    "escalationQueueId": "CONNECT_QUEUE_UUID"
  },
  "connectPath": { "stackName": "YOUR_CONNECTPATH_STACK_NAME" },
  "acxd": { "workspaceId": "ACXD_WORKSPACE_UUID", "languageCode": "en-US", "apiKeyEnv": "ACXD_API_KEY" },
  "naming": { "dataRequestPrefix": "acme", "contextPrefix": "cp_swarm_" },
  "targets": [
    {
      "channel": "chat",
      "applicationId": "ACXD_CHAT_APPLICATION_UUID",
      "deploymentId": "ACXD_CHAT_DEPLOYMENT_UUID",
      "connectContactFlowId": "CONNECT_CHAT_FLOW_UUID",
      "flows": ["yourChatFlowId"],
      "approvalSites": []
    },
    {
      "channel": "voice",
      "applicationId": "ACXD_VOICE_APPLICATION_UUID",
      "deploymentId": "ACXD_VOICE_DEPLOYMENT_UUID",
      "connectContactFlowId": "CONNECT_VOICE_FLOW_UUID",
      "flows": ["yourVoiceFlowId"],
      "approvalSites": []
    }
  ]
}
```

| Field | Required | Meaning |
| --- | --- | --- |
| `aws.profile` | no | AWS CLI profile. Defaults to `AWS_PROFILE`. |
| `aws.region` | yes | Region of your Connect instance and ConnectPath stack. |
| `aws.connectInstanceId` | yes | Your Amazon Connect instance id. |
| `aws.escalationQueueId` | no | Your human queue. Preflight checks it exists. |
| `connectPath.stackName` | yes | Your ConnectPath CloudFormation stack. The scripts read its outputs. |
| `acxd.workspaceId` | yes | Your ACXD workspace id. |
| `acxd.languageCode` | no | Default `en-US`. Must match your applications. |
| `acxd.apiKeyEnv` | no | Name of the environment variable that holds the API key. Default `ACXD_API_KEY`. |
| `naming.dataRequestPrefix` | yes | camelCase letters and digits, for example `acme`. Becomes `acmeturnCaller`. |
| `naming.contextPrefix` | no | Default `cp_swarm_`. Leave it unless ConnectPath Support says otherwise. |
| `targets[]` | yes | One entry per ACXD application to supervise. |
| `targets[].channel` | yes | `chat` or `voice`. The hook flows report it on every turn; SwarmControl shows it on the contact card. |
| `targets[].key` | no | Defaults to the channel. Set it only when two targets share a channel; it names the hook flows. |
| `targets[].applicationId` | yes | The ACXD application. |
| `targets[].deploymentId` | yes | The deployment your Connect block uses. Install builds and points this deployment at the new build. |
| `targets[].connectContactFlowId` | no | The Connect flow with the ACXD block for this application. Needed for `connect-block.mjs`. |
| `targets[].flows` | yes | The ACXD flow ids to supervise. A flow may appear in only one target. |
| `targets[].approvalSites` | no | Approval gates. See [Approval gate](#approval-gate). Default none. |

- - - -

## 3. Preflight

Read-only. It changes nothing and saves your stack outputs to `../state/stack-outputs.json` for the other scripts.

```bash
node preflight.mjs
```

| # | Check | Pass |
| --- | --- | --- |
| P1 | ACXD SDK loads | SDK path printed |
| P2 | Each target application is in your workspace | application name printed |
| P3 | Stack outputs present and `AiSwarmEnabled=true` | `AiSwarmEnabled=true` |
| P4 | Webhook secret readable (value never shown) | `length 64` |
| P5 | `POST /turn` returns 401 without the header and 400 with the header and `{}` | `no header 401, header + {} 400` |
| P6 | Connect instance, escalation queue, and an ACXD block for each target's application | block id printed |
| P7 | Language, deployment, and each listed flow exists and is on its application | `found` |

The last line must be `{"step":"preflight-complete","passed":N,"failed":0}`. If P3 fails, SwarmControl is not enabled on your stack yet; contact ConnectPath Support.

- - - -

## 4. Backup

Read-only. It saves each target application, each listed flow, and each Connect flow to `../state/backup/`.

```bash
node backup.mjs
```

Install always hooks from these pristine copies, so you can run install again safely. Backup never overwrites a pristine copy with a hooked one. Keep `../state/` until you have uninstalled.

- - - -

## 5. Install

Always look at the plan first.

```bash
node install.mjs --dry-run
```

One line per target, for example:

```text
{"step":"plan","channel":"chat","flows":["supportChat"],"hookFlows":["cpSupervisedInputChat","cpSupervisedOutputChat"],"inputSites":1,"outputSites":3,"approvalSites":0}
```

If any flow cannot be hooked, the dry run stops with `Install blocked; nothing was changed:` and one line per problem. See [Troubleshooting](#troubleshooting).

Then install. It asks you to type `yes`.

```bash
node install.mjs
```

For each target, install creates or updates the data requests and context variables, writes the two hook flows, hooks your flows, adds the hook flows to the application (your flows are never removed), checks every reference, then builds and points your deployment at the new build. It ends with:

```text
{"step":"install-complete","next":"Run connect-block.mjs to point your Connect flows at the new deployment."}
```

To create only the workspace data requests and context variables, run `node install.mjs --only workspace`.

**Designer Validate.** Open each hooked flow and both hook flows in ACXD Designer and press **Validate**. Expect 0 errors.

- - - -

## 6. Connect block

Shows the change first and writes nothing:

```bash
node connect-block.mjs
```

For each target it prints the block's alias and `ContextVariables` before and after. Only the ACXD block changes:

| Parameter | After |
| --- | --- |
| `AgentConfiguration.Alias` | Your deployment's alias (normally unchanged) |
| `ContextVariables.contactId` | `$.ContactId` |

Then apply it. It asks you to type `yes`.

```bash
node connect-block.mjs --apply
```

- - - -

## 7. Verify

Read-only, apart from one simulated turn against your ConnectPath stack.

```bash
node verify.mjs
```

| # | Check |
| --- | --- |
| V1 | Each data request exists and points at your `AiSwarmApiUrl` |
| V2 | Each `cp_swarm_*` context variable exists and allows external modification |
| V3 | Install state exists and the hook flows and your flows are on the application |
| V4 | Each listed flow is hooked |
| V5 | Your deployment runs the build install made |
| V6 | The Connect block has the alias and `contactId` |
| V7 | A simulated caller and AI turn succeed |

The last line must show `"failed":0`. Run `node verify.mjs --skip-connect` before you have applied the Connect block.

Then test with a real contact: start a chat, or call your number, and open **SwarmControl** in ConnectPath. The contact appears in the grid, and a whisper or override changes the next reply.

- - - -

## Voice

Voice uses exactly the same steps as chat. List your voice application as a target with `"channel": "voice"`, and list the flows it runs. The kit hooks them the same way, and the voice target's hook flows report `voice`.

Keep chat and voice in separate applications, one target each. A target reports a single channel.

Test voice with a live call before you route production traffic.

- - - -

## Approval gate

An approval gate holds an action until a supervisor approves it in SwarmControl. Add one entry per gated edge to `targets[].approvalSites`:

```json
"approvalSites": [
  { "flowId": "supportChat", "fromNodeId": "NODE_UUID", "edgeName": "Refund", "action": "refund" }
]
```

| Field | Required | Meaning |
| --- | --- | --- |
| `flowId` | yes | One of this target's `flows`. At most one gate per flow. |
| `fromNodeId` | yes | The node whose outgoing edge leads to the action, usually a split. Copy the id from Designer. |
| `edgeName` | yes | The name of that edge, for example `Refund`. |
| `action` | yes | A short label shown to the supervisor, for example `refund`. |
| `summaryContext` | no | A context variable to send as the summary. Default `cp_swarm_customerText`. |

When the edge is taken, the flow asks ConnectPath for approval. If the supervisor approves or denies, the flow continues along the original edge with the decision in `cp_swarm_approvalStatus`. While it is pending, the customer hears a hold line, and the Listen after it re-checks every 8 seconds. The gated flow needs at least one supervised Speak that leads back to a Listen.

Gate the edge into the step that writes the AI reply, so the reply can read `cp_swarm_approvalStatus` and tell the customer the decision. Do not gate an edge that leads straight into the action itself (for example the data request that issues a refund): a denial continues on the same edge, so that action would still run.

Run `node install.mjs --dry-run` after editing the gate; it reports a missing node or edge before anything changes.

- - - -

## Rollback

Fast rollback points each deployment back at the build that was live before your first install. Your flows are not changed.

```bash
node rollback.mjs
```

## Uninstall

Restores each listed flow from your backup, removes the hook flows from the application and deletes them, then builds and deploys.

```bash
node uninstall.mjs --connect
```

| Flag | Effect |
| --- | --- |
| `--connect` | Also restores each Connect block's original parameters. |
| `--workspace` | Also deletes the kit's data requests and `cp_swarm_*` context variables. `contactId` is kept. |
| `--yes` | Skips the `yes` prompt. |

Restoring from backup discards edits you made to a hooked flow after install. Make lasting changes in Designer after uninstall, then back up and install again.

Turning SwarmControl off on your ConnectPath stack is a separate step, covered on the **[SwarmControl](/swarmcontrol/#turning-live-mode-off)** page.

- - - -

## Script map

| Script | Changes | Purpose |
| --- | --- | --- |
| `preflight.mjs` | nothing | Checks P1–P7, saves stack outputs |
| `backup.mjs` | nothing | Pristine copies of your flows and Connect blocks |
| `install.mjs` | ACXD | Data requests, context variables, hook flows, hooks, build, deploy |
| `connect-block.mjs` | Connect, with `--apply` | Alias and `contactId` on the ACXD block |
| `verify.mjs` | nothing | Checks V1–V7 |
| `check-flow-references.mjs` | nothing | The reference check install runs before every build |
| `rollback.mjs` | ACXD | Redeploys the pre-install build |
| `uninstall.mjs` | ACXD, Connect with `--connect` | Removes SwarmControl |

- - - -

## Hooking rules (reference)

Install does this for you. Use this section to read a hooked flow in Designer.

**Input hook, on each Listen.** The Listen's **Input** edge goes to `cp:Set cp_swarm_returnTo (input)`, then `cp:Redirect supervised input`, then back to `cp:After input hook` and on to your original next node. The Input edge also requires `System.utterance neq ""` and `System.utterance neq cp_swarm_lastCustomerText`, so a repeated utterance does not post twice.

**Output hook, on each Speak after the first Listen.** The Speak node is stubbed (an invisible body) and renamed `cp:(stub) <name>`. Its text, or the single local it spoke, is captured into `cp_swarm_replyDraft`. Then `cp:Redirect supervised output` speaks the approved line and returns to your original next node. A Speak node must have exactly one text message and one next node, and its text must be plain text or a single local such as `{aiReply:NLX.Local}`.

**Return dispatch.** Each hook flow ends in `cp:Return dispatch`, which reads `cp_swarm_returnTo` and redirects back to the exact call site. ACXD has no "return to caller" redirect.

**Generative prompts.** Each generative text node gets this block appended once:

```text
Conversation so far (C = customer, A = you; for context only):
{cp_swarm_history:NLX.Context}

Internal supervisor policy (never quote aloud):
{cp_swarm_whisperNote:NLX.Context}

Supervisor approval status (if any; never read this label aloud): {cp_swarm_approvalStatus:NLX.Context}
If APPROVED, tell the customer it's approved and go ahead with the action you asked about. If DENIED, explain politely that it can't be done. If UNAVAILABLE, say you couldn't reach a manager right now and offer next steps. If PENDING or empty, say nothing about approval.
```

**Not supported:** Generative Journey nodes, and node types other than start, Speak, Listen, define, split, generative text, data request, redirect, escalate, end, loop, and transform.

- - - -

## HTTP API reference

Base URL: **`AiSwarmApiUrl`** (no trailing slash). Auth: **`x-cp-webhook-secret`** on every request. Supervisor decisions (approve, deny, whisper, say next, intercept) are made in SwarmControl, not over HTTP.

### `POST /turn`

| Field | Required | Description |
| --- | --- | --- |
| `contactId` | yes | Conversation id |
| `role` | yes | `caller` or `ai` |
| `text` | caller | Customer utterance |
| `aiDraft` | ai | Generative draft |
| `channel` | no | `chat` or `voice` |
| `turnId` | no | Optional idempotency key |

**Caller response:** `intercept`, `whisper`, `whisperMode`, `approvalStatus`, `gate`, `transcriptHistory`.

**AI response:** `speakText` (the line to speak), `spokenText`, `aiDraft`, `overrideUsed`, `redacted`, `gate`, `intercept`, `whisper`.

### `POST /approval`

Body: `{ contactId, requestId?, action?, summary?, amount?, waitSeconds? }`.
Response: `{ requestId, status, decidedBy?, note? }`, with `status` one of `PENDING`, `APPROVED`, `DENIED`, `UNAVAILABLE`.

### Errors

| HTTP | Body |
| --- | --- |
| 401 | `{ "error": "unauthorized" }` |
| 404 | `{ "error": "not found" }` |
| 400 | `{ "error": "<message>" }` |

- - - -

## Troubleshooting

### Install refuses to start

Every message below starts with `Install blocked; nothing was changed:`.

| Message | Fix |
| --- | --- |
| `node "<name>" is already a ConnectPath hook` | The flow in your backup is already hooked. Restore the flow by hand, then run `backup.mjs` again. |
| `node "<name>" is a Generative Journey` | Generative Journey nodes are not supported. Migrate to generative text nodes. |
| `Listen node "<name>" has no Input edge to hook` | Give the Listen an Input edge. |
| `Speak node "<name>" must have exactly one text message` / `one next node` | Split the node, or leave it before the first Listen. |
| `Speak node "<name>" mixes text and variables` | Speak a single local, for example compose the line into `{aiReply:NLX.Local}` first. |
| `no Listen (user_input) node found` | List only flows that talk to the customer. |
| `approvalSites: edge "<edge>" not found on node "<name>"` | Check `edgeName` against the edge label in Designer. |
| `approvalSites: ... needs a supervised Speak node that returns to a Listen` | The gated flow needs a Speak that leads back to a Listen, for the hold line. |
| `approvalSites: Listen "<name>" has no Timeout edge for approval polling` | Give that Listen a Timeout edge. The gate re-checks approval on it. |

### Other script errors

| Message | Fix |
| --- | --- |
| `Invalid config ...` | Each following line names the field to fix. |
| `ACXD_API_KEY is not set` | `read -rs ACXD_API_KEY && export ACXD_API_KEY` |
| `Missing .../stack-outputs.json. Run preflight.mjs first.` | Run `node preflight.mjs`. |
| `Missing backup .... Run backup.mjs first.` | Run `node backup.mjs`. |
| `<flow> is already hooked and there is no pristine backup` | Restore the flow by hand, then run `backup.mjs`. |
| `Flow reference check failed before build` | Each line names a flow, node, and missing reference. Usually a data request or context variable was deleted by hand; run `node install.mjs` again. |
| `Re-run in an interactive shell, or pass --yes.` | The script needs a typed `yes`. |

### Designer Validate and runtime

| Symptom | Fix |
| --- | --- |
| `variableId is not in the expected format` | Use a camelCase `dataRequestPrefix`, with no underscores. |
| Saving a flow does not change live traffic | Build and deploy. `install.mjs` and `uninstall.mjs` do this for you. |
| Speech is empty but a draft exists | The output hook must run. Check whether an approval is pending. |
| Calls fail with a malformed URL | Remove any trailing slash from `AiSwarmApiUrl`. |
| Webhook header shows masked in Designer | Expected. P5 proves the header works. |

Supervision adds roughly **1.3 to 2.5 seconds** per turn.

### Contacting support

Include the contact id, the ACXD build id from `../state/install-<applicationId>.json`, the Connect flow id, the host of your `AiSwarmApiUrl` (never the secret), a Validate screenshot, and the output of `node preflight.mjs`.
