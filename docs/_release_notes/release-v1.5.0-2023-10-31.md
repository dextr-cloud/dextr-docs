---
title: "v1.5.0"
excerpt_separator: "<!--more-->"
collection: release_notes
permalink: /:categories/:title/
date: 2023-10-31
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

1) We will hide the old Activity Search behind a new permission
2) We will introduce a change in the login flow for ConnectPath users. This change in flow is a result of Google's [Privacy Sandbox](https://privacysandbox.com/open-web/#the-privacy-sandbox-timeline) initiative, in which Google Chrome has announced plans to block third-party cookies (that is, cookies passed between two top level domains). As ConnectPath uses the Amazon Connect CCP for authentication and the Amazon Connect CCP uses cookies for authentication the change will be implemented to work around this change to Google Chrome. After this change users will be prompted at first login and every 30 days to allow storage access to Cookies in Chrome which allows ConnectPath to continue using third party cookies. Additional communication will be sent out as we get closer to this release but customers can read more about it here: https://docs.aws.amazon.com/connect/latest/adminguide/admin-3pcookies.html
3) We will be reverting the current blind transfer behavior, in which the called party must answer before the blind transfer completes. This was introduced as a workaround to an Amazon Connect defect, for which a more permanent solution has been identified.

Prior Notice:

