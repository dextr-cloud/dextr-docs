---
title: "v2.8.0"
excerpt_separator: "<!--more-->"
collection: release_notes
permalink: /:categories/:title/
date: 2026-10-27T00:00:00.000Z
layout: single
toc: true
toc_sticky: true
categories:
- Release Notes
sidebar:
nav: "docs"
---

## ConnectPath Release Notes, October 27th 2026

## New and Improved

---

### PDF attachments in SMS conversations

PDF attachments in SMS conversations now display correctly.

---

### Unset permissions on newly onboarded instances

Newly onboarded instances now start with unset permissions turned off, so access is only granted when an admin explicitly enables it.

---

### Activity Notes timestamps

CS0037205
Timestamps on Activity Notes now match the instance’s time zone.

---

### Guided Flow tab on voice contacts

The Guided Flow tab now stays in place on a voice contact after switching between tabs on task or chat contacts.

---

### Chime meeting mute before joining

In Chime meetings, participants who mute themselves before joining now remain muted when they enter.

---



## Fixes

---

### Total talk time for agent-to-agent calls

Total talk time is now reported correctly for agent-to-agent calls.

---

### Footer queues in the disaster recovery environment

Resolved an issue where the footer did not display queues when connected through the disaster recovery environment.

---

### Agent-to-agent chat panel while scrolling

Resolved an issue where the agent-to-agent chat panel displayed a copy of the last visited page when scrolled down.

---

### Directory total record count

The Directory total record count now updates correctly when entries are created and deleted.

---

### Notes loading on a new contact

CS0046127
Notes once again load automatically when an agent accepts a new contact.

---

### Missed calls in Activity Search

CS0047182
Missed calls once again appear in Activity Search.

---

### Preset searches and the Keyword Search bar

Preset searches in Activity Search once again fill in the Keyword Search bar.

---

### Keyword Search query results

Resolved an issue where some Keyword Search queries in Activity Search did not return the expected results.

---

### Blank Contact Details on new instances

Resolved an issue where Contact Details could appear blank for some newly set up instances.

---

### Agent Performance view by permission group

Agent Performance now shows the same view to all users in the same permission group.

---

### Gryphon agents after outbound after-call work

When the Gryphon integration is enabled, agents now return to Available after completing after-call work on an outbound call.

---

### Outreach dialer repeats, pauses, and retries

The Outreach dialer no longer repeats a call that was already placed, now honors pauses, and retries failed updates.

---
