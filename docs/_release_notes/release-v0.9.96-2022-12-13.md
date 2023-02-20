---
title: "v0.9.96"
excerpt_separator: "<!--more-->"
collection: release_notes
permalink: /:categories/:title/
date: 2022-12-13
layout: single
toc: true
toc_sticky: true
categories:
  - Release Notes
sidebar:
  nav: "docs"
---

## ConnectPath Release Notes, December 2022

### HAR-1379 Add a feature in which a privileged user may update the call disposition, upon review of all call dispositions. This feature may be used in conjunction with our call blocking feature to create a two step call blocking workflow

A feature has been added in which a privileged user may update the call disposition, upon review of all call dispositions. This feature may be used in conjunction with our call blocking feature to create a two step call blocking workflow. This feature works with both single level and multi-level dispositions.

----

### HAR-1628 Add a feature in which a privileged user may update the call disposition, upon review of all call dispositions. This feature may be used in conjunction with our call blocking feature to create a two step call blocking workflow

A feature has been added in which a privileged user may update the call disposition, upon review of all call dispositions. This feature may be used in conjunction with our call blocking feature to create a two step call blocking workflow. This feature works with both single level and multi-level dispositions.

----

### HAR-864 Add a feature in which a traffic light style MOS score is displayed on the Engage page, next to the active contact, to provide a visual indicator to the agent around his/her current call quality

A feature has been added in which a traffic light style MOS score is displayed on the Engage page, next to the active contact, to provide a visual indicator to the agent around his/her current call quality. Color codes based on MOS Score are: Green (4-5), Yellow (3), and Red Gradients (1-2) and you can hover over the icon to get the current score.

----

### HAR-1251 Add a feature in which a user may redial the last called phone number from within the Engage page

A feature has been added in which a user may redial the last called phone number from within the Engage page.

----

### HAR-1356 Add a feature in which an administrator can reset his/her password to the ConnectPath admin portal

A feature has been added in which an administrator can reset his/her password to the ConnectPath admin portal. The feature works by sending a forgot password E-Mail which includes a Pin that can be used to change password.

----

### HAR-1436 Add a feature in which an administrator can reset his/her password to the ConnectPath admin portal

A feature has been added in which an administrator can reset his/her password to the ConnectPath admin portal. The feature works by sending a forgot password E-Mail which includes a Pin that can be used to change password.

----

### HAR-1626 Add a feature in which an administrator can reset his/her password to the ConnectPath admin portal

A feature has been added in which an administrator can reset his/her password to the ConnectPath admin portal. The feature works by sending a forgot password E-Mail which includes a Pin that can be used to change password.

----

### HAR-1435 Add a feature in which an administrator who enters an incorrect username and/or password in the ConnectPath admin portal is notified as such

A feature has been added in which an administrator who enters an incorrect username and/or password in the ConnectPath admin portal is notified as such.

----

### HAR-1527 Add a feature in which an administrators' E-Mail Address used to log into the ConnectPath admin portal is made case insensitive

A feature has been added in which an administrators' E-Mail Address used to log into the ConnectPath admin portal is made case insensitive.

----

### HAR-1471 Add a feature in which an agent may delete his/her private pre-canned scripts

A feature has been added in which an agent may delete his/her private pre-canned scripts.

----

### HAR-1571 Add a feature in which customers may specify an S3 bucket to store MMS attachments received by a customer

A feature has been added in which customers may specify an S3 bucket to store MMS attachments received by a customer.

----

### HAR-1468 Add a feature in which pre-canned scripts will filter based on queue for E-Mail based communications

A feature has been added in which pre-canned scripts will filter based on queue for E-Mail based communications.

----

### HAR-1378 Add a feature in which real time metrics are available under Queue Performance, specifically Agent and Queued Contact Counts

A feature has been added in which real time metrics are available under Queue Performance, specifically Agent and Queued Contact Counts. The following metrics are now available:

