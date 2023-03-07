---
permalink: /api/
title: "ConnectPath - Public APIs"
---

Public APIs

ConnectPath exposes several authenticated and authorized APIs to provide
flexibility to our customer's needs and extend the capabilities of
ConnectPath.

Each API Family represents a screen within ConnectPath, and for each
Family, Swagger Documentation and a Postman Collection can be found
below.

Authentication consists of a bearer token in the requests, the token can
be generated as follows:

First, you'll need to log into ConnectPath as the Instance Admin, this
is the same as the "Emergency Access" login from the AWS Console.

From there, you will go to Settings, then Integrations. At this point
you'll notice an External API button below:

![Graphical user interface, application, website Description
automatically generated](./api/media/image1.png)

Click on View and then Click on Add New Token:

![Graphical user interface, application Description automatically
generated](./api/media/image2.png)

Give the token a name and then click Save.

You'll now see the token's creation timestamp, name and the token itself
below:

![Graphical user interface, application Description automatically
generated](./api/media/image3.png)

You may copy the token with the copy button or delete it with the trash
can button.

You'll also notice the Regional API Endpoint -- this is the region your
ConnectPath deployment operates in and if you are using the examples
below and in a region that is not us-east-1, you'll need to update the
endpoint in those examples accordingly.

The API Family Swagger Documentation and Postman Collections follow.

Users 

Swagger Documentation <./api/user-api/index.html>

Postman Collection <./api/Users.postman_collection.json>

Directory

Swagger Documentation <./api/directory-api/index.html>

Postman Collection <./api/ContactsDirectory.postman_collection.json>