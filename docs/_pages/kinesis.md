---
title: "Using Kinesis Stream"
permalink: /kinesis/
layout: single
toc: true
toc_sticky: true
sidebar: 
  nav: "docs"
---

In this section it is explained how to set up and use Kinesis Stream on your Instance.

### 1. As Is Process Map

This is a process map contributing to a better understanding of how the process is perfomed.

<figure>
   <img src="{{ '/assets/images/kinesis-stream-use-map.jpg' }}" alt="Process Map">
   <span>Figure 1. As In Process Map - Amazon Connect and Lambda Steps</span>
</figure>
----

### 2. Amazon Connect

#### 2.1 Instance Alias

Click your Instance Alias.

<figure>
   <img src="{{ '/assets/images/dextr-instance-alias.jpg' }}" alt="Instance Alias in Contact Center">
   <span>Figure 2. Amazon Connect Instances</span>
</figure>
----

#### 2.2 Data Streaming

Head to the Data Streaming tab by clicking it.

<figure>
   <img src="{{ '/assets/images/data-streaming.jpg' }}" alt="Data Streaming Tab">
   <span>Figure 3. Amazon Connect Data Streaming</span>
</figure>
----

#### 2.3 Kinesis Stream

Note the name of your existing kinesis stream(s) and select it for both Contact Trace Records and Agent Events.

<figure>
   <img src="{{ '/assets/images/kinesis-stream.jpg' }}" alt="Kinesis Stream">
   <span>Figure 4. Enabling Kinesis Stream</span>
</figure>
----

### 3. Lambda

#### 3.1 Lambda Functions - ctrStreamHandler

Type the keyword ***ctrStreamHandler***.

<figure>
   <img src="{{ '/assets/images/ctrStreamHandler.jpg' }}" alt="Stream Handler Keyword">
   <span>Figure 5. Stream Handler Keyword</span>
</figure>
----

#### 3.2 InstanceID-StreamHandler Function

Click on **dextr-"your-instance-id"-ctrStreamHandler**.

<figure>
   <img src="{{ '/assets/images/stream-instance-alias-handler.jpg' }}" alt="Function name stream handler">
   <span>Figure 6. InstanceID-ctrStreamHandler Function Name</span>
</figure>
----

#### 3.3 Add Trigger

Click on the **+ Add trigger** button.

<figure>
   <img src="{{ '/assets/images/add-trigger.jpg' }}" alt="Add trigger">
   <span>Figure 7. Add Trigger</span>
</figure>
----

#### 3.4 Kinesis Trigger

Click on Kinesis.

<figure>
   <img src="{{ '/assets/images/kinesis-trigger.jpg' }}" alt="Kinesis trigger">
   <span>Figure 8. Kinesis Trigger</span>
</figure>
----

#### 3.5 Trigger Configuration - Kinesis Stream

Select your existing Kinesis stream. The name of the Kinesis stream should match with the one chosen in **step 2.3**.

<figure>
   <img src="{{ '/assets/images/kinesis-configuration.jpg' }}" alt="Kinesis Configuration">
   <span>Figure 9. Kinesis Configuration </span>
</figure>
----

#### 3.6 Batch size

Change the Batch size to 5 and click the **Add** button.

<figure>
   <img src="{{ '/assets/images/batch-size.jpg' }}" alt="Batch Size">
   <span>Figure 10. Changing Batch size</span>
</figure>
----