AGENTS_AFTER_CONTACT_WORK
Unit: COUNT
Name in real-time metrics report: ACW
AGENTS_AVAILABLE
Unit: COUNT
Name in real-time metrics report: Available
AGENTS_ERROR
Unit: COUNT
Name in real-time metrics report: Error
AGENTS_NON_PRODUCTIVE
Unit: COUNT
Name in real-time metrics report: NPT (Non-Productive Time)
AGENTS_ON_CALL
Unit: COUNT
Name in real-time metrics report: On contact
AGENTS_ON_CONTACT
Unit: COUNT
Name in real-time metrics report: On contact
AGENTS_ONLINE
Unit: COUNT
Name in real-time metrics report: Online
AGENTS_STAFFED
Unit: COUNT
Name in real-time metrics report: Staffed
CONTACTS_IN_QUEUE
Unit: COUNT
Name in real-time metrics report: In queue
CONTACTS_SCHEDULED
Unit: COUNT
Name in real-time metrics report: Scheduled

----

### HAR-1405 Add a feature in which the listing of routing profiles is displayed alphabetically

A feature has been added in which the listing of routing profiles is displayed alphabetically.

----

### HAR-1465 Add a feature in which using the pre-canned scripts with an E-Mail message maintains the original E-Mail in addition to the appended pre-canned script

A feature has been added in which using the pre-canned scripts with an E-Mail message maintains the original E-Mail in addition to the appended pre-canned script.

----

### HAR-678 Add a feature in which, during onboarding, an administrator no longer needs to provide the AWS Account ID

A feature has been added in which, during onboarding, an administrator no longer needs to provide the AWS Account ID, providing ease of onboarding of ConnectPath.

----

### HAR-871 Add feature in which a user may initiate an SMS or MMS based conversation from within ConnectPath

A feature has been added in which a user may initiate an SMS or MMS based conversation from within ConnectPath. The agent needs to be available as the feature Creates a Task against a contact flow that routes the task to the agent. As a result, a brief modal will be displayed that is auto accepted. To setup you need to enable SMS/MMS Webhooks in the instance first (and if SMS/MMS Webhooks are already setup, you will need to add a default phone number prefixed with country code), then Enable Outbound Messages, selecting a purpose built Contact Flow to use. The contact flow should be a simple flow that routes the contact to the current agent. The phone number to initiate conversation with can be Free form or Directory, currently no support for Quick Connects due to their alignment to voice only contacts. After conversation is ended by the agent, further messages from customer follow standard inbound flow. In-line translation and pre-canned scripts are both supported.

----

### HAR-1431 Add feature in which a user may initiate an SMS or MMS based conversation from within ConnectPath

A feature has been added in which a user may initiate an SMS or MMS based conversation from within ConnectPath. The agent needs to be available as the feature Creates a Task against a contact flow that routes the task to the agent. As a result, a brief modal will be displayed that is auto accepted. To setup you need to enable SMS/MMS Webhooks in the instance first (and if SMS/MMS Webhooks are already setup, you will need to add a default phone number prefixed with country code), then Enable Outbound Messages, selecting a purpose built Contact Flow to use. The contact flow should be a simple flow that routes the contact to the current agent. The phone number to initiate conversation with can be Free form or Directory, currently no support for Quick Connects due to their alignment to voice only contacts. After conversation is ended by the agent, further messages from customer follow standard inbound flow. In-line translation and pre-canned scripts are both supported.

----

### HAR-1324 Add feature in which a user may initiate an SMS or MMS based conversation from within ConnectPath

A feature has been added in which a user may initiate an SMS or MMS based conversation from within ConnectPath. The agent needs to be available as the feature Creates a Task against a contact flow that routes the task to the agent. As a result, a brief modal will be displayed that is auto accepted. To setup you need to enable SMS/MMS Webhooks in the instance first (and if SMS/MMS Webhooks are already setup, you will need to add a default phone number prefixed with country code), then Enable Outbound Messages, selecting a purpose built Contact Flow to use. The contact flow should be a simple flow that routes the contact to the current agent. The phone number to initiate conversation with can be Free form or Directory, currently no support for Quick Connects due to their alignment to voice only contacts. After conversation is ended by the agent, further messages from customer follow standard inbound flow. In-line translation and pre-canned scripts are both supported.

----

