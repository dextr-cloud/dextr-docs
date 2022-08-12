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

- Routing Profiles that support SMS, Fax and E-Mail Queues should limit concurrent tasks to 1 per Agent.

- Amazon Connect Quotas should be configured to expected peak volume - note that SMS, Fax and E-Mail volume will all be governed by Task quotas and should therefore be set accordingly.

- Limits on number of concurrent contacts in Queue (set at the Queue or Contact Flow) will cause Amazon Connect to reject any concurrent SMS, Fax and E-Mail contacts that exceed this value.
