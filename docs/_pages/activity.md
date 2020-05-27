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

[![Activity Dashboard](/assets/images/activity-dashboard.jpg)](/assets/images/activity-dashboard.jpg)

Figure 1. Activity dashboard

----

#### Date Range, Keyword and number of calls Filter

This is located at the top / header of the Activity dashboard:

- **Date Range** filter (Figure 2. Component 1) will allow the choosing of 2 dates, displaying all the calls in-between. 
- **Keyword** filter (Figure 2. Component 2) searches for any matchup you input in the field.

[![Date&Keyword Filter](/assets/images/date-keyword-filter.jpg)](/assets/images/date-keyword-filter.jpg)

Figure 2. Date & Keyword filter

----

- **Number of calls** filter (Gif 1) will determine the number of calls that will first load in the Activity tab. By default this is initially set to 50, so when entering the Activity dashboard it will load the first 50 calls of the Instance from the most recent to the latest. If you scroll down to the bottom a "See more" button will display, if clicked it will load more calls. Below it loads 100 more because the filter was changed to 50 to 100, showing 200 calls at the top left corner.

{% include figure image_path="/assets/images/load-more.gif" alt="Call numbers filter" caption="Gif 1. Number of Calls and See More button"%}

----

#### Filter bar

Located at the left corner, it is used to filter and sort calls by: 

- Queues. 
- Users. 
- Direction. 
- Disposition (if enabled). 
- Channel.
- Duration.

If you click the label in one of the records corresponding to either Direction, Queue, Disposition or Username you also activate the filter functionality (Figure 3).

[![Filter bar](/assets/images/filter-bar.jpg)](/assets/images/filter-bar.jpg)

Figure 3. Filter bar functionality on dashboard

There is also Channel (SMS, Email, Voice, Chat, Callback) and Durations (Queued or Connected) filters to help you accomodate your search.

[![Filter bar duration](/assets/images/activity-durations-filter.jpg)](/assets/images/activity-durations-filter.jpg)

Figure 4. Filter Bars Durations

----

#### Activity Details

In the right corner of the dashboard there is a zoom icon that if clicked, enhances the level of details shown per record.

[![Activity Details 1](/assets/images/activity-details-1.jpg)](/assets/images/activity-details-1.jpg)

Figure 5. Activity Dashboard Zoom Icon

This will show a richer metric view through different sections (General, Agent, Queue, Attributes). You also have the option to keep track of the interactions with a customer through the ***Related activity tab*** (bottom right corner), showing any previous interaction you had with the customer.

[![Activity Details 2](/assets/images/activity-details-2.jpg)](/assets/images/activity-details-2.jpg)

Figure 6. Activity Details with Related Activity

----

#### Activity Notes

On Activity Details you also have the option to add Notes per call by clicking the **Add Note** button, allowing better tracking and inquiry.

[![Activity Notes](/assets/images/activity-note.jpg)](/assets/images/activity-note.jpg)

Figure 7. Activity Details Notes


