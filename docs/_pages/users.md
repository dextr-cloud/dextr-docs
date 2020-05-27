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

[![Users dashboard](/assets/images/users-dashboard.jpg)](/assets/images/users-dashboard.jpg)

Figure 1. Users dashboard

----

### Users creation

By clicking the **+Users** button you will start the user creation process. A modal window asking you to fill a series of fields will show up. 

Between the fields you have the usual personal information of your agent (Name, Email, Password for login), then you have the option to assign a routing profile.

{% include figure image_path="/assets/images/create-user.gif" alt="Create User" caption="Gif 1. User Creation Modal Window"%}

----

#### Routing Profile

While queues are a 'waiting area' for contacts, a Routing Profile links queues to agents. Each agent is assigned to one routing profile. For more information on creating routing profiles from Amazon Connect, you can check [Connect documentation](https://docs.aws.amazon.com/connect/latest/adminguide/routing-profiles.html) to do so.

![Routing profile](/assets/images/routing-profile.jpg)

Figure 2. Routing profile

----

#### Security Profile

Meanwhile, Security Profiles will grant agents a level of permission to either view, update and create resources or specific tasks. So this option is used to assign what kind of features the agent will be able to see or use in Dextr.

![Security profile](/assets/images/security-profile.jpg)

Figure 3. Security profile

----

#### Phone Type

Here you can set the user phone as either Softphone/Desktop, and enable the Auto-Accept call option (by default this is set to OFF).

![Phone type](/assets/images/phone-type.jpg)

Figure 4. Phone type

----

After filling all the fields and clicking next, a summary with all the data of your user will be created. When clicking the **Submit** button, the user will appear in the **Activated Users**.

[![Review user](/assets/images/review-user.jpg)](/assets/images/review-user.jpg)

Figure 5. Review User

----

### Editing users

By clicking the pencil icon in the **Action** column, you enable the Edit mode where you can change all of the fields with the exception of **Phone type** (this is changed in [Settings](/settings/)). Once finished, you can click the check button to save your changes, or you can also press the "x" button to cancel them.

{% include figure image_path="/assets/images/editing-users.gif" alt="Editing User" caption="Gif 2. Editing Users"%}

----

### Deleting users

When clicking the trashcan icon right beside the edit button, you trigger a modal window asking for confirmation. If you delete an user, they'll be forced to logout of Dextr.

[![Deleting User](/assets/images/deleting-users.jpg)](/assets/images/deleting-users.jpg)

Figure 6. Deleting User

----
