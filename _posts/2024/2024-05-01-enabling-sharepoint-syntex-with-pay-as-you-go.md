---
layout: post
title:  "Enable Pay-as-You-Go Licensing for Syntex aka SharePoint Premium."
byline: "Defending solutions with variables"
date:   2024-05-01 08:00:00
author: Divya Akula
categories: SharePointPremium
tags:	Solutions PowerPlatform flows
cover:  "/assets/posts/2024-05-01-enabling-sharepoint-syntex-with-pay-as-you-go/HumanBeingConfused.jpeg"
thumbnail: "/assets/images/thumbnails/sentiment_analysis.jpg"
github: "https://github.com/4dcu-be/ShapeOfStories-SentimentAnalysis"
---

Microsoft Syntex , aka SharePoint Premiun is ever increasing its capabilities initially it just started as a data extraction tool but now it expands its horizon towards inbuilt capabilities like esignatures and translations , which makes it an easy go tool for any business which is document centric. With its increasing demanding there are few questions w.r.to Licensing which I would try to address this on the blog

## Shifting Gears

**Per-User Licensing Retirement**: New purchases no longer offer per-user licensing for Microsoft Syntex.\
**Existing Licenses**: Existing per-user licenses remain valid until their expiration date.\
**Pay-as-You-Go Option**: Going forward, organizations can enable the pay-as-you-go licensing model.


## Who Can Enable Pay-as-You-Go Licensing

Only users meeting the following criteria can enable pay-as-you-go licensing for Syntex:

*SharePoint Admin*: Must have SharePoint administration permissions.
*Valid Azure Subscription*: An active Azure subscription is necessary for billing purposes.

## Steps to Enable

1. Navigate to the Global Admin center
   
    ![global admin center ]({{'/assets/posts/2024-05-01-enabling-sharepoint-syntex-with-pay-as-you-go/AdminCenter.png' | prepend: site.baseurl}})
2. Click on Setup
3. In the **Files and Content** Section, search for *Syntex*

   ![Files and Content ]({{'/assets/posts/2024-05-01-enabling-sharepoint-syntex-with-pay-as-you-go/AdminCenterSetup.png' | prepend: site.baseurl}})
4. Click on the use **Use Content AI with Microsoft Syntex**
5. For the users who have Syntex License expired will have Manage Syntex greyd out
6. Click on **Setup Billing**
7. In the right pane , navigate to **Azure Subcription**
8. Select a valid subscription
     ![Billingsetup]({{'/assets/posts/2024-05-01-enabling-sharepoint-syntex-with-pay-as-you-go/BillingSetup.png' | prepend: site.baseurl}})

### Note

1. Microsoft Syntex is an addon and doesnt come with your existing licenses
2. For Government Community Cloud (GCC) organizations, pay-as-you-go licensing is not yet available; they can continue using per-user licenses until pay-as-you-go becomes an option.
