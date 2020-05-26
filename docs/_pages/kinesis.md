---
title: "Use an existing Kinesis Stream"
permalink: /kinesis/
layout: single
toc: true
toc_sticky: true
sidebar: 
  nav: "docs"
---

If you already have a Kinesis Stream for your Amazon Connect instance, you may wish to keep that in place. In this section you will learn how to use your existing kinesis stream to feed Dextr its required data.

### Section 1 - Amazon Connect

#### 1.1 Click on your Instance Alias

[![Instance Alias](/assets/images/dextr-instance-alias.jpg)](/assets/images/dextr-instance-alias.jpg)

----

#### 1.2 Click on Data Streaming


[![Data Streaming](/assets/images/data-streaming.jpg)](/assets/images/data-streaming.jpg)

#### 1.3 Note the name of your existing kinesis stream(s)

[![Kinesis Stream](/assets/images/kinesis-stream.jpg)](/assets/images/kinesis-stream.jpg)

----

### Section 2 - Lambda

#### 2.1 Search Lambda for ctrStreamHandler

[![Stream Handler](/assets/images/ctrStreamHandler.jpg)](/assets/images/ctrStreamHandler.jpg)

----

#### 2.2 Click on dextr-"your-instance-id"-ctrStreamHandler.

[![Instance Alias Handler](/assets/images/stream-instance-alias-handler.jpg)](/assets/images/stream-instance-alias-handler.jpg)

----

#### 2.3 Click on + Add trigger.

[![Add trigger](/assets/images/add-trigger.jpg)](/assets/images/add-trigger.jpg)

----

#### 2.4 Click on Kinesis

[![Kinesis Trigger](/assets/images/kinesis-trigger.jpg)](/assets/images/kinesis-trigger.jpg)

----

#### 2.5 Select your existing kinesis stream

[![Kinesis Configuration](/assets/images/kinesis-configuration.jpg)](/assets/images/kinesis-configuration.jpg)

----

#### 2.6 Change batch size to "5" and click Add

[![Batch size](/assets/images/batch-size.jpg)](/assets/images/batch-size.jpg)

----









