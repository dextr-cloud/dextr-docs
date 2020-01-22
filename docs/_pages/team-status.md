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

#### Call (Peer to Peer call)

By clicking this option you're able to call agents who are online (either Available or in a custom status provided by the Instance Admin). These calls are recorded in ***My Perfomance Card*** as Peer to Peer call.

#### Chat (Agent to Agent Chat)

By clicking this option you trigger the Chat UI. Here you will be able to communicate with other agents by sending, receiving and reading messages.

#### Silent Monitor and Whisper Coach

When an agent is on call and you see the **Connected** status in the Team Drawer, after a right click you have the option to either Silent Monitor or Whisper Coach.

- ***Silent Monitor*** allows you to silently hear the call between the agent and the contact.
- ***Whisper Coach*** allows you to whisper/speak with the agent without the contact being able to hear you. 

<figure>
   <img src="{{ '/assets/images/silent-monitor.jpg' }}" alt="Agent Availability">
   <span>Figure 1. Silent Monitor & Whisper Coach</span>
</figure>

----
### Hide Offline / Show all Agents

You have the option to hide offline agents or to display all of them by clicking the corresponding button.

<figure>
   <img src="{{ '/assets/images/team-status.gif' }}" alt="Team Status Drawer">
   <span>Gif 1. Showing Favorite, Hide Offline Button, All users and Chat</span>
</figure>

----


### Team Status Durations

Dextr is currently able to show the duration of each agent status. Your Team Status will update under 2 conditions: 
- Approximately after 15 seconds have passed.
- Whenever an Agent changes status (it will inmediatly update and display **Just now** right beside their status).

<figure>
   <img src="{{ '/assets/images/agent-status-duration.jpg' }}" alt="Team Status Durations">
   <span>Figure 12. Team Status Durations</span>
</figure>