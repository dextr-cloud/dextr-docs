---
title: "v1.10.0"
excerpt_separator: "<!--more-->"
collection: release_notes
permalink: /:categories/:title/
date: 2024-06-25
layout: single
toc: true
toc_sticky: true
categories:
- Release Notes
sidebar:
nav: "docs"
---

## ConnectPath Release Notes, June 2024

### Breaking Changes

----
 
### Major Features

----
 
### Supporting Features

----

### Add a feature where a QuickSight dashboard can be printed to a PDF

HAR-6980
A feature has been added in which a QuickSight dashboard can be printed to a PDF, in addition to the analysis contained within the QuickSight dashboard being individually exportable to CSV.

----

### Add a feature where a user can access Amazon Connect Quick Responses
HAR-4501
A feature has been added in which a user can access Amazon Connect Quick Responses when responding to a customer chat contact.
----

### Add a feature where a user can pause/resume tasks
HAR-4652
A feature has been added in which a user can pause/resume tasks. This is useful for activities that may require longer responses to resolution.
----

### Add a feature where a user can reply to an E-Mail using a different from address
HAR-7668
CS0020170
HAR-8215
CS0020170
A feature has been added in which a user can reply to an E-Mail using a different from address. This feature will be released in 1.10 via a gate.
----

### Add a feature where a user can transfer, using a Quick Connect, an Omnichannel Task
HAR-4083
CS0019442
HAR-8166
CS0019442
A feature has been added in which a user can transfer, using a Quick Connect, an Omnichannel Task.  This feature will be released in 1.10 via a gate.
----

### Add a feature where an existing Kinesis Stream can be used when deploying the Datalake integration
HAR-6700
A feature has been added in which an existing Kinesis Stream can be used when deploying the Datalake integration. This avoids the current manual process of recreating the Kinesis Firehost for an existing Kinesis Stream.
----

### Add a feature where an expired task can recreated after expiration
HAR-6708
A feature has been added in which an expired task can recreated after expiration. This avoids the 7 day expiration of Tasks due to an Amazon Connect limitation.
----

### Add a feature where Average Hold Time is available in legacy historical reports
HAR-6679
CS0018161
A feature has been added in which the Average Hold Time is available in legacy historical reports.
----

### Add a feature where Historical Reporting V2 agent event view exposes related contacts
HAR-7384
A feature has been added in which the Historical Reporting V2 agent event view exposes related contacts, so that agent events can be correlated to contacts.
----

### Add a feature where Historical Reporting V2 updates can be performed without a release
HAR-7501
HAR-8259
A feature has been added in which Historical Reporting V2 updates can be performed without a release. This allows revisions to the ConnectPath published QuickSight dashboards to be made available for customer consumption more rapidly.
----

### Add a feature where multi-level dispositions are mandatory and cannot be cancelled
HAR-6532
CS0017801
A feature has been added in which multi-level dispositions are mandatory and cannot be cancelled. This is introduced as an instance-wide setting that is disabled by default.
----

### Add a feature where new partners are available for selection during the instance onboarding process
HAR-6686
A feature has been added in which new partners are available for selection during the instance onboarding process.
----

### Add a feature where the ConnectPath defined Timezone is used to calculate timezone offsets
HAR-4602
A feature has been added in which the ConnectPath defined Timezone is used to calculate timezone offsets. Previously the local time and timezone of the browser would be used, inconsistent with other parts of ConnectPath, such as Activity Search.

### Defects

----
### Correct a behavior where a contacts detail may not be displayed when selecting it from activity search
HAR-6552
CS0017469,CS0017443,CS0018628
A defect has been corrected where a contacts detail may not be displayed when selecting it from activity search.
----
### Correct a behavior where a deleted user is still displayed in the team status drawer
HAR-5974
CS0016041, CS18244
A defect has been corrected where a deleted user is still displayed in the team status drawer.
----
### Correct a behavior where AHT does not match between Connect and ConnectPath
HAR-7301
CS0018938; CS0019622
A defect has been corrected where AHT does not match between Connect and ConnectPath.
----
### Correct a behavior where an error message is erroneously displayed to a user completing a multi-tier disposition
HAR-5094
CS0016641
A defect has been corrected where an error message is erroneously displayed to a user completing a multi-tier disposition that does not require all three tiers to be completed.
----
### Correct a behavior where blind/cold transfer fails if an agent is being monitored
HAR-7969
CS0012716
A defect has been corrected where a blind/cold transfer fails if an agent is being monitored.
----
### Correct a behavior where certain characters present in the Bedrock API response for Smart Replies may not be parsed by ConnectPath
HAR-4614
A defect has been corrected where certain characters present in the Bedrock API response for Smart Replies may not be parsed by ConnectPath.
----
### Correct a behavior where clicking a linked contact in the activity detail does not take the user to said contact
HAR-7181
CS0019173
A defect has been corrected where clicking a linked contact in the activity detail does not take the user to said contact.
----
### Correct a behavior where CRM integrations cannot be saved and/or updated
HAR-6809
CS0018152
A defect has been corrected where CRM integrations cannot be saved and/or updated.
----
### Correct a behavior where deleting a skill in queue management will result in no skills being displayed for related agents
HAR-4096
A defect has been corrected where deleting a skill in queue management will result in no skills being displayed for related agents.
----
### Correct a behavior where Guided Flows do not clear when a contact is cleared
HAR-7297
CS0019459
A defect has been corrected where Guided Flows do not clear when a contact is cleared.
----
### Correct a behavior where Guided Flows loads slowly when using Dark Mode
HAR-7752
CS0020173
A defect has been corrected where Guided Flows loads slowly when using Dark Mode/.
----
### Correct a behavior where in-line history for SMS messages is not displayed in the event of an agent originated outbound SMS
HAR-6755
CS0016627
A defect has been corrected where in-line history for SMS messages is not displayed in the event of an agent originated outbound SMS.
----
### Correct a behavior where outbound messages cannot be enabled under instance settings
HAR-4878
A defect has been corrected where outbound messages cannot be enabled under instance settings.
----
### Correct a behavior where queue management restoration may fail if the routing profile count is different than the backup's
HAR-4386
A defect has been corrected where restoration in queue management  may fail if the routing profile count is different than the backup's.
----
### Correct a behavior where the first incoming message from a customer, for an agent initiated SMS creates a new Task
HAR-7837
HAR-7962
CS0020455
A defect has been corrected where first incoming message from a customer, for an agent initiated SMS creates a new Task. This was previously released as a region-specific Hotfix after 1.9 and is now being deployed across all regions.
----
### Correct a behavior where the first message in an agent to agent chat is missed
HAR-7398
CS0019607
A defect has been corrected where the first message in an agent to agent chat is missed.
----
### Correct a behavior where using Amazon Q/Wisdom within ConnectPath results in other tabs being removed
HAR-7154
CS0019109
A defect has been corrected where Amazon Q/Wisdom within ConnectPath results in other tabs being removed.
----
### Correct a behavior where whisper coaching may fail
HAR-8227
A defect has been corrected where whisper coaching may fail.
----
### Correct a behavior where, upon transferring a Chat to another agent, the agent receiving the transferred chat is not able to see the current conversation history
HAR-6869
CS0018621
HAR-7458
A defect has been corrected where upon transferring a Chat to another agent, the agent receiving the transferred chat is not able to see the current conversation history. We now retrieve the full conversation history for the given customer name.
----
### Correct a behavior where, when Amazon Q/Wisdom is in use a memory leak may be experienced in ConnectPath
HAR-6558

A defect has been corrected where, when Amazon Q/Wisdom is in use a memory leak may be experienced in ConnectPath.