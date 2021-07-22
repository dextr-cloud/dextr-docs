---
title: "DextrFlex Migration Guide v0.9.8"
permalink: /migration/
layout: single
toc: true
toc_sticky: true
sidebar: 
  nav: "docs"
---

Migrating to Dextr Flex is simple and can be done on your own schedule. We recommend making these changes after hours the night before your plan to go-live on Dextr Flex.

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

Add **https://go.dextrflex.com** to the CORS bucket policy on the bucket that stores your Dextr reports. This can be located by looking in Dextr > Settings > Instance Details > Reporting Bucket.

[![Reporting bucket](/assets/images/Migration/reporting-bucket.jpg)](/assets/images/Migration/reporting-bucket.jpg)


#### 4 - Update LiveLook widget for 100% accuracy (optional)

Use the new event bridge data to keep the LiveLook widget 100% accurate. Amazon Connect announced a new feature to stream Contact related events and Flex can consume this data to greatly improve the accuracy of the Live Look widget. Follow the steps outlined in the [AWS documentation page](https://aws.amazon.com/blogs/contact-center/use-amazon-connect-contact-event-stream-to-react-to-contact-state-changes-in-near-real-time/) and use the streamHandler function as the destination. 

#### 5 - Use the new domain

Direct agents and supervisors to https://go.dextrflex.com to begin.

[![New domain](/assets/images/Migration/domain.jpg)](/assets/images/Migration/domain.jpg)