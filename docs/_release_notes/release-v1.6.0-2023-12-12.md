---
title: "v1.6.0"
excerpt_separator: "<!--more-->"
collection: release_notes
permalink: /:categories/:title/
date: 2023-12-12
layout: single
toc: true
toc_sticky: true
categories:
- Release Notes
sidebar:
nav: "docs"
---

## ConnectPath Release Notes, December 2023
  
Advanced Notice: With this release (v1.6.0) there are a few things to note:
 
We will hide the old Activity Search, via a permission, in the next release (v1.7.0)
We will introduce a change in the login flow for ConnectPath users in a subsequent hotfix – after this release and before January 1st, 2024. This change in flow is a result of Google's [Privacy Sandbox](https://privacysandbox.com/open-web/#the-privacy-sandbox-timeline) initiative, in which Google Chrome has announced plans to block third-party cookies (that is, cookies passed between two top level domains). As ConnectPath uses the Amazon Connect CCP for authentication and the Amazon Connect CCP uses cookies for authentication the change will be implemented to work around this change to Google Chrome. After this change users will be prompted at first login and every 30 days to allow storage access to Cookies in Chrome which allows ConnectPath to continue using third party cookies. Additional communication will be sent out as we get closer to this release but customers can read more about it here: https://docs.aws.amazon.com/connect/latest/adminguide/admin-3pcookies.html. Note this change will only be evident when Chrome introduces this change or a Chrome flag is explicitly set to force this change and as such no end user impact is anticipated ahead of this change, though testing and training can be performed ahead of this change by setting the flag accordingly.
In a future release, we will be reverting the current blind transfer behavior, in which the called party must answer before the blind transfer completes. This was introduced as a workaround to an Amazon Connect defect, for which a more permanent solution is being identified.
 
