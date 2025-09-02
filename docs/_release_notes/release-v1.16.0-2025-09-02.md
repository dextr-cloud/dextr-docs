---
title: "v1.16.0"
excerpt_separator: "<!--more-->"
collection: release_notes
permalink: /:categories/:title/
date: 2025-09-02
layout: single
toc: true
toc_sticky: true
categories:
- Release Notes
sidebar:
nav: "docs"
---

## ConnectPath Release Notes, September 2025

## Breaking Changes

----

While not a breaking change, it’s important to note that this release focused on significant modernization of our front end, and while we do not encounter functional differences, there may be some slight visual differences, primarily intended to drive consistency in the areas of the UI that previously lacked that. Further, we have updated the backend runtimes (including the customer deployable), to address AWS end of support notifications.

----

## Major Features

----

### Add a feature in which additional capabilities are available with the Gryphon API
HAR-12219
CS0032831, CS0032775
A feature has been added where additional capabilities are available with the Gryphon API (all outbound initiation methods for voice are supported, the agent is placed into an unavailable state while the Gryphon API is checked, the reason for denial is displayed and displayed as a modal rather than a toaster and the agent must click it to make it go away.

----

### Add a feature in which pre-dialing rules may be specified that utilize a third party API to allow, deny or translate a phone number being dialed
HAR-10240
A feature has been added where pre-dialing rules may be specified that utilize a third party API to allow, deny or translate a phone number being dialed, which effectively let’s customers opt into or out of Gryphon without our support.

----

### Add a feature in which CRM integration supports the selection of all or specific queues, channels, and directions
HAR-10909
HAR-12093
CS0032855
A feature has been added where CRM integration supports the selection of all or specific queues, channels, and directions.

----

### Add a feature in which Dynamics configuration may be tied to specific queues as to control the invocation based on the direction of the contact
HAR-12078
HAR-12136
A feature has been added where Dynamics configuration may be tied to specific queues as to control the invocation based on the direction of the contact (e.g. inbound queue versus outbound queue).

----

### Add a feature in which task templates have congruency with Amazon Connect
HAR-7593
HAR-9009
A feature has been added where task templates have congruency with Amazon Connect.

----

### Add a feature in which the Livelook widget may be opened in a modal to display additional details, sort options and filters
HAR-10512
CS002822

A feature has been added where the Livelook widget may be opened in a modal to display additional details, sort options and filters.

----

## Supporting Features

----

### Add a feature in which activity permission will apply to related activity
HAR-12345
A feature has been added where activity permission will apply to related activity.

----

### Add a feature in which administrators (e.g., instance-wide setting) may choose how notes are saved/retrieved across contacts and customer (or custom customer) endpoints
HAR-10709
CS0029675
HAR-12252
CS0033093
A feature has been added where administrators (e.g., instance-wide setting) may choose how notes are saved/retrieved across contacts and customer (or custom customer) endpoints.

----

### Add a feature in which administrators may opt to fall back to custom Web RTC behavior that allows whisper coaching, legacy MOS scores, etc.
HAR-11403
CS0031462, CS0031248, CS0033329
A feature has been added where administrators may opt to fall back to custom Web RTC behavior that allows whisper coaching, legacy MOS scores, etc.

----

### Add a feature in which an agent may self-select whether the ConnectPath instance of Amazon Connect should be used to carry the audio path
HAR-12095
CS0032884
A feature has been added where an agent may self-select whether the ConnectPath instance of Amazon Connect should be used to carry the audio path (e.g., VDI scenarios).

----

### Add a feature in which an audio input device is not required to use ConnectPath by providing support for VB-Audio
HAR-12464
CS0033535
A feature has been added where an audio input device is not required to use ConnectPath by providing support for VB-Audio.

----

### Add a feature in which chat cards on the engage screen may be sorted by oldest or longest idle
HAR-12110
CS0032903
A feature has been added where chat cards on the engage screen may be sorted by oldest or longest idle.

----

### Add a feature in which customer and agent chat messages are more clearly delineated
HAR-12107
CS0032891
A feature has been added where customer and agent chat messages are more clearly delineated.

----

### Add a feature in which dispositions in activity detail are filtered on the related queue
HAR-10698
CS0029379
A feature has been added where dispositions in activity detail are filtered on the related queue.

----

### Add a feature in which Guided Flow suggestions from Q may be clicked
HAR-11985
A feature has been added where Guided Flow suggestions from Q may be clicked.

----

### Add a feature in which Outbound Tasks (E-Mail/SMS), will use the routing profile of the agent to determine which dispositions should be displayed
HAR-11122
A feature has been added where Outbound Tasks (E-Mail/SMS), will use the routing profile of the agent to determine which dispositions should be displayed (e.g. lookup queues by routing profile).

----

### Add a feature in which references to dextr.cloud E-Mails have been updated to connectpath.cx
HAR-3200
A feature has been added where references to dextr.cloud E-Mails have been updated to connectpath.cx.

----

### Add a feature in which the CC field is visible to agents using E-Mail
HAR-10949
CS0030598
A feature has been added where CC field is visible to agents using E-Mail.

----

### Add a feature in which the CloudFormation templates used by ConnectPath utilized a newer version of NodeJS and have additional granular permissions added
HAR-11458
HAR-12644
A feature has been added where the CloudFormation templates used by ConnectPath utilized a newer version of NodeJS and have additional granular permissions added.

----

### Add a feature in which the ConnectPath UI is available via simplified Chinese
HAR-11309
HAR-11524
A feature has been added where the ConnectPath UI is available via simplified Chinese.

----

### Add a feature in which URLs are clickable when task templates utilize this field-type
HAR-12182
CS0033014, CS0033012, CS0033130
A feature has been added where URLs are clickable when task templates utilize this field-type.

----

### Add a feature in which usability of quick responses is improved through use of the title and pagination
HAR-12256
CS0032978
A feature has been added where usability of quick responses is improved through use of the title and pagination.

----

### Add a feature to handle getstate() deprecation in the Amazon Connect SDK
HAR-11992
A feature has been added where getstate() deprecation in the Amazon Connect SDK is handled.

----

### Add a feature where multiple domains may be utilized when sending an E-Mail
HAR-9741
A feature has been added where multiple domains may be utilized when sending an E-Mail

----

### Add a feature where old historical reporting may be hidden via a default permission
HAR-9327
CS0033538
A feature has been added where old historical reporting may be hidden via a default permission.

----

### Add a feature where the contacts (quick connects) model may filter on destinations by channel
HAR-11157
CS0030966
A feature has been added where contacts (quick connects) model may filter on destinations by channel.

----

### Add a feature where, when a contact is received, a specific tab may be consistently opened as a default as a personal setting
HAR-9307
CS0023674, CS0030549
A feature has been added where when a contact is received, a specific tab may be consistently opened as a default as a personal setting.

----

### Add a feature where, when a contact is received, a specific tab may be consistently opened as a default as an instance-wide setting that overrides a personal setting, if set
HAR-10986
CS0030549
A feature has been added where when a contact is received, a specific tab may be consistently opened as a default as an instance-wide setting that overrides a personal setting, if set.

## Defects

----

### Correct a behavior in which ACGR cards fail to be deployed successfully
HAR-10957
A defect has been corrected where ACGR cards fail to be deployed successfully.

----

### Correct a behavior in which activity records are duplicated
HAR-12141
CS0032844
A defect has been corrected where activity records are duplicated.

----

### Correct a behavior in which agent to agent chat does not work
HAR-10885
CS0029882
HAR-10895
CS0029475
A defect has been corrected where agent to agent chat does not work.

----

### Correct a behavior in which mismatched timezone result in unexpected behavior in the activity search date/time picker
HAR-10908
A defect has been corrected where mismatched timezone result in unexpected behavior in the activity search date/time picker.

----

### Correct a behavior in which the CRM Integration page is not loaded when an attribute is expected but not populated
HAR-12285
CS0033133
A defect has been corrected where the CRM Integration page is not loaded when an attribute is expected but not populated.

----

### Correct a behavior in which the default country does not persist between logins
HAR-12257
CS0029517
A defect has been corrected where the default country does not persist between logins.

----

### Correct a behavior in which the Dynamics CRM Integration invokes the specified API endpoint for missed and rejected calls
HAR-12478
CS0033589
A defect has been corrected where the Dynamics CRM Integration invokes the specified API endpoint for missed and rejected calls.

----

### Correct a behavior in which the e911 address is stored incorrectly
HAR-11310
A defect has been corrected where the e911 address is stored incorrectly.

----

### Correct a behavior in which the user list in the team status drawer is limited to 100 users
HAR-11540
CS0031786
A defect has been corrected where the user list in the team status drawer is limited to 100 users.

----

### Correct a behavior in which there is a long delay when initiating agent to agent calling
HAR-11417
CS0031501
A defect has been corrected where there is a long delay when initiating agent to agent calling.

----

### Correct a behavior in which contacts time series charts display inflated values
HAR-10685
CS0029490
A defect has been corrected where contacts time series charts display inflated values.

----

### Correct a behavior in which telemetry data is not saved to the contact
HAR-11418
A defect has been corrected where telemetry data is not saved to the contact.

----

### Correct a behavior in which V2 Metrics do no populate the home screen dashboard when enabled
HAR-12544
CS0033705
A defect has been corrected where V2 Metrics do no populate the home screen dashboard when enabled.

----

### Correct a behavior in which, when typing a phone number on the engage screen, the field loses focus
HAR-12187
CS0033022
A defect has been corrected where when typing a phone number on the engage screen, the field loses focus.

----