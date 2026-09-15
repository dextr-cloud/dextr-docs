---
title: "v2.5.0"
excerpt_separator: "<!--more-->"
collection: release_notes
permalink: /:categories/:title/
date: 2026-09-15T00:00:00.000Z
layout: single
toc: true
toc_sticky: true
categories:
- Release Notes
sidebar:
nav: "docs"
---

## ConnectPath Release Notes, September 15th 2026

## Reminders

---

### Legacy Historical Reporting and Legacy Agent Activity deprecation

Legacy Historical Reporting and Legacy Agent Activity are being deprecated and will no longer be available as of the first release in Jan 2027.

---



## New and Improved

---

### Persistent transcript sort order

CS0043560
The sort order you set for transcripts now stays applied instead of resetting.

---

### Improved dashboard multi-select queues

CS0045639
Improved dashboard multi-select queues functionality when selecting more than 2 queues.

---



## Fixes

---

### Dynamics frames launched from ConnectPath now load reliably

CS0041405
Dynamics frames launched from ConnectPath now load reliably every time.

---

### Gryphon AI “Always Pass” path did not return the agent to Available

CS0044414
Fixed an issue where the Gryphon AI “Always Pass” path didn’t return the agent to an Available status.

---

### User creation reported success when the AWS quota was exceeded

CS0044548
Resolved a scenario where ConnectPath reported success when user creation failed because the AWS quota for maximum users had been exceeded.

---

### Chime video call screen-share and microphone controls

Resolved follow-up issues with Chime video calls, including inverted screen-share controls and the microphone toggle.

---

### Reset Filters button on the Home Screen

Fixed the Reset Filters button on the Home Screen so it correctly refreshes the dashboard after using multi-select filters.

---

### Reply-All no longer adds the receiving address to recipients

Using Reply-All to an email no longer adds the receiving email address to the recipients of the reply.

---

### ConnectPath Management API for users and directory entries

Resolved issues with the API interface for managing users and directory entries via the [ConnectPath Management API](https://docs.dextr.cloud/api/).

---

### Heartbeat-loss recovery

CS0045291
Improved the recovery process for brief heartbeat-loss events that previously caused the screen to freeze for an extended period of time.

---

### Notes automatically load when starting a new contact

CS0046127
Notes now automatically load again when starting a new contact.

---
