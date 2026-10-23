---
title: "SwarmControl"
permalink: /swarmcontrol/
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "docs"
---

SwarmControl is the ConnectPath supervisor experience at **`/swarmcontrol`**. It brings **Amazon Connect Agentic CX Designer (ACXD) AI agents** and **human agent voice contacts** onto one grid so supervisors can watch live transcripts and coach AI conversations (whisper, nudge, override, intercept, approvals). Human contacts are **read-only** on this page. Supervisor actions apply to AI contacts only.

For the full ACXD wiring guide (data requests, hook flows, Connect blocks, and the supervision kit), see **[SwarmControl — AI agent (ACXD) setup](/swarmcontrol-acxd-setup/)**.

- - - -

## What supervisors see

Open **SwarmControl** from the left navigation. The page includes:

| UI area | Purpose |
| --- | --- |
| **Status dot** | Green with a pulse when connected to live data. Amber (labeled **Simulated**) in demo mode or when the data source is set to Simulated. Red when live mode is on but the connection is offline. |
| **Simulated data pill** | Shown next to the status dot in demo mode so nobody mistakes demo contacts for real ones. |
| **Tabs** | **Live**, **Done**, **Approvals**, **Escalated**. Each tab filters the contact grid by lifecycle and attention state. **Approvals** is the one place to see every contact waiting on a supervisor decision. |
| **Intercept filter** | A toggle at the right of the tab bar that narrows the active tab to contacts with **Intercept** armed. |
| **Contact cards** | Channel, status, turn count, and how recently the contact was active. Each card carries a **kind** label, **AI agent** or **Human agent**. A card with no attention flag shows no state chip, dot, or counter. |
| **Detail panel** | Live transcript (**Customer** and **AI** roles for AI contacts, Contact Lens segments for human contacts) plus supervisor controls for AI contacts. |

Every tab and counter has a tooltip (on hover and on keyboard focus) and a screen-reader label in the form "Label: count". The tab bar follows standard tab keyboard behavior: use the arrow keys, **Home**, and **End** to move between tabs.

### Attention tiers

SwarmControl flags contacts that need a supervisor, so you can scan the grid quickly:

| Tier | Triggered by | Where to find them |
| --- | --- | --- |
| **Critical** | A pending approval | **Approvals** tab |
| **Watch** | Intercept armed, or the contact was escalated | **Escalated** tab and the **Intercept** filter |

Cards show a left accent that matches their tier. Contacts without a flag stay visually quiet.

### Settings

The gear icon in the top bar opens the SwarmControl settings. They are saved in your browser, so they follow you between sessions on the same device.

| Setting | Options |
| --- | --- |
| **Data source** | **Live** or **Simulated** (Live is available only when live mode is enabled for your instance) |
| **Sort** | How contact cards are ordered |
| **Grid size** | Card density in the grid |
| **Detail view** | Open a contact in an **overlay** or **inline** |

### The detail panel

Select a card to open its detail panel:

- **Header:** the contact's channel.
- **Approval banner:** appears when the AI flow is waiting on a supervisor decision, with **Approve** and **Deny** buttons.
- **Two-sided transcript:** the customer on one side and the AI on the other. For AI turns you see both the **draft** and what was **spoken**.
- **Action panel:** supervisor controls (see below).

**Transcript scrolling.** The oldest turn is at the top and the newest at the bottom. New turns stay pinned to the bottom. If you scroll up, auto-scroll pauses and a **Jump to latest** button appears. Scroll back to the bottom or click the button to resume. Scrolling is instant when your system is set to reduce motion.

### Supervisor actions (AI contacts only)

| Action | What it does |
| --- | --- |
| **Whisper** | Private, weak guidance injected into the ACXD generative step. It is not spoken verbatim. |
| **Nudge** | Strong private guidance the AI should follow. |
| **Override** | **Say next**: a one-shot line spoken on the next AI turn, then cleared. |
| **Intercept** | A toggle. Hands the contact to a human on the **next customer turn** (the flow escalates). The button stays highlighted while Intercept is on. |
| **Approve / Deny** | Resolve an approval raised by the AI flow (the sticky gate). Each locks after one click until the server confirms. |