### HAR-1572 Add feature in which a user may opt to interact with ConnectPath in Portuguese

A feature has been added in which a user may opt to interact with ConnectPath in Portuguese.

----

### HAR-1349 Add feature in which a user may opt to interact with ConnectPath in Portuguese

A feature has been added in which a user may opt to interact with ConnectPath in Portuguese.

----

### HAR-1574 Add feature in which a user may opt to interact with ConnectPath in Portuguese

A feature has been added in which a user may opt to interact with ConnectPath in Portuguese.

----

### HAR-1584 Add feature in which permissioned users may generate API requests to manage directories in ConnectPath

A feature has been added in which permissioned users may generate API requests to manage directories in ConnectPath. This may be used for such actions as importing a list of contacts into the Directory, exporting a list of conacts from the Directory or creating a bidirectional syncronization process with the Directory.

----

### HAR-1585 Add feature in which permissioned users may generate API requests to manage directories in ConnectPath

A feature has been added in which permissioned users may generate API requests to manage directories in ConnectPath. This may be used for such actions as importing a list of contacts into the Directory, exporting a list of conacts from the Directory or creating a bidirectional syncronization process with the Directory.

----

### HAR-1586 Add feature in which permissioned users may generate API requests to manage directories in ConnectPath

A feature has been added in which permissioned users may generate API requests to manage directories in ConnectPath. This may be used for such actions as importing a list of contacts into the Directory, exporting a list of conacts from the Directory or creating a bidirectional syncronization process with the Directory.

----

### HAR-1587 Add feature in which permissioned users may generate API requests to manage directories in ConnectPath

A feature has been added in which permissioned users may generate API requests to manage directories in ConnectPath. This may be used for such actions as importing a list of contacts into the Directory, exporting a list of conacts from the Directory or creating a bidirectional syncronization process with the Directory.

----

### HAR-954 Add feature in which permissioned users may generate API requests to manage directories in ConnectPath

A feature has been added in which permissioned users may generate API requests to manage directories in ConnectPath. This may be used for such actions as importing a list of contacts into the Directory, exporting a list of conacts from the Directory or creating a bidirectional syncronization process with the Directory.

----

### HAR-1654 Add feature in which permissioned users may generate API requests to manage directories in ConnectPath

A feature has been added in which permissioned users may generate API requests to manage directories in ConnectPath. This may be used for such actions as importing a list of contacts into the Directory, exporting a list of conacts from the Directory or creating a bidirectional syncronization process with the Directory.

----

### HAR-953 Add feature in which permissioned users may generate API requests to manage directories in ConnectPath

A feature has been added in which permissioned users may generate API requests to manage directories in ConnectPath. This may be used for such actions as importing a list of contacts into the Directory, exporting a list of conacts from the Directory or creating a bidirectional syncronization process with the Directory.

----

### HAR-955 Add feature in which permissioned users may generate API requests to manage directories in ConnectPath

A feature has been added in which permissioned users may generate API requests to manage directories in ConnectPath. This may be used for such actions as importing a list of contacts into the Directory, exporting a list of conacts from the Directory or creating a bidirectional syncronization process with the Directory.

----

### HAR-956 Add feature in which permissioned users may generate API requests to manage directories in ConnectPath

A feature has been added in which permissioned users may generate API requests to manage directories in ConnectPath. This may be used for such actions as importing a list of contacts into the Directory, exporting a list of conacts from the Directory or creating a bidirectional syncronization process with the Directory.

----

### HAR-957 Add feature in which permissioned users may generate API requests to manage directories in ConnectPath

A feature has been added in which permissioned users may generate API requests to manage directories in ConnectPath. This may be used for such actions as importing a list of contacts into the Directory, exporting a list of conacts from the Directory or creating a bidirectional syncronization process with the Directory.

----

### HAR-958 Add feature in which permissioned users may generate API requests to manage directories in ConnectPath

A feature has been added in which permissioned users may generate API requests to manage directories in ConnectPath. This may be used for such actions as importing a list of contacts into the Directory, exporting a list of conacts from the Directory or creating a bidirectional syncronization process with the Directory.

----

