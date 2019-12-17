---
title: "Settings"
permalink: /settings/
layout: single
toc: true
toc_sticky: true
sidebar: 
  nav: "docs"
---

The Settings TAB is composed of many sections where you'll be able to change your profile picture, company logo, enable call dispositions, set up security options, channels and a lot more:

### Preferences

This is the starting page since it will be the one you're redirected to when you navigate to the Settings Tab, and is composed of:
- Phone
- User info
- Sounds

#### Phone

This option enables either soft phone or desk phone (Figure 1). Click the pencil icon to change from softphone to desk phone and enter your direct dial telephone number.  All calls that come to your dashboard will ring to your phone when desk phone is enabled, and it's also possible to set this to a cell phone if you want to take calls while running around the globe. Be sure to set a Wrap time so your dashboard is not stuck in the Wrap up status, waiting to be made Available after the last call.

#### User Info

In this section you can change your Avatar, First Name, Last Name and Email (Figure 1). By clicking the avatar symbol you pop up Windows (or your OS) explorer, which will allow you to choose an image. 

By clicking the pencil icon you can also edit the other fields. Email is important since that's the address where Contact's mail messages will be redirected to when you accept an incoming Email flow.

<figure>
   <img src="{{ '/assets/images/phone-user-info.png' }}" alt="Settings. Phone and User">
   <span>Figure 1. Settings: Preference - Phone & User Info</span>
</figure>
----

#### Sounds

For voice call, you have Primary and Secondary (by default Secondary is disabled). Primary will play the ringtone you choose when receiving either an incoming ACD call or an incoming request for email flow. You can also select which device will output the sound (Default, Speakers or Headphones).

If you enable Secondary, it will play the ringtone you choose with an Output device different than the one set in Primary. So if you have Primary set to Headphones, Secondary will play on Speakers. When you receive a call, both of them will play in their respective output device.

**Peer call** on the other hand is the ringtone that will play when receiving a call from one of your teammates (another agent), and **New Chat message** is the one that plays when you receive a chat message.

<figure>
   <img src="{{ '/assets/images/sounds-settings.jpg' }}" alt="Settings Sounds">
   <span>Figure 2. Settings: Preference - Sounds</span>
</figure>
----

### General

This is for users who have the security profile level of an admin. General has the following sections:
- Brand
- Account
- Configuration

#### Brand

In this section you can change the logo present in Dextr header. The principle to change it is the same one applied for your avatar profile picture (just click and choose an image from your file explorer). You can also change Dextr header color to either the default color (blue) or a light one (white).

<figure>
   <img src="{{ '/assets/images/general-brand.jpg' }}" alt="General Brand">
   <span>Figure 3. Settings: General - Brand</span>
</figure>
----

#### Account

This is a general portait of all the information relevant to the Instance. It displays the Admin Connect information, and it also gives you the option to edit Company Name, Admin Name and Email.

<figure>
   <img src="{{ '/assets/images/account.jpg' }}" alt="General Account">
   <span>Figure 4. Settings: General - Account</span>
</figure>

----

#### Configuration

Here you can configure Presented Not Answered behavior (when you miss a call), and it gives you 3 options:

1. Forced Release - When you or another agent misses an ACD call, it will put you in a Forced Release Status (or the Configured label set by the admin) until you manually change it to another (e.g manually changing status to Available after being in the "missed call" label).
2. Wrap Up - When you or another agent misses an ACD call a countdown will start. After the countdown from configured wrap up time (**User Phone Configuration Wrap Time**) finishes, your status will be automatically changed to Available.
3. Custom - When you or another agent misses an ACD call a countdown from the **Configuration Duration** setting will start. after the countdown set from the **Configuration Duration** time finishes, your status will be automatically changed to Available.

There is also Call Dispositions. By default this is disabled, but by enabling it, you can add new call dispositions by clicking the **+Add Call Disposition** button, so that they're shown in a dropdown when a call finishes. **Allow Custom Input** can also be turned on, allowing agents to manually write the disposition of the call.

<figure>
   <img src="{{ '/assets/images/general-configuration.jpg' }}" alt="General Configuration">
   <span>Figure 5. Settings: General - Configuration</span>
</figure>
----

