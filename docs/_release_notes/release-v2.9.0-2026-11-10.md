---
title: "v2.9.0"
excerpt_separator: "<!--more-->"
collection: release_notes
permalink: /:categories/:title/
date: 2026-11-10T00:00:00.000Z
layout: single
toc: true
toc_sticky: true
categories:
- Release Notes
sidebar:
nav: "docs"
---

## ConnectPath Release Notes, November 10th 2026

## New and Improved

---

### Introducing SwarmControl

Introducing SwarmControl, a new page where supervisors can monitor AI voice and chat agent conversations as they happen, alongside a view-only list of contacts handled by human agents. Administrators can turn it on from Settings and choose who has access with new permissions.

To see more, visit [SwarmControl for supervisors](https://connectpath.cx/platform/supervisors/swarmcontrol/).

---

### Enable Live Lens from Integrations

You can now enable the Live Lens integration directly from its card in Integrations. Once it is enabled and permissions are configured, the Live Lens AI Summary and Transcript tabs appear.

---

### Transferred To Endpoint column in Activity Search exports

CS0045925
Activity Search exports now include a Transferred To Endpoint column.

---

### More records per Activity Search

Activity Search can now return more records per search.

---

### Updated deprecation notice for legacy reports and search

Updated the deprecation notice for Legacy Historical Reports and Legacy Activity Search to reflect revised dates.

---

### Refreshed login page

The ConnectPath login page has a refreshed design.

---

### Passwordless ConnectPath Admin sign-in

The ConnectPath Admin portal no longer uses passwords. Administrators now sign in by verifying access through their own AWS account, using a one-time email code until the AWS account is connected. The setup command confirms you are in the correct AWS account before making any changes.

---

### Separate email sections on the Admin profile

The ConnectPath Admin profile now keeps business contact emails and notification emails in separate sections.

---

### Updated Admin portal navigation

The ConnectPath Admin portal has an updated left-hand navigation menu.

---

### Upgrade/Install tab for add-on integrations

Add-on integrations are now installed and uninstalled from the new Upgrade/Install tab in the ConnectPath Admin portal instead of from within ConnectPath. Each integration has a setup guide, installs retry automatically, and uninstalls warn when they would affect related integrations.

---

### QuickSight uninstall and integration setup guides

Uninstalling QuickSight now also removes the admin user it created, and clicking anywhere on an integration opens its setup guide.

---

### Updated Chime audio card

The Chime audio card has an updated icon and a clearer description: it records agent-to-agent calls as Amazon Connect contact records.

---

### Agent Performance and Team Status durations

Agent Performance and Team Status now show more accurate durations and statuses. Timers stay consistent when an agent receives a new contact, and each channel's status is shown separately.

---

### Faster ConnectPath sign-in

Signing in to ConnectPath is now faster, with unneeded page loads removed.

---

### Amazon Connect instances with more than 1,000 users

ConnectPath now supports Amazon Connect instances with more than 1,000 users.

---

## Fixes

---

### Chat transcripts in Activity Search

CS0047218
Resolved an issue where chat transcripts were not available in Activity Search.

---

### Activity Search by queue keyword

Resolved an issue where searching Activity Search by queue keyword returned no results.

---

### Agent duration in Agent Performance

CS0047495
Resolved an issue where some agents did not show a duration in Agent Performance.

---

### Talk time on short agent-to-agent calls

Resolved an issue where short agent-to-agent calls could show zero or incorrect talk time.

---

### Metrics data saved for reporting

CS0047439
Resolved an issue where some metrics data was not being saved for reporting.

---

### Real-time dashboard refresh

Real-time dashboards now refresh every minute as expected, instead of sometimes every two minutes.

---

### Historical Reports V2 permissions

Historical Reports V2 now correctly respects each user's reporting permissions.

---

### Assigned security profile at sign-in

Resolved an issue where a user could be signed in with the default security profile when their assigned profile could not be loaded.

---

### Duplicate login pop-up windows

Resolved an issue where two login pop-up windows could open at the same time.

---

### Softphone with saved connection settings

Resolved an issue where the softphone could fail to load when saved connection settings were in use.

---

### Browser notifications after sign-in

Resolved an issue that could prevent browser notifications from being set up after signing in.

---

### Setting an Offline agent to Offline

Resolved an error when a supervisor set an agent who was already Offline to Offline.

---

### Queues and routing profiles on large instances

Resolved an issue loading queues and routing profiles on very large instances.

---

### Post Call Survey action buttons

In Settings > Post Call Survey, long question text no longer pushes the Edit, Duplicate, and Delete buttons off screen.

---

### Video call Copy URL confirmation

During a video call, the "Copy URL" confirmation now appears only once per click instead of repeating on its own.

---

### Live Lens transcript while waiting in queue

Live Lens now shows the voice transcript while a caller is waiting in queue, before an agent connects, when Contact Lens is configured for IVR interactions.

---

### Live Lens after-call work when no analysis is available

Resolved an issue where Live Lens could leave a contact in after-call work waiting for up to 45 minutes when no Contact Lens analysis was available.

---

### Proactive Outbound Engagement dialer

Resolved issues where the Proactive Outbound Engagement dialer could repeat a call it had already placed, ignore a pause, or miss a failed notification to an outside system.

---

### Admin emails for support access changes

The ConnectPath Admin portal now sends an email when standard or expanded support access is granted, or when expanded support access is revoked.

---

### Metrics gap after midnight

Resolved an issue that could cause a gap in metrics data just after midnight.

---

### Activity notes past the first page

Resolved an issue where activity notes could fail to load past the first page.

---
