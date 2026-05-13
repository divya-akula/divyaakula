---
layout: post
title: "Copilot Studio, Unlocked: Licenses, Credits & First Steps"
byline: "A clear-eyed guide to what licenses you actually need and how to build your first agent"
date: 2026-05-09 08:00:00
author: Divya Akula
categories: CopilotStudio
tags: CopilotStudio, Power Platform, Licensing, Low-code AI, Microsoft 365, Getting Started
cover: "/assets/posts/2026-05-09-copilot-studio-getting-started/copilot-studio-licensing.jpeg"
thumbnail: "/assets/images/thumbnails/copilot-studio-licensing.jpeg"
---

## What is Copilot Studio?

Microsoft Copilot Studio is the low-code platform for building AI agents that don't just respond — they act. Whether you're extending Microsoft 365 Copilot, wiring up custom APIs, or orchestrating multi-agent workflows, this guide gets you from zero to first agent with a clear-eyed view of what licenses you actually need.

Copilot Studio sits at the intersection of conversational AI and business process automation. Built on the Power Platform, it lets you design agents using a visual canvas, natural language, or code — then deploy them to Teams, websites, Dynamics 365, or any custom channel via API.

As of 2025, Copilot Studio supports two orchestration models:

- **Classic orchestration** — deterministic topic-based flows
- **Generative orchestration** — the LLM dynamically decides which topics and actions to invoke

For new builds targeting agentic scenarios, generative orchestration is the default and recommended path.

<div class="post-callout post-callout--info">
  <span class="post-callout__label">Note</span>
  <p class="post-callout__text"><strong>Key rename (Sept 2025):</strong> Microsoft renamed the billing unit from "messages" to <em>Copilot Credits</em>. The quantity per pack stayed the same — only the terminology changed. All current documentation uses Copilot Credits.</p>
</div>

## Understanding the license model

Copilot Studio licensing has two dimensions: **who builds** (maker licenses) and **how much runs** (consumption credits).

You need both in production.

### Maker licenses (who can build)

Every developer who creates or manages agents needs a maker license. There are three ways to get one.

<div class="post-cards">
  <div class="post-card">
    <div class="post-card__title">Trial license</div>
    <div class="post-card__price">Free · 30 days</div>
    <ul class="post-card__list">
      <li>Create and test agents</li>
      <li>Test chat panel only</li>
      <li class="con">Cannot publish agents</li>
      <li class="con">No premium connectors</li>
    </ul>
  </div>
  <div class="post-card post-card--featured">
    <div class="post-card__badge">Recommended</div>
    <div class="post-card__title">Standalone subscription</div>
    <div class="post-card__price">Paid · per user</div>
    <ul class="post-card__list">
      <li>All channels and connectors</li>
      <li>Generative AI features</li>
      <li>Multi-agent orchestration</li>
      <li class="con">Requires tenant license too</li>
    </ul>
  </div>
  <div class="post-card">
    <div class="post-card__title">M365 / Teams plan</div>
    <div class="post-card__price">Included in select M365</div>
    <ul class="post-card__list">
      <li>Teams channel only</li>
      <li>Classic orchestration</li>
      <li>Dataverse for Teams</li>
      <li class="con">No premium connectors</li>
      <li class="con">No generative features</li>
    </ul>
  </div>
</div>

<div class="post-callout post-callout--warning">
  <span class="post-callout__label">Admin</span>
  <p class="post-callout__text"><strong>Two licenses required for standalone:</strong> A tenant license (one per org) AND a user license (per maker). Assign both through the Microsoft 365 Admin Center under <code>Billing → Purchase services → Copilot Studio</code>. Guests cannot access Copilot Studio.</p>
</div>

### Copilot Credits (how much runs)

Credits measure the compute effort of each agent interaction — retrieval, reasoning, action execution, tool calls. They're consumed whenever a user talks to an agent or an agent acts autonomously.

Three ways to supply them:

