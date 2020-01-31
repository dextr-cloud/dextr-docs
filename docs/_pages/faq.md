---
title: "Dextr FAQ"
permalink: /faq/
layout: single
toc: true
toc_sticky: true
sidebar: 
  nav: "docs"
---

### Architecture

- ***What is the architecture of Dextr Cloud?*** 

Dextr is a serverless implementation in the AWS Cloud. It makes use of many AWS services including DynamoDB, lambda, async, Cognito, sns, s3 and many other services. It is a fully elastic architecture and can scale on demand.
 
- ***What happens if Dextr is down?***

Because of our architecture we take full advantage of the AWS elasticity, resiliency and redundancy.  In the highly unlikely event that Dextr would fail, you would use your Amazon Connect CCP as a backup.
 
- ***What Browsers are supported by Dextr?*** 

Amazon Connect uses a technology similar to sip based voice over IP generally referred to as WebRTC.  WebRTC is still not an industry standard and though Chrome, Firefox and Opus have agreed to the same configuration Apple and Microsoft are going a different route.  For this reason we recommend CHROME though Firefox will work.
 
- ***Does Dextr publish an API?***

Currently we do not, but stay tuned for late breaking news.  If you are a developer or have an idea for a Dextr integration we are very interested in talking to you, so do not hesitate to contact us!
 
- ***Who can use Dextr?***

Dextr is designed to be used as an agent desktop for Amazon Connect call centers only.  Anyone who has system admin permissions can onboard Dextr in less than 15 minutes by following the onboarding process elsewhere on this blog.
 
- ***Does Dextr build anything in our AWS  portal?***

During the onboarding process, Dextr uses a CloudFormation template to create an IAM user that has permissions necessary to the configuration of your Amazon Connect instance.  Dextr also generates several lambda functions and a Kinesis stream in your portal.
 
- ***Does Dextr use Encryption?***

Dextr encrypts all data at rest and in transit.
 
- ***Is Dextr available globally?***

Dextr is globalized and available in any Regional in which AWS has release Amazon Connect.  Though media is streamed from the Region your Connect instance is built it, Dextr uses AWS CDN to reduce latency for the dashboard in general.
 
- ***Does every agent need Dextr?***

Dextr works with the users that may be using the CCP.  For example if you are using a CRM with an embedded CCP, Dextr will still report your activities and status.  We think the feature set of Dextr is such that you may want to run both, but users with Dextr will see other agents who only use the CCP.  Some features, like agent to agent chat will not work between Dextr and CCP, however.
 
### Support Maintenance and Software Release Protocol
 
- ***How do you release new versions of Dextr?***

Dextr is in a continual cycle of product improvement and enhancements.   Hot Fixes are pushed out as required to mitigate any issues that effect performance or operation.  New feature packages however, are announced and made available to all for evaluation before the release date. The staging environment ([https://stage.dextr.cloud](https://stage.dextr.cloud)) is available for review and testing of all new feature packages before they are pushed to production on the announced release date.  This gives all Dextr subscribers an opportunity to test the new version in their environment and report back any issues that might surface.
 
- ***Do All Subscribers get the same features?***

Currently, Dextr is made available to all subscribers.  Subscribers do not currently have the ability to block new features.  Most features, however, are permission based and to the extent that you create and manage your own security profiles so you may be able to use permissions to control features.
 
 
### Amazon Connect Call Center 
 
- ***Do we need to do any special configuration in Amazon Connect to use Dextr?***

Dextr has a couple of features that require you to add a couple of “Invoke lambda” steps in your call flow to check for holiday schedules and ad hoc closings along with configuring Kinesis streams and setting the recording bucket that Dextr expects you to use.  
 
- ***Does Amazon Connect have redundancy?***

Currently it does not but you can configure redundancy of sorts by building two call centers in separate regions, but manual intervention would be required in a fail over.   We anticipate that Amazon will make instance replication and imaging possible in the near future.
 
 
### Dextr Features 
 
- ***Can you provide SMS numbers for other than US?***

Carriers throughout the world have different requirements and generally demand to know who owns the number being used to send SMS messages.  For this reason, though we can obtain numbers for other countries the process is not included in Dextr phone number purchases.   Contact customerserverice@dextr.cloud for additional information.
 
- ***What email Server does Dextr use?***

 Dextr is not an email server. Dextr acts as an email client and will make use of whatever server you configure.  We have seen some issues using Gmail because of google log in requirements, but they are manageable.  Generally we work with all popular IMAP or POP3 servers. We recommend AWS Work mail as an excellent solution.
 
- ***How often does Dextr Check for Email Messages?***

Dextr will check the server for the account configured every 60 seconds and route the email per the configuration.  

- ***How does an Agent respond to an Email Message?***

Dextr provides an option to configure flows of Emails. When configured, any emails sent to the Instance would be shown as an Incoming call. If accepted by the Agent, he will only be able see the emails. To respond them you're required to log into your email account and reply.

- ***Does Dextr have a wallboard?***

Each dashboard has its own wallboard, but you can click the wallboard mode on the dashboard and expand the real time metric display to full screen for display as a wall board.
 
### Pricing Strategy
 
Dextr cost approximately .0065 a minute on a metered use basis.  However, nobody wants a metered rate, they don’t want to worry about Agents forgetting to log out.  We offer a prepaid rate discount for quarterly and annual prepayments as well.  We use a model of a 480 minute agent shift, a 4.1 week month and a 50 week year.  Dextr price runs from $65 to $42 a month per agent dashboard.
 
- ***Do we pay for an Admin who only logs in periodically?***

Generally you are invoiced for simultaneous log ins. Say you have 50 agents.  Dextr will allow you to burst 10% for short periods of time to assist administration and temp worker increases.
 
- ***Does Dextr have a reseller program?***

Yes, Dextr has a revenue sharing program for both referrals and resellers.  Contact Dextr sales for details.

### Deployment Strategy

We have a staging environment in which all new releases are staged for testing and assurance ([https://stage.dextr.cloud/](https://stage.dextr.cloud)).The stage environment, enables a client to log in and play with new features before they are released across the board and we encourage all clients to do so.

When we do publish to production it is done only after a published date (unless it is a maintenance fix) and all have had an opportunity to play with new features in the Sandbox.
 
- ***Are features permission based and can be turned off?***

Yes, all features are permission based but not all features are toggleable. Often times a new feature isn’t toggleable until the next patch.
