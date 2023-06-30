---
title: "v1.3.0"
excerpt_separator: "<!--more-->"
collection: release_notes
permalink: /:categories/:title/
date: 2023-06-27
layout: single
toc: true
toc_sticky: true
categories:
- Release Notes
sidebar:
nav: "docs"
---

## ConnectPath Release Notes, June 2023

### Add a feature in which a new Activity Search page is present, that allows in-line filtering and sorting, up to 5,000 results and downloadable results with less clicks 
HAR-1686 
HAR-2213 
HAR-2236 
HAR-2334 
HAR-2335 
HAR-2336 
HAR-2402 
HAR-2403 
HAR-2507 
HAR-2508 
HAR-2517 
HAR-2521 
HAR-2522 
HAR-2572 
HAR-2574 
HAR-2604 
HAR-2605 
HAR-2655 
HAR-2656 
HAR-2680 
HAR-2707 
HAR-2819 
HAR-2841 
HAR-2843 

A feature has been added in which a new Activity Search page is present, that allows in-line filtering and sorting, up to 5,000 results and downloadable results with less clicks. The "old" Activity Search page will be deprecated in a future release of ConnectPath (with prior notification).

----

### Add a feature in which a newer Jabra SDK is utilize to help eliminate inconsistent behavior across Jabra Headset models 
HAR-2870 
A feature has been added in which a newer Jabra SDK is utilize to help eliminate inconsistent behavior across Jabra Headset models. In a future release we will add the ability to toggle between old and new versions of the SDK to ensure as broad support as possible for Jabra Headset models.

----

### Add a feature in which a user may favorite a default screen under their preferences in ConnectPath. Upon login this screen will be the first screen displayed. Currently and without making a selection, this screen is the home screen 
HAR-2660 
HAR-2957 
A feature has been added in which a user may favorite a default screen under their preferences in ConnectPath. Upon login this screen will be the first screen displayed. Currently and without making a selection, this screen is the home screen.

----

### Add a feature in which additional metrics are displayed under queue management, derived from the same metrics on the home screen and carrying the same refresh rate (1 minute or less) 
HAR-2581 
A feature has been added in which additional metrics are displayed under queue management, derived from the same metrics on the home screen and carrying the same refresh rate (1 minute or less).

----

### Add a feature in which changes made by queue management are easily searched via filters against the audit entries 
HAR-2482 
HAR-2950 
HAR-973
A feature has been added in which changes made by queue management are easily searched via filters against the audit entries.

----

### Add a feature in which commas may be used in either the Engage screen or Directory contacts to indicate that any digits to the right of the commas should be entered as DTMF after a contact has been connected. This is generally used to reach individuals behind extensions that do not have a DID number available 
HAR-2542 
A feature has been added in which commas may be used in either the Engage screen or Directory contacts to indicate that any digits to the right of the commas should be entered as DTMF after a contact has been connected. This is generally used to reach individuals behind extensions that do not have a DID number available.

----

### Add a feature in which customers may access ConnectPath using the connectpath.cx domain; first time customers will have their Amazon Connect instance automatically allow-listed for this new domain and users may opt to use either the old domain or the new domain, please see https://docs.dextr.cloud/system-requirements/ for a listing of the FQDNs under this new domain
HAR-1182 
HAR-1186 
HAR-1187 
HAR-1795 
HAR-2657 
HAR-2704 
HAR-2705 
HAR-2817 
A feature has been added in which customers may access ConnectPath using the connectpath.cx domain; first time customers will have their Amazon Connect instance automatically allow-listed for this new domain and users may opt to use either the old domain or the new domain, please see https://docs.dextr.cloud/system-requirements/ for a listing of the FQDNs under this new domain.

----

### Add a feature in which during a cold transfer the user is informed that the transfer is in progress and the user will be disconnected from the call once the transfer completes. This will only be displayed during cold/blind transfers for customers whose Amazon Connect instances have Multiparty calling enabled and is intended to be a workaround due to a defect confirmed by AWS in which the two parties may not hear each other after the transfer has been completed. After AWS has corrected this defect this feature may be rolled back, with prior notice
HAR-2797 
A feature has been added in which during a cold transfer the user is informed that the transfer is in progress and the user will be disconnected from the call once the transfer completes. This will only be displayed during cold/blind transfers for customers whose Amazon Connect instances have Multiparty calling enabled and is intended to be a workaround due to a defect confirmed by AWS in which the two parties may not hear each other after the transfer has been completed. After AWS has corrected this defect this feature may be rolled back, with prior notice. 