<div class="post-flow">
  <div class="post-flow__title">Credit supply options</div>
  <div class="post-flow__row">
    <span class="post-flow__node post-flow__node--accent">Pay-as-you-go</span>
    <span class="post-flow__arrow">→</span>
    <span class="post-flow__node">Azure subscription</span>
    <span class="post-flow__arrow">→</span>
    <span class="post-flow__node">Billing policy in PPAC</span>
  </div>
  <div class="post-flow__label">Best for: pilots, low-volume deployments, uncertain usage</div>
  <div class="post-flow__row">
    <span class="post-flow__node post-flow__node--accent">Capacity pack</span>
    <span class="post-flow__arrow">→</span>
    <span class="post-flow__node">25,000 credits / month</span>
    <span class="post-flow__arrow">→</span>
    <span class="post-flow__node">Does not roll over</span>
  </div>
  <div class="post-flow__label">Best for: production with predictable usage</div>
  <div class="post-flow__row">
    <span class="post-flow__node post-flow__node--accent">Pre-purchase plan (CCCU)</span>
    <span class="post-flow__arrow">→</span>
    <span class="post-flow__node">Annual commit via Azure portal</span>
    <span class="post-flow__arrow">→</span>
    <span class="post-flow__node">Cross-product pool</span>
  </div>
  <div class="post-flow__label" style="margin-bottom:0">Best for: enterprise with multiple Power Platform products</div>
</div>

<div class="post-callout post-callout--info">
  <span class="post-callout__label">Tip</span>
  <p class="post-callout__text"><strong>End users don't need a license.</strong> Only the makers who build agents need maker licenses. Employees or customers chatting with your agent are unlicensed — you pay in credits per interaction, not per end user. This is important for cost modeling at scale.</p>
</div>

### Feature comparison by plan

<table>
  <thead>
    <tr><th>Feature</th><th>Trial</th><th>Teams plan</th><th>Standalone</th></tr>
  </thead>
  <tbody>
    <tr><td>Create agents</td><td class="yes">✓</td><td class="yes">✓</td><td class="yes">✓</td></tr>
    <tr><td>Publish agents</td><td class="no">✗</td><td class="partial">Teams only</td><td class="yes">All channels</td></tr>
    <tr><td>Generative AI / GPT</td><td class="yes">✓</td><td class="no">✗</td><td class="yes">✓</td></tr>
    <tr><td>Premium connectors</td><td class="no">✗</td><td class="no">✗</td><td class="yes">✓</td></tr>
    <tr><td>Multi-agent orchestration</td><td class="yes">✓</td><td class="no">✗</td><td class="yes">✓</td></tr>
    <tr><td>Power Automate flows</td><td class="yes">✓</td><td class="partial">Standard only</td><td class="yes">✓</td></tr>
    <tr><td>Custom channels / API</td><td class="no">✗</td><td class="no">✗</td><td class="yes">✓</td></tr>
    <tr><td>Dataverse included</td><td class="no">✗</td><td class="partial">D4T only</td><td class="yes">15 GB</td></tr>
  </tbody>
</table>

## Setting up your environment

Copilot Studio runs inside a Power Platform environment. You'll need at least a default environment to get started, but for any real project you should provision separate environments for development, test, and production.

<div class="post-step-list">
  <div class="post-step">
    <div class="post-step__num">1</div>
    <div class="post-step__body">
      <h4>Start your trial or get licensed</h4>
      <p>Go to <code>copilotstudio.microsoft.com</code> and sign in with a work or school account. Personal email addresses are rejected. If self-service sign-up is disabled by your IT admin, ask them to enable the <code>AllowAdHocSubscriptions</code> flag in org settings.</p>
    </div>
  </div>
  <div class="post-step">
    <div class="post-step__num">2</div>
    <div class="post-step__body">
      <h4>Provision a Power Platform environment</h4>
      <p>Navigate to the <code>Power Platform Admin Center (PPAC)</code> → Environments → New. For dev work, a Developer-type environment gives you full Dataverse without consuming production capacity.</p>
    </div>
  </div>
  <div class="post-step">
    <div class="post-step__num">3</div>
    <div class="post-step__body">
      <h4>Assign licenses in M365 Admin Center</h4>
      <p>For standalone: purchase the <strong>Copilot Studio</strong> tenant license first, then the <strong>Copilot Studio User License</strong> (free) per maker. Assign via <code>Users → Active users → Manage product licenses</code>. Or scope to an Entra security group for bulk assignment.</p>
    </div>
  </div>
  <div class="post-step">
    <div class="post-step__num">4</div>
    <div class="post-step__body">
      <h4>Link a billing policy for credits</h4>
      <p>In PPAC, go to <code>Billing → Billing policies → New</code>. Link your Azure subscription and attach the relevant environment. This enables either pay-as-you-go metering or draws from your capacity pack.</p>
    </div>
  </div>
  <div class="post-step">
    <div class="post-step__num">5</div>
    <div class="post-step__body">
      <h4>Build and test your first agent</h4>
      <p>In Copilot Studio, click <strong>Create</strong> → New agent → describe what it should do in natural language. The platform generates a starter topic set. Use the <strong>Test your agent</strong> panel on the right to iterate before publishing.</p>
    </div>
  </div>
