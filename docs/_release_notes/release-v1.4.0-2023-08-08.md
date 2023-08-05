---
title: "v1.4.0"
excerpt_separator: "<!--more-->"
collection: release_notes
permalink: /:categories/:title/
date: 2023-08-08
layout: single
toc: true
toc_sticky: true
categories:
- Release Notes
sidebar:
nav: "docs"
---

## ConnectPath Release Notes, August 2023

### BREAKING CHANGE: Add a feature in which the selection of "All" queues in Adhoc/Holiday Closures will be treated as the literal all
HAR-2801

A feature has been added in which the selection of "All" queues in Adhoc/Holiday Closures will be treated as the literal all, in other words, all queues past, present and future. Prior to this release All selected all queues that existed at the time All was selected and the schedule either created or updated. In the case of multiple, overlapping schedules in which All is selected, the oldest (creation date) schedule will be used. We refer to this as a breaking a breaking change as some customers may need to evaluate schedules where they previously selected "All" and ensure that all queues, current and future, should have the schedule applied and that no overlapping schedules exist as a result. For customers where All is not used, no changes are required/no impact is anticipated.

----
### POTENTIALLY BREAKING CHANGE: Correct a behavior in which users were not evidently being logged out after their session has expired
HAR-2861
A feature has been added in which users were not evidently being logged out after their session has expired, which could happen if a workstation sleeps or hibernates. In these events, we will take the user back to the login screen. If a user enters an invalid URL to ConnectPath, AND they are logged in, we will take them to the home screen. We refer to this as a potentially breaking change as previous to this release there may have been cases where a user was able to sleep or hibernate their workstation and resume their ConnectPath session without logging in again.

----
### Add a feature in which a CRM Integration can be tested without having to create a contact
HAR-1716
HAR-3198
A feature has been added in which a CRM Integration can be tested without having to create a contact. Currently it will open Iframe and Tab in a model, but URL can be copied/pasted into a new Tab to validate new Tab functionality.

----
### Add a feature in which a newer Jabra SDK, in addition to an older Jabra SDK may be used by agent's to integrate their Jabra headsets to ConnectPath for the purposes of call control
HAR-2870
HAR-2979
A feature has been added in which a newer Jabra SDK, in addition to an older Jabra SDK may be used by agent's to integrate their Jabra headsets to ConnectPath for the purposes of call control.

----

### Add a feature in which a privileged user may, in addition to playing back audio and reviewing transcripts, also be able to see the recording of a user's desktop, using the same playback controls offered in ConnectPath for voice recordings
HAR-2964
HAR-3078


A feature has been added in which a privileged user may, in addition to playing back audio and reviewing transcripts, also be able to see the recording of a user's desktop, using the same playback controls offered in ConnectPath for voice recordings. Please read more about this feature here: https://docs.aws.amazon.com/connect/latest/adminguide/enable-sr.html.

----

### Add a feature in which a Webhook can be set as a default in the event that multiple Webhooks of the same type of defined
HAR-3070


A feature has been added in which a Webhook can be set as a default in the event that multiple Webhooks of the same type of defined. This default will be the one used when originating an SMS or E-Mail from ConnectPath.

----

### Add a feature in which Amazon Connect Cases will be made available on the Engage page, similar to Customer Profiles
HAR-3101


A feature has been added in which Amazon Connect Cases will be made available on the Engage page, similar to Customer Profiles, if Cases is configured for the instance and the user's security profile provides access to Cases. This feature is directly supported by the Amazon Connect Streams SDK and currently does not support Case creation, which will be made available in a future release. Please read more about this feature here: https://docs.aws.amazon.com/connect/latest/adminguide/cases.html.

----

### Add a feature in which an administrator may review previously made changes under queue management
HAR-2482
HAR-2950
HAR-973


A feature has been added in which an administrator may review previously made changes under queue management.

----

### Add a feature in which an administrator may update their ConnectPath instances CloudFormation stack to take advantage of new features within ConnectPath that require changes to the AWS services deployed within the customer's AWS account
HAR-2007
HAR-2267
HAR-2398
HAR-3090
HAR-3091


A feature has been added in which an administrator may update their ConnectPath instances CloudFormation stack to take advantage of new features within ConnectPath that require changes to the AWS services deployed within the customer's AWS account. This change will take effect for instances onboarded after the release, and when an update is available, it will be displayed in the Admin console. Existing instances may be manually updated by CloudHesive.

----

### Add a feature in which ConnectPath will attempt to access Twilio-hosted media via basic auth in support of breaking changes introduced by Twilio
HAR-2899
HAR-3095
HAR-3127


