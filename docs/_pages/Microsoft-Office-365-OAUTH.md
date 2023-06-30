---
title: "Configuring outbound E-Mail using Microsoft Office 365 OAUTH"
permalink: /Microsoft-Office-365-OAUTH/
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "docs"
---

### Configuring outbound E-Mail using Microsoft Office 365 OAUTH

This document will guide you through configuring ConnectPath to be able
to send E-Mail through Microsoft Office 365 using OAUTH (versus Basic)
authentication using an Azure Application Registration.

For inbound E-Mail receiving, which is the first step in configuring an
E-Mail based Webhook in ConnectPath, please review the following
document: https://docs.dextr.cloud/emailTask/

This document is broken up into two sections, the Azure configuration
and the ConnectPath configuration.

As far as Azure configuration goes, the steps will result in you
generating a Client Secret, Client ID and Tenant ID that you will use to
configure ConnectPath. The steps are as follows.

Under Azure Active Directory, go to App registrations and click New
registration.

![](./Microsoft-Office-365-OAUTH/media/image1.png)

Enter a name for this App registration and click Register.

![](./Microsoft-Office-365-OAUTH/media/image2.png)

On the Overview screen of the App registration, note the Application
(client) ID and Directory (tenant) ID as you will need those when you
setup the ConnectPath portion.

![](./Microsoft-Office-365-OAUTH/media/image3.png)

Go to Certificates & secrets and click + New client secret.

![](./Microsoft-Office-365-OAUTH/media/image4.png)

Give the client secret a name and set an expiration period (note that
you will need to generate a new client secret ahead of this expiration
period and update ConnectPath to avoid disruption when sending E-Mail
from ConnectPath).

![](./Microsoft-Office-365-OAUTH/media/image5.png)

Note the Client Secret VALUE (not ID) as you will use that when you
configure ConnectPath.

![](./Microsoft-Office-365-OAUTH/media/image6.png)

Go to API Permissions, click Add a permission, select Microsoft Graph,
select Application, search for Mail.Send and add it to the App. Once
added click Grant admin consent for CloudHesive. Once these two steps
are completed, your API permissions screen should look like the
following.

![](./Microsoft-Office-365-OAUTH/media/image7.png)

This completes the Azure portion of the configuration.

As far as ConnectPath configuration goes, the steps are as follows.

Go to Settings, then Integrations, scroll down until you see Office 365
and click Configure.

![](./Microsoft-Office-365-OAUTH/media/image8.png)

On this screen you will populate the Client Secret, Client ID and Tenant
ID from the Azure App Registration you previously created.

![](./Microsoft-Office-365-OAUTH/media/image9.png)

Go to Settings, then Webhooks, and either click +Webhook or Edit
(Pencil) an existing E-Mail based Webhook:

![](./Microsoft-Office-365-OAUTH/media/image10.png)

Once done, click Next (note Step 1 is documented under
<https://docs.dextr.cloud/emailTask/>). On Step 2 you will note there is
an option for Outbound labeled "Basic Auth" or "OAuth", for Microsoft
Office 365 you will use OAuth and select the Integration you created
previously.

![](./Microsoft-Office-365-OAUTH/media/image11.png)

Once done, click Next and complete the setup by populating the fields on
the Step 3 screen as documented under
<https://docs.dextr.cloud/emailTask/>).

![](./Microsoft-Office-365-OAUTH/media/image12.png)

When you have completed that step, you can click Finish or Update and
your ConnectPath instance is ready to send E-Mail through Microsoft
Office 365.