----

### Add a feature in which external calls transferred from contact flows are represented in the Activity Search screen
HAR-1775 
A feature has been added in which external calls transferred from contact flows are represented in the Activity Search screen.

----

### Add a feature in which non-English Translations have been added to queue management
HAR-2527 
A feature has been added in which non-English Translations have been added to queue management.

----

### Add a feature in which notifications and notification counters for Chat has been improved
HAR-2397 
HAR-2736 
A feature has been added in which notifications and notification counters for Chat has been improved.

----

### Add a feature in which post contact surveys have been enhanced
HAR-2624 
A feature has been added in which post contact surveys have been enhanced.

----

### Add a feature in which queue rebalancing does not display deleted users
HAR-2583 
A feature has been added in which queue rebalancing does not display deleted users.

----

### Add a feature in which SMTP errors are presented to the front end in the case that an E-Mail cannot be sent to facilitate troubleshooting of customer supplied SMTP server
HAR-2285 
A feature has been added in which SMTP errors are presented to the front end in the case that an E-Mail cannot be sent to facilitate troubleshooting of customer supplied SMTP server

----

### Add a feature in which the activity search (new activity search only) results will display an indicator if an script was used for a given activity. The script must not be edited after being selected for this to report correctly 
HAR-1593 
HAR-2760 
A feature has been added in which the activity search (new activity search only) results will display an indicator if an script was used for a given activity. The script must not be edited after being selected for this to report correctly.

----

### Add a feature in which the Agent Queue name will be resolved to the Agent Username in Activity Search and Activity Detail screens 
HAR-1786 
A feature has been added in which the Agent Queue name will be resolved to the Agent Username in Activity Search and Activity Detail screens.

----

### Add a feature in which the Amazon Connect instance quota will be checked before a new routing profile has been created under queue rebalancing, when less than 10 available routing profiles remain, a warning will be displayed, when 0 remain, the action will throw an error. Queue management attempts to use unused routing profiles (previously created by queue management) before creating a new routing profile 
HAR-2319 
HAR-2468 
HAR-2865 
A feature has been added in which the Amazon Connect instance quota will be checked before a new routing profile has been created under queue rebalancing, when less than 10 available routing profiles remain, a warning will be displayed, when 0 remain, the action will throw an error. Queue management attempts to use unused routing profiles (previously created by queue management) before creating a new routing profile.

----

### Add a feature in which the onboarding of a new Amazon Connect instance is easier due to reduced fields that require input during the onboarding process 
HAR-1547 
A feature has been added in which the onboarding of a new Amazon Connect instance is easier due to reduced fields that require input during the onboarding process.

----

### Add a feature in which the queue management interface has been enhanced
HAR-2407 
A feature has been added in which the queue management interface has been enhanced.

----

### Add a feature in which the user info panel can be rendered in lower resolution settings
HAR-2332 
A feature has been added in which the user info panel can be rendered in lower resolution settings.

----

### Add a feature in which user status and routing profile are refreshed in real time in queue management 
HAR-2125 
HAR-2550 
HAR-2580 
A feature has been added in which user status and routing profile are refreshed in real time in queue management.

----

### Add a feature in which usernames in queue management are not wrapped but are instead truncated with the full version of the username available as a tooltip 
HAR-2421 
HAR-2615 
HAR-2954 
A feature has been added in which usernames in queue management are not wrapped but are instead truncated with the full version of the username available as a tooltip.

----

### Add features in which users are warned before a script is deleted and private scripts are usable only by the user that created them 
HAR-1377 
A feature has been added in which users are warned before a script is deleted and private scripts are usable only by the user that created them.

----

