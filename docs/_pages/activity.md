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

[![Activity Dashboard](/assets/images/Activity/activity-dashboard.jpg)](/assets/images/Activity/activity-dashboard.jpg)

----

#### Date Range, Keyword and number of calls Filter

This is located at the top / header of the Activity dashboard:

- **Date Range** filter (Component 1) will allow the choosing of 2 dates, displaying all the activity in-between. 
- **Keyword** filter (Component 2) searches for any matchup you input in the field. There is also **Preset** dropdown in the left side with the most common inputs for filter.

[![Date&Keyword Filter](/assets/images/Activity/date-keyword-filter.jpg)](/assets/images/Activity/date-keyword-filter.jpg)

#### Filter bar

Located at the left corner, it's used to filter and sort calls by: 

- Type.
- Queues. 
- Users. 
- Dispositions. 
- Initiation method. 

[![Filter bar](/assets/images/Activity/filter-bar.jpg)](/assets/images/Activity/filter-bar.jpg)

#### Configure Activity Table Columns

At the right side of the header you have a gear icon which allows you to configure the order of the columns by drag, or hide/display columns of your interest.

[![Configure activity](/assets/images/Activity/configure-activity.jpg)](/assets/images/Activity/configure-activity.jpg)


#### Export Activity

Located at the right corner, you can click the `Export` button to export current results (this includes filters applied) shown in the table.

[![Export activity](/assets/images/Activity/export-activity.jpg)](/assets/images/Activity/export-activity.jpg)

 Once created, the activity results will be displayed in the reports page.
 
[![Export activity 2](/assets/images/Activity/export-activity2.jpg)](/assets/images/Activity/export-activity2.jpg)

----

### Search

The search box will accept simple searches using `Date Range`, or composite searches where you can specifiy a given value for Keywords.

#### Simple search

When a keyword is not specified all available columns are searched with the given input in the Date Range.

[![Simple search](/assets/images/Activity/simple-search.jpg)](/assets/images/Activity/simple-search.jpg)

When using Keywords, all items that contain the keyword are searched. For example, `inbound` will return all Inbound calls.

[![Keyword search](/assets/images/Activity/keyword-search.jpg)](/assets/images/Activity/keyword-search.jpg)

----

#### Composite search

Alternitively, you can specify which columns are searched. This allows you to be more granular in the records you wish to see.

Ex. `queue: basic` will return only items from the Basic queue.

[![Composite search](/assets/images/Activity/composite-search.jpg)](/assets/images/Activity/composite-search.jpg)

##### Chain composite searches with the '&' operator.

You can use the `&` operator to link two keywords and their values in the search.

Ex. `queue: sales & channel: email` will return voice items from the queue BasicQueue.

[![& Operator](/assets/images/Activity/and-operator.jpg)](/assets/images/Activity/and-operator.jpg)

##### Searching for attributes

You can search for a given attribute and its value.

Ex. `attribute: spanishQueue, true` will return all contacts with the Contact Attribute `spanishQueue` equaling true.

----

#### Available keywords

Here is a list of all available keywords for composite and simple searches:

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

#### Preset Searches

There is also a preset search dropdown that will automatically populate the keyword input field with the most common of the composites searches.

[![Common Searches](/assets/images/Activity/common-search.jpg)](/assets/images/Activity/common-search.jpg)

----

### Activity Details

This is activated upon clicking a record, and enhances the level of details.

[![Activity Details 1](/assets/images/Activity/activity-details.jpg)](/assets/images/Activity/activity-details.jpg)

----

You also have the option to keep track of the interactions with a customer through the ***Related activity tab*** (bottom right corner), showing any previous interaction you had with the customer.

[![Activity Details 2](/assets/images/Activity/activity-details-2.jpg)](/assets/images/Activity/activity-details-2.jpg)

----

#### Activity Notes

Per records, you're able to add notes by creating them. This is done when clicking the **Add a note** button. 

[![Activity Notes](/assets/images/Activity/activity-note.jpg)](/assets/images/Activity/activity-note.jpg)

#### Contact Lens

You can also view transcripts, sentiment analysis and smart recording playback thanks to the  ***Contact Lens*** integration.

[![Analysis](/assets/images/Activity/analysis.jpg)](/assets/images/Activity/analysis.jpg)


<style>
   h4 {
      font-size: 20px;
   }

   h5 {
      font-size: 18px;
   }
</style>