A feature has been added in which ConnectPath will attempt to access Twilio-hosted media via basic auth in support of breaking changes introduced by Twilio.

----

### Add a feature in which CRM Integrations have been predefined for common third party providers
HAR-2112
HAR-2880
HAR-3059


A feature has been added in which CRM Integrations have been predefined for common third party providers, including Service Now and Salesforce. Currently inbound voice contacts are supported and the tab does not persist beyond the contact life.

----

### Add a feature in which general administrator/user quality of life improvements have been made around the CRM Integration feature
HAR-1446


A feature has been added in which general administrator/user quality of life improvements have been made around the CRM Integration feature.

----

### Add a feature in which offline agents may be hidden from the home screen of ConnectPath
HAR-1968


A feature has been added in which offline agents may be hidden from the home screen of ConnectPath. Offline agents may appear if a user logs in and logs out in the current day and this filter is intended to hide those users, when they are in an offline state.

----

### Add a feature in which scripts may utilize attributes for the purposes of substitution
HAR-2113


A feature has been added in which scripts may utilize attributes for the purposes of substitution, reducing the burden on an agent to manually change fields in scripts that require being changed. Substitution will use the same nomenclature as the CRM Integration (e.g. {{ATTRIBUTE}} and if an attribute value is not provided, the user will be prompted at the time of selection. An open issue exists where Scripts do not work for E-Mail.

----

### Add a feature in which SLA 10 (a custom SLA) is available in home screen and persisted in database
HAR-3080


A feature has been added in which SLA 10 (a custom SLA) is available in home screen and persisted in database (for future reporting purposes).

----

### Add a feature in which, in the new activity search, filters will persist between page loads (e.g. if you drill into a specific activity and go back, the filters will remain applied)
HAR-3074
HAR-3232


A feature has been added in which, in the new activity search, filters will persist between page loads (e.g. if you drill into a specific activity and go back, the filters will remain applied).

----

### Add a feature in which, in the new activity search, results can be grouped by a specific field
HAR-1594


A feature has been added in which, in the new activity search, results can be grouped by a specific field.

----

### Add a feature in which, once configured, Microsoft Teams users will be displayed in the ConnectPath Team Status Drawer
HAR-2381
HAR-2382
HAR-2384
HAR-2577
HAR-2613
HAR-2799
HAR-2905
HAR-2929
HAR-2931
HAR-2932
HAR-2933
HAR-2934
HAR-2942
HAR-2987
HAR-3082
HAR-3116
HAR-3120
HAR-3123
HAR-3124
HAR-3133
HAR-3134
HAR-3164
HAR-3165
HAR-3167
HAR-3168
HAR-3176
HAR-3201


A feature has been added in which, once configured, Microsoft Teams users will be displayed in the ConnectPath Team Status Drawer. This allows ConnectPath users to call those Teams users (using the e.164 number) through ConnectPath as an outbound, external call as well as see those user's statuses as presented in Teams. Further, if the ConnectPath user also uses Teams, statuses will be synchronized between ConnectPath and Teams so that if a user is in a meeting in Teams (for example) they will be unavailable to receive a contact in ConnectPath and vice versa. Please read more about this feature here: https://docs.dextr.cloud/

----

### Add a feature in which, when a queue management is loading routing profiles, move/copy actions are blocked
HAR-2868


A feature has been added in which, when a queue management is loading routing profiles, move/copy actions are blocked.

----

### Add a feature that will delete Quick Connects associated with a user when their user is deleted
HAR-2538


A feature has been added in which Quick Connects associated with a user will be deleted when their user is deleted.

----

### Add a feature where, if upon onboarding an additional Amazon Connect instance to ConnectPath, that instance is in a different AWS account, the administrator performing the onboarding will be prompted to select which AWS account the ConnectPath subscription usage should be billed to.
HAR-1546
HAR-2971
HAR-2976
HAR-3079


A feature has been added where, if upon onboarding an additional Amazon Connect instance to ConnectPath, that instance is in a different AWS account, the administrator performing the onboarding will be prompted to select which AWS account the ConnectPath subscription usage should be billed to. Note that currently this identifier is internal to AWS and a case will need to be raised with CloudHesive to provide the associted AWS Account ID or other identifier.

----

### Add a feature which, in addition to creating a CRM Integration that can be loaded as an Iframe in ConnectPath, the integration can instead be opened in a new tab, bypassing certain limitations enforced by third party providers
HAR-2110

A defect has been corrected in which, in addition to creating a CRM Integration that can be loaded as an Iframe in ConnectPath, the integration can instead be opened in a new tab, bypassing certain limitations enforced by third party providers.
----

### Correct a behavior in which a certain permission needed to be reset for it to take effect
HAR-3045

A defect has been corrected in which a certain permission needed to be reset for it to take effect.
----

### Correct a behavior in which a first time customer may see a partially rendered or blank screen during the onboarding process
HAR-3103

A defect has been corrected in which a first time customer may see a partially rendered or blank screen during the onboarding process.
----

### Correct a behavior in which a MessageMedia webhook could not be created or updated
HAR-3028

A defect has been corrected in which a MessageMedia webhook could not be created or updated.
----

### Correct a behavior in which a user may be stuck in "Connected" after handling a Task based contact
HAR-3193

A defect has been corrected in which a user may be stuck in "Connected" after handling a Task based contact.
----

### Correct a behavior in which an E-Mail conversation cannot be declined
HAR-3177

A defect has been corrected in which an E-Mail conversation cannot be declined.
----

### Correct a behavior in which an SMS conversation cannot be declined
HAR-3192

A defect has been corrected in which an SMS conversation cannot be declined.
----

### Correct a behavior in which certain metrics, under queue management, may be incorrect
HAR-2985

A defect has been corrected in which certain metrics, under queue management, may be incorrect.
----

### Correct a behavior in which in-line attachments are not stored as external attachments
HAR-3189

A defect has been corrected in which in-line attachments are not stored as external attachments.
----

### Correct a behavior in which MOS score is not displayed in Activity Search
HAR-2825

A defect has been corrected in which MOS score is not displayed in Activity Search.
----

### Correct a behavior in which self service routing profile management duplicates names
HAR-3055

A defect has been corrected in which self service routing profile management duplicates names.
----

### Correct a behavior in which silent monitoring or whisper coaching of an agent while on a multi party call will cause the agent status to get "stuck"
HAR-1831

A defect has been corrected in which silent monitoring or whisper coaching of an agent while on a multi party call will cause the agent status to get "stuck".
----

### Correct a behavior in which silent monitoring, whisper coaching or agent to agent calling fails as a result of a user's network connection changing
HAR-2606
HAR-1542
HAR-2394
HAR-2839

A defect has been corrected in which silent monitoring, whisper coaching or agent to agent calling fails as a result of a user's network connection changing. This may happen when moving from wired to wireless, connecting to a VPN or if Internet access is momentarily disrupted.
----

### Correct a behavior in which the agent name was displayed instead of the queue name in the case of a transfer
HAR-2998

A defect has been corrected in which the agent name was displayed instead of the queue name in the case of a transfer. There is one remaining defect in which, in the case of an agent transferring to another agent the originating agent will be displayed in both the queue and agent columns.
----

### Correct a behavior in which the emergency access user may have been inadvertently disabled during sync of users from Connect to ConnectPath
HAR-2944
HAR-2945

A defect has been corrected in which the emergency access user may have been inadvertently disabled during sync of users from Connect to ConnectPath.
----

### Correct a behavior in which, upon ending a call with a muted microphone the microphone will remain muted
HAR-3005

A defect has been corrected in which, upon ending a call with a muted microphone the microphone will remain muted. Behavior is to unmute microphone before new call is started.
----

### Correct a behavior in which, when the native CCP is enabled, leaving the Engage page and reentering it results in an error
HAR-2884
HAR-3032

A defect has been corrected in which, when the native CCP is enabled, leaving the Engage page and reentering it results in an error.
----

### Correct a behavior where initiating an SMS message but never sending it follows the end message flow
HAR-2547

A defect has been corrected where initiating an SMS message but never sending it follows the end message flow.
----

### Corrected a behavior in which different screen resolutions, screen zoom or browser zoom may result in the User Info Modal covering other screens in ConnectPath and/or truncating information within the Modal
HAR-3048
A defect has been corrected in which different screen resolutions, screen zoom or browser zoom may result in the User Info Modal covering other screens in ConnectPath and/or truncating information within the Modal.
----

### Corrected a behavior in which the date picker in the new activity search would not work
HAR-2988
A defect has been corrected in which the date picker in the new activity search would not work.
----

### Remove a feature in which users were previously able to create Fax Webhooks with Twilio
HAR-2900
A feature previously added to ConnectPath, in which users were previously able to create Fax Webhooks with Twilio has been removed. Twilio has deprecated this capability and as such we have removed it from ConnectPath. As an alternative, Fax to E-Mail providers may be used and integrated with ConnectPath through E-Mail Webhooks.