How the action panel behaves:

- One message box grows as you type (up to a maximum height) and is shared by Whisper, Nudge, and Override.
- **Whisper**, **Nudge**, and **Override** are disabled while the box is empty.
- Press **Cmd/Ctrl+Enter** to send a Whisper. **Enter** inserts a new line.
- Active whispers and a pending say-next line show as removable chips under the buttons.
- Actions are disabled for ended contacts. On the live source they are also disabled while the connection is offline. Actions are never queued for later.

Escalation target can be **Default queue** or **Supervisor queue** where configured.

### Demo mode vs live mode

| Mode | When | Who sees `/swarmcontrol` | Data source |
| --- | --- | --- | --- |
| **Demo (Simulated)** | Live mode is not enabled for the instance (the default) | Every authenticated user | A simulated feed of AI and human contacts. No setup required. |
| **Live** | Live mode is enabled for the instance **and** an admin turned on **Live data** under Settings | Users who meet the live requirements below | Real-time Live Lens connection |

In demo mode a short banner under the tab bar explains that live SwarmControl requires onboarding your Amazon Connect Agentic CX Designer flows.

Live mode requires **all** of the following:

- **SwarmControl** set to **Live data** in the Contact Lens settings (see below).
- Security profile **SwarmControl** (`ai_swarm_control`) set to **Enable**.
- Security profile **Transcripts** (`transcripts`) set to **Enable**.
- Live Lens enabled, with a realtime connection configured for your instance.

Until live mode is on, supervisors can explore the full interface with **Simulated** data without any ACXD setup. Once live mode is on, users without the required permissions no longer see SwarmControl in the navigation and are redirected away from `/swarmcontrol`.

- - - -

## Prerequisites checklist

Use this before turning on live SwarmControl or onboarding ACXD.

### ConnectPath / AWS

| Requirement | Why |
| --- | --- |
| **Live Lens** enabled for the instance | Transcript fan-out and the realtime connection that SwarmControl uses for AI and human cards |
| **SwarmControl** enabled for your ConnectPath stack | Provisions the SwarmControl API, storage, webhook secret, and Live Lens extensions. ConnectPath enables this for your account. Contact ConnectPath Support to turn it on. |
| Stack outputs **`AiSwarmApiUrl`** (no trailing slash), **`AiSwarmWebhookSecretArn`**, **`AiSwarmTableName`**, **`RealtimeWebSocketWssUrl`** | Used by ACXD webhooks, turn storage, and the supervisor connection |

### Amazon Connect

| Requirement | Why |
| --- | --- |
| **Contact Lens** enabled on the Connect instance | Real-time voice analytics for human agent cards. AI contacts use ACXD and the SwarmControl API instead. |
| **Escalation queue** for AI flows | The Connect block error and escalation branch uses it for intercept and failures |
| ACXD **workspace**, **API key**, and onboarded **applications** | Required by the AI agent supervision kit (see [ACXD setup](/swarmcontrol-acxd-setup/)) |

### Permissions (security profiles)

| Action | Label in UI | Needed for |
| --- | --- | --- |
| `ai_swarm_control` | **SwarmControl** | Live SwarmControl page and AI supervisor actions |
| `transcripts` | **Transcripts** | Reading live transcripts (required together with SwarmControl for live mode) |
| `silent_monitor` | **Silent Monitor** | **Human** contact cards on SwarmControl |

Configure these under **Settings → Security**. Edit a profile, then use **Communications and presence** (SwarmControl, Silent Monitor) and **Quality/Analytics** (Transcripts). SwarmControl and Silent Monitor support **Enable** only.

- - - -

## Enable live mode (admins)

Live SwarmControl is layered: your ConnectPath stack, the product toggle, then user permissions.

