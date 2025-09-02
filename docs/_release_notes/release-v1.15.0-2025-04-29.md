---
title: "v1.15.0"
excerpt_separator: "<!--more-->"
collection: release_notes
permalink: /:categories/:title/
date: 2025-04-29
layout: single
toc: true
toc_sticky: true
categories:
- Release Notes
sidebar:
nav: "docs"
---

## ConnectPath Release Notes, April 2025

## Supporting Features

----

### Activity Notes can be tied to a specific Contact or to the account in general. In the Contact Details and Activity Details screens you will not have 3 tabs on the left hand side, the Default view is Activity Notes for the specific Contact (Shown with the Contact ID).  You can uses the Arrows on the left and right side to Navigate between tabs (Activity notes for the Caller tied to the phone number), and Recent Activity
CS0029675
 
----

### Time Selector and Display in Tasks now uses AM/PM instead of 24 hour time
CS0030585

----

### Increase the Maximum number of Activity Search records returned from 10,000 to 100,000 records 
CS0022232

----

### Additional Support for Task Templates 
Support Additional Task field types
Support for “Self Assigned” Task Templates 
CS0031976

----

### Support for Multiple Task Templates (now selectable from a drop down list). When Selecting to create a Task, user will not be presented with a list of Task Templated to choose from

----

### When using Pinpoint SMS integration, add a “Create Char” button to allow the generation of a SMS session with a customer
To enable to the services the configurations in Instance Settings

----

### Enabled Guided Flow Tab Independent of Active Contact: Please note that Agents will be presented with a list of all Contact Flows to select from when using this feature

----

### Add a feature where a screen shared with video calling will fill the entire screen of the agent and customer if video sharing is disabled 
CS0031179

----

### Add a feature, where agents with the appropriate permission, may update the disposition of a contact, via activity search, after the contact has ended 
CS0015003,CS0030877

----

### Scripts Filtered by Queue Assigned on new email/chat/SMS 
CS0026454. Scripts are now being filtered based on the queue associated with the contact

----

### Duplicate Records in Athena Views for CTR records
CS0026399; CS0028821. Deduplication has been added to Athena views. You must redeploy the Athena views to take advantage of this change

----

### Choose the email you want to use to reply/forward
CS0027943. From an E-Mail with multiple parties, you may spin off a new thread with one specific party

----

### Support reply to all for email tasks
CS0029283. An agent may reply-all to an E-Mail and all CC’ed parties will be included

----
### Ability to See outbound emails (no queue assigned) without giving access to all Activity
CS0029435. A new permission has been added to support this capability

----

### Email - CC field is not visible to agents
CS0030598. This is available for use by agents as well as an attribute for routing/reporting purposes

----

### Show Next Status in the Status Bar
CS0030617

----

### Ability to run an API check for Compliance before Initiating an outbound call (pre Whisper Flow)
CS0031018. Added a feature in which a (subscription based) API may be called prior to making an agent initiated outbound call to verify the number may be called

----

### Add additional data for calls to determine reason for them being missed
CS0030067. You may request we enable this in your instance, once enabled voice calls will write Telemetry Data as an attribute, in lieu of the MOS score, which provides additional diagnostic capabilities. Note this counts against the 32K CTR limit imposed by AWS

----
### Rework process to remove users logged in > 12 hours
Users logged in >12 hours (the Amazon Connect limit) will be forcefully logged out of ConnectPath

----

### Suppress attributes in ConnectPath Activity Detail
You may now suppress attributes in activity detail, similar to the model, using the same option under instance settings

----

### Dispositions by Agent Report (Reporting V2)
CS0016043. A new V2 report has been made available for deployment which allows reporting by disposition
Ability to Filter data in V2 reporting

----

### A new V2 report has been made available for deployment which allows filtering
Note: To use new reports  you must redeploy the Quicksight integration card within your ConnectPath instance, under settings

----

### Add Attribute Direction=Outbound to Agent Created Custom Tasks
Agent initiated Tasks, SMS and E-Mail will have an Attribute added that lists the Direction as Outbound

----

### Remove Volume Control and Device Control from Primary Voice Settings and Primary Task Settings as they dont do anything anymore
As we are now using the native Amazon Connect ringer for phone calls and tasks, we have removed the device and volume control from the primary ringers

----

## Defects

----
### Contact Graph is overstating number of Contacts 
CS0029490

