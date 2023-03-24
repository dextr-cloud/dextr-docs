---
title: "ConectPath Setup Guide"
permalink: /setup-guide/
layout: single
toc: true
toc_sticky: true
sidebar: 
  nav: "docs"
---

Setting up ConectPath is simple and can be done on your own schedule. The majority of the setup is done through the onboarding process, however, given the evolution of features in ConectPath, the following steps will provide access to additional features within ConectPath.

#### 1 - Update LiveLook

Use the new event bridge data to keep the LiveLook widget working. Amazon Connect announced a new feature to stream Contact related events and Flex can consume this data to greatly improve the accuracy of the Live Look widget. Follow the steps outlined in the [AWS documentation page](https://docs.aws.amazon.com/connect/latest/adminguide/contact-events.html) and use the Kinesis Stream as the destination. 

An example of the pattern is below:

 {
  "source": ["aws.connect"],
  "detail-type": ["Amazon Connect Contact Event", "Contact Lens Analysis State Change"],
  "detail": {
    "instanceArn": ["arn:aws:connect:region:account-id:instance/instance-id"]
  }
}

#### 2 - Add CORS Policy (optional if you wish to specify your own S3 bucket for reports)

Add **https://go.dextrflex.com** to the CORS bucket policy on the bucket that stores your ConectPath reports. This can be located by looking in ConectPath > Settings > Instance Details > Reporting Bucket.

[![Reporting bucket](/assets/images/Migration/reporting-bucket.jpg)](/assets/images/Migration/reporting-bucket.jpg)
[![CORS policy](/assets/images/Migration/cors.jpg)](/assets/images/Migration/cors.jpg)
