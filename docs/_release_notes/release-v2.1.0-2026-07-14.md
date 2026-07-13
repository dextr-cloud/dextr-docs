---
title: "v2.1.0"
excerpt_separator: "<!--more-->"
collection: release_notes
permalink: /:categories/:title/
date: 2026-07-14
layout: single
toc: true
toc_sticky: true
categories:
- Release Notes
sidebar:
nav: "docs"
---

## ConnectPath Release Notes, July 2026

We will be deploying release 2.1 on July 14th at 5am EDT. The release will be available in the beta environment (https://beta.connectpath.cx) starting on July 7th (some items may not be available until the 8th). As always, we highly recommend and appreciate it if you could have some users take production calls from the Beta environment to ensure there are no issues prior to the release.

Included in this release are the following items:

## Major Updates

----

### Live Lens
CS0030948, CS0031591, CS0042544
With Live Lens you can enable the Real Time Contact Lens Summarization, which will show the AI summarization and transcript on the Contact Details Page shortly after the agent enters ACW.

**Note:** Live Lens enablement requires a ticket be opened requesting the feature be activated.

----

## Features

----

### Add a feature in which the dashboard filters are now multi-select drop downs
CS0018976, CS0011950, CS0028640, CS0032270
The dashboard filters are now multi-select drop downs that allow you to select multiple items that you would like to view in the dashboard (instead of the one or all options previously available).

----

### Add a feature in which the disposition pop-up displays on callback calls
CS0041669
The disposition pop-up now displays on callback calls, letting agents capture dispositions for callbacks the same way they do for inbound and outbound contacts.

----

### Add a feature in which thread inclusion is re-enabled for follow-up emails from the Activity Record
CS0044397
Re-enable thread inclusion when performing a follow-up email from the Activity Record for a previous Contact.

----

### Add a feature in which URLs included in a chat contact initiation are clickable
CS004160
URLs included in the initiation of a chat contact are now clickable, so agents can open links shared at the start of a chat directly.

----

### Add a feature in which Instance Admin user permissions are updated
Updated the Instance Admin user permissions to ensure it has the ability to adjust settings and configurations.

----

## Defects

----

### Correct a behavior in which guided flows do not load as expected on occasion
CS0040859
A defect has been corrected where guided flows do not load as expected on occasion.

----

### Correct a behavior in which sending email using O365 OAuth produces an error
A defect has been corrected where sending email using the O365 OAuth would produce an error on sending.

----

### Correct a behavior in which configuring the Pinpoint (End User Messaging) Integration would fail
A defect has been corrected where configuring the Pinpoint (End User Messaging) Integration would fail.

----

### Correct a behavior in which the status bar does not display ACW when the Contact Status Bar option is disabled
CS0044226
A defect has been corrected where, when the "Contact Status Bar" option in Instance details is disabled, the status bar would not display the user as being in ACW correctly.

----

### Correct a behavior in which the Header Logo option prevented seeing Status Bar Items in Light mode
A defect has been corrected where the "Header Logo" option was added back into Instance details, resulting in the inability to see Status Bar Items when set to "Light mode". This setting is being removed as intended and default settings will be used again.

----

### Correct a behavior in which Multiple Outbound Queues could prevent non-admin users from selecting an outbound queue
CS0043962
A defect has been corrected where using the Multiple Outbound Queues feature could prevent users with a non-admin permission group from being able to select an outbound queue.

----