----
### Some Activity Records (Failed, rejected, missed, etc.) do not include a Disconnect Reason or System Phone number 
CS0030297

----
### Additional logging for scenarios where Guided flows do not load when contact is received

----
### ACGR can sometime produce an error when listing users in Distribution groups 
CS0031928

----
### Activity Records take very long to load, or do not load at all 
CS0032539, CS0032868

----
### Abandon_Agent and other Similar Status’s are creating a duplicate record as a reject 
CS0032885, CS0032923

----
### Some email contacts producing a duplicate activity record for the same contact 
CS0032844

----
### Related Activity not loading in Contact Details or Activity Search 
CS0031508

----
### Telemetry data not properly populating Contact Attributes when the feature is not enabled

----
### Default Country in personal preferences can sometime get set back to default for the instance
CS0029517

----
### Updates to Back end ConnectPath logging

----
### Default Country Code Selection in Personal Preferences can be reset to the region the Instance is in 
CS0029517

----
### Related Activity not showing up for any calls 
CS0031508

----
### Activity Notes for one active contact shows across all active Contacts 
CS0031810

----
### Scenario where nothing loads in Instance Details view 
CS0032142

----
### Correct a behavior where agent to agent metrics did not update the correct buckets

----
### Correct a behavior where AHT does not match between Connect and Legacy Reports when using a voice filter

----
### Correct a behavior where analysis, transcripts and/or recordings were not available from within ConnectPath

----
### Correct a behavior where contact notes are not filtered 
CS0031509

----
### Correct a behavior where related activity fails to display 
CS0031508

----
### Correct a behavior where secondary audio device cannot be set/tested 
CS0031512

----
### Correct an issue where Queue Metrics may not display for customers with many queues, channels and/or metrics being reported, by decreasing pagination from 50 to 25 
CS0031621

----
### Display API error messages within DR Admin

----
### Additional error handling has been added to ACGR configurations under settings

----
### Agent to Agent CHAT: Verify Agent Notification End Point is Active ("Welcome Message!!") upon Login

----
### Corrected a behavior where agent to agent chat notifications and/or message content may not be displayed

----
### Reported Issues with Activity Search not returning expected results or no results
CS0027322, CS0028600
CS0028472. Additional option added to suppress the loading of attributes
CS0030351, CS0030507, CS0030516. Hitting Search Twice would return no results

----
### Agent to Agent call metrics revision

----
### Corrected a behavior where agent to agent metrics were incorrectly calculated

----
### Activity Search Record for emails have the "To" and "from" addresses flipped for outbound emails
CS0029673

----
### Activity Search-Emails - unable to Search/filter on Direction Attribute
CS0029674. Initiation Method is used in lieu of Direction and Direction Attribute is now present

----
### Support tab does not allow for scrolling
CS0030331

----
### Related Activity when using the CustomCustomerEndpoint attribute is not sorted by date
CS0030281

----
### Resolve Issues reported when with iPad Devices using Chrome IOS with ConnectPath
CS0010951. Corrected a behavior where output device selection worked incorrectly on Chrome on IOS
CS0025880. A variety of changes have been made to ConnectPath to support changes made by Amazon Connect that may have resulted in certain agents receiving a disproportionate amount of missed calls
CS0030686. In certain conditions the API request to Amazon Connect (for legacy metrics) would fail, resulting in no metrics being displayed on the home screen
Corrected a behavior where due to the Chrome on IOS resolution some components became non-responsive

----
### Replication of Resources Failure for ACGR

----
### Additional error handling has been added to ACGR integration cards under settings

----
### Chat Engagement - Smart Replies not working

----
### Smart replies and E-Mail summarization will now use anthropic.claude-3-haiku-20240307-v1:0, please ensure you have subscribed to this model. If you wish to use a different model, please contact us

----
### Historical Reports - Report creation gets stuck on clicking create button

----
### AHT doesn't match between Connect and ConnectPath (Voice only)

----
### Saving notes in Activity record may not be visible when contact record details
CS0020128. You may request we add a custom index to your DynamoDB table to support faster retrieval of activity notes

----
### Various quality of life changes have been made to the Teams integration

----
### Some Survey results not being displayed in Activity Search Results
CS0031521, CS0031980, CS0032331

----
### Self-assign Task templates are slow to assign back to the agent

----
### Onboarding Fails to complete

----
### Telemetry data not populating in some cases