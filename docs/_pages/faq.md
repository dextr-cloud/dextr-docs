---
title: "ConnectPath FAQ"
permalink: /faq/
layout: single
toc: true
toc_sticky: true
sidebar: 
  nav: "docs"
---

### Architecture

- ***What is the architecture of ConnectPath*** 

ConnectPath is a serverless implementation in the same AWS Commercial Regions that Amazon Connect is available in. It makes use of many AWS services including Route 53, CloudFront, S3, API Gateway, AppSync, Lambda, DynamoDB, Cognito, SNS, SQS and SES. It is a fully elastic architecture and can scale on demand.
 
- ***What happens if ConnectPath is down?***

Because of our architecture we are able to take full advantage of the elasticity, resiliency and redundancy afforded by AWS.  In the highly unlikely event of a ConnectPath falure, you will still have access to the native Amazon Connect interfaces.
 
- ***What Browsers are supported by ConnectPath?*** 

Amazon Connect uses technologies similar to SIP based Voice Over IP (VoIP) referred to as WebRTC.
 
- ***Does ConnectPath publish an API?***

Yes, we currently provide APIS for User and Directory Management.
 
- ***Who can use ConnectPath?***

ConnectPath is designed to be used as an agent desktop for Amazon Connect call centers only.  Anyone who has system admin permissions can onboard ConnectPath in less than 15 minutes by following the onboarding process elsewhere on this blog.
 
- ***Does ConnectPath build anything in our AWS  portal?***

During the onboarding process, ConnectPath uses a CloudFormation template to create an IAM role that has the permissions necessary to integrate with your Amazon Connect instance.  ConnectPath also generates several Lambda functions, a Dynamo DB table, Kinesis stream and S3 Bucket in your AWS Account.

- ***Does ConnectPath use Encryption?***

ConnectPath encrypts all data at rest and in transit.
 
- ***Is ConnectPath available globally?***

ConnectPath is globalized and available in any Regional in which AWS has released Amazon Connect.  Though media is streamed from the Region your Connect instance is built it, ConnectPath uses AWS CloudFront (CDN) to distribute static content and reduce latency globally.
 
- ***Does every agent need ConnectPath?***

ConnectPath works with the users that may be using the CCP.  For example if you are using a CRM with an embedded CCP, ConnectPath will still report your activities and status.  We think the feature set of ConnectPath is such that you may want to run both, but users with ConnectPath will see other agents who only use the CCP.  Some features, like agent to agent chat will not work between ConnectPath and CCP, however.

- ***Where do ConnectPath metrics come from? How can I be sure that the data displayed is accurate?***

ConnectPath metrics comes from Amazon Connect Historical and Real Time Metrics. Historical metrics include data about past, completed activities and perfomance of the contact center. They can be CTR-driven or Agent Activity-driven.

Real Time Metrics on the other hand consists of various agent metrics that can be used to generate reports: their status, personal information, activities and handling of contacts. For more information you can check Amazon Connect [documentation](https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html).

- ***How long do I have to wait for the data to update in the Instance?*** 

ConnectPath sends a request every minute. This allows the Instance to keep track and update some metrics (Queues & Routing Profiles metrics) approximately every 60 seconds.
 
### Support Maintenance and Software Release Protocol
 
- ***How do you release new versions of ConnectPath?***

ConnectPath is in a continual cycle of product improvement and enhancements.   Hot Fixes are pushed out as required to mitigate any issues that effect performance or operation.  Standard releases are every 5 weeks.
 
- ***Do All Subscribers get the same features?***

Currently, ConnectPath is made available to all subscribers.  Subscribers do not currently have the ability to block new features.  Most features, however, are permission based and to the extent that you create and manage your own security profiles so you may be able to use permissions to control features.
 
 
### Amazon Connect Call Center 
 
- ***Do we need to do any special configuration in Amazon Connect to use ConnectPath?***

ConnectPath has a couple of features that require you to a “Invoke lambda” and/or "Set Attribute" block in your contact flow to check for holiday schedules and ad hoc closings along with configuring Kinesis streams that ConnectPath expects you to use.  
 
- ***Does Amazon Connect have redundancy?***

Amazon Connect has built-in redundancy in a single region and optionally supports multiple region redundancy. 
 
### ConnectPath Features 
  
- ***What email Server does ConnectPath use?***

 ConnectPath will work with most SMTP servers for sending E-Mail. For receiving E-Mail, Amazon SES is utilized as an SMTP gateway, but other E-Mail servers can be configured to forward to it.
 
- ***How often does ConnectPath Check for Email Messages?***

ConnectPath will check the server for the account configured every 60 seconds and route the email per the configuration.  

- ***How does an Agent respond to an Email Message?***

ConnectPath provides an option to configure flows of Emails. When configured, any emails sent to the Instance would be shown as an Incoming contact. If accepted by the Agent, he or she will only be able see the emails.

- ***Does ConnectPath have a wallboard?***

Each dashboard has its own wallboard, but you can click the wallboard mode on the dashboard and expand the real time metric display to full screen for display as a wall board.
 
### Pricing Strategy
 
ConnectPath cost approximately .18 USD per user logged in hour. We offer custom pricing and custom terms for certain circumstances.  Contact us for details.

- ***Do we pay for an Admin who only logs in periodically?***

Yes, at the rate described above.
 
- ***Does ConnectPath have a reseller program?***

Yes, ConnectPath has a revenue sharing program for both referrals and resellers.  Contact us for details.

### Deployment Strategy

When we publish to production it is done only after a published date (unless it is a hotfix).
 
- ***Are features permission based and can be turned off?***

Yes, all features are permission based but not all features are toggleable.