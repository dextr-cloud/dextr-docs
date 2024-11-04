---
title: "Outbound E-Mail using Google OAUTH"
permalink: /Configuring-Google-OAUTH-for-Outbound-E-Mail/
layout: single
toc: true
toc_sticky: true
sidebar:
  nav: "docs"
---


Configuring Google OAUTH for Outbound E-Mail

This document will walk you through configuring Google (Workspace) so
that you may use OAUTH to send E-Mail from ConnectPath (versus Basic
Authentication).

 

[Create a Project]

 

Browse to <https://console.cloud.google.com/projectcreate>

 

![](Configuring-Google-OAUTH-for-Outbound-E-Mail/media/image1.png)

 

[Enable Gmail API]

 

Browse to
<https://console.cloud.google.com/marketplace/product/google/gmail.googleapis.com>

 

![](Configuring-Google-OAUTH-for-Outbound-E-Mail/media/image2.png)

 

(screenshot may vary)

If the page shows manage, permissions have already been granted for use
of the Gmail API, otherwise, grant permissions for use of the Gmail API.

 

[Create OAuth consent screen]

 

Browse to <https://console.cloud.google.com/apis/credentials/consent>

 

![](Configuring-Google-OAUTH-for-Outbound-E-Mail/media/image3.png)

 

Select Internal

 

You may specify any name, user support email, and developer contact
information, but you must specify the following authorized domains:

 

![](Configuring-Google-OAUTH-for-Outbound-E-Mail/media/image4.png)

 

[Create Credentials]

 

Browse to <https://console.cloud.google.com/apis/credentials>

 

![](Configuring-Google-OAUTH-for-Outbound-E-Mail/media/image5.png)

 

Select OAuth Client ID

 

![](Configuring-Google-OAUTH-for-Outbound-E-Mail/media/image6.png)

 

Select application type Web application

 

![](Configuring-Google-OAUTH-for-Outbound-E-Mail/media/image7.png)

 

Specify origins and URIs and click Save

 

![](Configuring-Google-OAUTH-for-Outbound-E-Mail/media/image8.png)

 

Note the Client ID and Client secret above

 

[Create Refresh Token]

 

Browse to <https://developers.google.com/oauthplayground>

 

![](Configuring-Google-OAUTH-for-Outbound-E-Mail/media/image9.png)

 

Click the gear on the top right, click the checkbox "use your own OAuth
credentials", enter the Client ID and Client Secret noted in previous
step and then click close.

 

![](Configuring-Google-OAUTH-for-Outbound-E-Mail/media/image10.png)

 

Expand Gmail API v1 and then select <https://mail.google.com> and click
Authorize APIs

 

![](Configuring-Google-OAUTH-for-Outbound-E-Mail/media/image11.png)

 

Select the Workspace account you wish to use.

 

![](Configuring-Google-OAUTH-for-Outbound-E-Mail/media/image12.png)

 

Click Allow

 

![](Configuring-Google-OAUTH-for-Outbound-E-Mail/media/image13.png)

 

Click Exchange authorization code for tokens

 

![](Configuring-Google-OAUTH-for-Outbound-E-Mail/media/image13.png)

 

Click refresh access token

 

Go back to Step 2

 

![](Configuring-Google-OAUTH-for-Outbound-E-Mail/media/image13.png)

 

Copy the Refresh token

 

Go to ConnectPath \> Settings \> Integrations and click Google OAuth 2

 

![](Configuring-Google-OAUTH-for-Outbound-E-Mail/media/image14.png)

 

Enter the Client ID, Client Secret and Refresh Token noted on the
previous screens and click Save (or Update)

 

![](Configuring-Google-OAUTH-for-Outbound-E-Mail/media/image15.png)

 

You may now create (or update) the Webhook to use Google Suite OAuth for
sending E-Mail from ConnectPath

This completes the steps required to configure Google (Workspace) so
that you may use OAUTH to send E-Mail from ConnectPath (versus Basic
Authentication).
