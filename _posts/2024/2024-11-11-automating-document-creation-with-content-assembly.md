---
layout: post
title:  "Automated Chronicles: Documenting with Content Assembly"
byline: "Empowering documents with Power Automate & Syntex"
date:   2024-11-11 08:00:00
author: Divya Akula
categories: SharepointPremium
tags:	SPPremium DIP Word Templates ContentAssembly PowerAutomate Automation DocumentProvisionAutomation
cover:  "/assets/posts/2024-11-11-automating-document-creation-with-content-assembly/PowerAutomateWithContentAssembly.jpeg"
thumbnail: "/assets/images/thumbnails/PowerAutomateWithContentAssembly.jpg"
github: "https://github.com/4dcu-be/ShapeOfStories-SentimentAnalysis"
---

# Introduction

Document generation is a crucial part of every organization. In the previous blog, we discussed how to create a document by changing only metadata using content assembly. This blog guides you through on how to achieve this in bulk using the Power platform capabilities

<div style="position: fixed; bottom: 20px; right: 20px; z-index: 1000;">
  <a href="{{'/sharepointpremium/2024/07/15/understanding-content-assembly.html' | prepend: site.baseurl}}" target="_blank" style="background-color: #000; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Understanding Microsoft Content Assembly</a>
</div>

## Use Case

We looked at an HR scenario where increment letters with salary changes were issued for the employees using templates. This blog extends that story by explaining how to complete the documents in bulk with minimal effort.


## Demonstration

This section walks you through document generation for a number of users, which can all be completed in one click.

### Template for the Use Case

To formulate the steps for the use case, I am implementing the template underneath which assists HR in creating salary revisions for the employees. Please upload the template in your Syntex Content Center or any site collection where you intend to store it.

<iframe src="https://5kswv1-my.sharepoint.com/:w:/g/personal/divya_5kswv1_onmicrosoft_com/EdXxrbOO_DlDrJ6iSvg-3QEBG6e-h_SakzvseWPZYn2ugg?e=qtHoPP&action=embedview" width="600" height="700" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> document, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>

The first step in using the templates is to have the details of the users in any area here am using dataverse

### Preparing the data 

Below is a sample Excel file containing employee details. This file has been uploaded to a SharePoint library.Note I have marked the content as Table and named it as *Table1*

<iframe src="https://5kswv1-my.sharepoint.com/:x:/g/personal/divya_5kswv1_onmicrosoft_com/Ef7_IqeUd0pMpgX4kfx07IUBL7IdmO13GCrxzmPfjbVp2w?e=PvfzjH?e=qtHoPP&action=embedview" width="600" height="400" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> document, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>

### PowerAutomate for Template Creation

#### Content Assembly Action
Microsoft Syntex provides specialized SharePoint actions to perform tasks like generating documents. The *Generate Document Using Microsoft Syntex* action is crucial for automating this workflow.
  ![Generate documents uisng Microsoft Syntex]({{'/assets/posts/2024-11-11-automating-document-creation-with-content-assembly/Marking Syntex From SharfePoint.png' | prepend: site.baseurl}})

### Creating the Flow

#### Steps

1. **Trigger** I am using a manual trigger 
2. **Excel Action** I am using *List rows in table action* to get the rows from excel
    ![get excel rows from table]({{'/assets/posts/2024-11-11-automating-document-creation-with-content-assembly/GetExcelRowsTable.png' | prepend: site.baseurl}})

3. **Content Assembly Action** For each row , am creating the file with the employeename from the excel and the corresponding values from excel
    ![get excel rows from table]({{'/assets/posts/2024-11-11-automating-document-creation-with-content-assembly/GetExcelRowsTable.png' | prepend: site.baseurl}})

4. **Complete Flow** The entire flow is illustrated below:

   ![Complete flow]({{'/assets/posts/2024-11-11-automating-document-creation-with-content-assembly/CompleteFlow.png' | prepend: site.baseurl}})

## Output

Navigate to the SharePoint library to view the generated files, each named after the corresponding employee.
![Complete flow]({{'/assets/posts/2024-11-11-automating-document-creation-with-content-assembly/Flowoutput.png' | prepend: site.baseurl}})

## Document for Andrew Wood

Here is an example of a document generated for Andrew Wood:

![Complete flow]({{'/assets/posts/2024-11-11-automating-document-creation-with-content-assembly/AndrewWood.png' | prepend: site.baseurl}})

## Conclusion

This blog concludes our series on automating document generation using Microsoft Syntex and Power Automate. By leveraging these tools, organizations can streamline document creation, saving time and ensuring consistency across all generated content.

## Key Takeaways

1. Automate document creation with Microsoft Syntex Content Assembly.
2. Use Syntex in combination with Power Automate for bulk document generation.
3. Make sure that templates and information are structured in a manner that allows easy automation.
