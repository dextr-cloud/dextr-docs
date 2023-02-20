---
title: "v0.9.95"
excerpt_separator: "<!--more-->"
collection: release_notes
permalink: /:categories/:title/
date: 2022-11-08
layout: single
toc: true
toc_sticky: true
categories:
  - Release Notes
sidebar:
  nav: "docs"
---

## ConnectPath Release Notes, November 2022

### HAR-1375 Add feature in which a privileged user can add pre-canned responses to non voice contacts that a user may use in response to said contact

A feature has been added in which global (instance level) pre-canned responses can be defined by a privileged user, or local (user level) pre-canned responses can be defined by a non privileged user, allowing users to select from a list of pre-populated response to SMS, E-Mail, Chat or other non voice channels, based on the queue associated with that contact. E-Mail presently replaces the entire body (which can be undone with CTRL-Z) and is not queue aware. The purpose of this feature is to reduce the effort required by a user to response to a request and thus reduce the handle time of the request.

----

### HAR-1376 Add feature in which a privileged user can add pre-canned responses to non voice contacts that a user may use in response to said contact

A feature has been added in which global (instance level) pre-canned responses can be defined by a privileged user, or local (user level) pre-canned responses can be defined by a non privileged user, allowing users to select from a list of pre-populated response to SMS, E-Mail, Chat or other non voice channels, based on the queue associated with that contact. E-Mail presently replaces the entire body (which can be undone with CTRL-Z) and is not queue aware. The purpose of this feature is to reduce the effort required by a user to response to a request and thus reduce the handle time of the request.

----

### HAR-873  Add feature in which a privileged user can add pre-canned responses to non voice contacts that a user may use in response to said contact

A feature has been added in which global (instance level) pre-canned responses can be defined by a privileged user, or local (user level) pre-canned responses can be defined by a non privileged user, allowing users to select from a list of pre-populated response to SMS, E-Mail, Chat or other non voice channels, based on the queue associated with that contact. E-Mail presently replaces the entire body (which can be undone with CTRL-Z) and is not queue aware. The purpose of this feature is to reduce the effort required by a user to response to a request and thus reduce the handle time of the request.

----

### HAR-1094 Add feature in which a privileged user can pre-configure an Iframe URL to be embedded in the Engage page upon receipt/creation of a contact

A feature has been added in which global (instance level) IFrame embedded websites can be defined by a privileged user, allowing up to 5 websites, static or dynamic, to be embedded within ConnectPath. These could include, but are not limited to customer relationship management systems such as Salesforce, Enterprise Service Management systems such as ServiceNow or any other HTTP/HTTPS accessible website that supports GET requests and (optional) parameters from within another application. The URL Definition requires at least one parameter (nullable) contained within double curly braces such as this: {{example}}). Parameters directly reference Amazon Connect Attributes and any combination of static text and parameters can be utilized.

----

### HAR-1095 Add feature in which a privileged user can pre-configure an Iframe URL to be embedded in the Engage page upon receipt/creation of a contact

A feature has been added in which global (instance level) IFrame embedded websites can be defined by a privileged user, allowing up to 5 websites, static or dynamic, to be embedded within ConnectPath. These could include, but are not limited to customer relationship management systems such as Salesforce, Enterprise Service Management systems such as ServiceNow or any other HTTP/HTTPS accessible website that supports GET requests and (optional) parameters from within another application. The URL Definition requires at least one parameter (nullable) contained within double curly braces such as this: {{example}}). Parameters directly reference Amazon Connect Attributes and any combination of static text and parameters can be utilized.

----

### HAR-1096 Add feature in which a privileged user can pre-configure an Iframe URL to be embedded in the Engage page upon receipt/creation of a contact

A feature has been added in which global (instance level) IFrame embedded websites can be defined by a privileged user, allowing up to 5 websites, static or dynamic, to be embedded within ConnectPath. These could include, but are not limited to customer relationship management systems such as Salesforce, Enterprise Service Management systems such as ServiceNow or any other HTTP/HTTPS accessible website that supports GET requests and (optional) parameters from within another application. The URL Definition requires at least one parameter (nullable) contained within double curly braces such as this: {{example}}). Parameters directly reference Amazon Connect Attributes and any combination of static text and parameters can be utilized.

----

### HAR-678  Add feature in which a user, onboarding to ConnectPath does not need to provide the AWS Account Number

