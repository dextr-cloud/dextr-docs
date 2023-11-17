---
title: "Video Channels"
permalink: /Video-Channels/
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "docs"
---

### Video Channels

ConnectPath supports Video Calling via the Amazon Chime SDK by setting
up the requisite infrastructure within the same AWS Account as your
Amazon Connect Instance. Chime Video Calling may be used either
concurrently with Amazon Connect Voice or independently, based on the
requirements and workflow of your organization.

Setup is a two-part process that involves deploying the requisite
infrastructure (which can be performed entirely within ConnectPath) and
granting permissions to use the feature to one or more permission
groups.

As this feature uses additional AWS Services, it will incur costs,
billed by AWS to your AWS Account.

To get started, go to Settings, Integrations and under the Amazon
Chime Logo, Click Deploy:

![](./Video-Channels/media/image1.png)

Click Deploy again to confirm that you wish to deploy:

![](./Video-Channels/media/image2.png)

You will see the status has changed to Deploying:

![](./Video-Channels/media/image3.png)

Once done Deploying, you will see that the status has changed to
Deployed:

![](./Video-Channels/media/image4.png)

Deployment of the requisite infrastructure is performed via
CloudFormation, and the resulting infrastructure is a CloudFront
distribution, S3 Bucket and simple serverless application that is
intended to host the customer-facing side of the solution, including
joining the already-in-progress meeting. The customer-facing assets are
designed to be rebranded and may be done so either independently or with
the support of CloudHesive.

After this step, for each group of users that you wish to give access to
the feature, you will need to add the permission to their permission
group. The permission is named Video can be found in the Channel
section:

![](./Video-Channels/media/image5.png)

Once setup, agents will see a new Tab under the Engage page, Video. By
going to this tab, the agent may start a Video Call or return to a
previously started Video Call.

Starting the Video Call is as simple as clicking the Create Meeting
button:

![](./Video-Channels/media/image6.png)

Once created, the meeting will start immediately for the agent,
connecting his/her audio and video. The agent video will be displayed on
the top right-hand corner with most of the screen being reserved for the
customer.

Basic meeting controls are found on the left-hand side that allow for
control of audio, video, screen sharing, and audio/video devices as well
as a button to end the meeting (in red).

The meeting details can be copied and sent via E-Mail or SMS, if
configured, within ConnectPath. Click the copy icon next to the Meeting
Info before proceeding to the next step.

![](./Video-Channels/media/image7.png)

In this example, we will send the meeting details via SMS, using
ConnectPath, by going to the Tasks tab and clicking the SMS button:

![](./Video-Channels/media/image8.png)

After clicking the SMS button, you will be prompted to provide the phone
number of the person you wish to SMS.

![](./Video-Channels/media/image9.png)

This will initiate an SMS conversation, and once you click on the
conversation, you may paste the previously copied meeting details and
send them to the customer:

![](./Video-Channels/media/image10.png)

From the customer perspective (in this example an Apple iPhone), he or
she may click the link to join the meeting and it will be opened in
their default web browser (in this example Safari):

![](./Video-Channels/media/image11.png)

The customer may then click the Join Meeting button and at that point he
or she will be prompted to share their Microphone and Camera with the
Application:

![](./Video-Channels/media/image12.png)

Once the customer joins the meeting, he or she will see the agent's
video but not his or her own video:

![](./Video-Channels/media/image13.png)

By scrolling down, the audio and video settings can be changed, or the
meeting can be ended:

![](./Video-Channels/media/image14.png)

This concludes the setup and use of Video Calling in ConnectPath.
