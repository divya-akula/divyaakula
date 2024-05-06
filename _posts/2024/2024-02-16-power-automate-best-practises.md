---
layout: post
title:  "Power Automate Best practices"
byline: "be a ninja"
date:   2023-08-19 08:00:00
author: Divya Akula
categories: PowerPlatform
tags:	Solutions PowerPlatform flows
cover:  "/assets/posts/2019-12-01-Sentiment-Analysis/header.png"
thumbnail: "/assets/images/thumbnails/sentiment_analysis.jpg"
github: "https://github.com/4dcu-be/ShapeOfStories-SentimentAnalysis"
---
Best pratcises are always like opinions. It varies from person to person.What works for me , may not work for you, its all about I share what I do and feel free to choose what you like. Regardless of the season , coding or low coding or , certain things hold good like the below

1. Naming Conventions
2. Exception Handling
3. Parallel or sequential loops
4. Retry Mechanisms
5. Logging
6. 

# Naming Conventions

Power automate Naming conventions are goes to importance depending on what you are naming

1. Naming of the flows
2. Variables
3. Actions
4. Conditions
   
## Exception Handling

  Try Catch Exception , its a pattern for me and holds good in PA scenaio as well but the catch is what do you do with excptions in catch.

## TParallel or Sequential Loops

By default parallelism is turned on any for loop or apply to each loop , Should we leave as is or make it a sequential , it depends on scenario to scenario

## Retry Mechanisms

This holds good especially when you are using child flows, if your flows are too slow , the first thing to check is if you are using any child flow that has retry mechanism

## Logging

When you are using Power Automate to create enterprise solutions ,k its  always good idea to enable applicationinsights.
So its defualt logging or custom logging its a choice .
