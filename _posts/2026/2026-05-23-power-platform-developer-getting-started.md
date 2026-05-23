---
layout: post
title: "Getting Started with Copilot Studio: The Setup No One Explains"
byline: "Power Apps, Dataverse, and a free developer environment — everything you need before you build your first AI agent"
date: 2026-05-23 08:00:00
author: Divya Akula
categories: PowerPlatform
tags: Power Platform, Copilot Studio, Power Apps, Power Automate, Dataverse, Getting Started, Microsoft 365, Developer
cover: "/assets/posts/2026-05-23-power-platform-developer-getting-started/power-platform-getting-started.jpeg"
thumbnail: "/assets/images/thumbnails/power-platform-getting-started.jpeg"
---

A few years ago I wanted to get started with Power Platform and had no idea where to begin.

Not because the technology was hard. Because nobody could give me a clear answer on where to actually start. Every guide assumed you already had a tenant, a license, or an IT team. Every tutorial started at step three.

I spent way too long going in circles before I figured out there was a free, fully functional developer environment I could have had running in an afternoon.

I wrote the guide I wish someone had handed me. Whether you're a developer, an IT pro, or someone who just heard about Power Platform and wants to build something real — this is where you start.

When someone asks me how to get started with Power Platform, the answer is never "go talk to IT about licensing." There's a free, fully functional developer environment you can have running in under an hour — and most people don't know it exists.

This guide walks you through exactly that setup, step by step. Whether you're a developer, an IT pro, or someone who just discovered Power Platform and wants to build something real — this is where you start.

---

## Step 1: Get Your Free Microsoft 365 Developer Tenant

Before anything else, you need a tenant — your own Microsoft 365 environment where you're the admin and you control everything.

The **Microsoft 365 Developer Program** gives you a free E5 sandbox tenant with 25 user licenses, preloaded with sample data. E5 is the highest M365 tier — you get Teams, SharePoint, Exchange, and everything that comes with it, all included.

**How to set it up:**

