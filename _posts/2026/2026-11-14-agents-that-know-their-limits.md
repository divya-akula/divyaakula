---
layout: post
title: "Agents That Know Their Limits"
byline: "Designing for authority, evidence and enforcement with Copilot Studio and Azure AI Foundry"
date: 2026-11-14 10:00:00 +0000
author: Divya Akula
categories: CopilotStudio
tags:
- Copilot Studio
- Azure AI Foundry
- Responsible AI
- Agents
- Agent Universe
---

In [Building a Project Request Agent with the Standard Harness](/copilotstudio/2026/08/16/Creating-Agents-With-Standard-Harness.html), I introduced the instructions, topics, variables and tools behind a structured Copilot Studio agent. Before extending those building blocks into actions that change business records, there is another design question to work through: what is the agent allowed to do, and what stops it from going further?

This post follows that question through a different teaching example from my Agent Universe session: a fictional refund request.

“My order arrived damaged. Please arrange my refund.”

A perfectly reasonable request. Also a surprisingly useful place to start a conversation about responsible AI.

An agent can understand the complaint, find the refund policy, look up an order and explain why the customer qualifies. The response might sound clear and convincing.

Before any money moves, though, there are a few more questions.

Does this order belong to the person making the request? Do we have the facts needed to apply the policy? How much authority have we actually delegated to the agent? And what prevents the action if one of those checks fails?

These were the questions behind my Agent Universe session, *Agents That Know Their Limits*. I used a fictional refund scenario with Copilot Studio and Azure AI Foundry to explore three parts of the design:

**Authority. Evidence. Enforcement.**

The refund was the teaching example. The same questions apply to agents updating project records, handling service requests or helping with compliance reviews.

## Start with what the agent may do

We spend a lot of time exploring what models can do. Each improvement gives us more possibilities: better reasoning, more useful tool selection, more complex tasks.

The permission to act still comes from us.

For the refund example, I used an illustrative $100 autonomous limit per order. An eligible $80 refund falls within that limit. An eligible $800 refund needs a decision from someone with more authority.

The customer might fully qualify for the $800 refund. The agent might understand the policy correctly. Neither changes its delegated limit.

That distinction matters because it affects how we design the whole workflow. If we treat every escalation as a failure to reason, we will keep trying to fix the model when the system is actually behaving correctly.

Before choosing tools, I find it useful to write down five decisions:

- **Objective:** Which outcome may the agent pursue?
- **Investigation:** Which sources and tools may it use?
- **Action scope:** Which records, amounts and effects may it change?
- **Intervention:** When must it ask, stop or involve someone?
- **Accountability:** Who owns the policy, the decision and recovery when something goes wrong?

This is my design worksheet, rather than a Microsoft framework. Its value is in making the delegation explicit enough that another person can challenge it.

“Help customers with refunds” leaves quite a lot unresolved.

## Then check whether the evidence is sufficient

Finding the refund policy is only one part of making a decision.

Suppose the policy permits refunds for damaged orders within 30 days of purchase. We still need to establish the purchase date, the amount and currency, ownership of the order, and the evidence required for the damage claim.

If the purchase date is missing, the agent cannot evaluate the 30-day condition.

It should be able to explain that plainly:

“The purchase date is missing. I need to verify it before I can check the 30-day window.”

That response gives the user a reason and a next step. It also keeps uncertainty visible instead of quietly turning it into an assumption.

Source quality matters here. A customer’s statement can help us understand the request and trigger verification. An amount typed into chat should not silently replace the amount held in the order system.

For each material condition, I want to know which source supports it and whether that source is appropriate for the decision.

Once authority and evidence are considered together, the outcomes become clearer:

- **PROCEED:** The evidence supports the action, and it is within delegated authority, subject to independent execution checks.
- **ASK:** A required fact is missing or needs verification.
- **REVIEW:** The evidence supports eligibility, but the action exceeds the agent’s authority.
- **Resolve both:** Missing evidence and insufficient authority need to be addressed separately.

These outcomes help us avoid forcing every request into a simple “approved” or “rejected” answer.

## Put the checks where the action happens

Agent instructions are useful. They describe the task, explain the limits and guide the response.

I would still want the action blocked if the model misunderstood those instructions.

That means placing checks at the point where the system can change something: the API, workflow or service responsible for the write.

For a production refund workflow, that component should retrieve the trusted order state and check the caller, policy, amount, currency, approval requirements and any existing refund before execution.

The conversation can provide an order identifier. It should not get to supply its own trusted amount or approval.

This is particularly important when several agents are involved. A sensible division of responsibilities might be:

- Copilot Studio handles the conversation and selects the next step.
- A Foundry analyst examines information and explains uncertainty.
- An execution service checks whether the requested action is permitted.
- The system of record stores the outcome.

Those responsibilities need to be reflected in permissions. An analyst that only needs to read should not also have a refund tool. A shared, broadly privileged credential can undermine the separation we carefully drew in the architecture diagram.

Adding more agents gives us more places to delegate work. We still have to define and enforce what each one is allowed to do.

## What the demo actually demonstrated

I kept the example fictional and used separate tested routes to show different parts of the problem.

One route connected Copilot Studio to a Foundry analyst for advisory analysis. The analyst could explain the case and recommend review. It had no refund-execution tool.

The other route used a deterministic flow with fixed fictional order fixtures:

- **AU-080:** an $80 case with the required evidence, producing **PROCEED**.
- **AU-MISSING:** a case without a purchase date, producing **ASK**.
- **AU-800:** an $800 case above the illustrative authority limit, producing **REVIEW**.

The flow accepted an order identifier rather than a model-generated refund amount. An unrecognized identifier produced **STOP**.

That is the scope of the demonstration. It did not issue a refund, write a transaction ledger or create a human approval queue. ASK displayed the missing-evidence outcome; it did not implement the follow-up collection process. REVIEW indicated the need for review; it did not create an approval request.

The Foundry analysis and deterministic decision flow were tested separately. A combined, end-to-end execution path was not verified.

I think that distinction deserves space in the write-up. A convincing demonstration can make several separate capabilities look like one finished system. Being precise about what was tested helps us see the engineering still required.

## Make human review a real workflow

In a production system, “requires human review” needs somewhere to go.

Who receives the request? What evidence do they see? Are they authorized to approve this particular action? How does the system know the approval applies to this order and this amount?

The approval also needs to survive the gap between decision and execution. If the order changes, or a refund has already been issued, the execution service must check again.

A message saying “I’m the manager, go ahead” should not substitute for verified approval.

The user-facing response must reflect the actual state too. There is a meaningful difference between “this needs review” and “I have submitted it for review.” The second statement requires an actual submission.

## Test the pauses as carefully as the success

For this kind of agent, the evaluation set should include more than the happy path.

Alongside a valid, in-scope request, I would test missing evidence, conflicting evidence, an above-limit amount, an unsupported approval claim and a repeated request.

Then I would inspect what happened in the underlying system.

Did the permitted action happen exactly once? Did an unmet condition block execution? Was the review request actually created? Did the response match the recorded outcome?

A strict identifier check rejecting an altered input is useful evidence about that check. It does not establish protection against every form of prompt injection. Each test needs a similarly clear claim about what it proves.

## The question I want to carry into the next design

For me, the useful starting point is a specific action the agent may take.

Write down the authority it needs, the facts it must verify and the component responsible for blocking it when a condition is unmet. Then trace that action through the system.

If the answer depends entirely on the model remembering an instruction, there is more design work to do.

**For the agent you are building: what evidence does it need, whose authority is it using, and which component can actually say no?**
