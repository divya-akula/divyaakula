---
layout: post
title:  "AI Bibilography for CoPilot"
byline: "Really just basics"
date:   2024-02-28 08:00:00
author: Divya Akula
categories: OpenAI
tags:	OpenAI AI
cover:  "/assets/posts/2024-02-28-understanding-basics-of-ai/AIHeader.jpeg"
thumbnail: "/assets/images/thumbnails/AIHeader.jpg"
github: "https://github.com/4dcu-be/ShapeOfStories-SentimentAnalysis"
---

# Basic Terms to Understand the Noise around AI

In this pace where AI is driving the changes , lets understand what are the terms involved in AI. This can be important to all the architects who are designing the solution and stakeholders responsible for investing in correct products.

## What is  Large Language model

It is an AI model that is created based on simulating the neural networks , in addition to understand human language it can do tasks like code creation, classification etc

## What is OpenAI?

The OpenAI is a platform that helps developers or endusers to interact with LLMs and via an interface or the APIs

For eg:

1. ChatGPT to interact and get information
2. Sora to create video from text
3. API

## What is Azure OpenAI?

Its the product collaboration between Microsoft and OpenAI providing enterprise level security and architecture surrounded by Azure Infrastructure.

## What is CoPilot?

CoPilot is an toolset created by Microsoft on Azure OpenAI for specific products like bing chat/Copilot search, sales, PowerPlatform , M365, Fabric etc

## What are Models?

Models refer to a program , that has to be trained for specific outcomes .

Below are some of the popular models

### What is Training?

Training is the process of presenting the sample data the model has to operate on.

### what kind of models are available with OpenAI?

Below are few of the models available with OpenAI which can be leveraged

| **Model Name**    |**Description**                                                                                        |
|----------------------------------------------------------------------------------------------------------------------------------------|
| **GPT-4**                     | An improvement over GPT-3.5, optimized for chat and traditional completions tasks.                    |
| **GPT-4 Turbo with Vision**   | Accepts image inputs and available as the `vision-preview` model of `gpt-4`.                            |
| **GPT-3.5-Turbo**             | Enhanced version of GPT-3, excels in chat-based interactions and completions tasks.                      |
| **DALL-E**                    | Generates original images from natural language descriptions.                                            |
| **Embeddings**                | Converts text into numerical vectors for text similarity calculations. Latest model: `text-embedding-3-large`. |

## Life cycle of an AI model

Below is a glimpse of on how any AI model works

![Model ]({{'/assets/posts/2024-02-28-understanding-basics-of-ai/AIModel.png' | prepend: site.baseurl}})

1. It all starts with a model creation :star:
2. Present the data on which your AI needs to be trained on
3. Create rules/code or whatever applicable for the training
4. Test your model
5. Every model emits a number which can be percentage or between 0 and 1 , the higher the better. It can be called Accuracy.
6. Understand your accuracy , if your business demands higher accurate solutions , start from step 2 , until the desired accuracy is met
7. Now apply your model/publish the model for realworld scenarios

Thats all for this blog today, will keep this updated , as and when I get introduced to new terms , see you soon :rocket:
