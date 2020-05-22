---
title: "Using Kinesis Stream"
permalink: /kinesis/
layout: single
toc: true
toc_sticky: true
sidebar: 
  nav: "docs"
---

### 1. As Is Process Map

This section contains a process map contributing to a better understanding of how the process is perfomed pre-automation.

#### 1.1 High Level Process Map

The map shown in Figure 1 is useful for the Business Analyst in presentations and discussions with management to underline areas of weakness, inefficiency or to demonstrate which steps could be in scope for automation.

<figure>
   <img src="{{ '/assets/images/kinesis-stream-use-map.jpg' }}" alt="Process Map">
   <span>Figure 1. As In Process Map - Amazon Connect and Lambda Steps</span>
</figure>
----

In Figure 1, you can see that the process consists of 3 steps for Amazing Connect (estime time of 30 seconds) and for Lambda it consists of 6 steps with an estimate time of 1 minute.

### 2. Detailed As Is Process Steps - Amazon Connect

#### 2.1 Connect Instance - Alias

Once in Amazon Connect, head to the virtual contact center instances Table and click your instance Alias.

<figure>
   <img src="{{ '/assets/images/dextr-instance-alias.jpg' }}" alt="Instance Alias in Contact Center">
   <span>Figure 2. Amazon Connect Instances</span>
</figure>
----

#### 2.2 Data Streaming

You'll be redirected to the Overview section. To proceed, click the Data Streaming tab to set up Kinesis Stream.

<figure>
   <img src="{{ '/assets/images/data-streaming.jpg' }}" alt="Data Streaming Tab">
   <span>Figure 3. Amazon Connect Data Streaming</span>
</figure>
----

#### 2.3 Kinesis Stream

Note the name of your existing kinesis stream and select it both for Contact Trace Records, and Agent Events.

<figure>
   <img src="{{ '/assets/images/kinesis-stream.jpg' }}" alt="Kinesis Stream">
   <span>Figure 4. Enabling Kinesis Stream</span>
</figure>
----

### 3. Lambda

Afterwards, head  for Lambda to configure the Kinesis Stream functions.

#### 3.1 Lambda Functions - ctrStreamHandler

Inside of Lambda Functions, type the keyword ***ctrStreamHandler***.

<figure>
   <img src="{{ '/assets/images/ctrStreamHandler.jpg' }}" alt="Stream Handler Keyword">
   <span>Figure 5. Stream Handler Keyword</span>
</figure>
----

#### 3.2 InstanceID-StreamHandler Function

Between the Function names, after typing ctrStreamHandler, search for the one that matches **"your-instance-id"-ctrStreamHandler** and click it.

<figure>
   <img src="{{ '/assets/images/stream-instance-alias-handler.jpg' }}" alt="Function name stream handler">
   <span>Figure 6. InstanceID-ctrStreamHandler Function Name</span>
</figure>
----

#### 3.3 Add Trigger

On the Configuration tab, click on the **+ Add trigger** button for a dropdown with various options.

<figure>
   <img src="{{ '/assets/images/add-trigger.jpg' }}" alt="Add trigger">
   <span>Figure 7. InstanceID-ctrStreamHandler Function Name</span>
</figure>
----

#### 3.4 Kinesis Trigger

In the dropdown, look for Kinesis and click it to add the Kinesis trigger.

<figure>
   <img src="{{ '/assets/images/kinesis-trigger.jpg' }}" alt="Kinesis trigger">
   <span>Figure 8. Kinesis Trigger</span>
</figure>
----

#### 3.5 Trigger Configuration - Kinesis Stream

Once clicked, in the Trigger configuration select your existing Kinesis stream so that it listens for updates on. The name of the Kinesis stream should match with the one chosen in **step 2.3**.

<figure>
   <img src="{{ '/assets/images/kinesis-configuration.jpg' }}" alt="Kinesis Configuration">
   <span>Figure 9. Kinesis Configuration </span>
</figure>
----

#### 3.6 Batch size

Finally, change the Batch size to 5 and click the **Add** button.

<figure>
   <img src="{{ '/assets/images/batch-size.jpg' }}" alt="Batch Size">
   <span>Figure 10. Changing Batch size</span>
</figure>
----









