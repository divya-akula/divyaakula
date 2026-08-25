---
layout: post
title: "Building a Project Request Agent with the Standard Harness"
byline: "A hands-on introduction to instructions, topics, variables, and tools in Copilot Studio"
date: 2026-08-16 08:00:00
author: Divya Akula
categories: CopilotStudio
tags:
- Copilot Studio
- Agents
- Topics
- Power Platform
- SharePoint
- Standard Harness
cover: "/assets/posts/2026-08-16-creating-agents-with-standard-harness/creating-agents-with-standard-harness.jpeg"
thumbnail: "/assets/images/thumbnails/creating-agents-with-standard-harness.jpeg"
---

## Introduction

In my previous post, I explored the difference between Standard Harness, GitHub Copilot Harness, and Copilot Chat Harness.

In this post, we will build a small Project Request Agent to understand the fundamentals of a structured, business-process-oriented agent. The goal is not to build a production-ready solution. It is to understand the building blocks and see how they work together.

I will use the new Copilot Studio experience. If you are more comfortable with the classic experience, you can still follow the same core concepts, although the screens and navigation may look different.

## Use Case

Let’s follow a hands-on learning approach and explore the core parts of Copilot Studio through one use case.

We will build a **Project Request Agent**. A user can submit a new project request or check the status of an existing one. The agent collects the required details and calls a flow to create or retrieve a record in a SharePoint list, which acts as the external data source for this example.

The Project Request Agent is a good Standard Harness example because the process follows a defined path:

1. A user starts a project request.
2. The agent collects the required details.
3. The agent confirms the request details.
4. A flow saves the request to SharePoint.
5. The agent returns a confirmation to the user.

> 📌 **Note:** Before starting, make sure that you have access to Copilot Studio, Power Platform, and a SharePoint site where you can create a list.

## Basic Nuances of Copilot Studio

Before we build, let’s look at the building blocks we will use.

| Building block | What it does in our Project Request Agent |
|---|---|
| **Instructions** | Define the agent’s role, tone, boundaries, and the information it must collect. |
| **Topics** | Create guided conversation paths for submitting a project request or checking its status. |
| **Nodes** | Define the individual steps within a topic. Question nodes collect details, condition nodes control branching, and message or tool nodes continue the conversation or perform an action. |
| **Variables** | Hold values such as project name, objective, priority, target date, and estimated effort during the conversation. |
| **Tools** | Perform actions outside the conversation, such as creating or retrieving a SharePoint list item. |
| **Testing** | Checks successful submission, missing information, and project-status lookup. |

Questions and conditions are not separate top-level building blocks in this model. They are node types used inside topics to build the conversation path.

The key point is that tools are not simply responses. They are capabilities that let the agent call connectors, APIs, or flows. In this example, our flows provide the deterministic part of the solution: one creates a project request, while the other retrieves a project’s current status. The SharePoint list sits outside the agent as a data source; the agent reaches it through those flows and the SharePoint connector.

## What We Will Build

For this first version, we will keep the build focused on two user experiences:

1. **Submit a Project Request** — collects project name, objective, request owner, priority, target date, and estimated effort; then creates a SharePoint list item.
2. **Check Project Request Status** — lets users ask for the current status of a known project request.

We will use two flows:

- **Create Project Request** — creates a new item in the `Project Requests` SharePoint list.
- **Get Project Request Status** — finds a project request and returns its status.

In the next section, we will set up the SharePoint list that stores the project requests.
