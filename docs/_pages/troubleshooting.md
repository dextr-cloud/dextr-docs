---
title: "Troubleshooting"
permalink: /troubleshooting/
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "docs"
---

### Troubleshooting

***General Troubleshooting Steps***

Chrome Memory Saver
-Chrome recently added a feature, Memory Saver (https://support.google.com/chrome/answer/12929150?visit_id=638133575825043437-4035008892&p=chrome_memory_saver&rd=1#memory_saver&zippy=%2Cturn-memory-saver-on-or-off), that will suspend inactive tabs to reduce the overall Memory footprint of Chrome. This feature should not impact sites, such as ConnectPath, that are actively in use (e.g. the focused tab) or have actively running content, however, if you are a lower volume user of ConnectPath, it might be necessary for you to follow the steps in the aforementioned URL to avoid disruption to your ConnectPath session.

For Issues with Logging into ConnectPath, Verify that:
- Approved origins in Amazon Connect are correctly configured
- User with issues exist in user lists (Amazon Connect user management, ConnectPath user list)
- The Instance Admin can login
- The Username case as created in Amazon Connect and ConnectPath matches

For Issues with Transferring calls, Verify that:
- Quick connects are set up in Amazon Connect
- Quick connects are set up in Queues
- Agent belongs to a routing profile that contains the queue and the assigned quick connects

For Issues with Ability to change status, Verify that:
- Permission is enabled in security profile (Team Status - edit)

For Issues with the Ability to use the raise hand function, Verify that:
- Permissions are enabled in the user's security profile under Communication and presence

For Issues with Call troubleshooting, Verify that:
- Inbound / Outbound options are enabled in Amazon Connect
- Queue has outbound caller ID number configured
- Look out for misconfigurations in Contact flows

For Issues with Reports, Verify that:
- S3 bucket permissions are set correctly
- ConnectPath settings - Instance details - Reporting bucket is set correctly
- Permissions are enabled in the users' security profile

For Issues with User creation, Verify that:
- Verify that username doesn't already existing
- Verify that fields were filled correctly

For Issues with Recordings not showing up, Verify that:
- Enable the permission in the user's security profile under Quality Analytics

For Issues with SAML Integration, Verify that:
- SamlLoginUrl field has the Single Sign On login URL

***Data Collection Guidance***

When reporting issues with ConnectPath, it's helpful to collect and provide the following details so that we may be more responsive in addressing your concerns:
- Agent Name(s)
- Agent Location/Type of Location/Type of Internet Connection
- Dates/Times of Issue(s)
- Description of Issue(s)
- Contact ID related to Issue(s)
- Type of contact (Inbound/Outbound, Voice/SMS/E-Mail/Fax/Chat, Conference/Transfer)
- Instance Alias
- Instance ARN (if available)
- Actions Taken
- Behavior Experienced (Lack of functionality/expected behavior, Audio Issue, etc.)
- If Audio Issue, how would it be described?
- Impact
- Is this a systemic issue impacting all users, aliases and regions?
- Can issue be reproduced the native Amazon Connect CCP?
- What are the results of the other self-service tests you've run through ConnectPath?
