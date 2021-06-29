---
title: "Team Status Drawer"
permalink: /teamStatus/
layout: single
toc: true
toc_sticky: true
sidebar: 
  nav: "docs"
---

This is a Dextr component that can be displayed in every Dextr TAB. It shows you other agents assigned to your queue or routing profile. 

### Right click menu

You can right click each agent to engage either in chat, a call, or add them as favorites.

#### Favorites

By clicking this option you add agents as Favorites. This will put them on the top side of the Team Status. If an agent is already favorited, you can Unfavorite them any time. 

[![Team Status Favorites](/assets/images/ts-favorites.jpg)](/assets/images/ts-favorites.jpg)

----

#### Call (Peer to Peer call)

You're able to call agents who are online (either Available or in a custom status provided by the Instance Admin). Please do take into account that **you're unable to call agents who have the Offline** status, and that these calls are recorded in ***My Perfomance Card*** in the Peer to Peer call section.

[![Agent Call](/assets/images/agent-call.jpg)](/assets/images/agent-call.jpg)

----

#### Chat (Agent to Agent Chat)

This option redirects you to the Chat UI. Here you will be able to communicate with other agents by sending, receiving and reading messages.

[![Agent Chat](/assets/images/agent-chat.jpg)](/assets/images/agent-chat.jpg)

----

#### Change Agent Status

As a supervisor, you're also able to change an agent status if you spot that they have been in a released or offline state for too long.

[![Change Agent Status](/assets/images/change-status2.jpg)](/assets/images/change-status2.jpg)

#### Silent Monitor and Whisper Coach

When an agent is on call and you see the **Connected** status in the Team Drawer, after a right click you have the option to either Silent Monitor or Whisper Coach.

- ***Silent Monitor*** allows you to silently hear the call between the agent and the contact.
- ***Whisper Coach*** allows you to whisper/speak with the agent without the contact being able to hear you. 

[![Silent monitor](/assets/images/silent-monitor.jpg)](/assets/images/silent-monitor.jpg)

----
### Hide Offline / Show all Agents

You have the option to hide offline agents or to display all of them by clicking the corresponding button.

{% include figure image_path="/assets/images/team-status.gif" alt="Team Drawer"%}

----

### Team Status Durations

Dextr is currently able to show the duration of each agent status. Your Team Status will update under 2 conditions: 
- Approximately after 15 seconds have passed.
- Whenever an Agent changes status (it will inmediatly update and display **Just now** right beside their status).

[![Team Status Durations](/assets/images/agent-status-duration.jpg)](/assets/images/agent-status-duration.jpg)

----

### Search Input

At the very bottom of the Status Drawer, you also have a **Search** input to help you find an agent by name.

[![Team Status Search](/assets/images/ts-search.jpg)](/assets/images/ts-search.jpg)

### My Recent Activity

This widget lists all your activity through the day as records. You'll see Inbound, Outbound and even your Missed calls. Everytime you make a call or receive one, the list will update.

You can also click any of the records, and choose the option to call the specified number.

### My Perfomance

This shows your perfomance. It displays the amount of ACD (Automatic Call Distributor) and Peer to Peer (Agent to Agent) calls you've had during the day. How many you've handled, missed, and the amount of time.

![My Perfomance](/assets/images/my-perfomance.jpg)

----

<style>
    h4 {
      font-size: 18px;
    }
</style>