### HAR-959 Add feature in which permissioned users may generate API requests to manage directories in ConnectPath

A feature has been added in which permissioned users may generate API requests to manage directories in ConnectPath. This may be used for such actions as importing a list of contacts into the Directory, exporting a list of conacts from the Directory or creating a bidirectional syncronization process with the Directory.

----

### HAR-960 Add feature in which permissioned users may generate API requests to manage directories in ConnectPath

A feature has been added in which permissioned users may generate API requests to manage directories in ConnectPath. This may be used for such actions as importing a list of contacts into the Directory, exporting a list of conacts from the Directory or creating a bidirectional syncronization process with the Directory.

----

### HAR-961 Add feature in which permissioned users may generate API requests to manage directories in ConnectPath

A feature has been added in which permissioned users may generate API requests to manage directories in ConnectPath. This may be used for such actions as importing a list of contacts into the Directory, exporting a list of conacts from the Directory or creating a bidirectional syncronization process with the Directory.

----

### HAR-858 Add feature in which permissioned users may generate API requests to manage directories in ConnectPath

A feature has been added in which permissioned users may generate API requests to manage directories in ConnectPath. This may be used for such actions as importing a list of contacts into the Directory, exporting a list of conacts from the Directory or creating a bidirectional syncronization process with the Directory.

----

### HAR-1647 Add feature in which permissioned users may generate API requests to manage directories in ConnectPath

A feature has been added in which permissioned users may generate API requests to manage directories in ConnectPath. This may be used for such actions as importing a list of contacts into the Directory, exporting a list of conacts from the Directory or creating a bidirectional syncronization process with the Directory.

----

### HAR-1583 Add feature in which permissioned users may generate API requests to manage directories in ConnectPath

A feature has been added in which permissioned users may generate API requests to manage directories in ConnectPath. This may be used for such actions as importing a list of contacts into the Directory, exporting a list of conacts from the Directory or creating a bidirectional syncronization process with the Directory.

----

### HAR-1297 Add feature in which permissioned users may generate API requests to manage users in ConnectPath

A feature has been added in which permissioned users may generate API requests to manage users in ConnectPath. This may be used for such actions as importing a list of contacts into the users table, exporting a list of conacts from the users table or creating a bidirectional syncronization process with the users table.

----

### HAR-1298 Add feature in which permissioned users may generate API requests to manage users in ConnectPath

A feature has been added in which permissioned users may generate API requests to manage users in ConnectPath. This may be used for such actions as importing a list of contacts into the users table, exporting a list of conacts from the users table or creating a bidirectional syncronization process with the users table.

----

### HAR-1299 Add feature in which permissioned users may generate API requests to manage users in ConnectPath

A feature has been added in which permissioned users may generate API requests to manage users in ConnectPath. This may be used for such actions as importing a list of contacts into the users table, exporting a list of conacts from the users table or creating a bidirectional syncronization process with the users table.

----

### HAR-1300 Add feature in which permissioned users may generate API requests to manage users in ConnectPath

A feature has been added in which permissioned users may generate API requests to manage users in ConnectPath. This may be used for such actions as importing a list of contacts into the users table, exporting a list of conacts from the users table or creating a bidirectional syncronization process with the users table.

----

### HAR-1301 Add feature in which permissioned users may generate API requests to manage users in ConnectPath

A feature has been added in which permissioned users may generate API requests to manage users in ConnectPath. This may be used for such actions as importing a list of contacts into the users table, exporting a list of conacts from the users table or creating a bidirectional syncronization process with the users table.

----

### HAR-1302 Add feature in which permissioned users may generate API requests to manage users in ConnectPath

A feature has been added in which permissioned users may generate API requests to manage users in ConnectPath. This may be used for such actions as importing a list of contacts into the users table, exporting a list of conacts from the users table or creating a bidirectional syncronization process with the users table.

----

### HAR-1611 Add feature in which permissioned users may generate API requests to manage users in ConnectPath

A feature has been added in which permissioned users may generate API requests to manage users in ConnectPath. This may be used for such actions as importing a list of contacts into the users table, exporting a list of conacts from the users table or creating a bidirectional syncronization process with the users table.