Prior Notice: As a reminder to customers, with a previous release we have added support for customers to use the go.connectpath.cx domain instead of the go.dextrflex.com domain. While our intentions are not to immediately disable the go.dextrflex.com domain, we do anticipate at some point in the future we will aim to do so (with prior communication) and encourage our customers to make the changes to support that domain. These changes may include updating their identity provider relay state, updating their end users’ bookmarks, updating their firewall settings (more details can be found here https://docs.dextr.cloud/system-requirements/), as well as updating their CORS rules in any S3 buckets used by ConnectPath.
 
Specific to the December 2023 Release, this release will primarily consist of general improvements to ConnectPath, based on customer feedback. The complete listing of defects and features can be found below:

### Major Features

----
### Add a feature, Smart Replies, in which an agent will be provided with a series of Generative AI generated responses to an omnichannel customer inquiry
HAR-2114
HAR-4136
HAR-4137
HAR-4148
HAR-4150
HAR-4151
HAR-4152
HAR-4195
HAR-4205
HAR-4206
HAR-4397
HAR-4452
HAR-4457
HAR-4489

A feature has been added, Smart Replies in which an agent will be provided with a series of Generative AI generated responses to an omnichannel customer inquiry. More information can be found at https://docs.dextr.cloud/smartscripts
 
### Supporting Features

----
### Add a feature in which a default Webhook, for E-Mail and SMS channels, may be set and will be used instead of the first created Webhook when originating SMS and E-Mail conversations from ConnectPath
HAR-2984

A feature has been added in which a default Webhook, for E-Mail and SMS channels, may be set and will be used instead of the first created Webhook when originating SMS and E-Mail conversations from ConnectPath. This is useful for customers who may have a catch-all SMS Number or E-Mail Address.

----
### Add a feature in which a rule can be created so that idle users (based on an experimental Chrome feature) may be set to a different status after a set period of time (from 1 to 30 minutes)
HAR-3037

A feature has been added in which a rule can be created so that idle users (based on an experimental Chrome feature) may be set to a different status after a set period of time (from 1 to 30 minutes). This is useful for customers who may have an information security policy that requires users to log out when they walk away from their device. In this release a supervisor can see the user is idle and log the user out, if so desired. In future releases support for automatic logout will be added.

----
### Add a feature in which a tool tip is available in certain elements of the home screen and team status draw to explain the source of the data
HAR-2279

A feature has been added in which a tool tip is available in certain elements of the home screen and team status draw to explain the source of the data. This is useful for customers so that they may understand the provenance of metrics - e.g. where they were sourced from and if any additional calculations were performed from the source data.

----
### Add a feature in which a user may add his/her own links to ConnectPath
HAR-4200

A feature has been added in which a user may add his/her own links to ConnectPath. This is useful for customers' users who wish to have their own links accessible to his or her self from within ConnectPath, rather than relying on browser favorites or bookmarks.

----
### Add a feature in which all columns are available for download by default in the new activity search
HAR-2943

A feature has been added in which all columns are available for download by default in the new activity search. This is useful for customers who wish to import this data into another system.

----
### Add a feature in which an Omnichannel auto response is not mandatory
HAR-4121

A feature has been added in which an Omnichannel auto response is not mandatory. This is useful in avoiding loops for system to system communication via SMS or E-Mail.

----
### Add a feature in which ConnectPath will try to reestablish backend connectivity due to momentary loss of Internet access
HAR-3108

A feature has been added in which ConnectPath will try to reestablish backend connectivity due to momentary loss of Internet access. This is useful to customers' users who may be on a mobile device that transits from one network to another. Prior to this some data might not be refreshed after transitioning from one network to another, requiring the user to log out and back into ConnectPath. We will try once automatically and if it fails will prompt the user to log out and back in at his or her convenience, rather than force it.

----
### Add a feature in which infinite scroll style history of Omnichannel interactions can be enabled or disabled with a permission
HAR-3998

A feature has been added in which infinite scroll style history of Omnichannel interactions can be enabled or disabled with a permission. This is useful to customers as they may have a subset of agents who should not be able to see previous customer history.

----
### Add a feature in which links added by users in ConnectPath may be grouped
HAR-4201

A feature has been added in which links added by users in ConnectPath may be grouped. This is useful to customers who that have many links and wish to declutter those links via grouping.

----
### Add a feature in which the Administrative aspects of scripts and post contact surveys have their own create, read, update, delete or CRUD style permissions
HAR-3499

A feature has been added in which the Administrative aspects of scripts and post contact surveys have their own create, read, update, delete or CRUD style permissions. This is useful to customers who may wish to delegate permissions to other users in a granular level.

----
### Add a feature in which the ConnectPath S3 bucket is validated after being configured by an administrator
HAR-4134
HAR-4188

A feature has been added in which the ConnectPath S3 bucket is validated after being configured by an administrator. This is useful to customers who have a custom S3 bucket or wish to implement a custom S3 bucket in ConnectPath.

----
### Add a feature in which the CRM Integration is activated for outbound contacts in addition to inbound contacts
HAR-3277

A feature has been added in which the CRM Integration is activated for outbound contacts in addition to inbound contacts. This is useful to customers who have agents who initiate outbound contacts as well as receive inbound contacts.

----
### Add a feature in which the E-Mail Wizard may be used to onboard E-Mail for multiple ConnectPath instances in the same AWS Account and Region
HAR-4211

A feature has been added  in which the E-Mail Wizard may be used to onboard E-Mail for multiple ConnectPath instances in the same AWS Account and Region. This is useful to customers who have multiple E-Mail flows and wish to use the Wizard instead of manual setup of E-Mail based Webhooks.

----
### Add a feature in which the grouping state is maintained when moving from the new activity search to activity detail
HAR-3158

A feature has been added in which the grouping state is maintained when moving from the new activity search to activity detail. This is useful to customers as they do not have to reset their grouping each time they drill into a contact.
 
### Defects

----
### Correct a behavior in minor UI elements do not follow the design standard
HAR-3931

A defect has been corrected in which minor UI elements do not follow the design standard.

----
### Correct a behavior in which a nonfunctional permission was available in the front end
HAR-3300

A defect has been corrected in which a nonfunctional permission was available in the front end.

----
### Correct a behavior in which a UI element was not correctly translated
HAR-3864

A defect has been corrected in which a UI element was not correctly translated.

----
### Correct a behavior in which a user who has been recreated in ConnectPath may not be able to log in
HAR-4244
HAR-4373

A defect has been corrected in which a user who has been recreated in ConnectPath may not be able to log in.

----
### Correct a behavior in which an E-Mail originated from ConnectPath receives a response from a customer and the Engage page does not automatically refresh with this response
HAR-4219
HAR-4328

A defect has been corrected in which an E-Mail originated from ConnectPath receives a response from a customer and the Engage page does not automatically refresh with this response.

----
### Correct a behavior in which certain home screen widgets are hidden despite the permissions being set for them
HAR-4384

A defect has been corrected in which certain home screen widgets are hidden despite the permissions being set for them.

----
### Correct a behavior in which certain UI elements are not correctly displayed in Dark Mode
HAR-3926
HAR-3928
HAR-4143
HAR-4242

A defect has been corrected in which certain UI elements are not correctly displayed in Dark Mode.

----
### Correct a behavior in which chat contacts are not included in agent or queue performance table metrics
HAR-3936

A defect has been corrected in which chat contacts are not included in agent or queue performance table metrics.

----
### Correct a behavior in which creating support access through the admin portal fails or never completes
HAR-4218

A defect has been corrected in which support access through the admin portal fails or never completes.

----
### Correct a behavior in which in the Dynamics Integration if the initial record creation fails, subsequent steps will not execute
HAR-4350

A defect has been corrected in which in the Dynamics Integration if the initial record creation fails, subsequent steps will not execute.

----
### Correct a behavior in which in the new activity search the E-Mail subject can be used as a filter
HAR-4084

A defect has been corrected in which in the new activity search the E-Mail subject can be used as a filter.

----
### Correct a behavior in which instance admin activity may not be captured due to a failure to create the user in ConnectPath
HAR-4202

A defect has been corrected in which instance admin activity may not be captured due to a failure to create the user in ConnectPath.

----
### Correct a behavior in which more AWS SES regions are listed than are currently available
HAR-4399

A defect has been corrected in which more AWS SES regions are listed than are currently available.

----
### Correct a behavior in which password managers may overwrite the username/password field in the admin portal
HAR-4103

A defect has been corrected in which password managers may overwrite the username/password field in the admin portal.

----
### Correct a behavior in which post contact survey charts do not render after a period of time/clicks
HAR-3370
HAR-4047

A defect has been corrected in which post contact survey charts do not render after a period of time/clicks.

----
### Correct a behavior in which the chat bar elements may be hidden based on browser or screen resolution or scale
HAR-3050
HAR-4169

A defect has been corrected in which the chat bar elements may be hidden based on browser or screen resolution or scale.

----
### Correct a behavior in which the Engage page status duration when on a contact and the top right hand corner status duration are not in sync
HAR-2021
HAR-4142

A defect has been corrected in which the Engage page status duration when on a contact and the top right hand corner status duration are not in sync.

----
### Correct a behavior in which the total queued value in the home screen is larger than other metrics, leading users to believe it is a sum of the other metrics
HAR-3052

A defect has been corrected in which the total queued value in the home screen is larger than other metrics, leading users to believe it is a sum of the other metrics.

----
### Correct a behavior in which the wrong endpoint is used for Omnichannel interactions when writing records used by activity search
HAR-3955

A defect has been corrected in which the wrong endpoint is used for Omnichannel interactions when writing records used by activity search.

----
### Correct a behavior in which, after configuring the Teams integration, if new Connect statuses were added, the wrong statuses would be configured with the Teams integration
HAR-4354
HAR-4400

A defect has been corrected in which, after configuring the Teams integration, if new Connect statuses were added, the wrong statuses would be configured with the Teams integration.

----
### Correct a behavior in which, during the offboarding process, deletion of the CloudFormation stack may fail
HAR-4324

A defect has been corrected in which, during the offboarding process, deletion of the CloudFormation stack may fail. 

----
### Correct a behavior in which, when using a non-English language interface, saving permissions may result in the permissions being reset
HAR-4382

A defect has been corrected in which, when using a non-English language interface, saving permissions may result in the permissions being reset. 

----
### Correct a behavior where during instance onboarding if instance validation fails the first time, it will continue to fail until the process is restarted
HAR-4077

A defect has been corrected where during instance onboarding if instance validation fails the first time, it will continue to fail until the process is restarted. 

----
### Correct a behavior where irrelevant fields were displayed in the agent or queue performance tables
HAR-4290
 
A defect has been corrected where irrelevant fields were displayed in the agent or queue performance tables.

