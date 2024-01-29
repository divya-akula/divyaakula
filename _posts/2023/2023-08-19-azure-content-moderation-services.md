---
layout: post
title:  "Azure Content Moderation services"
byline: "The shape of Lord of the Rings - The Fellowship of the Ring"
date:   2023-08-19 08:00:00
author: Divya Akula
categories: OpenAI
tags:	OpenAI Azure ContentSafety
cover:  "./assets/posts/2019-12-01-Sentiment-Analysis/header.png"
thumbnail: "./assets/images/thumbnails/sentiment_analysis.jpg"
github: "https://github.com/4dcu-be/ShapeOfStories-SentimentAnalysis"
---
Content Moderation is about refining and revisiting that data , post , image or video to make it acceptable , socially , psychologically ,legally and in short , right content to the right audience.


With the high volumes of data flowing in the manual moderation might be quite near to impossible.

Azure provides a rich set of APIs that help you to moderate and is available for the below categories.

1. Text Moderation
2. Image Moderation
3. Video Moderation


Azure provides a rich set of APIs that help you to moderate and is available for the below categories.

## Text Moderation

  Azure APIs help in moderating the text , and can deal with all of the below categories.


* Profanity
* Classification
* Personal Data Identification
* Auto correction of text
* Language detection
* PII


To start with any moderation , we have to provision the azure resource. called Content Moderation

![Azure Moderation service](/assets/posts/2023-19-08-azure-content-moderation%20-services/AzueModerationService.png)


If you need more details on how to provision this resource , the below video can be helpful.

### EndPoint

Navigate to the newly provisioned resource and then to Keys  and End Point section save either of the keys and the end point

  The endpoint used is 

  ```
 <EndPointURI>/contentmoderator/moderate/v1.0/ProcessText/Screen?autocorrect=<bool>&PII=<bool>&classify= <bool>
```

| Keyword | ​Details |
|---|---|
|Endpoint | The url from the previous screenshot marked as 3|
| AutoCorrect | Rectifies any misspellings in the text |
| PII | The personal Identifiable information includes Email , PII etc |
| Classify| categories the text |
| | |

![Azure EndPoint ](/assets/posts/2023-19-08-azure-content-moderation%20-services/KeysAndEndPoint.png)


## PII

  The following personal information can be detected on the scanned text

1. Email
2. IPA
3. Phone
4. Address
5. SSN
6. Classify

Azure automatically categorises information to 3 different categories

| Category | Details |
|---|---|
| Category1 | Presence of Adult or sexually |suggestive content |
| Category2 | Presence of content that is mature  |
| Category3 | Presence of Offensive words |
| ReviewRecommended | AI model suggests to reexamine the text , before publishing |

### Example

   To demonstrate the example I have created a sample power automate , An Instant cloud flow with the following parameters

![Azure Flow Inputs ](/assets/posts/2023-19-08-azure-content-moderation%20-services/FlowTrigger.png)

1. The body of the text that needs to be scanned
2. If PII classification should happen
3. If the categories are needed
4. Automatically corrects the spellings and returns the output

![Azure Flow Inputs ](/assets/posts/2023-19-08-azure-content-moderation%20-services/HttpPostCall.png)

All the inputs gathered from the step 1 should be used at the respective parameters.


The Oct-Apim-Subscription-Key refers to the keys captured at this step 

![Azure Flow Inputs ](/assets/posts/2023-19-08-azure-content-moderation%20-services/RunFlow.webp)

I just noted that spell correct is given as text so given true as input  and below is the screenshot of the output

![Azure Flow Inputs ](/assets/posts/2023-19-08-azure-content-moderation%20-services/FlowOutput.png)

``` json
{
  "OriginalText": "Is this a grabage or crappy , email abcdef@abcd.com, phone: 4255550111, IP: \n255.255.255.255, 1234 Main Boulevard, Panapolis WA 96555.",
  "NormalizedText": "   grabage  crappy , email abcdef@abcd.com, phone: 4255550111, IP: \n255.255.255.255, 1234 Main Boulevard, Panapolis WA 96555.",
  "AutoCorrectedText": "Is this a garbage or crappy , email abcdef@abcd.com, phone: 4255550111, IP: \n255.255.255.255, 1234 Main Boulevard, Pentapolis WA 96555.",
  "Misrepresentation": null,
  "PII": {
    "Email": [
      {
        "Detected": "abcdef@abcd.com",
        "SubType": "Regular",
        "Text": "abcdef@abcd.com",
        "Index": 36
      }
    ],
    "IPA": [
      {
        "SubType": "IPV4",
        "Text": "255.255.255.255",
        "Index": 77
      }
    ],
    "Phone": [
      {
        "CountryCode": "US",
        "Text": "4255550111",
        "Index": 60
      }
    ],
    "Address": [
      {
        "Text": "1234 Main Boulevard, Panapolis WA 96555",
        "Index": 94
      }
    ],
    "SSN": []
  },
  "Classification": {
    "ReviewRecommended": true,
    "Category1": {
      "Score": 0.0014615426771342754
    },
    "Category2": {
      "Score": 0.201115220785141
    },
    "Category3": {
      "Score": 0.9879999756813049
    }
  },
  "Language": "eng",
  "Terms": null,
  "Status": {
    "Code": 3000,
    "Description": "OK",
    "Exception": null
  },
  "TrackingId": "befb04b6-27b2-4bc6-9de9-34168fea88bb"
}
```

As noted the output would be in JSON format , which provides an easy access or integration with any systems


This article targets what can be addressed with Text content Moderation by default , if we need to screen the custom keywords , that is as well supported and will see that in further blogs

