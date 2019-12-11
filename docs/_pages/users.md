---
title: "Users"
permalink: /users/
layout: single
toc: true
toc_sticky: true
sidebar: 
  nav: "docs"
---

This TAB will only appear when you have an Administrator security profile. In this dashboard you can create, modify and delete users as well as setting up the options for that user.

<figure>
   <img src="{{ '/assets/images/users-dashboard.jpg' }}" alt="Users dashboard">
   <span>Figure 1. Users dashboard</span>
</figure>
----

### Users creation

By clicking the **+Users** button you will start the user creation process. A modal window asking you to fill a series of fields will show up. 

Between the fields you have the usual personal information of your agent (Name, Email, Password for login), then you have the option to assign a routing profile.

<figure>
   <img src="{{ '/assets/images/create-user.gif' }}" alt="Create User">
</figure>
----

#### Routing Profile

While queues are a 'waiting area' for contacts, a Routing Profile links queues to agents. Each agent is assigned to one routing profile. For more information on creating routing profiles from Amazon Connect, you can check [Connect documentation](https://docs.aws.amazon.com/connect/latest/adminguide/routing-profiles.html) to do so.

<figure>
   <img src="{{ '/assets/images/routing-profile.jpg' }}" alt="Routing profile">
   <span>Figure 2. Routing profile</span>
</figure>
----

#### Security Profile

Meanwhile, Security Profiles will grant agents a level of permission to either view, update and create resources or specific tasks. So this option is used to assign what kind of features the agent will be able to see or use in Dextr.

<figure>
   <img src="{{ '/assets/images/security-profile.jpg' }}" alt="Security profile">
   <span>Figure 3. Security profile</span>
</figure>
----

#### Phone Type

Here you can set the user phone as either Softphone/Desktop, and enable the Auto-Accept call option (by default this is set to OFF).

<figure>
   <img src="{{ '/assets/images/phone-type.jpg' }}" alt="Phone type">
   <span>Figure 4. Phone type</span>
</figure>
----

After filling all the fields and clicking next, a summary with all the data of your user will be created. When clicking the **Submit** button, the user will appear in the **Activated Users**.

<figure>
   <img src="{{ '/assets/images/review-user.jpg' }}" alt="Review User">
   <span>Figure 5. Review User</span>
</figure>
----

### Editing users

By clicking the pencil icon in the **Action** column, you enable the Edit mode where you can change all of the fields with the exception of **Phone type** (this is changed in [Settings](/docs/settings/)). Once finished, you can click the check button to save your changes, or you can also press the "x" button to cancel them.

<figure>
   <img src="{{ '/assets/images/editing-users.gif' }}" alt="Editing User">
</figure>
----

### Deleting users

When clicking the trashcan icon right beside the edit button, you trigger a modal window asking for confirmation. If you delete an user, they'll be forced to logout of Dextr.

<figure>
   <img src="{{ '/assets/images/deleting-users.jpg' }}" alt="Deleting User">
   <span>Figure 6. Deleting User</span>
</figure>
----