Lastly, you can turn **Demo Mode** on to simulate a real work environment. This will preview some of Dextr dashboard features and metrics with prepopulated data in the Home Dashboard. You can also turn this on and off with Ctrl+Shift+D, and to test incoming call you do so with Ctrl+Shift+I.

<figure>
   <img src="{{ '/assets/images/demo-mode.jpg' }}" alt="Demo mode">
   <span>Figure 6. Demo mode - Home Dashboard</span>
</figure>


### Integrations

General information about integrations within the application.

#### Core & Extensions

Here you can see the already integrated core functionalities within Dextr (Amazon Connect and Kinesis) and the things that are being worked on (Alexa).

<figure>
   <img src="{{ '/assets/images/integration.jpg' }}" alt="Integration">
   <span>Figure 7. Settings: Integration</span>
</figure>
----

### Hours of Operation

This TAB enables you to establish Holiday and “Ad Hoc” queue closings.  

<figure>
   <img src="{{ '/assets/images/hours-operation.jpg' }}" alt="Hours of Operation">
   <span>Figure 8. Settings: Hours of Operation</span>
</figure>
----

#### Global

This section is used to see the timezone set for the Instance. Timezone can be changed by clicking the dropdown.

<figure>
   <img src="{{ '/assets/images/global-timezone.jpg' }}" alt="Global Timezone">
   <span>Figure 9. Settings: H.Operations - Timezone</span>
</figure>
----

#### Events

You can add an event by clicking the **+EVENT** button. Choose a Name, select a Queue, and then select if this is a single day or multiple day event by clicking the **All day** switch below the calendar, which is also used to determine the date, and start/end time. 

You will also have the opportunity to enter a TEXT to SPEECH prompt which will be played to the caller during the closed period.  This is very useful if you want to close a single queue for a team meeting, or if you want to list out your Holiday closings for the year. 

<figure>
   <img src="{{ '/assets/images/hours-events.jpg' }}" alt="H.Operation Events">
   <span>Figure 10. Settings: H.Operations - Multiple Day Event</span>
</figure>

### Security

This TAB is used to create very specific ROLES, but you can also edit or delete specific permissions within the profiles.

<figure>
   <img src="{{ '/assets/images/settings-security.jpg' }}" alt="Settings Security">
   <span>Figure 11. Settings: Security</span>
</figure>
----

#### Security profiles

You can add them by clicking the **+Security Profile** button, and add permissions to that role. You can then assign the role through the USER TAB to individual members. 

<figure>
   <img src="{{ '/assets/images/create-security.jpg' }}" alt="Settings Security Profile">
   <span>Figure 12. Settings: Security - Create Security Profile</span>
</figure>
----

### Phone Numbers

This TAB enables you to purchase an SMS number for use in routing inbound text calls to specific queues. This is an optional feature and has a service charge based on the number of text messages sent and received. 

<figure>
   <img src="{{ '/assets/images/phone-numbers.jpg' }}" alt="Settings Phone Number">
   <span>Figure 13. Settings: Phone Numbers</span>
</figure>
----

### Channels

Channels enable you to select SMS or EMAIL to create unique routing rules for each type of channel. Each configuration enables you to select a Queue to receive either the SMS or the Email. Multiple emails can be created each with a different target queue.  

#### SMS

SMS enables KEYWORDS to be used to match an incoming SMS first word to select the target queue.  This way you can have one text number that can handle TAC, SALES, Queues, etc.  Optionally you can have an Queue for each number rather than a keywork. 

<figure>
   <img src="{{ '/assets/images/channels-sms.jpg' }}" alt="Settings SMS">
   <span>Figure 14. Settings: Channels - SMS</span>
</figure>
----

#### Email

Email works like SMS, but instead of a Number you provide and set up an Email Address for the Instance. After that you set up an Email flow for queues and you'll be able to redirect the emails sent to the Instance by the queues added in the flow. 

Both SMS and EMAIL are “sticky” meaning that the conversation will stay with the same agent until ended. If that agent is unavailable, the entire conversation will be forwarded to the next available logged in agent. 

<figure>
   <img src="{{ '/assets/images/channels-email.jpg' }}" alt="Settings Email">
   <span>Figure 15. Settings: Channels - Email</span>
</figure>
----