---
title: "v1.12.0"
excerpt_separator: "<!--more-->"
collection: release_notes
permalink: /:categories/:title/
date: 2024-10-01
layout: single
toc: true
toc_sticky: true
categories:
- Release Notes
sidebar:
nav: "docs"
---

## ConnectPath Release Notes, October 2024

### Breaking Changes

----
N/A
 
### Major Features

----
### Add a feature in which Amazon Connect ACGR may be onboarded and managed from ConnectPath
HAR-1740
HAR-1742
HAR-1744
HAR-1745
HAR-7847
HAR-8028
HAR-8070
HAR-8141
HAR-8176
HAR-8274
HAR-8788
HAR-8856
HAR-9265
A feature has been added in which Amazon Connect ACGR may be onboarded and managed from ConnectPath.

### Supporting Features

----
### Add a feature in which the old/new activity search icons are named to reflect their current state
HAR-7866
A feature has been added in which the old/new activity search icons are named to reflect their current state.

----
### Add a feature that will add info for N/A agent and N/A queue entries in New Activity Search
HAR-6981
CS0018797
A feature has been added in which N/A is used as a placeholder in the absence of an agent and/or queue value in the New Activity Search.

----
### Add a feature that will allow QuickSight "Pop-Out Dashboard" to be "Printed" to PDF (native capability of SDK)
HAR-8255
A feature has been added in which QuickSight "Pop-Out Dashboard" can be "Printed" to PDF (native capability of SDK). Note that this requires allowlisting of the ConnectPath domain within your Quicksight instance.

----
### Add a feature that will present SLA metrics in historical report export
HAR-2785
A feature has been added in which SLA metrics in have been included in the legacy historical report export under a new tab.

----
### Add a feature where a default guided flow will be opened lacking a defined guided flow
HAR-4615
HAR-8993
A feature has been added in which a default guided flow will be opened lacking a defined guided flow.

----
### Add a feature where all channels, all directions are supported for Dynamics integration
HAR-4336
A feature has been added in which all channels, all directions are supported for Dynamics integration.

----
### Add a feature where Custom Links can be opened in ConnectPath
HAR-4007
A feature has been added in which Custom Links can be opened in ConnectPath.

----
### Add a feature where in the Teams Integration Wizard: Change the way buttons behave + Steps styling issue
HAR-4172
A feature has been added in which in the Teams Integration Wizard the button behavior and steps styling have had UI issues corrected.

----
### Add a feature where Outbound SMS creation errors are handled properly
HAR-8572
A feature has been added in which Outbound SMS creation errors are handled properly.

----
### Add a feature where the “Teams login” popup is improved
HAR-4162
A feature has been added in which the “Teams login” popup is improved.

----
### Add a feature where the user message is displayed in the team status drawer when using the Teams integration
HAR-6828
A feature has been added in which the user message is displayed in the team status drawer when using the Teams integration.

----
### Add a feature where tooltips refer to correct references
HAR-8574
A feature has been added in which tooltips refer to correct references in the Dynamics Wizard.

----
### Add a feature where when creating the integration, we need to wait until the SYNC is finished to show the "Login" button to sync the Team Status Drawer and show message
HAR-4171
A feature has been added in which, when creating the integration, we need to wait until the SYNC is finished to show the "Login" button to sync the Team Status Drawer and show message.

----
### Add a feature where Wisdom has been renamed to Q
HAR-5762
CS0023751
A feature has been added in which the Wisdom has been renamed to Q.

----
### Add a feature in which a check is added for when we are creating / updating the integration to verify that the correct permissions are granted (SMTP/TEAMS)
HAR-4156
A feature has been added in which a check is added for when we are creating / updating the integration to verify that the correct permissions are granted (SMTP/TEAMS).

### Defects

----
### Correct a behavior in which certain errors in the Dynamics integration may result in a failure to proceed to next steps
HAR-8992
A defect has been corrected where certain errors in the Dynamics integration (runtime) may result in a failure to proceed to next steps.

