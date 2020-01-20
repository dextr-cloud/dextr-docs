---
title: "Engage"
permalink: /engage/
layout: single
toc: true
toc_sticky: true
sidebar: 
  nav: "docs"
---

The Engage TAB is one of Dextr main features since it's the place where you'll be having your calls and interacting with customers. 

### Phone Tab

When entering the Engage tab you'll see the Phone Tab, which consists of the **Dialpad** (Figure 1. Component 1), **Recent Calls** (Figure 1. Component 2) and the **Favorites** (Figure 1. Component 3) sections.

<figure>
   <img src="{{ '/assets/images/engage-tab.jpg' }}" alt="Engage Tab">
   <span>Figure 1. Engage - Phone Tab</span>
</figure>
----

You can type / paste a number in the ***Quick Dial*** or click the numbers in the ***Dialpad*** to input the phone number and make a call. Remember to have the correct country code. When on call, you also have the option to put it on hold. 

<figure>
   <img src="{{ '/assets/images/call-hold.gif' }}" alt="Call on Hold">
   <span>Gif 1. Making calls through the Dialpad</span>
</figure>

----
#### Call Transfers

When on call you're also able to do call transfers, and as of v0.9.0 Dextr can quick-connect to directory entries through either **Blind** or **Warm** transfers: 

- **Blind** transfers gets the call either on a selected Queue or a Directory contact. If the transfer was done to a Queue it will  make the contact wait until is taken by the next Available agent while also leaving you completely out of the call. If it was done to a Directory contact, it will transfer the call directly to it.

- **Warm** transfers on the other hand, allows you to remain and monitor the call, also allowing you join it and enter **Conference Call** mode (Figure 2).

<figure>
   <img src="{{ '/assets/images/transfer-call.gif' }}" alt="Call Transfer">
   <span>Gif 2. Call Transfer</span>
</figure>

<figure>
   <img src="{{ '/assets/images/conference-call.jpg' }}" alt="Call Transfer">
   <span>Figure 2. Conference Call</span>
</figure>

----
#### Call dispositions

If the administrator enables this option in [Settings-General](/settings/), when a call ends you'll notice a modal window showing up. The modal window will prompt you to select one of the dispositions in the dropdown to keep track of what the call consisted of. This makes assessments and inquiry easier when checking the [Activity](/activity/) tab for a specific call.

<figure>
   <img src="{{ '/assets/images/call-disposition.gif' }}" alt="Call Disposition">
   <span>Gif 3. Call disposition</span>
</figure>

If you don't select a disposition when timer ends, then no disposition will be assigned to the call.

----

#### Recent Calls

This panel keeps a track of all your calls. All calls have a label and a timestamp assigned to them. Inbound, Outbound and Missed calls will be registered as such.

If you right click any of the records, you can either copy the number or call it. By clicking a record you'll trigger the modal call window.

<figure>
   <img src="{{ '/assets/images/recent-calls.jpg' }}" alt="Recent Calls">
   <span>Figure 3. Recent calls</span>
</figure>
----

#### Favorites

When creating contacts from the [Directory](/directory/), you can add them as favorites. All contacts tagged as Favorites will be displayed in this panel. Clicking any of them will give you the option to call them.

<figure>
   <img src="{{ '/assets/images/engage-favorites.jpg' }}" alt="Engage Favorites">
   <span>Figure 4. Engage Favorites section</span>
</figure>
----

### SMS & Email

**SMS** is for text message routing while **Email** is for inbound Email routing. When a contact sends an email to the Instance, an incoming modal window will show up asking you for permission to engage with the contact. If you accept then the email will be routed to your inbox (email assigned to your Dextr account), and you'll also be able to see the email conversation within Dextr Engage tab.

Important to note is that you're unable to write answers from Dextr. To answer, you must do so with your email account outside of Dextr. 

----
### Omni-Chat

Like Email and SMS, your administrator builds a flow and use it across multiple channels. You're able to receive chat requests in the same web-based Contact Control Panel (CCP) you use for voice engagements since Customers will be put in a Queue and attended by the next available agent.