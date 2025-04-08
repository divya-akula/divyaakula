---
layout: post
title:  "SharePoint GPT filled columns"
byline: "Implemented by Syntex"
date:   2024-08-08 08:00:00
author: Divya Akula
categories: SharePointpremium
tags:	SPPremium Autofillcoulmns Insights Documents GPTColumns
cover:  "/assets/posts/2024-08-08-creating-gpt-powered-autofill-columns/Autofillbanner.jpeg"
thumbnail: "/assets/images/thumbnails/Designer.png"
github: "https://github.com/4dcu-be/ShapeOfStories-SentimentAnalysis"
---


## Transforming Document Management with GPT-Powered Autofill Columns in SharePoint

SharePoint Premium comes with a lot of features, and one of the standout additions is the Autofill columns powered by GPT. This  feature uses the power of generative AI to classify , extract or summarize.

### What Are GPT-Powered Autofill Columns?

They are simple SharePoint columns like single line of text or multiline text , which has AutoFill functionality setup. The power lies in the AutoFill setup , where its backed up by GPT 4.0 and the column gets filled by the prompt.

### How to Get Started

Autofill columns come with Pay-as-you-go setup , syntex licensed users may not have access to this feature.

### Setting up Admin Center

Nearly , all of the SharePoint Premium / Syntex settings are available only of they are enabled.

To enable autofill columns, 

1. Navigate to  admin Center
2. Ensure your pay as you go is setup , as these do not work for Syntex Licensed versions
    ![global admin center ]({{'/assets/posts/2024-08-08-creating-gpt-powered-autofill-columns/PayasyougosetupInAdminCentre.png' | prepend: site.baseurl}})
3. Navigate to Syntex services
 ![Syntex Services]({{'/assets/posts/2024-08-08-creating-gpt-powered-autofill-columns/SyntexService.png' | prepend: site.baseurl}})
4. Ensure the status is set to on
![Syntex Services]({{'/assets/posts/2024-08-08-creating-gpt-powered-autofill-columns/AUtofillStatus.png' | prepend: site.baseurl}})

### Extracting data from Document

If you are familar with Syntex extraction models and thier setup , here is a easy way to do this without using any of the models and training. Though I dont absolutely call it is a model replacement , but an easier way to do  . :)

### Extracting Invoice number from documents

1. Here is a sample Invoice from which I am trying to extract a data
  ![Syntex Services]({{'/assets/posts/2024-08-08-creating-gpt-powered-autofill-columns/InvoiceExtraction.png' | prepend: site.baseurl}})
2. Setup Columns for data extraction:
   ![Column Setup]({{'/assets/posts/2024-08-08-creating-gpt-powered-autofill-columns/AutfillColumnSetup.png' | prepend: site.baseurl}})
3. Choose the prompt and test it on existing document
   ![Column Setup]({{'/assets/posts/2024-08-08-creating-gpt-powered-autofill-columns/SettingUpColumns.png' | prepend: site.baseurl}})
4. Upload your document , and wait for the column to be populated.
   ![Column Setup]({{'/assets/posts/2024-08-8-creating-gpt-powered-autofill-columns/Extracted documents.png' | prepend: site.baseurl}})

### Extracting from existing documents

If you have any existing documents which are added to the library before the setup , *Autofill columns* , 
![Column Setup]({{'/assets/posts/2024-08-08-creating-gpt-powered-autofill-columns/ManuallyFill.png' | prepend: site.baseurl}})

You will recieve a notification , but definitely data outputs within few minutes

![Column Setup]({{'/assets/posts/2024-08-08-creating-gpt-powered-autofill-columns/AIPoweredNotification.png' | prepend: site.baseurl}})

### Few things to note

1. Each column works with a single prompt
2. Its GPT4-Turbo powered 
3. This works with both structured and unstructured documents
4. Use it responsibly :)
