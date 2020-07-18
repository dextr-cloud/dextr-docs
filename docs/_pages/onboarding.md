---
title: "Onboarding"
permalink: /onboarding/
layout: single
toc: true
toc_sticky: true
sidebar: 
  nav: "docs"
---

After your subscription to Dextr, you'll be redirected to the Onboarding portal in order to claim your instance.

[![Onboarding Portal](/assets/images/newOnboarding.jpg)](/assets/images/newOnboarding.jpg)

----
The Onboarding process consists of 5 steps, and the first 3 steps have an ***Explainer video*** that you can watch for guidance.

### Step 1. Verify Ownership

Verify ownership requires you to add ***Application integration origin***  and ***Login into Connect as Root Administrator***. Remember to also whitelist https://go.dextr.cloud to allow incoming popups.

[![Verify Ownership](/assets/images/verifyOwnership.jpg)](/assets/images/verifyOwnership.jpg)

#### Step 1.1 - Application integration

You require an ***Approved origin*** in Amazon Connect. Through the Amazon Web Service console:

- Go to Amazon Connect and click the name of your instance.
[![Clicking Instance](/assets/images/clickingInstance.jpg)](/assets/images/clickingInstance.jpg)

- Go to the **Application Integration** tab and click ***Add origin***. Input **https://go.dextr.cloud** and add it.

[![Application Integration](/assets/images/app-integration.png)](/assets/images/app-integration.png)
   
----
#### Step 1.2 - Log into Amazon Connect as Root Administrator

- In the Overview tab, click ***Log in for emergency access***.

[![Login As Administrator](/assets/images/connect-login.png)](/assets/images/connect-login.png)

----
- This will bring you to the **Amazon Connect Dashboard**. If you still haven't claimed a number remember to do so in the **Claim Phone Number** section, where you'll need to select a country, type and phone number. This allows to set Data Streaming later.

[![Claim Phone Number](/assets/images/administrator-first-login.png)](/assets/images/administrator-first-login.png)
----

- After adding ***Application origin*** and being logged as ***Root Administrator*** , type your Instance Alias and click the Verify button, which will grant you the ***Verified*** status.


[![Verified Status](/assets/images/verifiedOwnership.jpg)](/assets/images/verifiedOwnership.jpg)

----

### Step 2. Grant Access

The second step is granting access by deploying support resources. 

[![Grant Access](/assets/images/grantAccess.jpg)](/assets/images/grantAccesss.jpg)

- Click **Deploy Resources**.
- You'll be redirected to AWS console to create a stack. Create it by scrolling down, check ***I acknowledge that AWS CloudFormation might create IAM resources with custom names*** and click ***Create stack***.

{% include figure image_path="/assets/images/deploy-resources.gif" alt="Deploy Resources"%}

- After waiting a few moments the option to **Validate** will be unlocked. Click to proceed and get the **Deployed** status.

[![Grant Access](/assets/images/deployed.jpg)](/assets/images/deployed.jpg)

### Step 3. Data Streaming

In this step you can export Contact Tracer Records (CTRs) and Agent Events to perform analysis on your data. You can do so by enabling data streaming in the **Data Streaming** tab in Amazon Connect for both CTR and Agent Events. From Amazon Connect:

- Click Data Streaming TAB.
- Check **Enable Data Streaming**.
- Mark **Kinesis Stream**.
- In the dropdown choose: "dextr-yourInstanceAlias-connectStream" both for Contact Trace Records and Agent Events.
- Click **Save**.

The connection will be set automatically as soon as you start making calls and interacting with other Agents (e.g. Agent chat). 

[![Kinesis Stream](/assets/images/dataStreaming.jpg)](/assets/images/dataStreaming.jpg)

----

### Step 4. Info & Preferences

In this step you're required to fill 5 obligatory fields in order to proceed to the next step. These are:

- Choose a product tier (if you want to select 30 day Free trial, Dextr Voice Only or Dextr OmniChannel plan).
- Write the name of your Company.
- Write the Login URL.
- Choose a Timezone.
- Choose directory (If Local or SAML).

You also have the option to set Track Usage location.

[![Info&Preference](/assets/images/info&preferences.jpg)](/assets/images/info&preferences.jpg)

----

### Step 5 - Review and Confirm

- You'll be shown a summary of all the data that was chosen in the Onboarding process. You can always go back to a previous step to confirm and change the data you chose in Step 4. 

[![Summary](/assets/images/reviewConfirm.jpg)](/assets/images/reviewConfirm.jpg)

----
After this, you can click the **Finish** button and you'll be redirected to the dashboard. Click Login, which will redirect you to the Login URL of your company and then click **Secure Login** . 

[![Secure Login](/assets/images/onboarder.jpg)](/assets/images/onboarder.jpg)

And That's it! You have now logged in as the Instance Admin and can start using Dextr.

[![Instance Admin Login](/assets/images/IA-login.jpg)](/assets/images/IA-login.jpg)

<style>
   h4 {
      font-size: 18px;
   }
</style>