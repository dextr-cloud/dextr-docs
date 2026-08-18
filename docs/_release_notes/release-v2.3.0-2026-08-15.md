---
title: "v2.3.0"
excerpt_separator: "<!--more-->"
collection: release_notes
permalink: /:categories/:title/
date: 2026-08-15T00:00:00.000Z
layout: single
toc: true
toc_sticky: true
categories:
- Release Notes
sidebar:
nav: "docs"
---

## ConnectPath Release Notes, August 15th 2026

## New and Improved

---

### Improved Dark Mode reliability

Resolved multiple Dark Mode rendering issues, including missing labels for the “Mandatory Dispositions” and “Allow Custom Input” toggles on the Instance Details page, and the customer phone number/contact endpoint not displaying on the Accept Contact modal.

---

### Agent Performance dashboard sorting now applies to the full list

CS0045105
Sorting the Agent Performance dashboard now sorts all agents, rather than only the currently displayed page.

---



## Fixes

---

### Secondary audio/ringtone device setting reverting to default

CS0033864
Fixed an issue where a user's secondary ringtone output device would revert to the default device after logging out and clearing browser data.

---

### Unrelated historical emails appearing in new email conversations

CS0036095
Fixed an issue where agents receiving a new email would also see unrelated historical emails loading into the same conversation card.

---

### Login screen prefilling incorrect Instance Alias

Fixed an issue where the login screen could prefill the Instance Alias field with a full hostname instead of the short instance alias after logout, which caused login failures.

---

### ConnectPath User/Directory APIs returning server errors

Fixed 500 errors affecting requests to the ConnectPath User and Directory APIs.

---

### Permissions not fully loaded before initial page redirect

Fixed a timing issue where the application could redirect a user to the dashboard before their permissions had fully loaded.

---

### Permission checks defaulting to allow access before security rules load

Tightened permission checks so pages are not accessible by default while security-profile rules are still loading.

---

### Inbound email replies not appearing in real time

Fixed an issue where a customer's inbound email reply would not appear in the active conversation until the page was manually refreshed.

---

### WebSocket connection health check failure after page reload

Fixed an issue where a background connection-health check could fail after a page reload, disrupting automatic reconnection.

---

### Dashboard Contacts chart not updating in real time after an outbound call

Fixed an issue where the Contacts time-series chart on the Home Dashboard would remain stale for several minutes after a call, even though other dashboard widgets updated correctly, requiring a manual page refresh.

---

### Unable to deploy V2 Datalake for Historical Reporting

Resolved a deployment failure that prevented provisioning of the V2 Historical Reporting Datalake.

---
