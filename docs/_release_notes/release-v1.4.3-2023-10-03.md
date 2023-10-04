---
title: "v1.4.3"
excerpt_separator: "<!--more-->"
collection: release_notes
permalink: /:categories/:title/
date: 2023-10-03
layout: single
toc: true
toc_sticky: true
categories:
- Release Notes
sidebar:
nav: "docs"
---

## ConnectPath Release Notes, October 2023
 
Advanced Notice: With the December 2023 Release (v.1.6.0) there will be a few significant changes:
 
We will hide the old Activity Search

We will introduce a change in the login flow for ConnectPath users. This change in flow is a result of Google's [Privacy Sandbox](https://privacysandbox.com/open-web/#the-privacy-sandbox-timeline) initiative, in which Google Chrome has announced plans to block third-party cookies (that is, cookies passed between two top level domains). As ConnectPath uses the Amazon Connect CCP for authentication and the Amazon Connect CCP uses cookies for authentication the change will be implemented to work around this change to Google Chrome. After this change users will be prompted at first login and every 30 days to allow storage access to Cookies in Chrome which allows ConnectPath to continue using third party cookies. Additional communication will be sent out as we get closer to this release but customers can read more about it here: https://docs.aws.amazon.com/connect/latest/adminguide/admin-3pcookies.html

We are tracking an issue with Cold/Blind Transfers, where a workaround was added to ConnectPath in the May 2023 release, in which we wait for the called party to answer before completing the transfer. We understand this is hindering our customers and are working with AWS to address. As there is not estimation of when a permanent fix will be available, we are hopeful that we will be able to take advantage of that fix in this release and are including it here as a placeholder.

Prior Notice:

