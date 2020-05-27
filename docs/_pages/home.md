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

The first thing you'll notice when doing log in into Dextr is that there are a lot of components showing up. At the top of the screen there is a header (Figure 1 - Component 1). At the right corner there is a Team Status Drawer (Figure 1 - Component 2) and in the left corner a Side Navigation bar (Figure 1 - Component 3) that allows you to travel around Dextr main tabs and components.

[![First Look](/assets/images/first-look.jpg)](/assets/images/first-look.jpg)

Figure 1. Dextr dashboard main components

----

#### Header

The header is a global section of Dextr that will always be on display. You'll see your Agent Status, a Handset, a Bell and the Instance logo.

#### Agent Status

Every Dextr Instance has 2 status for you to select after being onboarded: **Available** and **Offline**. By default your status is set to ***Offline*** on login, so remember to change your status from ***Offline*** to ***Available*** to be able to receive calls. Also, if you see **Forced Released** as a status is because you missed an incoming call sent to your dashboard. 

Your Dextr Administrator may also enable other status for you to select and to be seen by your teammates.

[![Agent Sttus](/assets/images/agent-status.jpg)](/assets/images/agent-status.jpg)

Figure 2. Agent Status

#### Quick Dial


The Handset is for quick dial. You can either type or paste a number (Figure 3), and after a call you'll have a dropdown list with the phone numbers of the recent calls you've made. Remember to choose the proper flag for calling.

[![Quick dial](/assets/images/quick-dial.jpg)](/assets/images/quick-dial.jpg)

Figure 3. Quick dial

#### Announcements

By clicking the Bell icon in the header, you'll open the Announcements. Here you can see all the announcements related to your queue. If you're an admin, you will be able to post announcements by clicking the pencil icon in the bottom side.

[![Announcements](/assets/images/announcements.jpg)](/assets/images/announcements.jpg)

Figure 4. Announcements

----

### Home Dashboard & Cards
----

This area is for the display of real time metrics for all queues in near real time activity. Clicking on a queue name in the dropdown will show the metrics for that queue while the Global view summarizes all queues. 

In the top corner of Home dashboard you can also spot 2 icons at the right side, one for entering fullscreen mode and another one to rearrange your card placement.

{% include figure image_path="assets/images/cards-rearrange.gif" alt="Cards Rearrangement" caption="Gif 1. Cards Rearrangement"%}

----

#### Contacts in Queue

On this card you'll be able to see how many contacts are currently on voice and callback. You're also provided with a live look that displays the numbers shown. 

![Contacts in Queue](/assets/images/contact-queue.jpg)

Figure 5. Contacts in Queue

----

#### My Recent Activity

On this card a list of all your activity through the day will be shown as records. You'll see Inbound, Outbound and even your Missed calls. Everytime you make a call or receive one, the list will update.

You can also click any of the records, and choose the option to call the specified number which will trigger a modal window, allowing you to engage in a call. Below you'll see some retailer names instead of phone numbers because they were added as contacts in the [Directory](/directory/) TAB.

{% include figure image_path="assets/images/recent-activity.gif" alt="Recent Activity" caption="Gif 2. Recent Activity to Engage Call"%}

----

#### Contacts

This is a Queue card. You'll be able to see how many calls have been handled, abandoned or transferred by all team members either globally between all Queues, or in your Queue.

[![Contacts](/assets/images/contacts.jpg)](/assets/images/contacts.jpg)

Figure 6. Contacts

----

#### My Perfomance

This is a card that shows up your perfomance (Figure 7). It displays the amount of ACD (Automatic Call Distributor) and Peer to Peer (Agent to Agent) calls you've had during the day. How many you've handled, missed, and the amount of time.

![My Perfomance](/assets/images/my-perfomance.jpg)

Figure 7. My Perfomance

----

#### Handling Time

Also a queue  metric, it displays the average handling time that agents have spent on contacts, including hold time and after contact work.

![Handling Time](/assets/images/handling-time.jpg)

Figure 8. Handling Time

----

#### Wait Time

A queue metric that displays how long the contacts have been waiting on the queue. It shows the average time between all the contacts, and the longest time a contact spent waiting.

![Wait Time](/assets/images/wait-time.jpg)

Figure 9. Wait Time

----

#### Agent Perfomance

As of version 0.9.2, Agent Availability is changed to Agent Perfomance. This a global card that displays all agents logged in the Instance and their agent status (Figure 10).

<figure>
   <a href="/assets/images/agent perfomance.jpg">
   <img src="{{ '/assets/images/agent perfomance.jpg' }}" alt="Agent Perfomance" style="height: 450px; width: 400px">
   </a>
   <span>Figure 10. Agent Perfomance</span>
</figure>
----

By clicking the top right corner you're able to expand the size of the card and have a better look at all metrics, which includes: Handled In, Handled Out, Handled Callbacks, AHT(Average Handle Time), Missed, Avg ACW (Average After Contact Work), Holds, Hold Duration and Longest Hold. 

- **Handled In, Handled Out, and Handled Callbacks** corresponds to the number of Inbound, Outbound and Callbacks handled respectively
- **AHT** is the average time the agent has been engaged in a call.
- **Missed** is the amount of missed calls. 
- **Avg ACW** stands for the average time the agent has been in ACW status (after a call ends). 
- **Holds** corresponds to the amount of holds an agent has had through the day.
- **Hold duration** and **Longest Hold**, stand for the average time the agent has been on Hold, and the max time the agent has been on hold respectively.

You're also able to filter Agents per status, and sort them by increasing/descending order by clicking the arrows (Figure 11).

[![Agent Perfomance Filters](/assets/images/expanded perfomance.jpg)](/assets/images/expanded perfomance.jpg)

Figure 11. Agent Perfomance Filters

----