1. **ConnectPath** enables SwarmControl for your stack and instance. Contact ConnectPath Support to start this.
2. A **ConnectPath admin** opens **Settings → Integrations and extensions → Contact Lens**. With Live Lens connected, use the SwarmControl switch:
   - **Demo**: simulated data for all users (the default).
   - **Live data**: real contacts for permitted supervisors.

   Help text in the product: *"SwarmControl uses demo data for everyone by default. Turn on live data only when Live Lens is ready (users need the SwarmControl permission to use live mode)."*

3. Assign supervisors **SwarmControl** and **Transcripts**, plus **Silent Monitor** if they should see human agent cards.

### Error codes when enabling live data

| Code | Message (English UI) | Typical fix |
| --- | --- | --- |
| **AS0001** | Turn on Live Lens before enabling live SwarmControl data. | Enable **Contact Lens / Live Lens** on the instance first. |
| **AS0002** | SwarmControl live mode needs Live Lens installed on this instance (WebSocket URL and Cognito). Update the stack or turn Live Lens on first. | Update the ConnectPath stack to a version with Live Lens support, and confirm the realtime URL and sign-in settings are in place. Contact ConnectPath Support if you need help. |

A missing **SwarmControl** or **Transcripts** permission does not produce these codes. SwarmControl is simply hidden from the navigation for those users.

### Turning live mode off

| Step | Effect |
| --- | --- |
| Set **Live data** back to **Demo** in Settings | Supervisors return to the simulated feed. Your stack resources stay in place. |
| Ask ConnectPath Support to disable SwarmControl on the instance | SwarmControl returns to demo-only for the whole instance. |
| Ask ConnectPath Support to remove SwarmControl from the stack | **Deletes** the SwarmControl turn storage and webhook secret and stops supervisor actions. **Live Lens for Contact Lens continues.** ACXD data requests keep calling the old URLs until you remove them, so disable or repoint your flows first. |

- - - -

## Human agent voice contacts

Human cards show **read-only** Contact Lens real-time transcripts on the same grid as AI agents. Supervisors **cannot** whisper, nudge, intercept, or approve on human contacts from SwarmControl.

### Setup

1. Enable **Contact Lens** real-time analytics on the Amazon Connect instance and on the **voice contact flows** your agents use.
2. Enable **Live Lens** on the ConnectPath instance (the same foundation as AI SwarmControl).
3. Grant supervisors **Transcripts**, **SwarmControl**, and **Silent Monitor**.

Transcripts begin streaming as soon as the call is queued, including during IVR and queue time, so supervisors see the conversation before an agent connects.

### Testing

Place a test call to a queue and accept it as an agent. Confirm the contact appears on **SwarmControl → Live** with kind **Human agent** and a streaming transcript.

### Not supported

- Supervisor actions on human contacts from SwarmControl.
- Chat contacts handled by human agents (the human monitor is voice only).
- Channels that do not use Contact Lens.

- - - -

## Verify SwarmControl works

### Checklist

| Step | Pass criteria |
| --- | --- |
| Demo UI | Any user opens `/swarmcontrol`, sees **Simulated** data, and the tabs and demo cards load |
| Stack | SwarmControl is enabled, and the three `AiSwarm*` stack outputs are present |
| HTTP preflight | `POST /turn` without the secret returns **401**. With the secret and `{}` it returns **400** `invalid turn request`. |
| ACXD chat end to end | After the supervision kit is installed, the chat test passes and your turn storage has `TURN#` rows for the contact |
| Live UI | **Live data** is on, and a supervisor with the right permissions sees the green **Live** status dot and real contact IDs on cards |
| AI actions | Whisper, say next, intercept, and approval all work on a test AI contact |

The **Source** setting in the settings popover (**Live** or **Simulated**) switches between the live feed and the demo feed when live mode is enabled. When the instance is in demo mode the page is always simulated.

### Check stack outputs and logs

```bash
export STACK="<your-connectpath-stack-name>"
export PROFILE="<your-aws-profile>"
export REGION="us-east-1"

aws cloudformation describe-stacks --stack-name "$STACK" --profile "$PROFILE" --region "$REGION" \
  --query "Stacks[0].Outputs[?starts_with(OutputKey,'AiSwarm')].[OutputKey,OutputValue]" --output table

aws dynamodb query \
  --table-name "<AiSwarmTableName>" \
  --key-condition-expression "PK = :pk AND begins_with(SK, :pre)" \
  --expression-attribute-values '{":pk":{"S":"AIC#<contactId>"},":pre":{"S":"TURN#"}}' \
  --profile "$PROFILE" --region "$REGION"
```

