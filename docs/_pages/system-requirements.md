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

- ConnectPath generally follows AWS' guidance around System Requirements (https://docs.aws.amazon.com/connect/latest/adminguide/what-is-amazon-connect.html) except as noted in the sections that follow.

- ConnectPath generally runs on a modern workstation, with a 2 Core CPU and 4 GB of RAM Available for it's use. No specific storage or storage performance is required, though workstation with low storage or low storage performance may impact the Browser's responsiveness to ConnectPath.

- Typically 100 Kb/s of bandwidth will be utilized while an agent is actively on a call through ConnectPath.

***Networking***

- Amazon Connect requires the following network traffic to be permitted to/from your users' workstations, through the Internet:
https://docs.aws.amazon.com/connect/latest/adminguide/ccp-networking.html

- Twilio, which is utilized by ConnectPath for TURN/STUN services requires the following network traffic to be permitted to/from your users' workstations, through the Internet: https://www.twilio.com/docs/stun-turn/regions

- In a future release, we will be replacing Twilio TURN/STUN services with Chime SDK TURN/STUN services and as such, recommend the following hosts, protocols and ports to be permitted from your users' workstations, through the Internet:

- *.chime.aws      HTTP/HTTPS
- *.amazonaws.com      HTTP/HTTPS
- *.sdkassets.chime.aws      HTTP/HTTPS
- *.chime.aws      UDP/3478

- In addition to the above, ConnectPath requires the following hosts, protocols and ports to be permitted from your users' workstations, through the Internet:

- *.graphql.flex.dextrflex.com   HTTP/HTTPS
- *.api.dextr.cloud              HTTP/HTTPS
- *.ws.dextrflex.com              HTTP/HTTPS
- *.dextr.cloud      HTTP/HTTPS
- go.dextr.cloud      HTTP/HTTPS

- In a future release, we will be introducing connectpath.cx domains, reflective of our change to the ConnectPath brand and as such recommend the following hosts, protocols and ports to be permitted from your users' workstations, through the Internet:

- *.graphql.flex.connectpath.cx   HTTP/HTTPS
- *.api.connectpath.cx              HTTP/HTTPS
- *.ws.connectpath.cx              HTTP/HTTPS
- *.connectpath.cx      HTTP/HTTPS
- go.connectpath.cx      HTTP/HTTPS

***Browser***

- ConnectPath officially supports Chrome, as described in AWS' guidance around System Requirements, however, Microsoft Edge and Mozilla Firefox have been observed to work for customers in the field.

***Headset***

- Most headsets are suitable, avoid using a compute devices built-in microphone/speakers or earbud style headsets. We offer specific support for certain Jabra Headset models.
