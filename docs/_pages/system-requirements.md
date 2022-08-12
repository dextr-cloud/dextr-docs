---
title: "System Requirements"
permalink: /system-requirements/
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "docs"
---

### System Requirements

***General***

- Dextr generally follows AWS' guidance around System Requirements (https://docs.aws.amazon.com/connect/latest/adminguide/what-is-amazon-connect.html) except as noted in the sections that follow.

- Dextr generally runs on a modern workstation, with a 2 Core CPU and 4 GB of RAM Available for it's use. No specific storage or storage performance is required, though workstation with low storage or low storage performance may impact the Browser's responsiveness to Dextr.

- Typically 100 Kb/s of bandwidth will be utilized while an agent is actively on a call through Dextr.

***Networking***

- Amazon Connect requires the following network traffic to be permitted to/from your users' workstations, through the Internet:
https://docs.aws.amazon.com/connect/latest/adminguide/ccp-networking.html

- Twilio, which is utilized by Dextr for TURN/STUN services requires the following network traffic to be permitted to/from your users' workstations, through the Internet: https://www.twilio.com/docs/stun-turn/regions

- In addition to the above, Dextr requires the following hosts, protocols and ports to be permitted from your users' workstations, through the Internet:

- *.appsync-api.us-east-1.amazonaws.com   HTTP/HTTPS
- *.api.dextr.cloud              HTTP/HTTPS
- *.dextr.cloud      HTTP/HTTPS
- socket.dexterflex.com    HTTP/HTTPS
- socket.dextrflex.com      HTTP/HTTPS
- coturn.dexterflex.com    HTTP/HTTPS
- socket.dexterflex.com    TCP/UDP 3478, 49152-65535
- socket.dextrflex.com      TCP/UDP 3478, 49152-65535
- coturn.dexterflex.com    TCP/UDP 3478, 49152-65535

***Browser***

- Dextr officially supports Chrome, as described in AWS' guidance around System Requirements, however, Microsoft Edge and Mozilla Firefox have been observed to work for customers in the field.

***Headset***

- Most headsets are suitable, avoid using a compute devices built-in microphone/speakers or earbud style headsets. We offer specific support for certain Jabra Headset models.