----

### HAR-1234 Add feature in which permissioned users may generate API requests to manage users in ConnectPath

A feature has been added in which permissioned users may generate API requests to manage users in ConnectPath. This may be used for such actions as importing a list of contacts into the users table, exporting a list of conacts from the users table or creating a bidirectional syncronization process with the users table.

----

### HAR-1367 Add feature in which team status will reflect the longest call placed on hold by a given agent

A feature has been added in which the team status will reflect the longest call placed on hold by a given agent.

----

### HAR-1369 Add feature in which team status will reflect the longest call placed on hold by a given agent

A feature has been added in which the team status will reflect the longest call placed on hold by a given agent.

----

### HAR-1373 Add feature in which team status will reflect the longest call placed on hold by a given agent

A feature has been added in which the team status will reflect the longest call placed on hold by a given agent.

----

### HAR-1532 Correct behavior in which administrators in ConnectPath admin portal may experience inconsistent behavior within the ConnectPath admin interfaces

A defect has been corrected in which administrators in ConnectPath admin portal may experience inconsistent behavior within the ConnectPath admin interfaces.

----

### HAR-1288 Correct behavior in which agent to agent calls may not be reflected under recent activity

A defect has been corrected in which agent to agent calls may not be reflected under recent activity.

----

### HAR-1639 Correct behavior in which customer profile tab is blank if agent accepts a call when engage page is not in focus

A defect has been corrected in which customer profile tab is blank if agent accepts a call when engage page is not in focus.

----

### HAR-1642 Correct behavior in which customer profile tab is blank if agent accepts a call when engage page is not in focus

A defect has been corrected in which customer profile tab is blank if agent accepts a call when engage page is not in focus.

----

### HAR-1509 Correct behavior in which customers may inadvertently create schedules that have a close time that occurs before an open time, rendering display of the page impossible unless manually corrected by CloudHesive

A defect has been corrected in which customers may inadvertently create schedules that have a close time that occurs before an open time, rendering display of the page impossible unless manually corrected by CloudHesive.

----

### HAR-1510 Correct behavior in which customers may inadvertently create schedules that have a close time that occurs before an open time, rendering display of the page impossible unless manually corrected by CloudHesive

A defect has been corrected in which customers may inadvertently create schedules that have a close time that occurs before an open time, rendering display of the page impossible unless manually corrected by CloudHesive.

----

### HAR-1469 Correct behavior in which customers with a significant amount of queues and/or agent to agent conversations may experience inconsistent behavior within the ConnectPath interfaces

A defect has been corrected in which customers with a significant amount of queues and/or agent to agent conversations may experience inconsistent behavior within the ConnectPath interfaces.

----

### HAR-1514 Correct behavior in which customers with a significant amount of queues and/or agent to agent conversations may experience inconsistent behavior within the ConnectPath interfaces

A defect has been corrected in which customers with a significant amount of queues and/or agent to agent conversations may experience inconsistent behavior within the ConnectPath interfaces.

----

### HAR-1235 Correct behavior in which customers' Activity History search may timeout and produce no indication as such and produce no results

A defect has been corrected in which customers' Activity History search may timeout and produce no indication as such and produce no results.

----

### HAR-1444 Correct behavior in which Iframe tab is not closed when agent status changes from ACW to Available

A defect has been corrected in which Iframe tab is not closed when agent status changes from ACW to Available.

----

### HAR-928 Correct behavior in which users without permissions to Quality/Analytics are informed as such when opening a contact that has a call recording and/or transcript

A defect has been corrected in which users without permissions to Quality/Analytics are informed as such when opening a contact that has a call recording and/or transcript.

----

### HAR-1287 Correct behavior where, in some circumstances agent to agent calling or monitoring/barging an agent conversation may fail

A defect has been corrected where, in some circumstances agent to agent calling or monitoring/barging an agent conversation may fail.

----

### HAR-1501 Correct behavior where, in some circumstances agent to agent calling or monitoring/barging an agent conversation may fail

A defect has been corrected where, in some circumstances agent to agent calling or monitoring/barging an agent conversation may fail.

----