---
permalink: /architecture/
title: "ConnectPath - Architecture, Operations and Security"
---

The purpose of this document is to provide a high level overview of the
Architecture, Operations and Security of the Customer-Deployed
Components that comprise ConnectPath.

Architecture

[![Architecture](/architecture/media/image1.png)](/architecture/media/image1.png)

ConnectPath is delivered as a SaaS Platform that integrates with your
Amazon Connect Instance in your Amazon Web Services Account. As such we
require access and permissions, facilitated through an Identity and
Access Management (IAM) Role and in-line Policy which is deployed via a
CloudFormation template (in addition to the services listed below)
during the onboarding process.

The cost of these services is negligible in comparison to Amazon Connect
usage, with the most expensive service, DynamoDB, estimated to cost 1.00
USD/User/Month. Deployment of these services within your AWS Account
allows you to keep your data within your AWS account. In certain
circumstances we can assist in tuning your data access and storage
patterns to decrease these costs if you find they do not align with the
above.

The following AWS Services are created by ConnectPath an/or utilized by
ConnectPath to deliver the functionality of the service. Note that the
services created by ConnectPath will either contain Dextr or ConnectPath
in the name.

-   Amazon Connect Instance

    -   Created by you, the customer

    -   No quotas are explicitly required to be increased in order for
        ConnectPath to function but note that for Non-Voice Channels
        ConnectPath utilizes Tasks and therefore you want to ensure that
        your maximum concurrent Task Quota is adjusted to account for
        your anticipated Maximum concurrent Tasks (which equates to your
        Maximum Concurrent Agents). Generally speaking:

        -   Routing Profiles that support SMS, Fax and E-Mail Queues
            should limit concurrent tasks to 1 per Agent.

        -   Limits on number of concurrent contacts in Queue (set at the
            Queue or Contact Flow) will cause Amazon Connect to reject
            any concurrent SMS, Fax and E-Mail contacts that exceed this
            value.

    -   ConnectPath also has some helper Contact Flows that you may opt
        to integrate into your existing Contact Flows to take advantage
        of some of ConnectPath's capabilities. These include:

        -   Livelook Attributes

        -   Holiday Schedule Open/Close Branches

        -   Directory Lookup Attributes

        -   Malicious Call Blocking

        -   E911 Lookup Attributes

        -   Outbound SMS and E-Mail Flows

    -   CollectPath also makes use of Attributes -- fixed names with
        customer configurable values or fixed names/values used for
        integration purposes. Examples of those include:

        -   LiveLook - <https://docs.dextr.cloud/update-live-look/>

        -   Webhook Channels

        -   Chat Transcripts/Activities

        -   Hydration

    -   Finally, ConnectPath may make use of the following API families
        to integrate with Amazon Connect:

        -   User Management

        -   Queue/Routing Profile Management

        -   Metric Ingestion

-   Amazon EventBridge

    -   Mandatory, Created by Customer -
        <https://docs.dextr.cloud/setup-guide/>

    -   No quotas are explicitly required to be increased in order for
        ConnectPath to function

    -   Triggered by Connect Contact and Contact Lens Events and sent to
        Kinesis Data Stream

-   Amazon Kinesis Data Streams (KDS)

    -   Mandatory, Created by CloudFormation, however, customers may opt
        to utilize an existing Kinesis Data Stream (KDS), in the event
        that they have already configured a Kinesis Data Stream (KDS)
        and are utilizing it for other integrations -
        <https://docs.dextr.cloud/kinesis/>

    -   No quotas are explicitly required to be increased in order for
        ConnectPath to function

    -   Created with provisioned capacity, 1 shard and 1 day of
        retention, which is generally suitable for the volume
        requirements of the majority of ConnectPath use cases

-   AWS Lambda

    -   Mandatory, Created by CloudFormation

    -   No quotas are explicitly required to be increased in order for
        ConnectPath to function

    -   Comprised of the following mandatory functions:

        -   generalDaemon

            -   Used for internal task scheduling

        -   addCallToQueue

            -   Previously used as a helper in Contact Flows in support
                of the LiveLook feature

        -   schedule

            -   Currently used as a helper in Contact Flows in support
                of the Holiday Schedules feature

        -   streamHandler

            -   Used to ingest data from Kinesis Data Streams (KDS)

    -   Also comprised of the following optional functions (created by
        ConnectPath on-demand, not the CloudFormation template
        referenced previously)

        -   webhookHandler

            -   Used to ingest data from Simple E-Mail Service (SES)

    -   Does not require provisioned concurrency, which is generally
        suitable for the volume requirements of the majority of
        ConnectPath use cases

-   Amazon Simple Storage Service (S3)

    -   Mandatory, Created by CloudFormation

    -   No quotas are explicitly required to be increased in order for
        ConnectPath to function

    -   Utilizes SSE-S3 for encryption, by default

    -   Used to store:

        -   Reports generated within ConnectPath

        -   Attachments, if configured, from Webhook based Channel
            Integrations

-   Amazon DynamoDB

    -   Mandatory, Created by CloudFormation

    -   No quotas are explicitly required to be increased in order for
        ConnectPath to function

    -   Utilizes KMS for encryption, by default

    -   Created with on-demand capacity, which is generally suitable for
        the volume requirements of the majority of ConnectPath use cases

    -   Direct create, read, update and delete operations against this
        table are not recommended

-   Amazon Simple Email Service (SES)

    -   No quotas explicitly required for ConnectPath

    -   Optional, Customer Configured -
        <https://docs.dextr.cloud/emailTask/>

In addition to AWS Services, the following Third Party Services are
utilized:

-   Twilio, which provides STUN/TURN services utilized by Agent to Agent
    Calling and Supervisor Monitor/Barge

    -   Included as part of the core ConnectPath service

-   Twilio -- SMS, MMS, and/or WhatsApp Endpoints utilized by Twilio
    Conversation APIs

    -   Optional, Customer Configured) -
        <https://docs.dextr.cloud/settings/>

Security

ConnectPath has completed a FTR (Foundational Technical Review) with AWS
(<https://aws.amazon.com/partners/foundational-technical-review/>) that
can be publicly validated by visiting our Partner Profile:
<https://partners.amazonaws.com/partners/001E000000qK5f6IAC/CloudHesive>

Further, AWS Marketplace Vendor Insights launched in December 2022 at
AWS re:Invent (read more about it here:
<https://aws.amazon.com/blogs/aws/aws-marketplace-vendor-insights-simplify-third-party-software-risk-assessments/>),
with ConnectPath as one of the launch product's. This allows you, as the
customer, to request a standard report of the security controls are in
place with ConnectPath including CloudHesive's Annual SOC 2 Type 2
report.

There is a dedicated search filter for products in this program
(<https://aws.amazon.com/marketplace/search?VENDOR_INSIGHTS=SECURITY_PROFILES&filters=VENDOR_INSIGHTS>)
and it's also included in our listing
(<https://aws.amazon.com/marketplace/seller-profile?id=8ede04c0-e9d6-45ae-a327-231729732a50>).
