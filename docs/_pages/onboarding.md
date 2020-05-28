---
title: "Onboarding"
permalink: /onboarding/
layout: single
toc: true
toc_sticky: true
sidebar: 
  nav: "docs"
---

After your email has been verified, you'll be redirected to the Onboarding portal in order to claim the instance and start your Call Center.

[![Onboarding Portal](/assets/images/onboarding-portal.png)](/assets/images/onboarding-portal.png)

----
Here, you can see that the Onboarding process consists of 2 steps:
1. Verify Ownership
2. Claim instance

### Step 1. Verify Ownership

Verify ownership consists of 2 steps. The first one would be to whitelist https://go.dextr.cloud . The second one is to login in Connect as an administrator.

#### Step 1.1 - Whitelisting the page

- When whitelisting dextr.cloud you're allowing incoming popups, which is important since they will be used to claim the instance and use other features. 

- You also need to add an Approved origin in Amazon Connect. Through the Amazon Web Service console, you can enter Amazon Connect, click the name of your instance and then go to the **Application Integration** tab, in which you can add an approved origin. When the modal window is displayed, type **https://go.dextr.cloud** and click the add button. After a few seconds the origin should be added.

[![Application Integration](/assets/images/app-integration.png)](/assets/images/app-integration.png)
   
----
#### Step 1.2 - Login in Amazon Connect as Administrator

In the Overview tab an option to Login as Administrator will be shown.

[![Login As Administrator](/assets/images/connect-login.png)](/assets/images/connect-login.png)

----
After clicking the Login button, if you still haven't claimed a number you'll be redirected to the **Claim Phone Number** section, where you'll need to select a country, type and phone number. For onboarding purposes you can omit the first call process shown through the CCP (Contact Control Panel) but you need to claim a phone number if you want to set up Data Stream during the Claim Instance process in **Step 2**.

[![Claim Phone Number](/assets/images/administrator-first-login.png)](/assets/images/administrator-first-login.png)

----
If you already claimed a phone number, then login as Administrator will redirect you to the **Amazon Connect Dashboard**.

[![Amazon Connect Dashboard](/assets/images/claimed-number-login.png)](/assets/images/claimed-number-login.png)

----

Lastly, after having a tab open with your Amazon Connect dashboard (logged as Administrator) and having whitelisted go.dextr.cloud, you can type your Instance Alias and click the Verify button. When the status changes to verified, you can proceed and claim the Instance.

[![Verified Status](/assets/images/verified-ownership.png)](/assets/images/verified-ownership.png)

----

### Step 2. Claim Instance

After clicking the Claim Instance button, a modal window will pop up prompting you to go through 6 steps.

#### Step 2.1 - Company Name

- Type the name of your company.

[![Company Name](/assets/images/step1.png)](/assets/images/step1.png)

----

#### Step 2.2 - Landing Page
- In this step you type the URL where users will be able to access your portal after the onboarding process is finished.

[![Landing Page](/assets/images/step2.png)](/assets/images/step2.png)

----

#### Step 2.3 - Grant Access 

- In order to grant access, we must first deploy a few resources in the AWS environment. When clicking the Deploy Resources button, you'll redirected to AWS in order to create a Stack. After the Stack is created you'll have to wait for some Events to finish deployment and for the Output tab to have both your Access and Secret keys. This might take a few minutes, but when AWS gives you both keys in the **Ouput** tab of your Stack, you can copy it then paste them into their respective field in the Onboarding modal window.

{% include figure image_path="/assets/images/deploy-resources.gif" alt="Deploy Resources"%}

----

- After pasting both keys, you can verify credentials and proceed forward to the next step.

[![Credentials verified](/assets/images/credentials-verified.png)](/assets/images/credentials-verified.png)

----

#### Step 2.4 - Data Stream

- In this step you can export Contact Tracer Records (CTRs) and Agent Events to perform analysis on your data. You can do so by enabling data streaming in the **Data Streaming** tab in Amazon Connect, then set a Kinesis stream with your InstanceID for both CTR and Agent Events. If you'd like you could also create a new [Kinesis Stream](https://docs.aws.amazon.com/streams/latest/dev/introduction.html).

[![Kinesis Stream](/assets/images/step4.png)](/assets/images/step4.png)

----
After setting up the Data Stream in Amazon Connect, you can click the Generate Data button from the onboarding process, get the Connected status and proceed to the next step. If you don't want to set up Data Streaming, you can skip this step and proceed to Step 5.

[![Connected Stream](/assets/images/connected-step4.png)](/assets/images/connected-step4.png)

----

#### Step 2.5 - Choosing Timezone and Directory

- You can set a Timezone and Directory for your Instance. This is important as this is the time that will be displayed when creating Events through the Hours of Operation tab in the Settings Dashboard from Dextr.

[![Timezone](/assets/images/step5.png)](/assets/images/step5.png)

----

#### Step 2.6 - Review and Confirm

- You'll be shown a summary of all the data that was chosen in the Onboarding process. You can always go to a previous step to change the data. 

[![Summary](/assets/images/step6.png)](/assets/images/step6.png)

----
After this, you can click the **Go to Dashboard** button and you'll be redirected to your Call center as the Instance administrator.

[![Instance Admin Login](/assets/images/IA-login.png)](/assets/images/IA-login.png)

<style>
   h4 {
      font-size: 18px;
   }
</style>