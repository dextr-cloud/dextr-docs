---
title: "v1.13.0"
excerpt_separator: "<!--more-->"
collection: release_notes
permalink: /:categories/:title/
date: 2024-12-10
layout: single
toc: true
toc_sticky: true
categories:
- Release Notes
sidebar:
nav: "docs"
---

## ConnectPath Release Notes, December 2024

## Breaking Changes

----

### Add a feature in which the functionality of the top right status indicator, timer, and selector has been updated to reflect Connect’s states/statuses and their respective durations
A feature has been added in which the functionality of the top right status indicator, timer, and selector has been updated to reflect Connect’s states/statuses and their respective durations, versus artificially create our own durations and confuse users who may be comparing data in both Connect and ConnectPath. Clearing a non-voice contact after ACW will be mandatory, but prevalent in the UI, and clearing no answer status will still be performed in the bar, but by clicking an X versus changing status. Image below, please note that differed types of contacts will be reflected in the status bar, so a user could be connected to a chat, just wrapping up an email, and missed a contact.  Additionally, if your routing profiles allow for multiple contacts across channels, then the right most portion of the status bar could be Available even if the user is connected to other channels.  Note the Green highlighted X in the “missed” portion of the status bar where the user can clear their missed call status.  Lastly, you will note that when you hit the drop down to select the logout option, this will disconnect the user from the system.  This will likely cause a voice call to be dropped, but the other non-voice channels will remain connected but allow the user to close their session.

----

### Add a feature where Q has been moved to a modal based widget that is hidden by default and can be exposed and subsequently hidden by clicking the Q icon in the top right-hand corner.
A feature has been added in which Q has been moved to a modal based widget that is hidden by default and can be exposed and subsequently hidden by clicking the Q icon in the top right-hand corner.

----

## Major Features

----
### Add a feature in which sentiment details may be extracted from an incoming E-Mail message for purposes of routing (in a Contact Flow), incorporation into a Guided Flow, informing agents of pertinent details or reporting
A feature has been added in which sentiment details may be extracted from an incoming E-Mail message for purposes of routing (in a Contact Flow), incorporation into a Guided Flow, informing agents of pertinent details or post contact reporting.

----
### Add a feature where, for customers leveraging Smart scripts, the contents of an E-Mail may be summarized
A feature has been added in which customers who are leveraging Smart scripts may summarize the contents of an E-Mail by clicking the summarize button.

----
### Add a feature where agent to agent calling uses Chime SDK
A feature has been added in which agent to agent calling uses Chime SDK. This will provide more reliable setup in complex network environments and will allow future enhancements to the feature.

----
### Add a feature where post-contact transcript is posted to Dynamics
A feature has been added in which the post-contact transcript can be posted to Dynamics. It is referenceable as {{transcriptContent}}.

## Supporting Features

----
### Add a feature in which an icon has been added to queue management to indicate what objects may be dragged and dropped
A feature has been added in which an icon has been added to queue management to indicate what objects may be dragged and dropped.

----
### Add a feature in which contents of the directory are paginated to reduce impact to front end when many directory entries are present
A feature has been added in which contents of the directory are paginated to reduce impact to front end when many directory entries are present.

----
### Add a feature in which data lake views are separately deployable from the Quicksight integration for customers who wish to use other business intelligence products
A feature has been added in which data lake views are separately deployable from the Quicksight integration for customers who wish to use other business intelligence products.
----

### Add a feature in which small UI/UX improvements have been made to queue management
A feature has been added in which small UI/UX improvements have been made to queue management.

----
### Add a feature in which the team status drawer is more performant with many ConnectPath and/or Teams users
A feature has been added in which the team status drawer is more performant with many ConnectPath and/or Teams users.

----
### Add a feature that allows a supervisor to see the entire conversation history of a contact when utilizing the barge feature
A feature has been added in which a supervisor can see the entire conversation history of a contact when utilizing the barge feature.

----
### Add a feature that suppresses the from field when responding to or originating an E-Mail Address and alternative senders are not configured
A feature has been added in which the from field is suppressed when responding to or originating an E-Mail Address and alternative senders are not configured.