1. Go to [developer.microsoft.com/en-us/microsoft-365/dev-program](https://developer.microsoft.com/en-us/microsoft-365/dev-program)
2. Sign in with a personal Microsoft account (your @outlook.com or any personal MSA — not your work account)
3. Complete the short sign-up form and choose your region
4. Select **Instant Sandbox** when prompted — this provisions a pre-configured tenant in minutes
5. Note down your new tenant admin account (e.g. `admin@yourdomain.onmicrosoft.com`) — this is the work account you'll use for everything that follows

> 🔑 **You now have two accounts — keep them straight.** Your personal Microsoft account (the one you used to sign up) and your new sandbox work account are separate identities. From this point forward, use **only your sandbox work account** (`admin@yourdomain.onmicrosoft.com`) for every Power Platform step in this guide. Signing in with your personal account by accident is the most common source of confusion — things exist in one tenant and not the other, and the error messages don't tell you why.

> 💡 **Use Visual Studio Dev Essentials for a guaranteed auto-renewing sandbox.** The standard developer sandbox renews every 90 days based on activity — if you go quiet, it can expire. If you have (or sign up for) a free Visual Studio Dev Essentials subscription, your M365 sandbox auto-renews for the lifetime of that subscription. No activity tracking, no anxiety. It's free and worth the extra two minutes.

---

## Step 2: Provision Power Platform — It's Already Included

Here's what most people don't realise: if you have any Microsoft 365 account — including your new developer sandbox — Power Platform is already available to you at no extra cost.

Go to [make.powerapps.com](https://make.powerapps.com) and sign in with your sandbox work account. You're in. Power Apps, Power Automate, and a default environment are provisioned automatically.

Here's the distinction worth understanding: the **default environment** is shared across all users in your tenant and has no Dataverse database. It's fine for exploring, but you can't build anything serious on it. The **Power Apps Developer Plan** gives you a separate, dedicated developer environment with Dataverse included — this is where all your actual work will live. It's free, it just needs to be activated explicitly.

**How to activate it:**

1. Go to [powerapps.microsoft.com/en-us/developerplan](https://powerapps.microsoft.com/en-us/developerplan)
2. Sign in with your sandbox work account (e.g. `admin@yourdomain.onmicrosoft.com`) — the one you created in Step 1
3. Click **Get Started Free** and follow the prompts
4. Microsoft will provision a dedicated developer environment with Dataverse

**What the Developer Plan gives you:**

- A dedicated developer environment (separate from your default tenant environment — use this for all your builds)
- 3 developer environments and 2 GB of Dataverse storage
- Full Power Apps canvas and model-driven app builder
- Power Automate with standard connectors and cloud flows
- Dataverse tables, security roles, business rules — the full data platform

> ⚠️ **Premium connectors are not included.** The Developer Plan covers standard connectors. If you need SQL Server, HTTP (custom APIs), or other premium connectors, you'll need a 90-day Power Apps Premium trial on top of this. Many people build something expecting premium connectivity and then hit a wall — know this upfront.

> 💡 **You also get a 90-day Power Automate Premium trial when you first sign in — grab it.** This covers premium triggers, desktop flows (RPA), and AI Builder credits. Don't let it expire before you've explored what it unlocks.

> ⚠️ **Don't let it sit idle.** If you're on the standard sandbox, Microsoft tracks active development usage to decide whether to renew. Build things. Open the tenant. Run flows. Even connecting to Power Platform counts.
---

## Step 3: Add Copilot Studio — Your AI Agent Sandbox

Copilot Studio is the platform for building AI-powered agents — think knowledge bots, autonomous agents, multi-agent orchestration systems — and it sits natively inside the Power Platform ecosystem.

**How to start the trial:**

1. Go to [copilotstudio.microsoft.com](https://copilotstudio.microsoft.com)
2. Sign in with your sandbox work account
3. Select your **developer environment** (the one from Step 2 — not the default environment)
4. Copilot Studio will prompt you to start a 30-day trial — accept it
5. Create your first agent and start exploring

**What the trial includes:**

- Full access to the Copilot Studio authoring canvas for 30 days
- **Generative Answers** — connect SharePoint, websites, or uploaded documents as knowledge sources
- **Actions** — call Power Automate flows or HTTP endpoints mid-conversation
- **Autonomous triggers** — activate agents on Teams messages, emails, schedules, or Dataverse changes
- **Multi-agent orchestration** — build child agents and have an orchestrator route between them
- Publishing to Teams, SharePoint, and web widget channels

> ⚠️ **Watch for throttling.** Trial and developer environments cap at 10 requests per minute and 200 requests per hour. A single Teams conversation can trigger several backend calls. When you hit the limit, the agent goes quiet — it's not broken, it's throttled. Wait a few minutes and it resets. Know this before your first demo.

> 📌 **On licensing and what happens when the trial ends:** As of September 2025, Copilot Studio moved from the old "sessions" model to **Copilot Credits**. Older blog posts mentioning "25,000 messages" or "billed sessions" are referencing the legacy Power Virtual Agents model. The trial gives you 30 days to explore everything free before credits become relevant. When the trial expires, your agents go into a read-only state — you can still open and edit them in the authoring canvas, but they stop responding to users until the environment has active Copilot Credits assigned. Nothing is deleted; you just can't publish or run until credits are in place. For a full breakdown, see [Copilot Studio, Unlocked: Licenses, Credits & First Steps](/2026/05/09/copilot-studio-getting-started/).

**What to build first:** Start with a SharePoint knowledge agent. Create an agent, add a SharePoint site as a knowledge source, and ask it questions about documents in that site. This single exercise teaches you how generative answers work, how citations surface, and what happens when the AI can't find an answer. Once that works, add a Power Automate action — even just sending a Teams message when the user asks for something. Knowledge retrieval plus action execution is the foundation of nearly every enterprise agent I've built.

---

## Step 4: Set Up Dataverse Properly

Dataverse is not just a database — it's the security model, the data backbone, and the connective tissue between your apps, flows, and agents. Setting it up right from day one saves you a lot of pain later.

Your Developer Plan provisioned it automatically. Now make it work for you.

**If you skipped straight here from Step 2, do this before Step 3. If you've already done Step 3 — do it now, it's not too late:**

1. Go to [admin.powerplatform.microsoft.com](https://admin.powerplatform.microsoft.com)
2. Sign in with your sandbox admin account
3. Find your developer environment and click into it
4. Rename it something meaningful — *Dev - [Your Name]* is cleaner than the default
5. Confirm the region is correct — this affects data residency and **cannot be changed later**
6. Verify the Dataverse database has been provisioned (you'll see storage stats in the environment details)

> ⚠️ **Don't skip the region check — and know how to pick one.** The region determines where your data physically lives and cannot be changed after provisioning. For personal learning: pick the region closest to you. For client or production work: pick the region that matches the client's data residency requirements (typically where their M365 tenant is already provisioned). When in doubt for a dev sandbox, closest geography is fine — but don't let the default slip by unexamined. Takes 30 seconds. Can't be undone.

**What Dataverse gives you that SharePoint doesn't:**

- Proper relational data with table relationships and referential integrity
- Row-level and column-level security built in
- Native connections to model-driven apps, Copilot Studio agents, and Power Automate (faster and more reliable than SharePoint connectors for structured data)
- Solutions — the packaging system for moving your work between environments

My honest take: learn Dataverse early. I see too many developers reach for SharePoint lists because they're familiar, and end up rebuilding everything six months later when the data model breaks down. SharePoint is excellent for document libraries and collaboration. It is not a substitute for a structured data store.

---

## Step 5: Learn and Stay Connected

The Power Platform community is one of the most generous technical communities I've been part of. Here's where to plug in.

**What to build first in each product:**

- **Power Apps** — Build a canvas app backed by a Dataverse table. Create a table called *Project Requests* with a few columns (title, status, requester), then build a simple form app that lets you add and view rows. This teaches you how screens, galleries, and forms connect to data — the pattern behind almost every canvas app.
- **Power Automate** — Build an approval flow. Trigger it when a new row is added to your Dataverse table, send an approval email to yourself, and update the row status based on the response. Approval flows appear in nearly every enterprise process — understanding how they're structured pays dividends immediately.
- **Copilot Studio** — Covered in Step 3 above: SharePoint knowledge agent with a Power Automate action.

**Start learning:**

- **Microsoft Learn** — Start with [PL-900: Microsoft Power Platform Fundamentals](https://learn.microsoft.com/en-us/credentials/certifications/power-platform-fundamentals/?wt.mc_id=MVP_366830). Even if you're not certifying, the learning path gives you the right mental model for how everything connects.
- **Copilot Studio docs** — Bookmark [learn.microsoft.com/en-us/microsoft-copilot-studio/](https://learn.microsoft.com/en-us/microsoft-copilot-studio/?wt.mc_id=MVP_366830) separately. The product moves fast and the docs are kept current.
- **Power Platform Community forums** ([community.powerplatform.com](https://community.powerplatform.com)) — Real questions, real answers, usually within hours. Search here before you raise a support ticket.

**Stay connected:**

- **Global Power Platform Bootcamp** — Free, community-run, happens every February globally. The quality of sessions is genuinely high and it's a good way to meet people building similar things.
- **Microsoft Build and Power Platform Conference** — Follow these for product direction. The roadmap announcements here shape what you'll be building in six months.
- **MVP blogs and GitHub repos** — The community publishes working solutions. If you're stuck on something, someone has probably hit the same wall and documented it.

---

## Your Quick-Start Checklist

Follow these in order — each step builds on the last.

- [ ] Sign up for the M365 Developer Program at developer.microsoft.com (personal Microsoft account)
- [ ] Choose Instant Sandbox and note your new admin work account
- [ ] *(Optional but recommended)* Link a Visual Studio Dev Essentials subscription for auto-renewal
- [ ] Sign in to make.powerapps.com with your sandbox account to confirm Power Platform access
- [ ] Activate the Power Apps Developer Plan using your sandbox work account
- [ ] Go to Power Platform Admin Center — rename your dev environment and verify region
- [ ] Grab the 90-day Power Automate Premium trial when prompted
- [ ] Sign in to copilotstudio.microsoft.com and start the 30-day trial
- [ ] Enrol in PL-900 on Microsoft Learn
- [ ] Join the Power Platform Community forums
- [ ] Find and bookmark your nearest user group or bootcamp

---

The biggest mistake I see new developers make is spending weeks on licensing questions before they've built anything. These programs exist precisely so you can build first, understand what you actually need, and then have an informed conversation about production licensing.

You now have a full Microsoft 365 E5 tenant, a Dataverse-backed Power Platform environment, and a 30-day Copilot Studio sandbox — all free, all set up in an afternoon.

Build something. Break it. Fix it. That's the job.
