---
title: "v1.14.0"
excerpt_separator: "<!--more-->"
collection: release_notes
permalink: /:categories/:title/
date: 2025-02-12
layout: single
toc: true
toc_sticky: true
categories:
- Release Notes
sidebar:
nav: "docs"
---

## ConnectPath Release Notes, February 2024

## Breaking Changes

----

### Add a feature in which a user may specify the time boundaries for recent activities in the team status drawer.
A feature has been added where a user may specify the time boundaries for recent activities in the team status drawer. This feature will add a new setting option under Settings -> My Preferences where users will be able to choose the when the data in the Team Status Bar’s recent Activity view showing their individual Metrics resets. The Default setting matches the current behavior (showing the past 24 hours of activity). This was requested under CS0025641.

----

## Major Features

----
### Add a feature in which a new case may be created from within ConnectPath
A feature has been added where new case may be created from within ConnectPath, in addition to being able to open existing cases, as well as assign a task to a case.

----
### Add a feature in which agent to agent chat uses the Chime SDK
A feature has been added where agent to agent chat uses the Chime SDK.  Please note that Agent to Agent Calling and Chat now use Chime.  If you find that this function stops working, please ensure you do not have any Policies that prevent the creation of Chime events.

----
### Add a feature in which Customer Profiles may be used to synchronize Directory Entries
A feature has been added where Customer Profiles may be used to synchronize Directory Entries.

----
### Add a feature in which expired tasks may be rehydrated
A feature has been added in which expired tasks will automatically be rehydrated.

----
### Add a feature in which full support for Amazon Connect Disaster Recovery (ACGR) is available in ConnectPath
A feature has been added where full support for Amazon Connect Disaster Recovery (ACGR) is available in ConnectPath. This includes management of ACGR, failover of a Connect instance from one region to another and failover of ConnectPath from one region to another. Given the added costs of ACGR, ACGR must still be setup first, from within ConnectPath.

----
### Add a feature in which Salesforce can embed ConnectPath
A feature has been added where a CTI Adapter is available within Salesforce for embedding ConnectPath. It is currently under review for addition to the AppExchange, but we are supporting pre-launch customers. For more information, please see https://www.youtube.com/watch?v=aEABWnTHpuU.

----
### Add a feature in which V2 Metrics API is used as a data source for Home Screen and Data Lake based reports
A feature has been added where the Amazon Connect V2 Metrics API is used as a data source for Home Screen and Data Lake based reports. This is disabled by default and must be enabled under the instance settings. This was requested under CS0019096.

----

## Supporting Features

----
### Add a feature in which a task is created in lieu of an activity when creating an announcement
A feature has been added where a task is created in lieu of an activity when creating an announcement.

----
### Add a feature in which Amazon Connect Video may be used within ConnectPath
A feature has been added where Amazon Connect Video may be used within ConnectPath, in addition to native ConnectPath Video.

----
### Add a feature in which ConnectPath Support access leverages least privileged IAM policies
A feature has been added where ConnectPath Support access leverages least privileged IAM policies.

----
### Add a feature in which queues with no routing profiles are filtered out of queue management
A feature has been added where queues with no routing profiles are filtered out of queue management as no action can be taken on those.

----
### Add a feature in which the directory may support a high number of contacts
A feature has been added where the directory may support a high number of contacts.

----
### Add a feature that allows an administrator to delete one click E-Mail
A feature has been added where an administrator may delete one click E-Mail.

----
### Add a feature that allows http(s) URL in attribute value in activity detail to be clickable 
A feature has been added where an http(s) URL in an attribute value in activity detail to be clickable.

----

## Defects

----
### Correct a behavior in which a field containing ID may be overwritten in the API call to Dynamics when using the Dynamics integration
A defect has been corrected where a field containing "ID" may be overwritten in the API call to Dynamics when using the Dynamics Integration.

----
### Correct a behavior in which a missed call may not force close the incoming contact modal
A defect has been corrected where a missed call may not force close the incoming contact modal. In some cases, we have Observed where the timer in the incoming call modal (this presents the accept and reject call options), does not match with the Connecting timer which would present to agents like they still have time to answer a call even though the 20 second timer to answer a call has expired. With this update we will be removing the timer from the incoming call modal to prevent a scenario leading to missed calls. You can still see the Connecting status timer in the upper right-hand side of the screen and users will need to use that timer to determine how much time they have to answer a call (This timer counts from 0 up to 20).

----
### Correct a behavior in which agent to agent calling cannot be disconnected after an agent receives a call via Amazon Connect
A defect has been corrected where an active call in agent to agent calling cannot be disconnected after an agent receives a call via Amazon Connect as reported under CS0020839.

----
### Correct a behavior in which browser translations have unanticipated impact to the UI
A defect has been corrected where browser translations have unanticipated impact to the UI as reported under CS0023384. We block the use of browser translations in lieu of the built-in translations.

----
### Correct a behavior in which ConnectPath may behave erratically when using more than the standard number of queues and/or routing profiles
A defect has been corrected where, ConnectPath may behave erratically when using more than the standard number of queues and/or routing profiles. For example, if you previously requested a quota increase on either of these items, not all may be displayed in ConnectPath.

----
### Correct a behavior in which missing data may not be processed by ConnectPath
A defect has been corrected where missing data may not be processed by ConnectPath.

----
### Correct a behavior in which multiple CTR records for the same CTR in Amazon Connect may result in incorrect disconnect timestamps
A defect has been corrected where multiple CTR records for the same CTR in Amazon Connect may result in incorrect disconnect timestamps as reported in CS0023665.

----
### Correct a behavior in which only 100 routing profiles may be displayed
A defect has been corrected where only 100 routing profiles may be displayed as reported in CS0027085. We now support the display of up to 500 routing profiles.

----
### Correct a behavior in which setting the volume of the ringtone has no effect
A defect has been corrected where setting the volume of the ringtone has no effect as reported in CS0026608.

----
### Correct a behavior in which the full thread of the message was not available when responding to an E-Mail
A defect has been corrected where the full thread of the message was not available when responding to an E-Mail as reported in CS0025897.

----
### Correct a behavior in which the public API was not functional
A defect has been corrected where the public API was not functional. New API endpoints have been created to designate internal versus external APIs.

----
### Correct a behavior where agent to agent talk time starts accumulating at the start of the request, not after the connection
A defect has been corrected where, when using agent to agent calling, the agent to agent talk time starts accumulating at the start of the request, not after the connection.

----
### Correct a behavior where pasting into an E-Mail response may have unintended impact to message contents or formatting
A defect has been corrected where pasting into an E-Mail response may have unintended impact to message contents or formatting.

----
### Correct a behavior where the Quicksight integration card does not refresh when clicked
A defect has been corrected where the Quicksight integration card does not refresh when clicked.

----
### Correct various usability aspects of video calling
A defect has been corrected where video calling may not function as intended.

----
### Correct various usability aspects of Microsoft Teams Integration
A defect has been corrected where the Microsoft Teams Integration UI may not function as intended.

----