---
title: "Dextr Home"
permalink: /home/
layout: single
toc: true
toc_sticky: true
sidebar: 
  nav: "docs"
---

### First Look

After you enter the Dextr dashboard you can see at the top of the screen the header (Component 1), the Team Status Drawer (Component 2) in the right corner, and in the left corner a Side Navigation bar (Component 3).

[![First Look](/assets/images/first-look.jpg)](/assets/images/first-look.jpg)

----

#### Header

The header is a global section of Dextr that will always be on display. You'll see your Agent Status, a Handset, a Bell and the Instance logo.

#### Agent Status

Every Dextr Instance has 2 status for you to select after being onboarded: **Available** and **Offline**. By default your status is set to ***Offline*** on login, so remember to change your status from ***Offline*** to ***Available*** to be able to receive calls.  If you see **Forced Released** as a status is because you missed an incoming call. 

Your Dextr Administrator may also enable other status for you to select and to be seen by your teammates.

[![Agent Sttus](/assets/images/agent-status.jpg)](/assets/images/agent-status.jpg)

#### Quick Dial


The Handset is for quick dial and you can input a phone number to make a call. After a call is made, the quick dial will record the recent calls made by you and you'll have a dropdown with the phone numbers in it. Remember to choose the proper flag for calling.

[![Quick dial](/assets/images/quick-dial.jpg)](/assets/images/quick-dial.jpg)

#### Announcements

By clicking the Bell icon in the header, you'll open the Announcements. Here you can see all the announcements related to your queue. If you're an admin, you're able to post announcements by clicking the pencil icon in the bottom side, or delete them by clicking the trash icon. 

[![Announcements](/assets/images/announcements.jpg)](/assets/images/announcements.jpg)

To post an announcement, you need to fill out the Title, select at least one queue, write the body message and choose a delivery method:
- Screen pop delivers the announcement with an incoming dialogue.
- Marquee scroller displays the announcement in a new row just below Dextr header.
- Active calls displays the announcement when you're on an active call, in ***Contact Details***. 

[![Announcements 2](/assets/images/enhanced-announcements.jpg)](/assets/images/enhanced-announcements.jpg)

If the Urgency level is **Info**, when announcements are posted the agents will see the the announcements surrounded by a blue colour, while **Emergency** will surround it by a red colour. Clicking an announcement, either in ***Active call*** or ***Marquee*** will open the announcement drawer in the corresponding post.

[![Announcements 3](/assets/images/enhanced-announcements2.jpg)](/assets/images/enhanced-announcements2.jpg)

----

### Home Dashboard & Widgets
----

This area is for the display of real time metrics for all queues in near real time activity. Clicking on a queue name in the dropdown will show the metrics for that queue while the Global view summarizes all queues. 

In the top corner of Home dashboard you can also spot 2 icons at the right side, one for entering fullscreen mode and another one to rearrange your card placement.

{% include figure image_path="assets/images/cards-rearrange.gif" alt="Cards Rearrangement"%}

----

#### Contacts in Queue

Here you'll be able to see how many contacts are currently on voice and callback. You're also provided with a live look that displays the numbers shown. 

![Contacts in Queue](/assets/images/contact-queue.jpg)

----

#### My Recent Activity

This widget lists of all your activity through the day as records. You'll see Inbound, Outbound and even your Missed calls. Everytime you make a call or receive one, the list will update.

You can also click any of the records, and choose the option to call the specified number. Below you can some retailer names instead of phone numbers because they were added as contacts in the [Directory](/directory/) TAB.

{% include figure image_path="assets/images/recent-activity.gif" alt="Recent Activity"%}

----

#### Contacts

This is a Queue widget. You'll be able to see how many calls have been handled, abandoned or transferred by all team members either globally between all Queues, or in your Queue.

![Contacts](/assets/images/contacts.jpg)

----

#### My Perfomance

This shows your perfomance. It displays the amount of ACD (Automatic Call Distributor) and Peer to Peer (Agent to Agent) calls you've had during the day. How many you've handled, missed, and the amount of time.

![My Perfomance](/assets/images/my-perfomance.jpg)

----

#### Handling Time

Also a queue  metric, it displays the average handling time that agents have spent on contacts, including hold time and after contact work.

![Handling Time](/assets/images/handling-time.jpg)

----

#### Wait Time

A queue metric that displays how long the contacts have been waiting on the queue. It shows the average time between all the contacts, and the longest time a contact spent waiting.

![Wait Time](/assets/images/wait-time.jpg)

----

#### Agent Perfomance

As of version 0.9.2, Agent Availability is expanded to include all agents in the Instance and their metrics through the day.

<figure>
   <a href="/assets/images/agent perfomance.jpg">
   <img src="{{ '/assets/images/agent perfomance.jpg' }}" alt="Agent Perfomance" style="height: 450px; width: 400px">
   </a>
</figure>
----

You can expand the size of the card and have a better look at all metrics:

- **Handled In, Handled Out, and Handled Callbacks** corresponds to the number of Inbound, Outbound and Callbacks handled respectively
- **AHT** is the average time the agent has been engaged in a call.
- **Missed** is the amount of missed calls. 
- **Avg ACW** stands for the average time the agent has been in ACW status (after a call ends). 
- **Holds** corresponds to the amount of holds an agent has had through the day.
- **Hold duration** and **Longest Hold**, stand for the average time the agent has been on Hold, and the max time the agent has been on hold respectively.

You're also able to filter Agents per status (clicking any status below the chart), or sort them by increasing/descending order.

[![Agent Perfomance Filters](/assets/images/expanded perfomance.jpg)](/assets/images/expanded perfomance.jpg)

----

<style>
   h4 {
      font-size: 18px;
   }
</style>