A feature has been added in which the AWS Account Number does not need to be provide during onboarding, eliminating an extraneous onboarding step.

----

### HAR-1080 Add feature in which a user's default country code will be utilized when making additional outbound calls from the Engage page

A feature has been added in which as user's default country code is utilized when making additional outbound calls from the Engage page, eliminating an extraneous step in specifying the phone number in E.164 format (e.g. + and country code). E.164 format can still be utilized in the event a phone number located outside of the default country code is needing to be dialed.

----

### HAR-936  Add feature in which ConnectPath provides deep links to Amazon Connect, providing streamlined access to Amazon Connect Administrative Features

A feature has been added in which ConnectPath will include, under a new menu bar icon labeled Analytics, links to the native Amazon Connect reporting pages, as well as, under settings, links to the native Amazon Connect configuration pages, providing faster access to these resources.

----

### HAR-1353 Add feature in which ConnectPath provides deep links to Amazon Connect, providing streamlined access to Amazon Connect Administrative Features

A feature has been added in which ConnectPath will include, under a new menu bar icon labeled Analytics, links to the native Amazon Connect reporting pages, as well as, under settings, links to the native Amazon Connect configuration pages, providing faster access to these resources.

----

### HAR-1081 Add feature in which hold duration is displayed to a user when placing one or more calls on hold

A feature has been added in which, when a user places a call on Hold, that Hold time duration is displayed so that the agent has a visual indicator for how long the cal has been on Hold for. In the case of multiple calls on Hold, each call is shown with it's unique Hold duration time.

----

### HAR-341  Add feature in which reporting S3 bucket is created and permissioned during ConnectPath onboarding process

A feature has been added in which for new ConnectPath instances a default S3 bucket is created for report staging (and other purposes), with the permissions predefined, eliminating an extraneous onboarding step.

----

### HAR-1209 Add feature in which sent/received messages in the Chat channel can be auto-translated

A feature has been added in which an agent can toggle on/off the automatic translation of Chat messages received from a customer and sent to a customer. This feature must be enabled at the start of Chat, or the page must be refreshed if it is enabled later, for it to take effect. Note that this feature leverages Amazon Translate and may incur additional (minor) costs.

----

### HAR-645  Add feature to display SLA columns under Queue Performance Dashboard

A feature has been added in which the Queue Performance Dashboard can optionally display SLA Metrics. Note that these columns are not displayed by default and must explicitly be displayed.

----

### HAR-1222 Correct behavior around display of Multilevel Disposition options when screen resolution or window zoom leaves too little real estate to display

A defect has been corrected in which the display of the Multilevel Disposition settings, under options may not correctly render due to low screen resolution or high screen zoom percentage.

----

### HAR-84 Correct behavior around reporting and subsequent actions upon an user declining a chat

A defect has been corrected in which, upon a user declining a chat, reports may not correctly reflect said action or subsequent actions.

----

### HAR-1105 Correct behavior in which a case created from ConnectPath results in a truncated description in Service Now

A defect has been corrected in which a service request created from ConnectPath results in CloudHesive only seeing a truncated version of that request.

----

### HAR-1372 Correct behavior in which a state of ConnectPath configuration and CloudFormation template to support E-Mail Webhooks may become out of sync

A defect has been corrected in which the CloudFormation template uses to deploy the Lambda Function used for E-Mail Webhooks creates a uniquely Lambda function, avoiding the potential for name collisions.

----

### HAR-1002 Correct behavior in which Activity Search result count does not match summary counts due to either outbound contacts not being connected or contacts being updated (by AWS) after being ended

A defect has been corrected in which the activity search result count does not match the summary counts due to either outbound contacts not being connected or contacts being updated (by AWS after being ended).

We now classify the following scenarios as failed:

1) Calls which Connect failed to make
2) Calls which were to invalid numbers
3) Calls which Connect failed to connect to the agent
4) (In some cases) Calls which were not answered - either by a person or machine (Voicemail, IVR, etc.)

Additionally, the Activity Search time range will utilize the start time for contacts in flight and end time for contacts completed whereas before it was based on the time that the contact was last updated, which has been observed to change, even for completed contacts, presumably based on internal AWS events.

Further, in cases where the agent failed to answer the contact, we identify those as no answer.

Finally, calls transferred out of Queue to an external number are counted as Abandons as Connect does reports they were disconnected by the customer as we have no insight into what occurred after that call was transferred, aside from the fact the customer disconnected. 

