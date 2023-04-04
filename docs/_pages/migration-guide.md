---
title: "ConnectPath Migration Guide v0.9.8"
permalink: /migration/
layout: single
toc: true
toc_sticky: true
sidebar: 
  nav: "docs"
---

Migrating to ConnectPath is simple and can be done on your own schedule. We recommend making these changes after hours the night before your plan to go-live on ConnectPath.

#### 1 - Add origin in Amazon Connect (required)

Head to AWS and add **https://go.dextrflex.com** to your approved origins within the AWS -> Amazon Connect -> Instance console. 

[![Add Origin](/assets/images/Migration/add-origin.jpg)](/assets/images/Migration/add-origin.jpg)

#### 2 - Change endpoints to flex in Lambda (required)

Head to AWS Lambda console and change the lambda function **POST URL** to point to the flex endpoint. In 
most cases, this means only replacing “master” with “flex” in the following functions:

a. streamHandler

[![addCallToQueue](/assets/images/Migration/streamHandler.jpg)](/assets/images/Migration/streamHandler.jpg)

b. addCallToQueue

[![streamHandler](/assets/images/Migration/AddCallToQueue.jpg)](/assets/images/Migration/AddCallToQueue.jpg)

c. schedule

[![Schedule](/assets/images/Migration/schedule.jpg)](/assets/images/Migration/schedule.jpg)

d. generalDaemon

[![generalDaemon](/assets/images/Migration/generalDaemon.jpg)](/assets/images/Migration/generalDaemon.jpg)

#### 3 - Add CORS Policy (required for viewing reports)

Add **https://go.dextrflex.com** to the CORS bucket policy on the bucket that stores your ConnectPath reports. This can be located by looking in ConnectPath > Settings > Instance Details > Reporting Bucket.

[![Reporting bucket](/assets/images/Migration/reporting-bucket.jpg)](/assets/images/Migration/reporting-bucket.jpg)
[![CORS policy](/assets/images/Migration/cors.jpg)](/assets/images/Migration/cors.jpg)



#### 4 - Update LiveLook

Use the new event bridge data to keep the LiveLook widget working. Amazon Connect announced a new feature to stream Contact related events and Flex can consume this data to greatly improve the accuracy of the Live Look widget. Follow the steps outlined in the [AWS documentation page](https://docs.aws.amazon.com/connect/latest/adminguide/contact-events.html) and use the Kinesis Stream as the destination. 

An example of the pattern is below:

 {
  "source": ["aws.connect"],
  "detail-type": ["Amazon Connect Contact Event", "Contact Lens Analysis State Change"],
  "detail": {
    "instanceArn": ["arn:aws:connect:region:account-id:instance/instance-id"]
  }
}

#### 5 - Use the new domain

Direct agents and supervisors to https://go.dextrflex.com to begin.

[![New domain](/assets/images/Migration/domain.jpg)](/assets/images/Migration/domain.jpg)