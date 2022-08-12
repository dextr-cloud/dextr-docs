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

- ***General Troubleshooting Steps***

For Issues with Logging into Dextr, Verify that:
- Approved origins in Amazon Connect are correctly configured
- User with issues exist in user lists (Amazon Connect user management, Dextr user list)
- The Instance Admin can login
- The Username case as created in Amazon Connect and Dextr matches

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
- Dextr settings - Instance details - Reporting bucket is set correctly
- Permissions are enabled in the users' security profile

For Issues with User creation, Verify that:
- Verify that username doesn't already existing
- Verify that fields were filled correctly

For Issues with Recordings not showing up, Verify that:
- Enable the permission in the user's security profile under Quality Analytics

For Issues with SAML Integration, Verify that:
- SamlLoginUrl field has the Single Sign On login URL

- ***Data Collection Guidance***

-Agent Name(s)
-Dates/Times of Issue(s)
-Description of Issue(s)
-Contact ID related to Issue(s)
-Instance Alias
-Instance ARN (if available)
-Questions to Ask:
-- Is this a systemic issue impacting all users, aliases and regions?
-- Can issue be reproduced the native Amazon Connect CCP?
-- What are the results of the other self-service tests you've run through Dextr?
