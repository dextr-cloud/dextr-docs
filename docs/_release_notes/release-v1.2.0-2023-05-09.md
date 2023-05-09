---
title: "v1.2.0"
excerpt_separator: "<!--more-->"
collection: release_notes
permalink: /:categories/:title/
date: 2023-05-09
layout: single
toc: true
toc_sticky: true
categories:
  - Release Notes
sidebar:
  nav: "docs"
---

## ConnectPath Release Notes, May 2023

### Add a feature in which a Chat conversation may be transferred using Quick Connects
HAR-2046

A feature has been added in which a Chat conversation may be transferred using Quick Connects, similar to a Voice Contact. Upon invoking the transfer, the customer will be informed of the transfer via a system message and the receiving agent will be able to see the transcript of the conversation that took place prior to the transfer.

----
### Add a feature in which a privileged user may grant administrative access to CloudHesive, temporarily, for the purposes of troubleshooting
HAR-2250
HAR-2291

A feature has been added in which a privileged user may grant administrative access to CloudHesive, temporarily, for the purposes of troubleshooting. To do this, a ConnectPath user needs to be a ConnectPath admin and log into the ConnectPath admin portal. Once logged in, the user will select the instance in which administrative access is requested and then enable it. Once the access has been enabled, an E-Mail will be sent to the Company-level defined E-Mail Address. Revocation of this access follows the same process.

----
### Add a feature in which a privileged user may write a post contact survey in ConnectPath, deploy it as a Contact Flow in Amazon Connect and measure the results in the home screen and/or the Activity Search screen
HAR-2119
HAR-2444
HAR-409

A feature has been added in which a privileged user may write a post contact survey in ConnectPath, deploy it as a Contact Flow in Amazon Connect and measure the results in the home screen and/or the Activity Search screen. Subsequent changes to the survey from within ConnectPath will overwrite the Contact Flow in Amazon Connect, eliminating the need to link the Contact Flow to Connect with the exception of the first time it's deployed.

----
### Add a feature in which a supervisor may monitor an agent and/or barge in on the conversation the agent is having (voice) using native Amazon Connect capabilities
HAR-1774
HAR-1834
HAR-1881
HAR-2602
HAR-2620

A feature has been added in which a supervisor may monitor an agent and/or barge in on the conversation the agent is having (voice) using native Amazon Connect capabilities. When a supervisor logs in we determine if the appropriate Amazon Connect security profile permissions have been assigned to the user and if the instance has been configured to support enhanced monitoring. If either of those conditions is not true, we will fall back to native ConnectPath monitoring capabilities. You may read more native Connect monitor and barge capabilities here: https://docs.aws.amazon.com/connect/latest/adminguide/monitoring-amazon-connect.html

----
### Add a feature in which a user, with appropriate permissions may change his or her routing profile
HAR-1329
HAR-2330

A feature has been added in which a user, with appropriate permissions may change his or her routing profile. To allow a user to change his or her routing profile you will first need to assign the new permission to the user's security group. After the permission has been assigned, the agent will be able to expand the user information bar at the bottom of the home screen and change the routing profile from the drop-down box.

----
### Add a feature in which a deprecated API call will no longer be made from the front end
HAR-2212

A feature has been added in which a deprecated API call will no longer be made from the front end, providing a performance improvement in the front end.

----
### Add a feature in which Chat based channels (Pinpoint SMS, Chat) will utilize Contact Lens analysis
HAR-2045

A feature has been added in which Chat based channels (Pinpoint SMS, Chat) will utilize Contact Lens analysis, in addition to transcripts which were previously available. This allows users of ConnectPath to understand the sentiment and other AI/ML driven analysis of a Pinpoint SMS or Chat conversation.

----
### Add a feature in which ConnectPath recognizes when an Amazon Connect Administrators has renamed "Available" and correctly interpret that renamed status as Available
HAR-1963
HAR-2287
HAR-2288
HAR-2289
HAR-2487

A feature has been added in which ConnectPath recognizes when an Amazon Connect Administrators has renamed "Available" and correctly interpret that renamed status as Available. This allows Administrators of Amazon Connect to rename "Available" to reflect a name other than available while at the same time allowing ConnectPath to appropriately bucket this renamed status as if it was Available.

----
### Add a feature in which ConnectPath validates Amazon Connect Instance has ConnectPath origin configured during user login process
HAR-2532

A feature has been added in which ConnectPath validates Amazon Connect Instance has ConnectPath origin configured during user login process. This is to facilitate the migration of the current ConnectPath domain (dextrflex.com) to the new ConnectPath domain (connectpath.cx) in a future release.

----
### Add a feature in which Contact Lens analysis does not need to be explicitly enabled in ConnectPath for ConnectPath to support it
HAR-1922