----
### Correct a behavior where a missed counter for External (ACD) is not incremented in Team Status Drawer when a task / SMS is sent
HAR-4041
A defect has been corrected where a missed counter for External (ACD) is not incremented in Team Status Drawer when a task / SMS is sent.

----
### Correct a behavior where agent availability is not available for an emergency access user who has selected all queues
HAR-9132
A defect has been corrected where agent availability is not available for an emergency access user who has selected all queues.

----
### Correct a behavior where agent is Unable to Dial Numbers from the Recent Activity Tab
HAR-8084
CS0020519
A defect has been corrected where an agent is Unable to Dial Numbers from the Recent Activity Tab via click-to-call.

----
### Correct a behavior where Agent State Time reporting Not Consistent between Connect and ConnectPath Historical Reporting focusing on Legacy reporting
HAR-7007
CS0011792,CS0022563
A defect has been corrected where Agent State Time reporting Not Consistent between Connect and ConnectPath Historical Reporting focusing on Legacy reporting.

----
### Correct a behavior where announcements do not load
HAR-9284
A defect has been corrected where announcements do not load.

----
### Correct a behavior where contact attributes are not available to a script and if the value is not populated the modal to enter a value does not respond
HAR-7202
CS0018101
HAR-7203
CS0018101
HAR-7218
HAR-7219
A defect has been corrected where contact attributes are not available to a script and if the value is not populated the modal to enter a value does not respond.

----
### Correct a behavior where for CRM integrations, CRUD is not working
HAR-9273
A defect has been corrected where, for CRM integrations, CRUD is not working.

----
### Correct a behavior where for Quicksight billing, the toggle is in the wrong position
HAR-8573
A defect has been corrected where, for Quicksight billing, the toggle is in the wrong position under the instance settings after Quicksight has been deployed to the instance.

----
### Correct a behavior where Instance Admin can not see Agent Performance stats on Dashboard
HAR-9038
A defect has been corrected where the Instance Admin can not see Agent Performance stats on Dashboard.

----
### Correct a behavior where logout doesn't clear cookie and subsequent login attempts may fail
HAR-8571
A defect has been corrected where logout doesn't clear cookie and subsequent login attempts may fail.

----
### Correct a behavior where pagination of teams list does not allow searching
HAR-8821
A defect has been corrected where pagination of teams list does not allow searching.

----
### Correct a behavior where pagination of teams list does not display contacts
HAR-8879
A defect has been corrected where pagination of teams list does not display contacts.

----
### Correct a behavior where pagination of teams list does not display updates
HAR-9143
A defect has been corrected where pagination of teams list does not display updates.

----
### Correct a behavior where personal activity is not loaded by moving listActivity -> listCtr outside Login
HAR-9089
A defect has been corrected where personal activity is not loaded by moving listActivity -> listCtr outside Login.

----
### Correct a behavior where queue rebalancing might behave inconsistently
HAR-4426
HAR-8290
A defect has been corrected where queue rebalancing might behave inconsistently.

----
### Correct a behavior where team status drawer is not performant
HAR-9344
A defect has been corrected where the team status drawer is not performant.

----
### Correct a behavior where the my queues dropdown does not resize based on the number of queues
HAR-9074
A defect has been corrected where the my queues dropdown does not resize based on the number of queues.

----
### Correct a behavior where user gets a validation error when one creates or edits a Teams integration
HAR-9030
A defect has been corrected where a user gets a validation error when one creates or edits a Teams integration.

----
### Correct a behavior where Warm Transfer while Monitoring is not dropping monitor when Agent ends the call
HAR-8837
CS0020326
A defect has been corrected where Warm Transfer while Monitoring is not dropping monitor when Agent ends the call.

----
### Correct a behavior where when onboarding a new instance may fail if the default routing profile does not have a queue
HAR-4872
A defect has been corrected where when onboarding a new instance may fail if the default routing profile does not have a queue.