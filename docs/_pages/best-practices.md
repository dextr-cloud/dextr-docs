---
title: "Best Practices"
permalink: /best-practices/
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "docs"
---

### Best Practices

***Bring your own Channel***

- Amazon Connect Quotas should be configured to expected peak volume - note that SMS, Fax and E-Mail volume will all be governed by Task quotas and should therefore be set accordingly.

- Limits on number of concurrent contacts in Queue (set at the Queue or Contact Flow) will cause Amazon Connect to reject any concurrent SMS, Fax and E-Mail contacts that exceed this value.

***Reliability***

- Given ConnectPath's use in a Contact Center environment, we recommend disabling power saving functions such as hibernation, sleep, suspension, etc. as it may impact a user's ability to use ConnectPath after resuming from one of these states.

- Additionally, it is recommended that the headset (whether audio jack, USB or Bluetooth) be connected prior to logging into ConnectPath and not be powered off or disconnected until the user is done using ConnectPath at the end of his or her shift.