---
layout: post
title:  "Creating Documents with Microsoft Syntex"
byline: "Content Assembly in Action"
date:   2024-10-10 08:00:00
author: Divya Akula
categories: SharepointPremium
tags:	SPPremium DIP Word Templates ContentAssembly
cover:  "/assets/posts/2024-10-10-content-assembly-usecase/BannerCAssembly.jpeg"
thumbnail: "/assets/images/thumbnails/CAassemblyUsecase.jpg"
github: "https://github.com/4dcu-be/ShapeOfStories-SentimentAnalysis"
---

# Introduction

Document generation is a crucial part of every organization. In the previous blog, we discussed the importance of document generation and how it can streamline various processes. This method can act as a good alternative to your Document Information Panel or the Word Document Properties pane. This blog post will guide you through the process of using Microsoft Syntex to automate the creation of these documents. We'll cover everything from setting up templates to tagging and generating the final documents, demonstrating how easy and efficient this process can be.

<div style="position: fixed; bottom: 20px; right: 20px; z-index: 1000;">
  <a href="{{'/sharepointpremium/2024/07/15/understanding-content-assembly.html' | prepend: site.baseurl}}" target="_blank" style="background-color: #000; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Understanding Microsoft Content Assembly</a>
</div>

## Use Case

To start with Syntex, let's consider a scenario where the HR department needs to generate salary increment letters for all the users in the organization. The process involves:

1. Template Creation
2. Template Upload
3. Tagging
4. Document Creation

## Demonstration

In this blog, we will look at how to generate the documents for each user without editing the document manually. This ensures a streamlined and efficient process.

### Template for the Use Case

To complete the use case scenario, I am using the template below that helps HR to generate salary hikes for the users. Ensure that you upload the template into your Syntex Content Center or any site collection where you wish to save it.

<iframe src="https://5kswv1-my.sharepoint.com/:w:/g/personal/divya_5kswv1_onmicrosoft_com/EdXxrbOO_DlDrJ6iSvg-3QEBG6e-h_SakzvseWPZYn2ugg?e=qtHoPP&action=embedview" width="600" height="700" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> document, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>

The first step in using the templates is to navigate to your Syntex Content Center and create an appropriate library where you will store the files.

### Creating the Modern Template

1. Navigate to the document library where you want to create the documents.
2. Go to the New option.
3. If you are on a content center, you will see the Create Modern Template option.
  
  !Modern Template Creation Option
4. You can upload the template/document or choose an existing document, and click on select.
   !Modern Template Creation Option
5. Before proceeding to the next step, ensure you have a friendly name for the template and publish it.

### Tagging Modern Template

1. Now your document is ready for tagging.
2. Before proceeding to the next step, ensure you have a friendly name for the template and publish it.

#### Tagging

Tagging is a concept where you identify the metadata and which data in the document corresponds to that metadata.

1. Select the value in the document and click Add Field.
   !Modern Template Creation Option
2. Select the field type, use a content type field, and select the appropriate type.
    a. Choose the content field.
    b. You can create a field or map to an existing field.
     !Modern Template Field
3. Repeat the whole process until you finish the tagging.
4. You can refer to the video below for the same.

<div class="container">
  <div class="video">
   <iframe width="100%" height="640px" src="https://www.youtube.com/embed/4f_6_IujERw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>

### Creation of Documents

Now your documents are ready for tagging. You can use the newly created template for the creation of the document. You will notice all the marked fields as properties towards the right.
 !Modern Template Creation Option

Once you start entering the field values and tabbing into the next field, the value will be updated.

## Summary

In this blog post, we explored how to use Microsoft Syntex to automate the creation of salary increment letters. We covered the steps involved in creating templates, tagging them, and generating the final documents. This process can save significant time and effort for HR departments, allowing them to focus on more strategic tasks. Additionally, this method can serve as an alternative to the Document Information Panel.

## Conclusion

This is the second part of our series on content assembly. In the next blog, we will delve into creating bulk salary hike letters with automation, further streamlining the process and enhancing efficiency.
