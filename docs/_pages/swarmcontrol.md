---
title: "SwarmControl"
permalink: /swarmcontrol/
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "docs"
---

SwarmControl is the ConnectPath supervisor experience at **`/swarmcontrol`**. It brings **Amazon Connect Agentic CX Designer (ACXD) AI agents** and **human agent voice contacts** onto one grid so supervisors can watch live transcripts and coach AI conversations (whisper, say next, intercept, approvals). Human contacts are **read-only** on this page—supervisor actions apply to AI contacts only.

For the full ACXD wiring guide (data requests, hook flows, Connect blocks, runnable scripts), see **[SwarmControl — AI agent (ACXD) setup](/swarmcontrol-acxd-setup/)**.

- - - -

## What supervisors see

Open **SwarmControl** from the left navigation (robot icon). The page includes:

| UI area | Purpose |
| --- | --- |
| **Status badge** | **Simulated data** when the instance is in demo mode; **Live** when connected to real data; **Offline** when live mode is on but the WebSocket is down. |
| **Tabs** | **Live**, **Done**, **Approvals**, **Escalated**—filter the contact grid by lifecycle and attention state. |
| **Trail counters** | Quick filters (for example contacts with **Intercept** armed). |
| **Contact cards** | Channel, status badges, turn count, and preview text. Each card shows a **kind** label: **AI agent** or **Human agent** (human cards ship with [PR #5908](https://github.com/dextr-cloud/dextr/pull/5908)). |
| **Detail panel** | Live transcript (**Customer** / **AI** roles for AI contacts; Contact Lens segments for humans), plus supervisor controls for AI contacts. |

### Supervisor actions (AI contacts only)

| Action | What it does |
| --- | --- |
| **Whisper** | Private weak guidance injected into the ACXD generative step (not spoken verbatim). |
| **Nudge** | Strong private guidance the AI should follow. |
| **Override** | **Say next**—one-shot line spoken on the next AI turn, then cleared. |
| **Intercept** | Hand the contact to a human on the **next customer turn** (flow escalates). |
| **Approve / Deny** | Resolve an approval raised by the AI flow (sticky gate). |

Escalation target can be **Default queue** or **Supervisor queue** where configured.

### Demo mode vs live mode

| Mode | When | Who sees `/swarmcontrol` | Data source |
| --- | --- | --- | --- |
| **Demo (Simulated)** | Instance `aiSwarmEnabled` is false or unset | Every authenticated user | Local simulated feed (AI and demo human cards) |
| **Live** | `aiSwarmEnabled` true **and** admin enabled **Live data** under Settings | Users who pass the live capability gate | Live Lens WebSocket (`subscribe_ai_swarm` for AI; `subscribe_swarm_monitor` for humans when #5908 is merged) |

Live capability requires **all** of the following:

- Instance **Contact Lens → SwarmControl** toggle set to **Live data** (see below).
- Security profile **SwarmControl** (`ai_swarm_control`) **Enable**.
- Security profile **Transcripts** (`transcripts`) **Enable**.
- Live Lens enabled with a configured **realtime WebSocket URL**.

Until live mode is fully enabled, supervisors can explore the UI with **Simulated data** without stack or ACXD setup.

- - - -

## Prerequisites checklist

Use this before turning on live SwarmControl or onboarding ACXD.

### ConnectPath / AWS

| Requirement | Why |
| --- | --- |
| **Live Lens** enabled for the instance | Transcript fan-out and WebSocket for SwarmControl and human monitor cards |
| CloudFormation parameter **`AiSwarmEnabled=true`** | Provisions `AiSwarmApiUrl`, DynamoDB `aiSwarm` table, webhook secret, `llAiControl` Lambda, and Live Lens extensions |
| Instance field **`aiSwarmEnabled=true`** | Product live-mode gate (set by ops/Debra when the stack is ready—not always customer self-service) |
| Stack outputs **`AiSwarmApiUrl`** (no trailing slash), **`AiSwarmWebhookSecretArn`**, **`AiSwarmTableName`**, **`RealtimeWebSocketWssUrl`** | ACXD webhooks, storage, and supervisor socket |
| **Live Lens Lambda artifacts** published for the environment | Customer pipeline does not publish `liveLensAiControl.zip` automatically; ops may need `build-livelens-artifacts.sh` and `publish-livelens-artifacts.sh` from the dextr repo, then a stack update |

### Amazon Connect

| Requirement | Why |
| --- | --- |
| **Contact Lens** enabled on the Connect instance | Real-time voice analytics for human agents; AI path uses ACXD + SwarmControl HTTP API |
| **Escalation queue** for AI flows | Connect block error/escalation branch for intercept and failures |
| ACXD **workspace**, **API key**, and onboarded **applications** | AI agent supervision kit (see [ACXD setup](/swarmcontrol-acxd-setup/)) |

### Permissions (security profiles)

| Action | Label in UI | Needed for |
| --- | --- | --- |
| `ai_swarm_control` | **SwarmControl** | Live SwarmControl page and WebSocket `ai_*` handlers |
| `transcripts` | **Transcripts** | Live Lens read path (strict gate with SwarmControl live) |
| `silent_monitor` | **Silent Monitor** | **Human** contact cards on SwarmControl when [PR #5908](https://github.com/dextr-cloud/dextr/pull/5908) is in your build |

Configure under **Settings → Security** → edit a profile → **Communications and presence** (SwarmControl, Silent Monitor) and **Quality/Analytics** (Transcripts).

- - - -

## Enable live mode (admins)

Live SwarmControl is layered: stack, instance row, product toggle, then user permissions.

1. **Operations** sets customer stack parameter **`AiSwarmEnabled=true`** and executes the change set (preview first—expect **ADD** of Ai Swarm resources, not replacement of core Live Lens tables).
2. **Operations** sets **`aiSwarmEnabled=true`** on the Instance item in DynamoDB (or via Debra), when your process requires it alongside the stack.
3. **ConnectPath admin** opens **Settings → Integrations and extensions → Contact Lens**. With Live Lens connected, use the SwarmControl switch:
   - **Demo** — simulated data for all users (default).
   - **Live data** — real contacts for permitted supervisors.

Help text in the product: *"SwarmControl uses demo data for everyone by default. Turn on live data only when Live Lens is ready (users need the SwarmControl permission to use live mode)."*

4. Assign supervisors **SwarmControl** and **Transcripts** (and **Silent Monitor** for human cards after #5908).

### Error codes when enabling live data

| Code | Message (English UI) | Typical fix |
| --- | --- | --- |
| **AS0001** | Turn on Live Lens before enabling live SwarmControl data. | Enable **Contact Lens / Live Lens** on the instance first. |
| **AS0002** | SwarmControl live mode needs Live Lens installed on this instance (WebSocket URL and Cognito). Update the stack or turn Live Lens on first. | Update the ConnectPath stack to a build with Live Lens plumbing; confirm WebSocket URL and Cognito on the instance. |

Missing **SwarmControl** or **Transcripts** permission does not emit these codes—the nav and route hide live mode for those users instead.

### Rollback / turning live mode off

| Step | Effect |
| --- | --- |
| Set **Live data** back to **Demo** in Settings | Supervisors return to simulated feed; stack resources remain |
| Set instance **`aiSwarmEnabled`** false | Frontend treats the instance as demo-only |
| Stack **`AiSwarmEnabled=false`** change set | **Deletes** the `aiSwarm` DynamoDB table and webhook secret; `ai_*` WebSocket frames stop. **Live Lens for Contact Lens continues.** ACXD data requests still call old URLs until you remove them—disable or repoint flows before stack teardown. |

- - - -

## Human agent voice contacts

Human cards show **read-only** Contact Lens real-time transcripts on the same grid as AI agents. Supervisors **cannot** whisper, intercept, or approve on human contacts from SwarmControl.

### Setup

1. Enable **Contact Lens** real-time analytics on the Amazon Connect instance and on the **voice contact flows** your agents use.
2. Enable **Live Lens** on the ConnectPath instance (same foundation as AI SwarmControl).
3. Grant supervisors **Transcripts**, **SwarmControl**, and **Silent Monitor** (required for human cards when [PR #5908](https://github.com/dextr-cloud/dextr/pull/5908) ships).

### Testing

Place a test call to a queue, accept as an agent, and confirm the contact appears on **SwarmControl → Live** with kind **Human agent** and a streaming transcript.

{: .notice--warning}
**Pending release:** Human agent cards on SwarmControl depend on [PR #5908](https://github.com/dextr-cloud/dextr/pull/5908) (open as of this writing). Until that build is deployed, only AI (and simulated human demo) cards apply.

{: .notice--warning}
**Pending release:** [PR #5912](https://github.com/dextr-cloud/dextr/pull/5912) fixes Live Lens voice transcripts during **queue/IVR** (early `CONTACT_LINK` indexing and longer `CONTACT_NOT_READY` retry). Without it, voice transcripts may fail to start until the agent is connected—relevant for Engage **and** human monitoring on SwarmControl.

### Not supported yet

- Supervisor actions on human contacts from SwarmControl.
- Chat human contacts on SwarmControl (voice-focused monitor path).
- Non–Contact Lens channels for the human grid.

- - - -

## Verify SwarmControl works

### Checklist

| Step | Pass criteria |
| --- | --- |
| Demo UI | Any user opens `/swarmcontrol`, sees **Simulated data**, tabs and demo cards load |
| Stack | `AiSwarmEnabled=true`; three `AiSwarm*` outputs present |
| HTTP preflight | `POST /turn` without secret → **401**; with secret and `{}` → **400** `invalid turn request` |
| ACXD chat e2e | After kit install, `chat-e2e.mjs` passes; DynamoDB `AIC#<contactId>` has `TURN#` rows |
| Live UI | **Live data** on, supervisor with permissions sees **Live** badge and real `contactId` UUIDs on cards |
| AI actions | Whisper, say next, intercept, and approval visible on a test AI contact |

**Live** vs **Simulated** in the settings popover (**Source → Live / Simulated**) mirrors backend vs demo feed when live mode is enabled; in demo instance mode the page is always simulated.

### DynamoDB and logs

```bash
export STACK="dextr-connectpathdev-<alias>-<region>"
export PROFILE="<customer-account-profile>"
export REGION="us-east-1"

aws cloudformation describe-stacks --stack-name "$STACK" --profile "$PROFILE" --region "$REGION" \
  --query "Stacks[0].Outputs[?starts_with(OutputKey,'AiSwarm')].[OutputKey,OutputValue]" --output table

aws dynamodb query \
  --table-name "<AiSwarmTableName>" \
  --key-condition-expression "PK = :pk AND begins_with(SK, :pre)" \
  --expression-attribute-values '{":pk":{"S":"AIC#<contactId>"},":pre":{"S":"TURN#"}}' \
  --profile "$PROFILE" --region "$REGION"
```

```bash
aws logs filter-log-events \
  --log-group-name "/aws/lambda/dextr-connectpathdev-<alias>-<region>-llAiControl" \
  --filter-pattern "ERROR" --start-time $(($(date +%s)*1000 - 3600000)) \
  --profile "$PROFILE" --region "$REGION" --max-items 5
```

### Troubleshooting

| Symptom | Likely cause | Action |
| --- | --- | --- |
| `401` on `/turn` | Wrong or missing `x-cp-webhook-secret` on ACXD data request | Re-fetch secret from ARN in-process; re-push data requests |
| Contact missing on grid | Wrong instance on broadcast; no `META` row for contact | Confirm `INSTANCE_ID` on control Lambda; complete a turn |
| Chat works, voice silent | Voice routed through chat kit hooks or `channel: chat` | Use **turnLoop clone** voice path ([ACXD setup](/swarmcontrol-acxd-setup/#voice-entry-turnloop-clone-only)) |
| Validate `previous_redirect` | Hook tail uses invalid redirect | Use `cp_returnTo` dispatch registry |
| `unknown_return` escalate | `cp_swarm_returnTo` mismatch | Re-run install dispatch sync |
| Stuck **PENDING** approval | Supervisor WebSocket disconnected | Reconnect; approve/deny on detail panel |
| AS0001 / AS0002 on toggle | Live Lens off or not installed | Enable Live Lens; update stack |
| Live nav hidden | Live mode on but user lacks permissions | Add **SwarmControl** + **Transcripts** |

Full ACXD validator and runtime table: [operator guide — troubleshooting](https://github.com/dextr-cloud/dextr/blob/docs/swarmcontrol-ai-agent-setup/docs/swarm-control/ai-agents/08-troubleshooting-and-pitfalls.md) (moves to `develop` when [PR #5916](https://github.com/dextr-cloud/dextr/pull/5916) merges).

### Known gaps

- **Voice phone audio** end-to-end is **unverified** for some turnLoop clones; DynamoDB may show `channel: voice` without a recorded human audio proof.
- **Customer-built flow rewriter** outside kit templates is **unverified**.
- **`GET /escalation/{contactId}`** is implemented; Connect does not consume it on the Escalation branch yet.
- **Generative Journey** nodes are **not supportable**—migrate to standard generative nodes before hooking.

- - - -

## FAQ

**Where is the page?**  
`/swarmcontrol` in the ConnectPath web app (not `/aiswarmcontrol`).

**Do agents need SwarmControl permission?**  
No—only supervisors who should see live AI contacts need **SwarmControl** and **Transcripts**.

**Can we use SwarmControl without ACXD?**  
Demo mode yes. Live AI contacts require ACXD flows wired to the SwarmControl HTTP API. Human voice cards require Contact Lens + Live Lens (+ #5908).

**Does disabling Ai Swarm delete Live Lens?**  
No. It removes Ai Swarm API, table, and secret only.

**Where are scripts and flow JSON?**  
In the dextr repo under `docs/swarm-control/ai-agents/` ([PR #5916 branch](https://github.com/dextr-cloud/dextr/tree/docs/swarmcontrol-ai-agent-setup/docs/swarm-control/ai-agents)). Do not commit API keys or webhook secrets.

- - - -

## Glossary

| Term | Meaning |
| --- | --- |
| **ACXD** | Amazon Connect Agentic CX Designer—builds AI agent flows invoked by `ConnectParticipantWithAgenticCX`. |
| **Supervision kit** | Workspace data requests (`turnCaller`, `turnAi`, `requestApproval`), context vars `cp_swarm_*`, hook flows `cpSupervisedInput` / `cpSupervisedOutput`, and customer flow hooks. |
| **Turn loop** | ACXD cycle: listen → caller `/turn` → generative draft → AI `/turn` → speak. |
| **Sticky gate** | Approval wait where AI turns return hold lines until a supervisor decides. |
| **Live Lens** | ConnectPath real-time Contact Lens transcript and WebSocket infrastructure. |
| **Simulated data** | Demo feed when `aiSwarmEnabled` is off or unset. |
| **Kind label** | **AI agent** vs **Human agent** on each card. |

- - - -

## Release status (documentation anchors)

| Capability | Status |
| --- | --- |
| `AiSwarmEnabled` stack + Settings toggle + AS0001/AS0002 | Merged ([PR #5872](https://github.com/dextr-cloud/dextr/pull/5872))—**pending release** until your ConnectPath version includes it |
| `/swarmcontrol` UI, demo mode, live gates | Merged ([PR #5895](https://github.com/dextr-cloud/dextr/pull/5895))—**pending release** |
| Human voice monitor cards | [PR #5908](https://github.com/dextr-cloud/dextr/pull/5908) open—**pending release** |
| Live Lens queue/IVR voice transcript fix | [PR #5912](https://github.com/dextr-cloud/dextr/pull/5912) open—**pending release** |
| Published operator ACXD guide in dextr | [PR #5916](https://github.com/dextr-cloud/dextr/pull/5916) open |
