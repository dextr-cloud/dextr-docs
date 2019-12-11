---
title: "Activity"
permalink: /activity/
layout: single
toc: true
toc_sticky: true
sidebar: 
  nav: "docs"
---

### The Dasbhboard

The Activity display is the Instance history of phone calls. The rows will display: Caller, Timestamp, Duration of the call, Direction (if Inbound, Outbound, Callback or Missed), Queue, Disposition if enabled, Username, and lastly an option to download or play the recordings.

The Activity dashboard also features filters, and when one of the caller records is clicked, you trigger a modal window to engage in a call with the specified number.

<figure>
   <img src="{{ '/assets/images/activity-dashboard.jpg' }}" alt="Activity dashboard">
   <span>Figure 1. Activity dashboard</span>
</figure>
----

### Date Range, Keyword and number of calls Filter

This is located at the top / header of the Activity dashboard. **Date Range** filter (Figure 2. Component 1) will allow the choosing of 2 dates, displaying all the calls in-between while **Keyword** (Figure 2. Component 2) searches for any matchup you input in the field.

<figure>
   <img src="{{ '/assets/images/date-keyword-filter.jpg' }}" alt="Date & Keyword filter">
   <span>Figure 2. Date & Keyword filter</span>
</figure>
----

**Number of calls** filter is used as the number of calls that will first load in the dashboard. By default this is initially set to 50, so when entering the Activity dashboard it will load the first 50 calls of the Instance from the most recent to the latest. If you scroll down to the bottom a "See more" button will display, when clicked you will load more calls. Below it loads 100 more because the filter was changed to 50 to 100.

<figure>
   <img src="{{ '/assets/images/calls-number-filter.gif' }}" alt="Call numbers filter">
</figure>
----

### Filter bar

Located at the left corner, it is used to filter and sort calls by Queues, Users, Direction and Disposition if enabled. If you click in one of the records either Direction, Queue, Disposition or Username you also activate the filter.

<figure>
   <img src="{{ '/assets/images/filter-bar.jpg' }}" alt="Filter bar">
   <span>Figure 3. Filter bar</span>
</figure>