A feature has been added in which Contact Lens analysis does not need to be explicitly enabled in ConnectPath for ConnectPath to support it. This eliminates an extraneous step in the onboarding process.

----
### Add a feature in which latency is visually displayed to each user using an API that is tied to the function of ConnectPath
HAR-2259

A feature has been added in which is visually displayed to each user using an API that is tied to the function of ConnectPath, providing a more accurate indicator of the health of the user's connection to ConnectPath.

----
### Add a feature in which long queue names will be truncated in Queue Management
HAR-2136

A feature has been added in which long queue names will be truncated in Queue Management within ConnectPath.

----
### Add a feature in which markup may be utilized in Chat
HAR-2044
HAR-2498
HAR-2575

A feature has been added in which may be utilized in Chat. This allows the use of rich text in Chat conversations using the native Amazon Connect Chat Widget. Transcripts will still be stored in their native format and marked up text will not be translated automatically.

----
### Add a feature in which multilevel dispositions have been optimized
HAR-2378

A feature has been added in which multilevel dispositions have been optimized, providing a performance improvement in the front end.

----
### Add a feature in which selected columns and column order are maintained between successive logins for the Agent and Queue summary tables on the home screen
HAR-1578
HAR-2416
HAR-2417
HAR-2486

A feature has been added in which selected columns and column order are maintained between successive logins for the Agent and Queue summary tables on the home screen. Until a user customizes his or her column selections and column order, a default configuration will be used but after a user has customized his or her column selection and column order, they will persist through each ConnectPath session, eliminating the need for the user to make the selection and order each time her or she logs in.

----
### Add a feature in which the newer style Amazon Connect URL will be tried at login first, followed by the older style Amazon Connect URL to facilitate the proactive migration of older style Amazon Connect URLS to newer ones
HAR-2418

A feature has been added in which the newer style Amazon Connect URL will be tried at login first, followed by the older style Amazon Connect URL to facilitate the proactive migration of older style Amazon Connect URLS to newer ones. While this change is not anticipated to be made by Amazon until next year, administrators now have ample time to change their SAML Relay State configuration, validate it and roll it out their end users. 

----
### Add a feature in which the retrieval of transcripts is optimized
HAR-2534

A feature has been added in which the retrieval of transcripts is optimized, providing a performance improvement in the front end.

----
### Add a feature in which the server-side verbosity of Websocket based services is increased to support proactive identification of client-side issues relating to the use of Websocket based services (agent to agent chat, calling and supervisor to agent monitoring and whispering)
HAR-2500
HAR-2504
HAR-2652

A feature has been added in which the server-side verbosity of Websocket based services is increased to support proactive identification of client-side issues relating to the use of Websocket based services (agent to agent chat, calling and supervisor to agent monitoring and whispering). This may be useful in diagnosing local network connectivity issues that hinder the use of these features.

----
### Correct a behavior in which a multilevel disposition modal may be displayed even though a multilevel disposition has not been configured (non-voice channels only)
HAR-2318

A defect has been corrected in which a multilevel disposition modal may be displayed even though a multilevel disposition has not been configured (non-voice channels only). Previous released addressed this for voice contacts, and in this release all other contacts are addressed.

----
### Correct a behavior in which a user is not placed in available after ending a task
HAR-2673

A defect has been corrected in which a user is not placed in available after ending a task. This often manifested itself if the native CCP was open in addition to ConnectPath.

----
### Correct a behavior in which a WhatsApp message fails if the first message in the conversation is not text
HAR-2305

A defect has been corrected in which a WhatsApp message fails if the first message in the conversation is not text. We now recognize the first message as being text or a multimedia URL such as a picture, video or audio recording.

----
### Correct a behavior in which activity notes do not appear for a given phone number on the Engage page
HAR-2619

A defect has been corrected in which activity notes do not appear for a given phone number on the Engage page. This issue manifested itself with a subset of customers who had a large volume of activities and/or notes.

----
### Correct a behavior in which agent contacts are not counted as missed in the event that an inbound contact or a callback contact is abandoned during the connection process
HAR-1860
HAR-2436

A defect has been corrected in which agent contacts are not counted as missed in the event that an inbound contact or a callback contact is abandoned during the connection process. Contacts are now reported as abandoned, not missed, and actual missed calls (e.g. the agent did not answer in time or there was a connection issue when the agent answered) are still counted as missed.

----
### Correct a behavior in which an agent initiated SMS message does not allow the agent to send a message
HAR-2463
HAR-2469

A defect has been corrected in which an agent initiated SMS message does not allow the agent to send a message.

----
### Correct a behavior in which appropriately permissioned users are unable to delete entries from the directory
HAR-2429

A defect has been corrected in which appropriately permissioned users are unable to delete entries from the directory. User permissions are now aligned to directory permissions (local/global), so that directory entries can successfully be created, updated or deleted if the appropriate user permission are in place.

