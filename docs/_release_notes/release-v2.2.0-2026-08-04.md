---
title: "v2.2.0"
excerpt_separator: "<!--more-->"
collection: release_notes
permalink: /:categories/:title/
date: 2026-08-04T00:00:00.000Z
layout: single
toc: true
toc_sticky: true
categories:
- Release Notes
sidebar:
nav: "docs"
---

## ConnectPath Release Notes, August 4th 2026

## Major Updates

---

### New release cycle

As previously announced, with this release we mark the start of a new release cycle for ConnectPath that will see releases every 2-3 weeks (so the next release is scheduled for Aug 18th with a fallback date of August 25th).

---

### Deprecation banners on legacy features

In this release you will notice Deprecation Banners on the Legacy Historical Reports and the Legacy Activity Search (if you are still using them). These features will continue to work in the 2.2 release; these banners are advance notification so you can move to the new equivalents on your own schedule.

---



## New and Improved

---

### Multi-select filters on the Home screen

Queue, Agent, and Channel move from single-select to multi-select, and there's a new Routing Profile filter that's only visible to users whose permissions allow it.

---

### Persistent transcript sort order

CS0043560
Your transcript sort order now sticks — set it once and it stays that way.

---

### Cleaner and more consistent Settings

Settings are cleaner and more consistent — unified add buttons, normalized section spacing, and the same edit/delete actions on every row.

---

### Platform efficiency improvements

Efficiency improvements throughout the platform — most of this release went into reducing the compute and data cost of running ConnectPath without changing what you see. Nothing to do on your side.

---



## Fixes

---

### Email reply no longer moves To addresses into From

CS0045242
Replying to an email that had multiple addresses in the To line no longer moves those addresses into the From line and potentially cause the reply to fail outright. Agents no longer need to move the addresses back by hand.

---

### Emails no longer auto-close after connecting to an agent

CS0044665
Emails no longer auto-close shortly after connecting to an agent in rare use cases.

---

### V2 metrics populate correctly for all queues

CS0042327
V2 metrics populate correctly for all queues on the dashboard and no longer present zero values for some queues when viewed individually.

---

### Usage metering connection lost state fixed

A usage metering failure that could drop agents into a "connection lost" state is fixed.

---