----

### HAR-612  Correct behavior in which Activity Search result count does not match summary counts due to either outbound contacts not being connected or contacts being updated (by AWS) after being ended

A defect has been corrected in which the activity search result count does not match the summary counts due to either outbound contacts not being connected or contacts being updated (by AWS after being ended).

We now classify the following scenarios as failed:

1) Calls which Connect failed to make
2) Calls which were to invalid numbers
3) Calls which Connect failed to connect to the agent
4) (In some cases) Calls which were not answered - either by a person or machine (Voicemail, IVR, etc.)

Additionally, the Activity Search time range will utilize the start time for contacts in flight and end time for contacts completed whereas before it was based on the time that the contact was last updated, which has been observed to change, even for completed contacts, presumably based on internal AWS events.

Further, in cases where the agent failed to answer the contact, we identify those as no answer.

Finally, calls transferred out of Queue to an external number are counted as Abandons as Connect does reports they were disconnected by the customer as we have no insight into what occurred after that call was transferred, aside from the fact the customer disconnected. 

----

### HAR-1106 Correct behavior in which Activity Search result count does not match summary counts due to either outbound contacts not being connected or contacts being updated (by AWS) after being ended

A defect has been corrected in which the activity search result count does not match the summary counts due to either outbound contacts not being connected or contacts being updated (by AWS after being ended).

We now classify the following scenarios as failed:

1) Calls which Connect failed to make
2) Calls which were to invalid numbers
3) Calls which Connect failed to connect to the agent
4) (In some cases) Calls which were not answered - either by a person or machine (Voicemail, IVR, etc.)

Additionally, the Activity Search time range will utilize the start time for contacts in flight and end time for contacts completed whereas before it was based on the time that the contact was last updated, which has been observed to change, even for completed contacts, presumably based on internal AWS events.

Further, in cases where the agent failed to answer the contact, we identify those as no answer.

Finally, calls transferred out of Queue to an external number are counted as Abandons as Connect does reports they were disconnected by the customer as we have no insight into what occurred after that call was transferred, aside from the fact the customer disconnected. 

----

### HAR-1289 Correct behavior in which an agent on a call, receiving a direct call may receive 2 notifications

A defect has been corrected in which an agent on a call who also receives a direct call from another user may receive duplicate notifications.

----

### HAR-1144 Correct behavior in which an incoming SMS message may fail to be processed

A defect has been corrected in which an incoming SMS message may fail to be processed.

----

### HAR-1033 Correct behavior in which an instance cannot be offboarded from ConnectPath, via the admin page

A defect has been corrected in which a user could not offboard their instance from ConnectPath via the admin page. 
This feature will remove the CloudFormation template and flag the instance as inactive, preventing the instance from being onboarded a subsequent time.

----

### HAR-1408 Correct behavior in which available status timer does not reset after user returns to available

A defect has been corrected in which the available status timer was not reset after the user returned to available.

----

### HAR-1331 Correct behavior in which available status timer does not reset after user returns to available

A defect has been corrected in which the available status timer was not reset after the user returned to available.

----

### HAR-1164 Correct behavior in which editing an E-Mail Webhook fails

A defect has been corrected in which editing an existing E-Mail Webhook fails due to an unspecified error.

----

### HAR-1396 Correct behavior in which editing an E-Mail Webhook fails

A defect has been corrected in which editing an existing E-Mail Webhook fails due to an unspecified error.

----

### HAR-1410 Correct behavior in which end of contact sounds is not played at the end of the contact, despite the sound being configured by the user

A defect has been corrected in which, at the end of a contact, if a sound was configured to be played, that sound was not played.

----

### HAR-1296 Correct behavior in which end of contact sounds is not played at the end of the contact, despite the sound being configured by the user

A defect has been corrected in which, at the end of a contact, if a sound was configured to be played, that sound was not played.

----

### HAR-1123 Correct behavior in which incoming MMS messages with attachments may be stripped of attachments

A defect has been corrected in which incoming MMS messages with attachments may be stripped of the attachments.

----

### HAR-1121 Correct behavior in which the ConnectPath landing page, on occasion, may display a blank white screen

A defect has been corrected in which the ConnectPath landing page may occasionally display a blank, white screen.

----

### HAR-102 Correct behavior in which unread chat message notification is not displayed at user login

A defect has been corrected in which unread chat message notifications are not displayed at user login.

----
