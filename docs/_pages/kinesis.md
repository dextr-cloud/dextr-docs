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

<figure>
   <img src="{{ '/assets/images/dextr-instance-alias.jpg' }}" alt="Instance Alias in Contact Center">
</figure>
----

#### 1.2 Click on Data Streaming

<figure>
   <img src="{{ '/assets/images/data-streaming.jpg' }}" alt="Data Streaming Tab">
</figure>
----

#### 1.3 Note the name of your existing kinesis stream(s)

<figure>
   <img src="{{ '/assets/images/kinesis-stream.jpg' }}" alt="Kinesis Stream">
</figure>
----

### Section 2 - Lambda

#### 2.1 Search Lambda for ctrStreamHandler

<figure>
   <img src="{{ '/assets/images/ctrStreamHandler.jpg' }}" alt="Stream Handler Keyword">
</figure>
----

#### 2.2 Click on dextr-"your-instance-id"-ctrStreamHandler.

<figure>
   <img src="{{ '/assets/images/stream-instance-alias-handler.jpg' }}" alt="Function name stream handler">
</figure>
----

#### 2.3 Click on + Add trigger.

<figure>
   <img src="{{ '/assets/images/add-trigger.jpg' }}" alt="Add trigger">
</figure>
----

#### 2.4 Click on Kinesis

<figure>
   <img src="{{ '/assets/images/kinesis-trigger.jpg' }}" alt="Kinesis trigger">
</figure>
----

#### 2.5 Select your existing kinesis stream

<figure>
   <img src="{{ '/assets/images/kinesis-configuration.jpg' }}" alt="Kinesis Configuration">
</figure>
----

#### 2.6 Change batch size to "5" and click Add

<figure>
   <img src="{{ '/assets/images/batch-size.jpg' }}" alt="Batch Size">
</figure>
----