### Add support for Office 365 OAUTH authentication for SMTP in standard Office 365 Regions for E-Mail Integration 
HAR-1190 
HAR-2380 
HAR-2718 
HAR-2759 
HAR-2779 
HAR-2796 
HAR-2882 
HAR-2909 
A feature has been added for Office 365 OAUTH authentication for SMTP in standard Office 365 Regions for E-Mail Integration. You may read more about it under <https://docs.dextr.cloud/emailTask/>.

----

### Correct a behavior in which a call in progress (in the case of a transfer) cannot be cancelled so that another number may be attempted 
HAR-2798
A defect has been corrected in which a call in progress (in the case of a transfer) cannot be cancelled so that another number may be attempted.

----

### Correct a behavior in which a post contact survey was not renamable. This was corrected by utilizing an internal reference and existing post contact surveys may need to be manually updated by CloudHesive 
HAR-2647 
A defect has been corrected in which a post contact survey was not renamable. This was corrected by utilizing an internal reference and existing post contact surveys may need to be manually updated by CloudHesive.

----

### Correct a behavior in which a second question with different values will overwrite the first questions values in a post contact survey 
HAR-2883 
A defect has been corrected in which a second question with different values will overwrite the first questions values in a post contact survey.

----

### Correct a behavior in which a user cannot set an E911 address if the instance uses SAML based authentication 
HAR-2445 
A defect has been corrected in which a user could not set an E911 address if the instance uses SAML based authentication.

----

### Correct a behavior in which a user initiated contact will spawn a new conversation when the user initiated conversation is ended 
HAR-2499 
HAR-2536 
A defect has been corrected in which a user initiated contact spawned a new conversation when the user initiated conversation is ended.

----

### Correct a behavior in which a user may not be able to see his/her own post contact survey results 
HAR-2644 
A defect has been corrected in which a user may not be able to see his/her own post contact survey results.

----

### Correct a behavior in which an instance with more than one post contact survey would not account for the data from additional post contact surveys
HAR-2646 
A defect has been corrected in which an instance with more than one post contact survey would not account for the data from additional post contact surveys.

----

### Correct a behavior in which an user cannot cold transfer to a quick connect if Multiparty calling is enabled 
HAR-2949 
A defect has been corrected in which a user could not cold transfer to a quick connect if Multiparty calling is enabled.

----

### Correct a behavior in which an users username is populated in the redial button
HAR-1832 
A defect has been corrected in which an users username is populated in the redial button.

----

### Correct a behavior in which averages in post contact survey widget are not consistently calculated based on all users versus username filter 
HAR-2826 
A defect has been corrected in which averages in post contact survey widget are not consistently calculated based on all users versus username filter.

----

### Correct a behavior in which certain customers could not use the alias of their alias to log into ConnectPath 
HAR-2814 
A defect has been corrected in which certain customers could not use the alias of their alias to log into ConnectPath.

----

### Correct a behavior in which certain permissions were selectable but had no impact to user permissions. These permissions have been made read only 
HAR-2777 
A defect has been corrected in which certain permissions were selectable but had no impact to user permissions. These permissions have been made read only.

----

### Correct a behavior in which ConnectPath custom monitoring and whisper coach may not work. This has been addressed by offering Amazon Connect native monitoring and barge 
HAR-2036 
HAR-2400 
HAR-2401 
HAR-2405 
A defect has been corrected in which ConnectPath custom monitoring and whisper coach may not work. This has been addressed by offering Amazon Connect native monitoring and barge.

----

### Correct a behavior in which ConnectPath custom monitoring and whisper coach may not be released if a user ends a contact during monitoring or whisper activities
HAR-2383 
A defect has been corrected in which ConnectPath custom monitoring and whisper coach may not be released if a user ends a contact during monitoring or whisper activities.

----

### Correct a behavior in which historical reports cannot be run and instead display an Error when the report period includes June 13th. This is a result of incorrect data received from AWS during the AWS Service Event in the Northern Virginia Region on June, 13th 2023
HAR-2968 
A defect has been corrected in which historical reports cannot be run and instead display an Error when the report period includes June 13th. This is a result of incorrect data received from AWS during the AWS Service Event in the Northern Virginia Region on June, 13th 2023.

----

