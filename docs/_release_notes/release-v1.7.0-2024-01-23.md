---
title: "v1.7.0"
excerpt_separator: "<!--more-->"
collection: release_notes
permalink: /:categories/:title/
date: 2024-01-23
layout: single
toc: true
toc_sticky: true
categories:
- Release Notes
sidebar:
nav: "docs"
---

## ConnectPath Release Notes, January 2024
  
Advanced Notice: With this release (v1.7.0) there are a few things to note:
 
We will hide the old Activity Search, via a permission, in the next release (v1.8.0). This was previously communicated as v1.7.0 but we have pushed it one more release to give customers time to review the added capabilities in the new activity search.
We had previously communicated that we would be introducing a change in the login flow for ConnectPath users in a subsequent hotfix after release v1.6.0 and before January 1st, 2024. Based on guidance from AWS prior to January 1st, 2024, this change was not introduced as Chrome is temporarily (1 year) allow listing Amazon Connect domains while a permanent solution is implemented by AWS. Further communication on this topic will be after Q1 2024, before Q3 2024.
Tentatively, in v1.8.0, we will be reverting the current blind transfer behavior, in which the called party must answer before the blind transfer completes, for instances that do not have early media enabled. This was introduced as a workaround to an Amazon Connect defect, for which a more permanent solution is being identified.
 
Note that there will be a subsequent release (v1.7.1) approximately two weeks after this release, primarily consisting of general improvements to ConnectPath, based on customer feedback, as well as one new feature, release notes will be shared 1 week prior to the release or approximately on Tuesday, January 30th, 2024.
 
As a reminder to customers, with a previous release we have added support for customers to use the go.connectpath.cx domain instead of the go.dextrflex.com domain. While our intentions are not to immediately disable the go.dextrflex.com domain, we do anticipate at some point in the future we will aim to do so (with prior communication) and encourage our customers to make the changes to support that domain. These changes may include updating their identity provider relay state, updating their end users’ bookmarks, updating their firewall settings (more details can be found here https://docs.dextr.cloud/system-requirements/), as well as updating their CORS rules in any S3 buckets used by ConnectPath.
 
Finally, if your Amazon Connect instance still uses the legacy URL (*.awsapps.com) and you wish to update your instance to use the new URL (*.my.connect.aws), you may request this change via our Service Desk.
 
The complete listing of defects and features can be found below:
 
### Supporting Features

----
### Add a feature in which a user may select his or her status (next status) when in a Connected status, similar to the behavior in the Native CCP, providing significant improvement in mixed, concurrent multichannel interaction management
HAR-1613

A feature has been added in which a user may select his or her status (next status) when in a Connected status, similar to the behavior in the Native CCP, providing significant improvement in mixed, concurrent multichannel interaction management.

----
### Add a feature in which ConnectPath is available to customers with instances in South Africa
HAR-2473

A feature has been added in which ConnectPath is available to customers with instances in South Africa.

----
### Add a feature in which the incoming modal is hidden if the user's permissions group is set to use the native CCP
HAR-4389

A feature has been added in which the incoming modal is hidden if the user's permissions group is set to use the native CCP. This is intended for users who may use the CCP in other applications, such as Salesforce, while also using ConnectPath for non-contact related purposes, such as monitoring.

----
### Add a feature in which the new activity search supports limiting results and pagination
HAR-3867

A feature has been added in which the new activity search supports limiting results and pagination.

### Defects

----
### Correct a behavior in which AHT is incorrectly represented
HAR-3352

A defect has been corrected in which  AHT is incorrectly represented.

----
### Correct a behavior in which attachments in a conversation history may not display
HAR-4189

A defect has been corrected in which attachments in a conversation history may not display. 

----
### Correct a behavior in which creation of a webhook failed due to its length exceeding an AWS limit
HAR-4347

A defect has been corrected in which creation of a webhook failed due to its length exceeding an AWS limit.

----
### Correct a behavior in which historical report graphic and export do not match
HAR-3856

A defect has been corrected in which historical report graphic and export do not match.

----
### Correct a behavior in which missed calls may be underreported
HAR-3849

A defect has been corrected in which missed calls may be underreported.

----
### Correct a behavior where a permission (Phone Number) was present but did not have any effect
HAR-3300
HAR-4560

A defect has been corrected in which a permission (Phone Number) was present but did not have any effect.

----
### Correct a behavior where a user is unable to log into ConnectPath if the user has no queues assigned
HAR-2594

A defect has been corrected where a user is unable to log into ConnectPath if the user has no queues assigned. This is addressed by displaying a notification to that user. 

----
### Correct a behavior where agent durations as displayed in the home screen may incorrectly be reflected and synchronize with the users duration
HAR-4732

A defect has been corrected where agent durations as displayed in the home screen may incorrectly be reflected and synchronize with the users duration. 

----
### Correct a behavior where averages in historical reports are not correctly calculated
HAR-4785

A defect has been corrected where averages in historical reports are not correctly calculated. 

----
### Correct a behavior where historical reports may fail to complete
HAR-3117

A defect has been corrected where historical reports may fail to complete. 

----
### Correct a behavior where login to ConnectPath may be slow or certain pages may be slow to load
HAR-3937

A defect has been corrected where login to ConnectPath may be slow or certain pages may be slow to load.

----
### Correct a behavior where updating certain values in the Settings screen are rejected due to a validation error and an incorrect validation message
HAR-4712

A defect has been corrected where updating certain values in the Settings screen are rejected due to a validation error and an incorrect validation message. 

----
### Correct a behavior where user deletion in ConnectPath may fail
HAR-4104
HAR-4155
HAR-4236
HAR-4250
HAR-4436
HAR-4556
HAR-4850

A defect has been corrected where user deletion in ConnectPath may fail. 