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

The Activity dashboard is the Instance history of phone calls. The rows will display: 
- Contact 
- Date/Time
- Duration (Connected and Queued)
- Direction (Inbound, Outbound, Callback or Missed)
- Queue
- Type (Voice/Announcement)
- Disposition (if enabled in settings) 
- Agent

The Activity dashboard also features filters and details upon click.

[![Activity Dashboard](/assets/images/activity-dashboard.jpg)](/assets/images/activity-dashboard.jpg)

----

#### Date Range, Keyword and number of calls Filter

This is located at the top / header of the Activity dashboard:

- **Date Range** filter (Component 1) will allow the choosing of 2 dates, displaying all the calls in-between. 
- **Keyword** filter (Component 2) searches for any matchup you input in the field.

[![Date&Keyword Filter](/assets/images/date-keyword-filter.jpg)](/assets/images/date-keyword-filter.jpg)

----

#### Simple search

The search box will accept simple searches. When a keyword is not specified all available columns are searched with
the given input.

Ex. `sales` will return all items from both the queue Sales and items with a disposition of Sales

[![Simple search](/assets/images/simple-search.jpg)](/assets/images/simple-search.jpg)

----

#### Composite search

Alternitively, you can specify which columns are searched. This allows you to be more granular in the records
you wish to see.

Ex. `queue: sales` will return only items from the queue Sales

##### Chain composite searches with the '&' operator.

Ex. `queue: sales & channel: voice` will return voice items from the queue Sales.

##### Searching for attributes

You can search for a given attribute and its value.

Ex. `attribute: spanishQueue, true` will return all contacts with the Contact Attribute `spanishQueue` equaling true.

----

#### Available keywords

- agent
- queue
- disposition
- time_queued
- time_connected
- channel
- attribute
- customer_endpoint
- system_endpoint
- transcript

#### Filter bar

Located at the left corner, it's used to filter and sort calls by: 

- Type.
- Queues. 
- Users. 
- Dispositions. 
- Initiation method. 

[![Filter bar](/assets/images/filter-bar.jpg)](/assets/images/filter-bar.jpg)

----

### Activity Details

This is activated upon clicking a record, and enhances the level of details.

[![Activity Details 1](/assets/images/activity-details-1.jpg)](/assets/images/activity-details-1.jpg)

----

You also have the option to keep track of the interactions with a customer through the ***Related activity tab*** (bottom right corner), showing any previous interaction you had with the customer.

[![Activity Details 2](/assets/images/activity-details-2.jpg)](/assets/images/activity-details-2.jpg)

----

#### Activity Notes

Per records, you're able to add notes by creating them. This is done when clicking the **Add a note** button. 

[![Activity Notes](/assets/images/activity-note.jpg)](/assets/images/activity-note.jpg)

#### Contact Lens

You can also view transcripts, sentiment analysis and smart recording playback thanks to the  ***Contact Lens*** integration.

[![Analysis](/assets/images/analysis.jpg)](/assets/images/analysis.jpg)


<style>
   h4 {
      font-size: 20px;
   }

   h5 {
      font-size: 18px;
   }
</style>

