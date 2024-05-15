---
title: "v1.9.0"
excerpt_separator: "<!--more-->"
collection: release_notes
permalink: /:categories/:title/
date: 2024-05-14
layout: single
toc: true
toc_sticky: true
categories:
- Release Notes
sidebar:
nav: "docs"
---

## ConnectPath Release Notes, May 2024

### Breaking Changes

----
### Add a feature where the Legacy (Old) Activity Search will be hidden by default
HAR-4055
A feature has been added in which the Legacy (Old) Activity Search will be hidden by default. To unhide it a new permission will need to be set.
 
### Major Features
 

----
### Add a feature in the ConnectPath Datalake and Analytics module where a Dynamic Interval Filter has been added to Agent Event Dataset, duplicating the same as the CTR Dataset, the CTR view has been updated to eliminate duplicate records, and a Agent Event View has been created that exposes Contact State
HAR-7237
A feature has been added in which, in the ConnectPath Datalake and Analytics module where a Dynamic Interval Filter has been added to Agent Event Dataset, duplicating the same as the CTR Dataset, the CTR view has been updated to eliminate duplicate records, and a Agent Event View has been created that exposes Contact State.

----
### Add a feature in the ConnectPath Datalake and Analytics module where administrators may switch from a single read only user to access Quicksight and instead move to capacity based pricing
HAR-6963
A feature has been added in which, in the ConnectPath Datalake and Analytics module where administrators may switch from a single read only user to access Quicksight and instead move to capacity based pricing.

----
### Add a feature in the ConnectPath Datalake and Analytics module where Dashboards no longer need to be manually deployed and are stored in DynamoDB versus Application Code allowing customers to simply refresh the integration to get new Dashboards
HAR-6452
A feature has been added in which, in the ConnectPath Datalake and Analytics module where Dashboards no longer need to be manually deployed and are stored in DynamoDB versus Application Code allowing customers to simply refresh the integration to get new Dashboards.

----
### Add a feature in the ConnectPath Datalake and Analytics module where data is refreshed every 15 minutes
HAR-6698
A feature has been added in which, in the ConnectPath Datalake and Analytics module where data is refreshed every 15 minutes.

----
### Add a feature in the ConnectPath Datalake and Analytics module where the default behavior of the Quicksight integration is to use a read only user for Quicksight versus require capacity based pricing
HAR-6705
A feature has been added in which, in the ConnectPath Datalake and Analytics module where the default behavior of the Quicksight integration is to use a read only user for Quicksight versus require capacity based pricing.

----
### Add a feature in the ConnectPath Datalake and Analytics module where views no longer need to be manually deployed and are stored in DynamoDB versus Application Code
HAR-7236
A feature has been added in which, in the ConnectPath Datalake and Analytics module where views no longer need to be manually deployed and are stored in DynamoDB versus Application Code.


### Supporting Features
 
 

----
### Add a feature where a default template may be utilized when originating a task in ConnectPath as well as support for updating the contents of a Task when checkboxes are present
HAR-4339
CS0014275
A feature has been added in which a default template may be utilized when originating a task in ConnectPath as well as support for updating the contents of a Task when checkboxes are present.

----
### Add a feature where a supervisor may barge into a chat between a customer and an agent, utilizing the native ConnectPath interface and the features available to it, such as history and in-line translation
HAR-4874
A feature has been added in which a supervisor may barge into a chat between a customer and an agent, utilizing the native ConnectPath interface and the features available to it, such as history and in-line translation.

----
### Add a feature where a user may be able to send or receive MMS content when Message Media is used as a provider
HAR-6964
HAR-7225
HAR-7357
HAR-7418
HAR-7538
A feature has been added in which a user may be able to send or receive MMS content when Message Media is used as a provider.

----
### Add a feature where agent and/or queue data without agents and/or queues assigned (e.g. N/A in the legacy reports) may be filtered out
HAR-5943
CS0016874
A feature has been added in which agent and/or queue data without agents and/or queues assigned (e.g. N/A in the legacy reports) may be filtered out.

----
### Add a feature where an SMS and/or E-Mail conversation may be originated while not in available state, taking into account the slots available to an agent based on their assigned routing profile's configuration
HAR-4348
HAR-4930
CS0016545
A feature has been added in which an SMS and/or E-Mail conversation may be originated while not in available state, taking into account the slots available to an agent based on their assigned routing profile's configuration.

----
### Add a feature where attaching/sending of E-Mails larger than 25 MB is blocked to avoid bounces from other E-Mail providers
HAR-3364
A feature has been added in which attaching/sending of E-Mails larger than 25 MB is blocked to avoid bounces from other E-Mail providers.


----
### Add a feature where the Home screen Agent Performance table has additional permission options that use the agent routing profile to determine queue membership and (optionally) display information for just that agent, queue or the entire instance
HAR-4378
cs0014604, CS0016472
A feature has been added in which the Home screen Agent Performance table has additional permission options that use the agent routing profile to determine queue membership and (optionally) display information for just that agent, queue or the entire instance. The queue filter has been synched to this table as well.