As a reminder to customers, with a previous release we have added support for customers to use the go.connectpath.cx domain instead of the go.dextrflex.com domain. While our intentions are not to immediately disable the go.dextrflex.com domain, we do anticipate at some point in the future we will aim to do so (with prior communication) and encourage our customers to make the changes to support that domain. These changes may include updating their identity provider relay state, updating their end users’ bookmarks, updating their firewall settings (more details can be found here https://docs.dextr.cloud/system-requirements/), as well as updating their CORS rules in any S3 buckets used by ConnectPath.
 
Specific to the October 2023 Release, the complete listing of defects and features can be found below:

----
### Add a feature in which agents may offer to customers the ability to communicate via Video, direct Audio (bypassing Amazon Connect), and in which customers may opt to share their desktop
HAR-2084
HAR-3283
HAR-3284
HAR-3286
HAR-3287
HAR-3295
HAR-3670
HAR-3890
HAR-3892
HAR-3897
HAR-3962
HAR-3986
HAR-4091
HAR-4092
HAR-4093
HAR-4231
HAR-4237
A feature has been added in which agents may offer to customers the ability to communicate via Video, direct Audio (bypassing Amazon Connect), and in which customers may opt to share their desktop. This has application in the telehealth, insurance and technical support space, among others. As part of the launch of this feature, a CloudFormation stack can be deployed into your AWS account under Settings > Integrations, which will provide a landing page for your customers to go to to join a meeting. For instances in which the feature is enabled, a Video tab will appear on the Engage page which allows agents to initiate a Video meeting and generate a meeting ID to provide to customers via voice, SMS, E-Mail or other forms of communication. 1:1 meetings are presently supported and the customer interface has been designed to be customized and function on mobile devices.
----
### Add a feature in which CloudFormation templates may be published by the ConnectPath team under Integrations, which allows extending functionality of Amazon Connect, ConnectPath and other services
HAR-2019
HAR-3485
HAR-3837
HAR-3889
HAR-3891
HAR-3899
HAR-4089
A feature has been added in which CloudFormation templates may be published by the ConnectPath team under Integrations, which allows extending functionality of Amazon Connect, ConnectPath and other services. An example of this is the aforementioned Video channel. Full CloudFormation functionality, such as inputs and outputs are supported as well as versioning so as new versions of templates are released you may update to them on demand.
----
### Add a feature in which ConnectPath may be further integrated with Microsoft Dynamics.
HAR-2096
HAR-2911
HAR-2999
HAR-3094
HAR-3161
HAR-3162
HAR-3297
HAR-3838
HAR-3880
HAR-3883
A feature has been added in which ConnectPath may be further integrated with Microsoft Dynamics, by creating Dynamics records at the time the contact begins, opening (in a tab or popup) the resultant record in Dynamics, and appending the record, after the contact has ended with additional details, including the call recording and/or transcript.

----
### Add a feature in which tasks may be created, scheduled, and assigned to a specific agent or queue as well as being transferred
HAR-2189
A feature has been added in which tasks may be created, scheduled, and assigned to a specific agent or queue as well as being transferred. Unlike E-Mail and SMS Tasks, the agent does not need to be available nor does a specific Contact Flow need to be utilized. Tasks can be transferred via Quick Connects, similar to Chat. Task Templates will be supported in a future release.
----
### Add a feature in which new activity search filters can be saved/retrieved
HAR-2996
HAR-4022
A feature has been added in which new activity search filters can be saved/retrieved using a similar interface as Queue Management Backup/Restore, allowing column selection to be saved for reuse in future queries.
----
### Add a feature in which the E-Mail channel can be created using a Wizard versus manual configuration of AWS services
HAR-1371
HAR-2889
HAR-2995
HAR-3169
HAR-3170
HAR-4009
HAR-4010
HAR-4011
HAR-4015
HAR-4016
HAR-4017
HAR-4018
HAR-4219
HAR-4264
HAR-4265
A feature has been added in which the E-Mail channel can be created using a Wizard versus manual configuration of AWS services. In addition, all Regions in which SES is supported can now be used in ConnectPath.
----
### Add a feature in which up to 20 CRM Integrations (5 per Queue) can be configured, which is an increase over the previous limit of 5.
HAR-3881
HAR-3882
HAR-3972
A feature has been added in which up to 20 CRM Integrations (5 per Queue) can be configured, which is an increase over the previous limit of 5. Further, validation of URLs has been relaxed to support full substitution of URLs via Contact Attributes, whereas previously the protocol and domain could not be.
----
### Correct a behavior in which quick connects may sporadically not be displayed
HAR-4115
A defect has been corrected in which quick connects may sporadically not be displayed.
----
### Correct a behavior in which the outbound messages and/or outbound multiple queues settings may be saved without specifying a contact flow and/or queue
HAR-3174
A defect has been corrected in which the outbound messages and/or outbound multiple queues settings may be saved without specifying a contact flow and/or queue.
----
### Correct a behavior in which the related activity screen may time out
HAR-4053
HAR-4099
A defect has been corrected in which the related activity screen may time out. This correction may require a custom index on the customer database, for which our support team can assist with.
----
### Correct a behavior in which the Teams integration does not correctly synchronize user status
HAR-2669
HAR-2952
HAR-3887
HAR-4109
A defect has been corrected in which the Teams integration does not correctly synchronize user status. There is a current open issue in which some customer instances may not synchronize user E-Mail Addresses with Connect, which may manifest itself as one-way synchronization issues. Please reach out to ConnectPath support for assistance in implementing a workaround.
----
### Correct a behavior in which translations may be inconsistent
HAR-3898
A defect has been corrected in which translations may be inconsistent.
----
### Correct a behavior where a contact may be missed without notification, sporadically, when the ConnectPath browser window is minimized
HAR-4239
A defect has been corrected where a contact may be missed without notification, sporadically, when the ConnectPath browser window is minimized.
----
### Correct a behavior where a user may be prompted to provide a disposition, sporadically, when reviewing an activity detail
HAR-4248
A defect has been corrected in which where a user may be prompted to provide a disposition, sporadically, when reviewing an activity detail. This was limited to transfer type contacts.
----
### Correct a behavior where a warm transfer is not reflected in recent activity in the team status drawer
HAR-3258
A defect has been corrected where a warm transfer is not reflected in recent activity in the team status drawer.
----
### Correct a behavior where icons do not display in the correct color in the new activity search
HAR-4125
A defect has been corrected where icons do not display in the correct color in the new activity search.
----
### Correct a behavior where selecting the "Today" date range in the date picker in the new activity search as it was using the client timezone
HAR-4133
A defect has been corrected where selecting the "Today" date range in the date picker in the new activity search as it was using the client timezone. The instance timezone will be used instead.
----
### Correct a behavior where the icon for a custom task is not displayed in the new activity search
HAR-4123
A defect has been corrected where the icon for a custom task is not displayed in the new activity search.
----
### Create a new set of permissions to control access to the information on the Home Screen of ConnectPath
HAR-4185 
Create a new set of permissions to control access to the information on the Home Screen of ConnectPath.