### Troubleshooting

| Symptom | Likely cause | Action |
| --- | --- | --- |
| `401` on `/turn` | Wrong or missing `x-cp-webhook-secret` on the ACXD data request | Re-fetch the secret from its ARN and re-push the data requests |
| Contact missing on the grid | Wrong instance on the broadcast, or no stored record for the contact yet | Confirm the instance ID and complete at least one turn |
| Chat works, voice is silent | Voice is routed through chat kit hooks, or the payload says `channel: chat` | Use the **turnLoop clone** voice path ([ACXD setup](/swarmcontrol-acxd-setup/#voice-entry-turnloop-clone-only)) |
| Validate shows an invalid `previous_redirect` | A hook tail uses an invalid redirect | Use the `cp_returnTo` dispatch registry |
| `unknown_return` escalation | `cp_swarm_returnTo` does not match a registered site | Re-run the install so the dispatch registry syncs |
| Approval stuck on **PENDING** | The supervisor connection dropped | Reconnect, then approve or deny from the detail panel |
| AS0001 or AS0002 when turning on live data | Live Lens is off or not installed | Enable Live Lens and update the stack |
| SwarmControl missing from the navigation | Live mode is on but the user lacks permissions | Add **SwarmControl** and **Transcripts** to the user's security profile |
| Human contact does not appear | The supervisor is missing **Silent Monitor**, or Contact Lens real-time is off for the flow | Grant **Silent Monitor** and enable real-time analytics on the voice flow |

For ACXD validator and runtime errors, see [Troubleshooting in the ACXD setup guide](/swarmcontrol-acxd-setup/#troubleshooting-acxd-flows).

### Limitations

- **Voice agents** must use a turnLoop-based flow. Test with a live call before you route production traffic.
- **Flows with custom structure** may need manual hooking. Work with ConnectPath Support if a flow does not match the standard patterns.
- **Generative Journey** nodes are not supported. Migrate to standard generative nodes before hooking a flow.

- - - -

## FAQ

**Where is the page?**
`/swarmcontrol` in the ConnectPath web app.

**Do agents need the SwarmControl permission?**
No. Only supervisors who should see live AI contacts need **SwarmControl** and **Transcripts**.

**Can we use SwarmControl without ACXD?**
Demo mode, yes. Live AI contacts need ACXD flows wired to the SwarmControl API. Human voice cards need Contact Lens and Live Lens.

**Does turning off SwarmControl remove Live Lens?**
No. It removes only the SwarmControl API, turn storage, and webhook secret.

**Where do I get the supervision kit?**
ConnectPath provides the install scripts and flow templates. Contact ConnectPath Support. Never share API keys or webhook secrets in chat, email, or tickets.

- - - -

## Glossary

| Term | Meaning |
| --- | --- |
| **ACXD** | Amazon Connect Agentic CX Designer. It builds AI agent flows invoked by `ConnectParticipantWithAgenticCX`. |
| **Supervision kit** | Workspace data requests (`turnCaller`, `turnAi`, `requestApproval`), context variables `cp_swarm_*`, hook flows `cpSupervisedInput` and `cpSupervisedOutput`, and the hooks added to your customer flows. |
| **Turn loop** | The ACXD cycle: listen, caller `/turn`, generative draft, AI `/turn`, speak. |
| **Sticky gate** | An approval wait during which AI turns return hold lines until a supervisor decides. |
| **Live Lens** | ConnectPath real-time Contact Lens transcripts and the realtime connection behind them. |
| **Simulated data** | The demo feed shown when live mode is off or the source is set to Simulated. |
| **Kind label** | **AI agent** or **Human agent** on each card. |
| **Attention tier** | **Critical** (pending approval) or **Watch** (intercept armed or escalated). |