### Correct a behavior in which MessageMedia based SMS messages may not be received by ConnectPath
HAR-2530 
A defect has been corrected in which MessageMedia based SMS messages may not be received by ConnectPath.

----

### Correct a behavior in which more than 1 post contact survey could not exist and/or editing an existing post contact survey would fail in error 
HAR-2649 
A defect has been corrected in which more than 1 post contact survey could not exist and/or editing an existing post contact survey would fail in error.

----

### Correct a behavior in which multiple questions may incorrectly skew the average of a post contact survey response 
HAR-2896 
A defect has been corrected in which multiple questions may incorrectly skew the average of a post contact survey response.

----

### Correct a behavior in which newly created users cannot log into ConnectPath
HAR-2963 
A defect has been corrected in which newly created users cannot log into ConnectPath. This issue was a transient issue from the Amazon Connect Streams SDK that was self-correcting without additional action being required.

----

### Correct a behavior in which post contact survey results did not roll up all queues when the queue summary option was selected 
HAR-2645 
A defect has been corrected in which post contact survey results did not roll up all queues when the queue summary option was selected.

----

### Correct a behavior in which the Amazon Connect instance administrator cannot log into ConnectPath
HAR-2920 
A defect has been corrected in which in which the Amazon Connect instance administrator cannot log into ConnectPath. This correction consists of a workaround with a permanent fix to be included in a future release.

----

### Correct a behavior in which the Engage tab is not available when a user is utilizing the native Amazon Connect CCP 
HAR-2528 
A defect has been corrected in which the Engage tab is not available when a user is utilizing the native Amazon Connect CCP.

----

### Correct a behavior in which the first message sent by a user in the Chat UI disappears from the Chat UI 
HAR-2535 
A defect has been corrected in which the first message sent by a user in the Chat UI disappears from the Chat UI.

----

### Correct a behavior in which the post contact survey was not correctly translating non-English labels
HAR-2590 
A defect has been corrected in which the post contact survey was not correctly translating non-English labels.

----

### Correct a behavior in which the post contact survey widget would only display data for the current day 
HAR-2897 
A defect has been corrected in which the post contact survey widget would only display data for the current day. This defect was corrected and subsequently rolled back after the release due to performance issues and will be evaluated for future implementation.

----

### Correct a behavior in which the redial button is populated with information that is truncated due to length 
HAR-2342 
A defect has been corrected in which the redial button is populated with information that is truncated due to length.

----

### Correct a behavior in which there was a spelling error present in the UI
HAR-2569 
A defect has been corrected in which there was a spelling error present in the UI.

----

### Correct a behavior in which updates to directory contacts are not reflected until users log out/log back in 
HAR-1750 
A defect has been corrected in which updates to directory contacts are not reflected until users log out/log back in.

----

### Correct behavior in which certain UI elements are not correctly rendered when Dark Mode is enabled 
HAR-2443 
A defect has been corrected in which certain UI elements are not correctly rendered when Dark Mode is enabled.

----

### Correct behavior in which scheduled reports may not be removed upon deletion or the schedule is not created upon update 
HAR-2344 
A defect has been corrected in which scheduled reports may not be removed upon deletion or the schedule is not created upon update.
----

### Remove a feature (Alexa integration) that was carried over from legacy ConnectPath (Dextr) and did not function in the new ConnectPath 
HAR-2623 
A feature previously added (Alexa integration) that was carried over from legacy ConnectPath (Dextr) was removed as it did not function in the new ConnectPath.

----

### Remove a feature (demo mode) that was carried over from legacy ConnectPath (Dextr) and did not function in the new ConnectPath
HAR-2343 
A feature previously added (demo mode) that was carried over from legacy ConnectPath (Dextr) was removed as it did not function in the new ConnectPath.

----

### Remove a feature in which calls abandoned while being routed to a user were counted as abandoned against the user instead of missed. This resulted in abandons being double counted. This feature will be added back in a future release, taking into account this scenario 
HAR-2912
A feature previously added has since been removed based on customer feedback and as since been adjusted, based on customer feedback. Calls abandoned while being routed to a user were counted as abandoned against the user instead of missed and are now counted as abandoned_agent to indicate the caller abandoned the call while the call was being routed to the agent.

----
