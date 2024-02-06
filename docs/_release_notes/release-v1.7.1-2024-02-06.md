---
title: "v1.7.1"
excerpt_separator: "<!--more-->"
collection: release_notes
permalink: /:categories/:title/
date: 2024-02-06
layout: single
toc: true
toc_sticky: true
categories:
- Release Notes
sidebar:
nav: "docs"
---

## ConnectPath Release Notes, February 2024
   
### Major Features

----

### Add a feature in which users may create their own reports in ConnectPath

HAR-3212
HAR-4492
HAR-4493
HAR-4494
HAR-4495
HAR-4496
HAR-4497
HAR-4498
HAR-4499
HAR-4500
HAR-4565
HAR-4759
HAR-4980
HAR-5025
HAR-5042
HAR-5168
HAR-5264

A feature has been added in which users may create their own reports in ConnectPath. This feature is disabled out of the box and to use it additional Integrations must be deployed, which will setup a data collector, a data lake, business intelligence and sample reports (dashboards). Additional detail can be found under the dedicated section in the docs site.

### Supporting Features

----

### Add a feature in which permissions for in-line history apply to Chat channels in addition to SMS channels

HAR-4640

A feature has been added in which for in-line history apply to Chat channels in addition to SMS channels.

----

### Add a feature that allows customers to toggle between legacy and modern Amazon Connect Tasks as it relates to Omnichannel routing

HAR-4870
HAR-5116

A feature has been added in which a privileged user may to toggle between legacy and modern Amazon Connect Tasks as it relates to Omnichannel routing. Default behavior will be the modern method, so this is providing an override to use the legacy approach, which may be desired for customers who wish to use Amazon Connect Tasks as ephemeral routing resources.

### Defects


----
### Correct a behavior where backups, under queue management, may fail
HAR-4805
A defect has been corrected where backups, under queue management, may fail.

----
### Correct a behavior where certain E-Mails may cause the Engage screen to render incorrectly
HAR-4453
A defect has been corrected where certain E-Mails may cause the Engage screen to render incorrectly.

----
### Correct a behavior where Engage tab should be in the second position on the left-hand menu
HAR-4450
A defect has been corrected where Engage tab should be in the second position on the left-hand menu.

----
### Correct a behavior where some text is unreadable in dark mode
HAR-4729
A defect has been corrected where some text is unreadable in dark mode.

----
### Correct a behavior where the callback duration in Livelook includes time not spent in queue
HAR-4487
A defect has been corrected where the callback duration in Livelook includes time not spent in queue.

----
### Correct a behavior where the Engage screen tabs do not default to the correct tab
HAR-4462
A defect has been corrected in which the Engage screen tabs do not default to the correct tab.

----
### Correct a behavior where the home screen durations widget label is not clearly labeled as such
HAR-4616
A defect has been corrected in which the home screen durations widget label is not clearly labeled, one field was missing a translation and another field was not descriptive enough.

----

### Correct a behavior where the home screen selections would reset when a user moves to another screen in ConnectPath
HAR-4454

A defect has been corrected in which the home screen selections would reset when a user moves to another screen in ConnectPath.

----

### Correct a behavior where the recording button label is unclear
HAR-3311

A defect has been corrected in which the recording button label is unclear. The wording of the button has been corrected to indicate it may be used to toggle the recording on and off, as we cannot provide the true state of recording given a limitation with Amazon Connect.