As a reminder to customers, with a previous release we have added support for customers to use the go.connectpath.cx domain instead of the go.dextrflex.com domain. While our intentions are not to immediately disable the go.dextrflex.com domain, we do anticipate at some point in the future we will aim to do so (with prior communication) and encourage our customers to make the changes to support that domain. These changes may include updating their identity provider relay state, updating their end users’ bookmarks, updating their firewall settings (more details can be found here https://docs.dextr.cloud/system-requirements/), as well as updating their CORS rules in any S3 buckets used by ConnectPath.
 
Specific to the October 2023 Release, the complete listing of defects and features can be found below:

----
### Add a feature in which a 120 second timer for non voice contacts will not be enforced, allowing those contacts to be ended before 120 seconds had elapsed. This timer was previously used to work around an Amazon Connect limitation that no longer exists
HAR-3054
HAR-3193
A feature has been added in which a 120 second timer for non voice contacts will not be enforced, allowing those contacts to be ended before 120 seconds had elapsed. This timer was previously used to work around an Amazon Connect limitation that no longer exists.
----
### Add a feature in which a default webhook may be specified for sending SMS or E-Mail in the case where multiple providers of the same type exist
HAR-3070
A feature has been added in which a default webhook may be specified for sending SMS or E-Mail in the case where multiple providers of the same type exist.
----
### Add a feature in which a users session duration is based on a client-side counter to align with the Amazon Connect session duration of 12 hours and to appropriately log a user out after that duration has expired
HAR-2537
HAR-3977
A feature has been added in which a users session duration is based on a client-side counter to align with the Amazon Connect session duration of 12 hours and to appropriately log a user out after that duration has expired.
----
### Add a feature in which an URL may be pre-defined by an administrator and made available to users for opening outside of ConnectPath (similar to how a bookmark or favorite might behave)
HAR-1886
A feature has been added in which an URL may be pre-defined by an administrator and made available to users for opening outside of ConnectPath (similar to how a bookmark or favorite might behave).
----
### Add a feature in which both manually entered and pre-defined phone numbers (via Directory Contacts) may be used to initiate a contact while on an existing contact whereas before these could only be performed when not on an existing contact
HAR-3877
A feature has been added in which both manually entered and pre-defined phone numbers (via Directory Contacts) may be used to initiate a contact while on an existing contact whereas before these could only be performed when not on an existing contact.
----
### Add a feature in which Chat and Task (E-Mail, SMS, MMS, Whatsapp, Webhook) provides access to Customer Profiles, Wisdom, Cases and CRM Integrations similar to Voice Channels
HAR-2546
A feature has been added in which Chat and Task (E-Mail, SMS, MMS, Whatsapp, Webhook) provides access to Customer Profiles, Wisdom, Cases and CRM Integrations similar to Voice Channels. With this change we also support multiple concurrent contacts and mixing of channels (based on the user's routing profile configuration.
----
### Add a feature in which ConnectPath is available in Afrikaans
HAR-3871
A feature has been added in which ConnectPath is available in Afrikaans.
----
### Add a feature in which ConnectPath is available in French
HAR-3105
A feature has been added in which ConnectPath is available in French.
----
### Add a feature in which ConnectPath is validated for use in VDI (Virtual Desktop Infrastructure) environments
HAR-1383
A feature has been added in which is validated for use in VDI (Virtual Desktop Infrastructure) environments in which users may wish to split the audio path out of the VDI session.
----
### Add a feature in which ConnectPath's backend services use AWS SDKv3 and a newer backend runtime
HAR-2510
HAR-2901
HAR-3241
HAR-3242
HAR-3243
HAR-3244
HAR-3246
HAR-3247
HAR-3248
HAR-3265
HAR-3308
HAR-3500
HAR-3848
HAR-3850
HAR-3851
HAR-3979
HAR-4019
A feature has been added in which ConnectPath's backend services use AWS SDKv3 and a newer backend runtime. This is a backend change with no foreseeable impacted is anticipated. This feature is intended to maintain long term support of the platform.
----
### Add a feature in which small improvements have been made to the new Activity Search
HAR-2975
HAR-3152
HAR-3160
HAR-3304
HAR-3333
A feature has been added in which small improvements have been made to the new Activity Search.
----
### Add a feature in which testing the CRM Integration will produce a hyperlink that can be used to open the resultant URL in a new browser tab
HAR-3278
A feature has been added in which the CRM Integration will produce a hyperlink that can be used to open the resultant URL in a new browser tab, making the testing of that URL easier.
----
### Add a feature in which the instance timezone, as configured in ConnectPath is used to calculate timezone offsets instead of the using the timezone used by the local client
HAR-3872
A feature has been added in which the instance timezone, as configured in ConnectPath is used to calculate timezone offsets instead of the using the timezone used by the local client. Previously various parts of ConnectPath relied on the client timezone whereas other parts relied on the instance timezone. This change aligns the majority of the features to the instance timezone to avoid confusion in scenarios in which users collaborate across timezones.
----
### Add a feature in which the new Activity Search parameters may be saved and a custom URL generated for favoriting, bookmarking or sharing purposes
HAR-3157
A feature has been added in which in the new Activity Search parameters may be saved and a custom URL generated for favoriting, bookmarking or sharing purposes. This URL can be used between instances as well.
----
### Add a feature in which tooltips are available in the CRM Integration Test Utility
HAR-3198
A feature has been added in which tooltips are available in the CRM Integration Test Utility.
----
### Correct a behavior in which activities are not correctly ordered (via timestamp) in Activity Search
HAR-2812
A defect has been corrected in which activities are not correctly ordered (via timestamp) in Activity Search. Some contact states and types we previously used other timestamps to determine the order and have since adjusted.
----
### Correct a behavior in which analytics must be explicitly enabled in order for ConnectPath to ingest them
HAR-3341
A defect has been corrected in which analytics must be explicitly enabled in order for ConnectPath to ingest them.
----
### Correct a behavior in which clicking on a specific record in a specific contact's history does not load the detail of that record
HAR-4028
A defect has been corrected in which clicking on a specific record in a specific contact's history does not load the detail of that record.
----
### Correct a behavior in which contact information disappears when monitoring an agent
HAR-3102
A defect has been corrected in which contact information disappears when monitoring an agent.
----
### Correct a behavior in which customizing the logo fails with an error message
HAR-2284
A defect has been corrected in which customizing the logo fails with an error message.
----
### Correct a behavior in which only the available pages, based on a user's security profile, may be selected when setting the default page for ConnectPath
HAR-2957
A defect has been corrected in which only the available pages, based on a user's security profile, may be selected when setting the default page for ConnectPath.
----
### Correct a behavior in which related activity does not populate when it should populate
HAR-3137
HAR-4023
A defect has been corrected in which related activity does not populate when it should populate. For some customers with less variation between calling parties we can add an index to the database to potentially further improve performance.
----
### Correct a behavior in which the Abandoned call % is not correctly reflected on the Home screen
HAR-3098
A defect has been corrected in which the Abandoned call % is not correctly reflected on the Home screen. The Abandoned call % has been removed.
----
### Correct a behavior in which the incorrect verbiage is used to a describe a permission
HAR-3825
A defect has been corrected in which the incorrect verbiage is used to a describe a permission.
----
### Correct a behavior in which the new Activity Search is not labeled as such when setting the default page for ConnectPath
HAR-3051
A defect has been corrected in which the new Activity Search is not labeled as such when setting the default page for ConnectPath.
----
### Correct a behavior in which the widgets on the home screen are not correctly rendered when using Dark Mode
HAR-3354
A defect has been corrected in which the widgets on the home screen are not correctly rendered when using Dark Mode.
----
### Correct a behavior in which using a non English-language ConnectPath interface Activity Search filters fail to yield the desired result
HAR-2684 
A defect has been corrected in which when using a non English-language ConnectPath interface Activity Search filters fail to yield the desired result/






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
### Corrected a behavior in which the date picker in the new activity search would not work
HAR-2988
A defect has been corrected in which the date picker in the new activity search would not work.

----
### Remove a feature in which users were previously able to create Fax Webhooks with Twilio
HAR-2900
A feature previously added to ConnectPath, in which users were previously able to create Fax Webhooks with Twilio has been removed. Twilio has deprecated this capability and as such we have removed it from ConnectPath. As an alternative, Fax to E-Mail providers may be used and integrated with ConnectPath through E-Mail Webhooks.