----
### Correct a behavior in which audio path may not be established or may be one way in the event of a blind transfer
HAR-2389
HAR-2558

A defect has been corrected in which the audio path may not be established or may be one way in the event of a blind transfer. We now temporarily conference the three parties together before disconnecting the agent.

----
### Correct a behavior in which certain Jabra headset models may not send the expected mute/unmute event and as such the ConnectPath Engage page does not show that the call has been muted
HAR-737

A defect has been corrected in which certain Jabra headset models may not send the expected mute/unmute event and as such the ConnectPath Engage page does not show that the call has been muted. We now use a generic mute event and synchronize it to ConnectPath.

----
### Correct a behavior in which certain Jabra headset models may send an event that causes the agent to be placed offline after completing ACW
HAR-2399

A defect has been corrected in which certain Jabra headset models may send an event that causes the agent to be placed offline after completing ACW. We now ignore those messages for a period of time after the status has changed.

----
### Correct a behavior in which Live Look does not show contacts in queue
HAR-2668

A defect has been corrected in which Live Look does not show contacts in queue.

----
### Correct a behavior in which multiple notes in the activity detail screen may not be displayed due to a missing scroll bar
HAR-2272

A defect has been corrected in which multiple notes in the activity detail screen may not be displayed due to a missing scroll bar.

----
### Correct a behavior in which pressing 0 on the keyboard does not result in 0 being played as DTMF on an active contact
HAR-2435

A defect has been corrected in which pressing 0 on the keyboard does not result in 0 being played as DTMF on an active contact. 0 on the keyboard will now play the appropriate DTMF.

----
### Correct a behavior in which queues with no answered duration are not consistently displayed on the home screen
HAR-2587

A defect has been corrected in which queues with no answered duration are not consistently displayed on the home screen. In some customer configurations queues are used to route calls to in which the calls are always expected to abandon. It's typically assumed that at least one call will be answered or transferred from a queue and those indicators are used to determine if a queue is active. We now include abandons in those indicators as well.

----
### Correct a behavior in which recordings and analytics are not displayed on Activity Detail
HAR-2672

A defect has been corrected in which recordings and analytics are not displayed on Activity Detail.

----
### Correct a behavior in which the CCP Log Analytics page cannot be displayed
HAR-2671

A defect has been corrected in which the CCP Log Analytics page could not be displayed.

----
### Correct a behavior in which the chat column in queue performance does not display a value
HAR-2465

A defect has been corrected in which the chat column in queue performance did not display a value. It now displays the appropriate value.

----
### Correct a behavior in which the directory modal (which appears in the Engage page) does not properly render the listing of contacts
HAR-1695
HAR-1696
HAR-2230
HAR-2557
HAR-2631
HAR-2653
HAR-2654

A defect has been corrected in which the directory modal (which appears in the Engage page) does not properly render the listing of contacts. This may have manifested itself in a variety of ways, including the directory contacts not loading, directory contacts not being displayed after filtering, or external numbers not being detected as valid for transfers. These cases have been addressed using a new front end pagination approach as well as wait before attempting to filter so that a user has time to type.

----
### Correct a behavior in which user creation from ConnectPath to Connect or user synchronization between the two fail due to the differences in directory types (AD vs. Local vs. SAML)
HAR-2269
HAR-2609

A defect has been corrected in which user creation from ConnectPath to Connect or user synchronization between the two fail due to the differences in directory types (AD vs. Local vs. SAML). If a user exists in Connect but not ConnectPath, the user will be created in ConnectPath and visa versa. If a user is deleted they will be soft deleted in ConnectPath so that they may be restored at a later point. Upon completion of a sync, the ConnectPath admin will be notified via E-Mail. If you attempt to start a sync while one is in progress, you will receive a notification in the bottom right hand corner of ConnectPath, to eliminate redundant requests.

----
### Remove a feature in which historical reports (exported) contain a tab that breaks agent status down into major buckets as the bucket names were confusing to end users
HAR-2617

A feature previously added has since been removed based on customer feedback. The exported historical report tab for agent status has been temporarily disabled while the report is restructured to be less confusing to end users.

----
### Remove a feature in which usernames were forced to lowercase in an attempt to eliminate the perception of duplicate users which had an unanticipated impacted to SAML based users, in lieu of this the synchronization process has been improved
HAR-2544

A feature previously added has since been removed based on customer feedback. Due to issues with synchronizing users between Connect and ConnectPath, a scenario was present in which users were perceived as being duplicate, when in reality they were multiple users with different cased usernames. Due to a failure of the sync process, if this condition existed, specifically due to a user being deleted and subsequently recreated, those users may have shown up twice in various screens within ConnectPath. As a workaround, forced lower case usernames were implemented but had adverse effects with SAML based Amazon Connect instances and in light of the root cause of the sync issues being addressed, this change has been backed out.

----

