---
title: "Home"
permalink: /docs/home/
layout: single
toc: true
toc_sticky: true
sidebar: 
  nav: "docs"
---

### First Look

The first thing you'll notice when login into Dextr is that there are a lot of components showing up. At the top of the screen there is a header (Figure 1 - Component 1). At the right corner there is a Team Status Drawer (Figure 1 - Component 2) and in the left corner a Side Navigation bar (Figure 1 - Component 3) that allows you to travel around Dextr main tabs and components.

<figure>
   <img src="{{ '/assets/images/first-look.jpg' }}" alt="First Look">
   <span>Figure 1. Dextr dashboard main components</span>
</figure>

----

### Header

This is a global section of Dextr that will always be displayed. You'll see your Agent Status, a Handset, a Bell and the Instance logo.

#### Agent Status

On login you're offline, so remember to change your Status from Offline to Available to be able to receive calls.  By default every Dextr Instance only has 2 status at the beginning, "Available" and "Offline", if you see "Forced Released" as a status is because you missed an incoming call sent to your dashboard. 

Your Dextr Administrator may also enable other codes for you to select as your current status and as seen by your teammates.

<figure>
   <img src="{{ '/assets/images/agent-status.jpg' }}" alt="Agent Status">
   <span>Figure 2. Agent Status</span>
</figure>

----

#### Quick Dial

The Handset is for quick dial. You can either type or paste a number (Figure 3), and after a call you'll have a dropdown list with the phone numbers of the recent calls you've made. Remember to choose the proper flag for calling.

<figure>
   <img src="{{ '/assets/images/quick-dial.jpg' }}" alt="Quick dial">
   <span>Figure 3. Quick dial</span>
</figure>

----

#### Announcements

By clicking the Bell icon in the header, you'll open the Announcements. Here you can see all the announcements related to your queue. If you're an admin, you will be able to post announcements by clicking the pencil icon in the bottom side.

<figure>
   <img src="{{ '/assets/images/announcements.jpg' }}" alt="Announcements">
   <span>Figure 4. Announcements</span>
</figure>

----

### Home Dashboard & Cards

This area is for the display of real time metrics for all queues in near real time activity. Clicking on a queue name in the dropdown will show the metrics for that queue while the Global view summarizes all queues. 

In the top corner of Home dashboard you can also spot 2 icons in the right corner, one for entering fullscreen and another to rearrange your card placement.

<figure>
   <img src="{{ '/assets/images/cards-rearrange.gif' }}" alt="Cards Rearrangement">
</figure>
----

#### Contacts in Queue

On this card you'll be able to see how many contacts are currently on voice and callback. You're also provided with a live look that displays the numbers shown. 

#### My Recent Activity

On this card a list of all your activity through the day will be shown as records. You'll see Inbound, Outbound and even your Missed calls. 

You can also right click any of the records, and choose the option to call the specified number which will trigger a modal window, allowing you to engage in a call.

#### Contacts

This is a queue card. You'll be able to see how many calls have been handled, abandoned or transferred by all team members.

#### My Perfomance

This is a card that shows up your perfomance. It displays the amount of ACD (Automatic Call Distributor) and Peer to Peer (Agent to Agent) calls you've had during the day. How many you've handled, missed, and the amount of time.

#### Handling Time

Also a queue  metric, it displays the average handling time that agents have spent on contacts, including hold time and after contact work.

#### Wait Time

A queue metric that displays how long the contacts have been waiting on the queue. It shows the average time between all the contacts, and the longest time a contact spent waiting.

#### Agent Availability

This a global card that displays the amount of agents logged in the Instance and their various status.

### Team Status Drawer

A Dextr component that displays other agents assigned to your queue or routing profile. You can right click each agent to engage either in chat, a call, or add them as favorites. 

You also have the option to hide offline agents or to display all.