----
### Add a feature where alternative E-Mail Addresses may be use when originating an E-Mail from ConnectPath
A feature has been added in which alternative E-Mail Addresses may be use when originating an E-Mail from ConnectPath.
CS0024871

----
### Add a feature where ConnectPath will show the message set by a Microsoft Teams user in the team status drawer
A feature has been added in which the message set by a Microsoft Teams user is displayed when hovering over the user in the team status drawer.

----
### Add a feature where custom links icon is hidden if no custom links have been defined
A feature has been added in which the custom links icon is hidden if no custom links have been defined.

----
### Add a feature where Dextr reference has been removed from the ConnectPath landing page
A feature has been added in which references to former brands have been removed from the ConnectPath landing page, including Dextr.

----
### Add a feature where HTML may be included in E-Mail scripts (previously released, minor changes in this release)
A feature has been added in which HTML may be included in E-Mail scripts (previously released, minor changes in this release).

----
### Add a feature where queue management excludes queues without routing profiles
A feature has been added in which queue management excludes queues without routing profiles.

----
### Add a feature where the ConnectPath-Support roles permissions have been reduced to minimal permissions required to log into ConnectPath
A feature has been added where the ConnectPath-Support roles permissions have been reduced to minimal permissions required to log into ConnectPath.

----
### Add a feature where the Contact Lens Summary is displayed in the Contact Details
A feature has been added where the Contact Lens Summary is displayed in the Contact Details.
CS0023701

----
### Add a feature where the previously manually created EventBridge rule is now created when an instance is onboarded 
A feature has been added where the previously manually created EventBridge rule is now created when an instance is onboarded.

## Defects

----
### Correct a behavior where a task may be unable to be closed
A defect has been corrected where a task may be unable to be closed.
CS0024357

----
### Correct a behavior where a timezone offset is not applied to the recent activity list in the team status drawer
A defect has been corrected where the timezone offset is not applied to the recent activity list in the team status drawer.
CS0025641

----
### Correct a behavior where a user's default country code selection does not persist when changing it
A defect has been corrected where a user's default country code selection does not persist when changing it.
CS0025522

----
### Correct a behavior where activity detail duplicates missed contacts
A defect has been corrected where the activity detail duplicates missed contacts.
CS0025461

----
### Correct a behavior where bucketing of values is performed incorrectly in Queue metric-based time-series charts on home screen
A defect has been corrected where bucketing of values is performed incorrectly in Queue metric-based time-series charts on home screen.
CS0023826

----
### Correct a behavior where when clicking on a recent activity item in the team status drawer does not open the correct activity
A defect has been corrected where clicking on a recent activity item in the team status drawer does not open the correct activity.
CS0025641

----
### Correct a behavior where contents of Q are difficult to read
A defect has been corrected where contents of Q are difficult to read. This has been corrected by adding a minimized and maximized version of the Q window in a modal.
CS0025436

----
### Correct a behavior where due to an API change the Microsoft Teams integration Presence Synchronization was not working
A defect has been corrected where due to an API change the Microsoft Teams integration Presence Synchronization was not working.

----
### Correct a behavior where due to filtering of Guided Flows events in the CTR, some other events may be missed (previously Hotfixed)
A defect has been corrected where due to filtering of Guided Flows events in the CTR, some other events may be missed.

----
### Correct a behavior where Dynamics configuration is cut off based on screen resolution
A defect has been corrected where the Dynamics configuration is cut off based on screen resolution.

----
### Correct a behavior where no answer configuration is not saved
A defect has been corrected where the no answer configuration is not saved under Instance settings.

----
### Correct a behavior where public facing APIs were not functional
A defect has been corrected where public facing APIs were not functional.

----
### Correct a behavior where related activity does not load during an active contact
A defect has been corrected where related activity does not load during an active contact.
CS0025561

----
### Correct a behavior where the customer profile is not automatically opened on the first call
A defect has been corrected where the customer profile is not automatically opened on the first call. Due to a known issue with Amazon Connect there may still be other cases where the customer profile is not automatically opened. 
CS0021680

----
### Correct a behavior where, due to a change in the Amazon Connect API, agents are not prompted to enroll eligible customers in Voice ID
A defect has been corrected where, due to a change in the Amazon Connect API, agents are not prompted to enroll eligible customers in Voice ID.