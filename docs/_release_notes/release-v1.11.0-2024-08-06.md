---
title: "v1.11.0"
excerpt_separator: "<!--more-->"
collection: release_notes
permalink: /:categories/:title/
date: 2024-08-06
layout: single
toc: true
toc_sticky: true
categories:
- Release Notes
sidebar:
nav: "docs"
---

## ConnectPath Release Notes, August 2024

### Breaking Changes

----
 
### Major Features

----
 
### Supporting Features
 
----
### Add a feature in which the new activity search provides attribute keys/values mapped to columns
HAR-3481
A feature has been added in which new the activity search provides results with the attribute keys/values mapped to columns. Columns are dynamically generated based on result set.
----
### Add a feature in which users may log into ConnectPath using the Chrome Mobile browser from an IOS Device
HAR-4313
A feature has been added in which users may log into ConnectPath using the Chrome Mobile browser from an IOS Device. This is considered an alpha
----
### Add a feature intended to address Bedrock Model Deprecation
HAR-7529
A feature has been added in which Bedrock Model Deprecation has been addressed. Alternative region-model pairs will be used as defaults instead. Customers may still opt to override based on their specific requirements.
----
### Add a feature where attributes may be used as queue hints to trigger the disposition modal when a standard queue is not present, such as outbound contacts directed to a specific agent
HAR-7051
CS0018953
HAR-7264
A feature has been added in which attributes may be used as queue hints to trigger the disposition modal when a standard queue is not present, such as outbound contacts directed to a specific agent.
----
### Add a feature where certain contact attributes can be suppressed on the accept/decline model
HAR-7656
CS0020070
A feature has been added in which certain contact attributes can be suppressed on the accept/decline model.
----
### Add a feature where login to ConnectPath has been improved by parallelizing requests
HAR-7013
A feature has been added in which the login time for ConnectPath has been reduced by parallelizing requests.
----
### Add a feature where tasks may be transferred to another agent or queue via a quick connect
HAR-4083
CS0019442
HAR-8166
CS0019442
HAR-8362
HAR-8454
HAR-8545
HAR-8801
CS0019442
A feature has been added in which tasks may be transferred to another agent or queue via a quick connect.
----
### Add a feature where the sender E-Mail address may be changed when responding to a customer E-Mail
HAR-7668
CS0020170
HAR-8215
CS0020170
HAR-8547
A feature has been added in which the sender E-Mail address may be changed when responding to a customer E-Mail.

### Defects

----
### Correct a behavior (sporadic) where dispositions may not be presented when a Chat is ended
HAR-7263
A defect has been corrected where dispositions may not be presented when a Chat is ended.
----
### Correct a behavior where a link to the Pinpoint instructions 404
HAR-7127
A defect has been corrected where clicking the link to the Pinpoint instructions results in a 404 error.
----
### Correct a behavior where a scrollbar incorrectly appears when accessing the custom links menu in ConnectPath
HAR-8468
CS0022042
A defect has been corrected where a scrollbar incorrectly appears when accessing the custom links menu in ConnectPath, making it difficult to access the custom links.
----
### Correct a behavior where agent state time reporting in the new historical reports does not match Connect
HAR-8061
CS0011792
A defect has been corrected where agent state time reporting in the new historical reports does not match Connect.
----
### Correct a behavior where an activity cannot be answered
HAR-8385
HAR-8631
CS0022087
HAR-8700
A defect has been corrected where an activity cannot be answered.
----
### Correct a behavior where an instance administrator may not be able to manage ad-hoc closures
HAR-8297
CS0021264
A defect has been corrected where an instance administrator may not be able to manage ad-hoc closures.
----
### Correct a behavior where an instance administrator may not be able to use either activity search
HAR-7843
A defect has been corrected where an instance administrator may not be able to use either activity search.
----
### Correct a behavior where certain elements are not displayed clearly when dark mode is in use
HAR-3927
HAR-4191
HAR-4194
HAR-8314
A defect has been corrected where certain elements are not displayed clearly when dark mode is in use.
----
### Correct a behavior where default security profiles may be deleted, resulting in the inability for users to log into ConnectPath
HAR-7676
A defect has been corrected where default security profiles may be deleted, resulting in the inability for users to log into ConnectPath.
----
### Correct a behavior where due to an issue with an Amazon Connect library a memory leak condition may be presented when using Q (formerly Wisdom)
HAR-6558
A defect has been corrected where, due to an issue with an Amazon Connect library, a memory leak condition may be presented when using Q (formerly Wisdom).
----
### Correct a behavior where ingestion of data from the Connect instance may require more than 1 attempt, depending on the payload size
HAR-8098
HAR-8620
A defect has been corrected where ingestion of data from the Connect instance may require more than 1 attempt, depending on the payload size. Additional fixes are targeted in 1.12.
----
### Correct a behavior where instance offboarding may hang
HAR-3264
A defect has been corrected where instance offboarding may hang, requiring manual intervention.
----
### Correct a behavior where other tabs in the Engage page are removed when a search is performed in Q (Wisdom)
HAR-8556
CS0019109
A defect has been corrected where other tabs in the Engage page are removed when a search is performed in Q (Wisdom).
----
### Correct a behavior where predefined scripts may not have the contact attributes passed to them
HAR-8804
A defect has been corrected where predefined scripts may not have the contact attributes passed to them.
----
### Correct a behavior where the legacy report export columns are shifted and/or inconsistent data types are applied
HAR-8549
CS0021918
CS0022037
A defect has been corrected where the legacy report export columns are shifted and/or inconsistent data types are applied.
----
### Correct a behavior where the SAML URL entered during onboarding has unanticipated effects
HAR-4713
A defect has been corrected where the SAML URL entered during onboarding has unanticipated effects.
----
### Correct a behavior where the Teams integration can be created before deletion is fully completed
HAR-4170
A defect has been corrected where the Teams integration can be created before deletion is fully completed.
----
### Correct a behavior where update to the agent routing profile is not reflected to supervisors
HAR-8348
CS0021367
A defect has been corrected where updates to the agent routing profile is not reflected to supervisors.
----
### Correct a behavior where user sync fails on a non-SAML based instance
HAR-8451
A defect has been corrected where user sync fails on a non-SAML based instance.