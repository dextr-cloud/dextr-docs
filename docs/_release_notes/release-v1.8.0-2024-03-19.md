---
title: "v1.8.0"
excerpt_separator: "<!--more-->"
collection: release_notes
permalink: /:categories/:title/
date: 2024-03-19
layout: single
toc: true
toc_sticky: true
categories:
- Release Notes
sidebar:
nav: "docs"
---

## ConnectPath Release Notes, March 2024
   
### Major Features

----

### Supporting Features

----

### Add a feature in which agent status detail reporting is available in Historical Reports V2
HAR-2694
HAR-2822
HAR-3340

A feature has been added in which agent status detail reporting is available in Historical Reports V2.

----

### Add a feature in which deployment instructions for Historical Reporting V2 are visible from within ConnectPath
HAR-5945

A feature has been added in which deployment instructions for Historical Reporting V2 are visible from within ConnectPath.

----

### Add a feature in which generalized improvements are made to the Historical Reporting V2 feature
HAR-5947
HAR-6032

A feature has been added in which generalized improvements are made to the Historical Reporting V2 feature.

----

### Add a feature in which Google Workspace OAUTH may be used as an alternative to Basic Authentication when Google Workspace SMTP hosts are used for sending E-Mail
HAR-1189
HAR-4776
HAR-4786
HAR-4787
HAR-4806
HAR-5336

A feature has been added in which Google Workspace OAUTH may be used as an alternative to Basic Authentication when Google Workspace SMTP hosts are used for sending E-Mail.

----

### Add a feature in which In-Line Translation may be used by instances in South Africa
HAR-6340

A feature has been added in which In-Line Translation may be used by instances in South Africa by re-routing the Translation requests to a region that has support for the Translation APIs.

----

### Add a feature in which the non-default audio device may be used in ConnectPath for sending/receiving audio whole on a call
HAR-3312
HAR-4841
HAR-6564

A feature has been added in which the non-default audio device may be used in ConnectPath for sending/receiving audio whole on a call.

----

### Add a feature where a failed deployment of Chime Video Calling can be restarted
HAR-5057

A feature has been added in which a failed deployment of Chime Video Calling can be restarted.

----

### Add a feature where E-Mail Addresses can be synchronized between Connect and ConnectPath in the case of a SAML based directory
HAR-3840

A feature has been added in which E-Mail Addresses can be synchronized between Connect and ConnectPath in the case of a SAML based directory.

----

### Add a feature where Historical Reporting V2 exposes Hierarchies
HAR-5941

A feature has been added in which Historical Reporting V2 exposes Hierarchies.

----

### Add a feature where the CCP Initialization parameters may be overridden on an instance by instance basis
HAR-4925
 
A feature has been added in which the CCP Initialization parameters may be overridden on an instance by instance basis.

----

### Defects

Defects

----
### Correct a behavior in which a delay is introduced in blind/cold transfers. This delay will be reduced for instances that do not have early media enabled
HAR-4257
A defect has been corrected where a delay was introduced in blind/cold transfers due to a limitation of Amazon Connect. This delay will be reduced for instances that do not have early media enabled.

----
### Correct a behavior in which SMTP host cannot be overridden when creating or updating an E-Mail webhook
HAR-5715
A defect has been corrected where the SMTP host cannot be overridden when creating or updating an E-Mail webhook.

----
### Correct a behavior in which subject search on E-Mail activities may timeout
HAR-4754
A defect has been corrected where subject search on E-Mail activities may timeout.

----
### Correct a behavior in which subsequent attempts to cold transfer, after previously conferring two parties may fail for the current active call
HAR-4715
A defect has been corrected where subsequent attempts to cold transfer, after previously conferring two parties may fail for the current active call.

----
### Correct a behavior in which Teams user synchronization may either have ineligible users or miss eligible users that were previously eligible
HAR-4529
A defect has been corrected where Teams user synchronization may either have ineligible users or miss eligible users that were previously eligible.

----
### Correct a behavior in which the agent summary and handled calls widgets do not match
HAR-4372
A defect has been corrected where the agent summary and handled calls widgets do not match.

----
### Correct a behavior in which users may have unexplained no answers
HAR-4854
A defect has been corrected where users may have unexplained no answers. While a root cause has not been determined, the AWS SDKs are being update in this release which has had a positive impact in controlled testing with specific customer users.

----
### Correct a behavior where an active chat contact is incorrectly represented in the active task contact counter
HAR-4890
A defect has been corrected where an active chat contact is incorrectly represented in the active task contact counter.

----
### Correct a behavior where certain E-Mails may result in the ConnectPath screen being unusable
HAR-6419
HAR-6535
A defect has been corrected where certain E-Mails may result in the ConnectPath screen being unusable.

----
### Correct a behavior where Chime Video Calling fails to deploy
HAR-4502
A defect has been corrected where Chime Video Calling fails to deploy.

----
### Correct a behavior where prior agent status is not retained when a contact is cleared
HAR-4280
A defect has been corrected where the prior agent status is not retained when a contact is cleared.

----
### Correct a behavior where the Amazon Connect Tools page cannot be loaded
HAR-6515
A defect has been corrected where the Amazon Connect Tools page cannot be loaded due to a change in the URL.

----
### Correct a behavior where the count of active tasks is doubled
HAR-4700
A defect has been corrected where the count of active tasks is doubled.

----
### Correct a behavior where the presence of a callback may result in post call surveys double-counting
HAR-4488
A defect has been corrected where the presence of a callback may result in post call surveys double-counting.

----