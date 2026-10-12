---
title: "v2.7.0"
excerpt_separator: "<!--more-->"
collection: release_notes
permalink: /:categories/:title/
date: 2026-10-13T00:00:00.000Z
layout: single
toc: true
toc_sticky: true
categories:
- Release Notes
sidebar:
nav: "docs"
---

## ConnectPath Release Notes, October 13th 2026

## New and Improved

---

### ConnectPath Proactive Outreach

Introducing ConnectPath Proactive Outreach, which includes a built-in outbound dialer, activity audit log, and retained call history for outbound campaigns. This is separate from Amazon Connect Outbound Campaigns. For more details, please open a support case.

---

### Re-ingest option on V2 Historical Reporting QuickSight

Added a Re-ingest option to the “V2 Historical Reporting QuickSight” deployment card. This option limits incremental data source refreshes to the last 2 days of new data, reducing the amount of data scanned for new data.

---

### Gryphon V2 deployment card

Added a new deployment card for Gryphon V2. Customers using this integration will need to move to the V2 deployment card.

---

### Administration Portal style and usage history

Updated the ConnectPath Administration Portal to match the new ConnectPath style and formatting and added the option to show the last 36 months of usage.

---



## Fixes

---

### Post Call Survey blank page

Fixed an issue where selecting a queue with no survey responses displayed a blank page in the Post Call Survey view.

---

### Queue Rebalancing copy settings stuck

Fixed an issue where copying settings in Queue Rebalancing did not complete and the process could become stuck.

---

### Queues missing from the footer in disaster recovery

Fixed an issue where queues were not shown in the footer when signed in through the disaster recovery environment.

---

### Inconsistent callback durations in Activity Search

CS0044148
Fixed an issue where callback durations shown in Activity Search were not always consistent.

---

### Live Lens transcript status bar cut off

Fixed an issue where the transcript status bar in Live Lens was cut off and could not be reached on long transcripts.

---

### Agent Performance status duration timer

CS0045101
Fixed an issue where the status duration timer in Agent Performance reset differently than in Team Status and Amazon Connect.

---

### Dashboard abandoned-call counts

Fixed an issue where abandoned-call counts on the Dashboard varied between queue filters and did not match Amazon Connect historical metrics.

---

### Blank Routing Profile column in Agent Performance

Fixed an issue where the Routing Profile column in Agent Performance could appear blank for an agent with a valid routing profile.

---

### Email transferred back to yourself stuck in After Contact Work

Fixed an issue where transferring an email back to yourself left the original contact stuck in After Contact Work with no way to clear it.

---

### Disposition window missing after email transfer

Fixed an issue where the disposition window did not appear when ending an email that was transferred back to yourself and re-accepted, allowing it to close without a disposition.

---

### Agent-to-agent chat messages fail to send

Fixed an issue where agent-to-agent chat messages could fail to send between certain pairs of agents.

---

### Duplicate disposition trees in Activity Search

CS0045927
Fixed an issue where disposition trees appeared duplicated when changing a disposition in Activity Search.

---

### Auto-accept call error in CCP logs

CS0046886
Fixed an issue where answering a call with auto-accept enabled could record an error in the CCP logs.

---

### Smart Reply extra formatting characters

Fixed an issue where Smart Reply suggestions displayed extra formatting characters instead of plain text.

---

### One-click email setup with an active receipt rule set

Fixed an issue where one-click email setup could stop working when an Amazon Connect email receipt rule set was active.

---
