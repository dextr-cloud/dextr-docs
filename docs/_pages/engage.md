---
title: "Engage"
permalink: /engage/
layout: single
toc: true
toc_sticky: true
sidebar: 
  nav: "docs"
---

The Engage TAB is one of Dextr main features since it's the place where you'll be interacting with customers. 

### Phone Tab

When entering the Engage tab you'll see the Phone Tab, which consists of the **Dialpad** (Component 1), **Recent Calls** (Component 2) and the **Favorites** (Component 3) sections.

[![Engage Tab](/assets/images/engage-tab.jpg)](/assets/images/engage-tab.jpg)

You can type a number in the ***Quick Dial*** or click the numbers in the ***Dialpad*** to input the phone number and make a call. Remember to have the correct country code. When on call, you also have the option to put it on hold. 

{% include figure image_path="/assets/images/call-hold.gif" alt="Call on Hold"%}

----

#### Call Transfers

You're able to do call transfers, and as of v0.9.0 Dextr can quick-connect to directory entries through either **Blind** or **Warm** transfers: 

- **Blind** transfers gets the call either on a selected Queue or a Directory contact. If the transfer was made to a Queue it will  make the contact wait until is taken by the next Available agent while also leaving you completely out of the call. If it was done to a Directory contact, it will transfer the call directly to it.

- **Warm** transfers on the other hand, allows you to remain and monitor the call, also allowing you join it and enter **Conference Call** mode.

A call transfer:

{% include figure image_path="/assets/images/transfer-call.gif" alt="Call Transfer"%}

A conference call:

[![Conference Call](/assets/images/conference-call.jpg)](/assets/images/conference-call.jpg)

----
#### Call dispositions

If the administrator enables this option in [Settings-General](/settings/), when a call ends you'll notice a modal window showing up. The modal window will prompt you to select one of the dispositions in the dropdown to keep track of what the call consisted of. This makes assessments and inquiry easier when checking the [Activity](/activity/) tab for a specific call.

{% include figure image_path="/assets/images/call-disposition.gif" alt="Call Disposition"%}

If you don't select a disposition when timer ends, then no disposition will be assigned to the call.

----

#### Recent Calls

This panel keeps a track of all your calls. All calls have a label and a timestamp assigned to them. Inbound, Outbound and Missed calls will be registered as such.

If you right click any of the records, you can either copy the number or call it. By clicking a record you'll trigger the modal call window.

[![Recent Calls](/assets/images/recent-calls.jpg)](/assets/images/recent-calls.jpg)

----

#### Favorites

When creating contacts from the [Directory](/directory/), you can add them as favorites. All contacts tagged as Favorites will be displayed in this panel. Clicking any of them will give you the option to call them.

[![Engage Favorites](/assets/images/engage-favorites.jpg)](/assets/images/engage-favorites.jpg)

----

### SMS & Email

**SMS** is for text message routing while **Email** is for inbound Email routing. 

#### Email

When a customer sends an email to the Instance, an incoming modal window will show up asking for permission to engage with the contact.

[![Email](/assets/images/emailDocs.jpg)](/assets/images/emailDocs.jpg)

If an agent accepts the email will be routed to his inbox (email assigned to Dextr account), and the email will be displayed in Dextr Engage TAB. If an agent doesn't accept, the email will be left in Queue until an Agent accepts it.

[![Email Tab](/assets/images/emailTab.jpg)](/assets/images/emailTab.jpg)

To answer emails and keep a conversation, you must do so with your email account and Dextr will keep track of every response until ***End Conversation*** is clicked. This will put an end to the conversation with the customer, sending an automated final response.  

----
### Omni-Chat

Like Email and SMS, your administrator builds a flow and use it across multiple channels. You're able to receive chat requests in the same web-based Contact Control Panel (CCP) you use for voice engagements since Customers will be put in a Queue and attended by the next available agent.

<style>
   h4 {
      font-size: 18px;
   }
</style>