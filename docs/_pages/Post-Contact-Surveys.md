---
title: "Post Contact Surveys"
permalink: /Post-Contact-Surveys/
layout: single
toc: true
toc_sticky: true
sidebar: 
  nav: "docs"
---

ConnectPath supports the ability for privileged users to create and
maintain one or more post contact surveys with one or more numeric value
question/response pairs. Definition of these surveys is done within
ConnectPath, and at the completion of the definition or update to the
survey, a Contact Flow is created or updated in Amazon Connect, allowing
it to be linked to existing Contact Flows. As responses are gathered
from customers, that data is stored in the Contact Trace Record as a set
of Attribute Key/Value pairs and can be seen in both the Activity Search
and specialized reporting dashboards on the home screen. To setup and
review the responses, you may follow the below steps.

Under Settings, go to Post Call Surveys and click New Survey:

![A screenshot of a computer Description automatically generated with
medium
confidence](./Post-Contact-Surveys/media/image1.png)

From here you may give your Survey a Name, Description and Identifier,
the latter is used in the Attribute key/value pairs previously
described. When you are ready to create or update the Contact Flow, you
can click Yes and then Save:

![A screenshot of a survey Description automatically generated with
medium
confidence](./Post-Contact-Surveys/media/image2.png)

After you have defined the basics of the Survey you can go to the
Questions & Answers tab and from here type your questions (which will be
played back to the customer via Text to Speech using Polly, and the
potential responses (also read via Text to Speech) and their
corresponding values. You may add one or more questions and/or answers
under this tab:

![A screenshot of a survey Description automatically generated with
medium
confidence](./Post-Contact-Surveys/media/image3.png)

Once done you can click Add to Survey:

![A screenshot of a survey Description automatically generated with
medium
confidence](./Post-Contact-Surveys/media/image4.png)

And then finally, you can go back to the Survey Name tab, check the Yes
box and click Save for the Contact Flow to be created or Updated:

![A screenshot of a survey Description automatically generated with
medium
confidence](./Post-Contact-Surveys/media/image2.png)

Once that step has been completed, you can update existing Contact
Flows, specifying a Disconnect Flow to use, which would be the Survey
Contact Flow created by ConnectPath. Once you have set that, you may
click Save and Publish for it to go live:

![A screenshot of a computer Description automatically generated with
medium
confidence](./Post-Contact-Surveys/media/image5.png)

After that change has been made, customers will be prompted at the end
of their contact to provide a response, utilizing the ConnectPath
maintained Contact Flow and the previously defined question/answer
pairs. Results will be available on the Home Screen, under the Post Call
Survey drop down:

![A screenshot of a computer Description automatically generated with
medium
confidence](./Post-Contact-Surveys/media/image6.png)

Results will also be available under Activity Search as an additional
Attribute, previously defined in the Survey:

![A screenshot of a computer Description automatically generated with
low confidence](./Post-Contact-Surveys/media/image7.png)

At the completion of these steps, you will have successfully implemented
Post Contact Surveys and validated their integration into your Amazon
Connect configuration.
