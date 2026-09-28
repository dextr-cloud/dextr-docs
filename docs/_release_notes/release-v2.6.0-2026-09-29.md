---
title: "v2.6.0"
excerpt_separator: "<!--more-->"
collection: release_notes
permalink: /:categories/:title/
date: 2026-09-29T00:00:00.000Z
layout: single
toc: true
toc_sticky: true
categories:
- Release Notes
sidebar:
nav: "docs"
---

## ConnectPath Release Notes, September 29th 2026

## New and Improved

---

### Mandatory dispositions lock the disposition modal

CS0030335
Mandatory dispositions now more reliably enforce the need to disposition a contact by implementing a lock on the disposition modal, preventing access to other contacts/functions while the modal is active. ACW timer expiring still closes the disposition as “not-defined”, to prevent potential issues with another incoming contact — so users need to disposition before ACW ends to be able to save the disposition.

---



## Fixes

---

### Ending a text (SMS) conversation from the native CCP

Fixed an issue where ending a text (SMS) conversation from the native CCP incorrectly flagged the conversation as fully complete.

---

### Opening a PDF sent over text

Fixed an issue where opening a PDF sent over text also unexpectedly triggered an automated Smart Reply.

---

### Closing a text-based task in CCP

Fixed an issue where closing a text-based task in CCP could leave the contact showing as open.

---

### Agent status stuck on an outdated value

Fixed an issue where some agents could get stuck showing an outdated status that didn't update correctly.

---

### Activity notes missing information

Fixed an issue where pulling activity notes could fail if a note was missing certain information.

---

### Live Look updates dropped after an expired session token

Fixed an issue where Live Look updates could be dropped due to an expired session token.

---

### Duplicate Live Look updates

Fixed an issue where some Live Look updates could be processed more than once.

---

### Report generation failures

Fixed an issue that caused report generation to frequently fail.

---

### Dynamics/CRM sync

Fixed an issue where updates were not reliably syncing to connected Dynamics/CRM systems.

---

### Mandatory Dispositions settings

Fixed an additional issue where Mandatory Dispositions settings did not save or display correctly.

---
