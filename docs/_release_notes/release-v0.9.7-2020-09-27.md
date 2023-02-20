---
title: "v0.9.7"
excerpt_separator: "<!--more-->"
collection: release_notes
permalink: /:categories/:title/
date: 2020-09-27
layout: single
toc: true
toc_sticky: true
categories:
  - Release Notes
sidebar:
  nav: "docs"
---

## ConnectPath Release Notes, September 2020

### Supported Browsers: 

Google Chrome Version 75.0.3770.100 or later. Welcome to the September 2020 release of ConnectPath. 

There are a number of updates in this version that we hope you like, and some of the key highlights include: 

### BYOChannel

Using ConnectPath Flex’s new Webhook Channel, route any business event to the next available agent using a RESTful API. Include any meta data that is helpful in handling the contact. Use Historical and real-time reporting to stay on top of the metrics.

----

### Historical Reporting

What is your Amazon Connect call center trying to tell you? Build, Schedule, Share and Export historical reports without any restrictions on time period. YTD, QTD, MTD and numerous other relative time filters. Export in PDF, share with private URL’s and ConnectPath Flex’s instant messaging.

[![Historical Report](/assets/images/historical-reports.jpg)](/assets/images/historical-reports.jpg)
----

### Remote Status Change

Long overdue, however supervisors can now change the status of other logged in users.

[![Change Status](/assets/images/change-status.jpg)](/assets/images/change-status.jpg)

### Call Quality (MOS Scores)

Find out if customers are hearing crystal clear voices or garbled one-way audio with ConnectPath Flex’s call quality reporting. Take
a look at per-agent/queue MOS scores in real-time or via historical reporting.

### Query with pinpoint activity retrieval based on any meta data

Want to find records with specific words in your omni-channel transcripts? How about calls with a MOS score less than 3? Do this and more with a powerful and easy to use query language.

[![MOS Query](/assets/images/mos-query.jpg)](/assets/images/mos-query.jpg)

### Customize columns for all tables

For all datasets/tables in ConnectPath Flex, choose the columns you care about. Set their width and order. Do this once
and ConnectPath will remember your preferences.

[![Table Customizing](/assets/images/customize-table.jpg)](/assets/images/customize-table.jpg)

### Dark mode

Did you know the advantages of Dark Mode include things such as improved visual ergonomics by reducing eye strain and providing
comfort of use at night or in dark environments? 

[![Dark mode](/assets/images/dark-mode.jpg)](/assets/images/dark-mode.jpg)

### Enhanced supervisor powers

- Edit global contacts no matter who created them.
[![Edit Global Supervisor](/assets/images/edit-global-supervisor.jpg)](/assets/images/edit-global-supervisor.jpg)
- Lower agents “raised hands” after assisting them.
[![Lower Hand](/assets/images/lower-hand.jpg)](/assets/images/lower-hand.jpg)

### Reject voice calls

Users can now reject a voice call. Any rejected calls will be counted as MISSED in Historical and real-time reporting.

### Make announcements reportable 

Find announcements and their metadata in real-time and/or historically

[![Announcement Activity](/assets/images/announcement-activity.jpg)](/assets/images/announcement-activity.jpg)

### Dramatic perfomance improvements

We reduced the initial load of ConnectPath to <3MB and 1 second on most internet plans. We also improved the refresh speed of ConnectPath by 97% (<3 seconds).

### Bug fixes

- ✓ #527 Right-scope IAM permissions to exact services ConnectPath needs..
- ✓ #518 Fix silent monitor early disconnect.
- ✓ #530 Implement incremental retry logic for failed API calls.
- ✓ #512 Onboarding – refresh breaks product code.
- ✓ #512 Opening settings page breaks marquee scroller.
