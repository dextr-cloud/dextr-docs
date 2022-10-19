---
title: "DextrFlex Setup Guide"
permalink: /setup-guide/
layout: single
toc: true
toc_sticky: true
sidebar: 
  nav: "docs"
---

Setting up Dextr Flex is simple and can be done on your own schedule. The majority of the setup is done through the onboarding process, however, given the evolution of features in Dextr, the following steps will provide access to additional features within Dextr.

#### 1 - Add CORS Policy (required for viewing reports)

Add **https://go.dextrflex.com** to the CORS bucket policy on the bucket that stores your Dextr reports. This can be located by looking in Dextr > Settings > Instance Details > Reporting Bucket.

[![Reporting bucket](/assets/images/Migration/reporting-bucket.jpg)](/assets/images/Migration/reporting-bucket.jpg)
[![CORS policy](/assets/images/Migration/cors.jpg)](/assets/images/Migration/cors.jpg)

#### 2 - Update LiveLook widget for 100% accuracy (optional)

Use the new event bridge data to keep the LiveLook widget 100% accurate. Amazon Connect announced a new feature to stream Contact related events and Flex can consume this data to greatly improve the accuracy of the Live Look widget. Follow the steps outlined in the [AWS documentation page](https://docs.aws.amazon.com/connect/latest/adminguide/contact-events.html) and use the Kinesis Stream as the destination. 

An example of the pattern is below:

 {
  "source": ["aws.connect"],
  "detail-type": ["Amazon Connect Contact Event", "Contact Lens Analysis State Change"],
  "detail": {
    "instanceArn": ["arn:aws:connect:region:account-id:instance/instance-id"]
  }
}