</div>

## Connecting external systems

One of Copilot Studio's main strengths is its connector ecosystem. You can call external APIs, trigger Power Automate flows, and invoke Azure AI services — all from within a topic or an autonomous action.

```yaml
# Call an external REST API from a topic action
kind: AdaptiveDialog
actions:
  - kind: InvokeFlowAction
    flow: "/providers/Microsoft.Flow/flows/{flowId}"
    inputs:
      query:    "=${System.Activity.Text}"
      userId:   "=${System.User.PrincipalName}"
    outputs:
      result:   FlowResponse

# Or call a custom connector directly
  - kind: InvokeConnectorAction
    connector: "shared_myapi"
    operation: "GetComplianceStatus"
    inputs:
      aerodromeId: "=${Topic.AerodromeId}"
```

<div class="post-callout post-callout--warning">
  <span class="post-callout__label">Heads up</span>
  <p class="post-callout__text"><strong>Connector auth scoping matters:</strong> Office 365 connectors in Copilot Studio default to maker credentials, not end-user credentials. If your agent needs to send email as the signed-in user, explicitly configure the connection to use end-user OAuth. This is a common source of confusion in Teams-deployed agents.</p>
</div>

## Developer pre-flight checklist

Before going into your first build, confirm these are in place:

<ul class="post-checklist">
  <li><span class="post-check-box"></span>Work or school Microsoft 365 account (no personal email)</li>
  <li><span class="post-check-box"></span>Access to Power Platform Admin Center (System Admin or Environment Maker role)</li>
  <li><span class="post-check-box"></span>Copilot Studio tenant license assigned to your org (or active trial)</li>
  <li><span class="post-check-box"></span>Copilot Studio User License assigned to your account</li>
  <li><span class="post-check-box"></span>Dedicated Power Platform environment (non-default recommended for dev)</li>
  <li><span class="post-check-box"></span>Billing policy created and linked to environment (required to consume credits)</li>
  <li><span class="post-check-box"></span>Azure subscription available if using pay-as-you-go metering</li>
  <li><span class="post-check-box"></span>DLP policies reviewed in PPAC (these can block connector usage silently)</li>
  <li><span class="post-check-box"></span>For M365 extension: M365 Copilot license on the agent-publishing account</li>
</ul>

## Cost planning tips

The most common licensing pitfall is underestimating credit consumption once you add generative features. A few practical strategies:

<div class="post-step-list">
  <div class="post-step">
    <div class="post-step__num">→</div>
    <div class="post-step__body">
      <h4>Pilot on pay-as-you-go first</h4>
      <p>Before committing to a capacity pack, run 2–4 weeks in PAYG to measure your actual credit burn. Every API call, tool invocation, and generative response contributes differently — you can't model it accurately without real traffic.</p>
    </div>
  </div>
  <div class="post-step">
    <div class="post-step__num">→</div>
    <div class="post-step__body">
      <h4>Watch backend action costs</h4>
      <p>Power Automate flows triggered per turn add up fast. If your flow calls Dataverse or an external API on every message, consider batching context at session start rather than fetching on every utterance.</p>
    </div>
  </div>
  <div class="post-step">
    <div class="post-step__num">→</div>
    <div class="post-step__body">
      <h4>Use the Microsoft usage estimator</h4>
      <p>The official Copilot Studio agent usage estimator (linked from the licensing docs) lets you model credit volume by agent type, traffic, orchestration mode, and tool usage. Run this before buying a pack size.</p>
    </div>
  </div>
</div>

<div class="post-callout post-callout--info">
  <span class="post-callout__label">Ref</span>
  <p class="post-callout__text">
    <strong>Official docs to bookmark:</strong><br>
    <a href="https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing?wt.mc_id=MVP_366830" target="_blank" rel="noopener noreferrer">authoritative licensing reference</a><br/>
    <a href="https://learn.microsoft.com/microsoft-copilot-studio/requirements-licensing?wt.mc_id=MVP_366830" target="_blank" rel="noopener noreferrer">getting access and trial sign-up</a> <br/>
   <a href="https://go.microsoft.com/fwlink/?linkid=2320995"> Microsoft Copilot Studio Licensing Guide (February 2026) — full PDF via Microsoft CDN</a>
  </p>
</div>

*Last updated May 2026 · Licensing details subject to change*
