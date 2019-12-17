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

The Activity dashboard also features filters and Activity details, and when one of the ***Caller*** records is clicked, you trigger a modal window to engage in a call with the specified number.

<figure>
   <img src="{{ '/assets/images/activity-dashboard.jpg' }}" alt="Activity dashboard">
   <span>Figure 1. Activity dashboard</span>
</figure>
----

#### Date Range, Keyword and number of calls Filter

This is located at the top / header of the Activity dashboard:

- **Date Range** filter (Figure 2. Component 1) will allow the choosing of 2 dates, displaying all the calls in-between. 
- **Keyword** filter (Figure 2. Component 2) searches for any matchup you input in the field.

<figure>
   <img src="{{ '/assets/images/date-keyword-filter.jpg' }}" alt="Date & Keyword filter">
   <span>Figure 2. Date & Keyword filter</span>
</figure>
----

- **Number of calls** filter (Gif 1) will determine the number of calls that will first load in the Activity tab. By default this is initially set to 50, so when entering the Activity dashboard it will load the first 50 calls of the Instance from the most recent to the latest. If you scroll down to the bottom a "See more" button will display, if clicked it will load more calls. Below it loads 100 more because the filter was changed to 50 to 100, showing 200 calls at the top left corner.

<figure>
   <img src="{{ '/assets/images/calls-number-filter.gif' }}" alt="Call numbers filter">
   <span>Gif 1. Showing Number of Calls Load and See More button</span>
</figure>
----

#### Filter bar

Located at the left corner, it is used to filter and sort calls by: 

- Queues. 
- Users. 
- Direction. 
- Disposition (if enabled). 

If you click the label in one of the records corresponding to either Direction, Queue, Disposition or Username you also activate the filter.

<figure>
   <img src="{{ '/assets/images/filter-bar.jpg' }}" alt="Filter bar">
   <span>Figure 3. Filter bar</span>
</figure>
----

#### Activity Details

In the right corner of the dashboard there is a zoom icon that if clicked, enhances the level of details shown per record.

<figure>
   <img src="{{ '/assets/images/activity-details-1.jpg' }}" alt="Activity Details 1">
   <span>Figure 4. Activity Dashboard Zoom Icon</span>
</figure>

This will show a richer metric view through different sections (General, Agent, Queue, Attributes). You also have the option to keep track of the interactions with a customer through the ***Related activity tab*** (bottom right corner), showing any previous interaction you had with the customer.

<figure>
   <img src="{{ '/assets/images/activity-details-2.jpg' }}" alt="Activity Details 2">
   <span>Figure 5. Activity Details with Related Activity</span>
</figure>
----

#### Activity Notes

On Activity Details you also have the option to add Notes per call by clicking the **Add Note** button, allowing better tracking and inquiry.

<figure>
   <img src="{{ '/assets/images/activity-note.jpg' }}" alt="Activity Notes">
   <span>Figure 6. Activity Details Notes</span>
</figure>


