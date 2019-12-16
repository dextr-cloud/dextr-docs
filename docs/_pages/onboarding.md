---
title: "Onboarding"
permalink: /onboarding/
layout: single
toc: true
toc_sticky: true
sidebar: 
  nav: "docs"
---

After your email has been verified, you'll be redirected to the Onboarding portal (Figure 1) in order to claim the instance and start your Call Center.
<figure>
   <img src="{{ '/assets/images/onboarding-portal.png' }}" alt="Onboarding Portal">
   <span>Figure 1. Onboarding Portal</span>
</figure>
----
Here, you can see that the Onboarding process consists of 2 steps:
1. Verify Ownership
2. Claim instance

### Step 1. Verify Ownership

Verify ownership consists of 2 steps. The first one would be to whitelist https://go.dextr.cloud . The second one is to login in Connect as an administrator.

#### Step 1.1 - Whitelisting the page

- When whitelisting dextr.cloud you're allowing incoming popups, which is important since they will be used to claim the instance and use other features. 

- You also need to add an Approved origin in Amazon Connect. Through the Amazon Web Service console, you can enter Amazon Connect, click the name of your instance and then go to the **Application Integration** tab (Figure 2), in which you can add an approved origin. When modal window is displayed type **https://go.dextr.cloud** and click the add button. After a few seconds the origin should be added.

<figure>
   <img src="{{ '/assets/images/app-integration.png' }}" alt="Application Integration">
   <span >Figure 2. Application Integration Tab</span>
</figure>
----
#### Step 1.2 - Login in Amazon Connect as Administrator

In the Overview tab an option to Login as Administrator will be shown.

<figure>
   <img src="{{ '/assets/images/connect-login.png' }}" alt="Login As Administrator">
   <span >Figure 3. Instance Overview section showing Login as Administrator</span>
</figure>
----
After clicking the Login button, if you still haven't claimed a number you'll be redirected to the **Claim Phone Number** section (Figure 4), where you'll need to select a country, type and phone number. For onboarding purposes you can omit the first call process shown through the CCP (Contact Control Panel) but you need to claim a phone number if you want to set up Data Stream during the Claim Instance process in **Step 2**.
<figure>
   <img src="{{ '/assets/images/administrator-first-login.png' }}" alt="Claim Phone Number">
   <span >Figure 4. Amazon Connect Claim Phone Number section</span>
</figure>
----
If you already claimed a phone number, then login as Administrator will redirect you to the **Amazon Connect Dashboard**.
<figure>
   <img src="{{ '/assets/images/claimed-number-login.png' }}" alt="Amazon Connect Dashboard">
   <span >Figure 5. Amazon Connect Dashboard</span>
</figure>
----

Lastly, after having a tab open with your Amazon Connect dashboard (logged as Administrator) and having whitelisted go.dextr.cloud, you can type your Instance Alias and click the Verify button. When the status changes to verified, you can proceed and claim the Instance.
<figure>
   <img src="{{ '/assets/images/verified-ownership.png' }}" alt="Verified Status">
   <span >Figure 6. Verified Status</span>
</figure>

### Step 2. Claim Instance

After clicking the Claim Instance button, a modal window will pop up prompting you to go through 6 steps.

#### Step 2.1 - Company Name
- In this step you type the name of your company and go to the next step.
<figure>
   <img src="{{ '/assets/images/step1.png' }}" alt="Company Name">
   <span >Figure 7. Company Name</span>
</figure>
----

#### Step 2.2 - Landing Page
- In this step you type the URL where users will be able to access your portal after the onboarding process is finished.
<figure>
   <img src="{{ '/assets/images/step2.png' }}" alt="Landing Page">
   <span >Figure 8. Choosing Landing page</span>
</figure>
----

#### Step 2.3 - Grant Access 

- In order to grant access, we must first deploy a few resources in the AWS environment. When clicking the Deploy Resources button, you'll redirected to AWS in order to create a Stack. After the Stack is created you'll have to wait for some Events to finish deployment and for the Output tab to have both your Access and Secret keys. This might take a few minutes, but when AWS gives you both keys in the **Ouput** tab of your Stack, you can copy it then paste them into their respective field in the Onboarding modal window.
<figure>
   <img src="{{ '/assets/images/deploy-resources.gif' }}" alt="Deploy Resources">
   <span>Gif 1. Deploying Resources and Retrieving Access and Secret Keys</span>
</figure>
----

- After pasting both keys, you can verify credentials and proceed forward to the next step.
<figure>
   <img src="{{ '/assets/images/credentials-verified.png' }}" alt="Credentials verified">
   <span >Figure 9. Credentials verified Step 3</span>
</figure>
----

#### Step 2.4 - Data Stream

- In this step you can export Contact Tracer Records (CTRs) and Agent Events to perform analysis on your data. You can do so by enabling data streaming in the **Data Streaming** tab in Amazon Connect (Figure 10), then set a Kinesis stream with your InstanceID for both CTR and Agent Events. If you'd like you could also create a new [Kinesis Stream](https://docs.aws.amazon.com/streams/latest/dev/introduction.html) to have one for CTR and another one for Agent Events.

<figure>
   <img src="{{ '/assets/images/step4.png' }}" alt="Kinesis Stream">
   <span >Figure 10. Kinesis Stream</span>
</figure>
----
After setting up the Data Stream in Amazon Connect, you can click the Generate Data button from the onboarding process, get the Connected status and proceed to the next step (Figure 11). If you don't want to set up Data Streaming, you can skip this step and proceed to Step 5.

<figure>
   <img src="{{ '/assets/images/connected-step4.png' }}" alt="Connected Stream">
   <span >Figure 11. Stream Connected</span>
</figure>
----

#### Step 2.5 - Choosing Timezone and Directory

- You can set a Timezone and Directory for your Instance (Figure 12). This is important as this is the time that will be displayed when creating Events through the Hours of Operation tab in the Settings Dashboard from Dextr.

<figure>
   <img src="{{ '/assets/images/step5.png' }}" alt="Timezone">
   <span >Figure 12. Timezone and Directory</span>
</figure>
----

#### Step 2.6 - Review and Confirm

- And finally the last step. In this step you'll be shown a summary of all the data that was chosen in the Onboarding process. If you're having second thoughts you can always go to a previous step and change the information or data that you chose. 
<figure>
   <img src="{{ '/assets/images/step6.png' }}" alt="Summary">
   <span >Figure 13. Review and Confirm</span>
</figure>
----
After this, you can click the **Go to Dashboard** button and you'll be redirected to your Call center as the Instance administrator!

Congratulations, you're now able to enjoy Dextr features and Supercharge your Call Center!
<figure>
   <img src="{{ '/assets/images/IA-login.png' }}" alt="Instance Admin Login">
   <span >Figure 14. Instance Admin first login</span>
</figure>