----
### Add a feature where the Home screen may be hidden via a permission
HAR-6687
A feature has been added in which the Home screen may be hidden via a permission. The home screen will continue to be displayed by default but the permission can be unset to hide it. If a user attempts to go to the home screen via direct URL, the user will be redirected to the Engage screen instead.

----
### Add a feature where the new activity search returns up to 10,000 records
HAR-3252
A feature has been added in which the new activity search returns up to 10,000 records.

----
### Add a feature where the storage and retrieval of omnichannel attachments is made more reliable
HAR-3274
HAR-4401
HAR-4717
HAR-4836
A feature has been added in which the storage and retrieval of omnichannel attachments is made more reliable.

----
### Add a feature where, for Connect instances using multi-party conferencing and early-media is disabled, cold/blind transfers complete immediately
HAR-2807
CS0012148
HAR-4204
A feature has been added in which, for Connect instances using multi-party conferencing and early-media is disabled, cold/blind transfers complete immediately.

### Defects
 

----
### Correct a behavior where a transfer may fail if multi-party conferencing is enabled and the agent performing the transfer is being monitored
HAR-3878
CS0012716
A defect has been corrected where a transfer may fail if multi-party conferencing is enabled and the agent performing the transfer is being monitored.

----
### Correct a behavior where a user's first and/or last name will not synchronize between Amazon Connect and ConnectPath when a SAML based instance is in use
HAR-5893
CS0013859
A defect has been corrected where a user's first and/or last name will not synchronize between Amazon Connect and ConnectPath when a SAML based instance is in use.

----
### Correct a behavior where abandoned contacts are missing queue details
HAR-6462
CS0017488
A defect has been corrected where abandoned contacts are missing queue details.

----
### Correct a behavior where agent status durations are reported incorrectly in legacy historical reports
HAR-2703
A defect has been corrected where agent status durations are reported incorrectly in legacy historical reports.

----
### Correct a behavior where certain attributes are not available for substitution in Scripts
HAR-6659
CS0018101
A defect has been corrected where certain attributes are not available for substitution in Scripts. This most often was encountered when Attributes were set in the Whisper flow for Chat channels.

----
### Correct a behavior where E-Mail replies do not maintain the original E-Mail's format
HAR-7016
CS0018843
A defect has been corrected where E-Mail replies do not maintain the original E-Mail's format.

----
### Correct a behavior where guided flows may be cut off based on screen resolution and/or zoom level
HAR-6537
CS0017870, CS0018201
A defect has been corrected where guided flows may be cut off based on screen resolution and/or zoom level.

----
### Correct a behavior where missed/rejected contacts display N/A for the endpoint, instead of the endpoint
HAR-6607
CS0016933
A defect has been corrected where missed/rejected contacts display N/A for the endpoint, instead of the endpoint.

----
### Correct a behavior where multi level dispositions may not be saved if autocomplete is used
HAR-6436
CS0017440
A defect has been corrected where multi level dispositions may not be saved if autocomplete is used.

----
### Correct a behavior where not all directory contacts are listed
HAR-7066
CS0018981
A defect has been corrected where not all directory contacts are listed.

----
### Correct a behavior where Omnichannel task state may desync between Amazon Connect and ConnectPath when certain conditions are met
HAR-4216
A defect has been corrected where Omnichannel task state may desync between Amazon Connect and ConnectPath when certain conditions are met.

----
### Correct a behavior where playback controls for screen recordings may be hidden based on resolution and/or zoom levels
HAR-6609
CS0017732
A defect has been corrected where playback controls for screen recordings may be hidden based on resolution and/or zoom levels.

----
### Correct a behavior where Queued Time has been relabeled to Total Queued Time to remove ambiguity
HAR-7423
CS0018775
A defect has been corrected where Queued Time has been relabeled to Total Queued Time to remove ambiguity.

----
### Correct a behavior where single tier dispositions are limited to 100 queues
HAR-6563
A defect has been corrected where single tier dispositions are limited to 100 queues.

----
### Correct a behavior where Task modals were not readable in Dark mode
HAR-4190
A defect has been corrected where Task modals were not readable in Dark mode.

----
### Correct a behavior where the ConnectPath timezone is not applied to the Home screen
HAR-2689
HAR-3866
HAR-4307
CS0014334, CS0015375
A defect has been corrected where the ConnectPath timezone is not applied to the Home screen.

----
### Correct a behavior where the Home Screen Agent Availability widget does not respect the queue filter
HAR-6520
CS0017356, CS0016482, CS0016941
A defect has been corrected where the Home Screen Agent Availability widget does not respect the queue filter.

----
### Correct a behavior where the modal was not properly activated when scripts using attribute substitution were invoked
HAR-6660
A defect has been corrected where the modal was not properly activated when scripts using attribute substitution were invoked.

----
### Correct a behavior where the scroll bar may be truncated in certain resolutions/zoom levels under settings, hiding Historical Reports V2 Permissions
HAR-6699
A defect has been corrected where the scroll bar may be truncated in certain resolutions/zoom levels under settings, hiding Historical Reports V2 Permissions.

----
### Correct a behavior where users are not deleted from ConnectPath
HAR-5093
CS0016748, CS007134
A defect has been corrected where users are not deleted from ConnectPath.
