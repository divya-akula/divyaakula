---
layout: post
title: "Microsoft Build 2026: What Actually Matters"
date: 2026-06-06
author: Divya Akula
categories: MSEvents
tags: copilot-studio, microsoft-build, responsible-ai, azure-ai, agentic-ai, mai-models, microsoft-foundry
description: "100+ announcements. Two days. One very strong cup of filter coffee. Here's everything worth your attention from Build 2026 — including the things that shipped quietly the week before it even opened."
cover: "/assets/posts/2026-06-06-microsoft-build-and-what-actually-matters/MSBuild2026.png"
thumbnail: "/assets/images/thumbnails/MSBuild2026.jpeg"
---

The biggest announcement at Microsoft Build 2026 wasn't a model.

It wasn't MAI.

It wasn't Microsoft IQ.

It wasn't Copilot Studio.

It was the realization that Microsoft is no longer building AI features. Microsoft is building the operating system for enterprise agents.

If you zoom out, every major announcement fits into that picture:

<div style="border-radius:12px;border:1px solid #E8E3D8;overflow:hidden;margin:1.25rem 0">
  <div style="display:grid;grid-template-columns:repeat(5,1fr)">
    <div style="background:#EDF3F6;padding:.7rem .9rem;border-right:1px solid #E8E3D8;text-align:center"><p style="font-size:10px;color:#7B9EAE;font-family:sans-serif;font-weight:700;margin:0 0 .25rem;text-transform:uppercase;letter-spacing:.08em">MAI</p><p style="font-size:11.5px;color:#3A3228;font-family:sans-serif;margin:0;line-height:1.4;font-weight:500">Intelligence layer</p></div>
    <div style="background:#F0EDF5;padding:.7rem .9rem;border-right:1px solid #E8E3D8;text-align:center"><p style="font-size:10px;color:#9B8BAE;font-family:sans-serif;font-weight:700;margin:0 0 .25rem;text-transform:uppercase;letter-spacing:.08em">Microsoft IQ</p><p style="font-size:11.5px;color:#3A3228;font-family:sans-serif;margin:0;line-height:1.4;font-weight:500">Context layer</p></div>
    <div style="background:#EDF5F2;padding:.7rem .9rem;border-right:1px solid #E8E3D8;text-align:center"><p style="font-size:10px;color:#7BAE9E;font-family:sans-serif;font-weight:700;margin:0 0 .25rem;text-transform:uppercase;letter-spacing:.08em">Studio + Foundry</p><p style="font-size:11.5px;color:#3A3228;font-family:sans-serif;margin:0;line-height:1.4;font-weight:500">Execution layer</p></div>
    <div style="background:#F5EDED;padding:.7rem .9rem;border-right:1px solid #E8E3D8;text-align:center"><p style="font-size:10px;color:#AE7B7B;font-family:sans-serif;font-weight:700;margin:0 0 .25rem;text-transform:uppercase;letter-spacing:.08em">Credits</p><p style="font-size:11.5px;color:#3A3228;font-family:sans-serif;margin:0;line-height:1.4;font-weight:500">Economics layer</p></div>
    <div style="background:#EEEAF6;padding:.7rem .9rem;text-align:center"><p style="font-size:10px;color:#8B7BAE;font-family:sans-serif;font-weight:700;margin:0 0 .25rem;text-transform:uppercase;letter-spacing:.08em">Agent 365 + ACS</p><p style="font-size:11.5px;color:#3A3228;font-family:sans-serif;margin:0;line-height:1.4;font-weight:500">Governance layer</p></div>
  </div>
</div>

Individually, these look like product announcements. Together, they look like infrastructure. That's the lens I'd use to understand Build 2026.

<div style="background:#FAF8F4;border:1px solid #E8E3D8;border-radius:12px;padding:1rem 1.25rem;margin:1.5rem 0">
  <p style="font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#8B7355;font-family:sans-serif;font-weight:600;margin:0 0 .75rem;padding-bottom:.55rem;border-bottom:1px solid #E8E3D8">⏱ If you're short on time</p>
  <ul style="margin:0;padding:0;list-style:none">
    <li style="font-size:13.5px;color:#3A3228;font-family:sans-serif;padding:.3rem 0;border-bottom:0.5px solid #EDE9E0">▸ &nbsp;<strong style="color:#7B9EAE">Intelligence Layer —</strong> Microsoft built its own AI models. The MAI family is here.</li>
    <li style="font-size:13.5px;color:#3A3228;font-family:sans-serif;padding:.3rem 0;border-bottom:0.5px solid #EDE9E0">▸ &nbsp;<strong style="color:#9B8BAE">Context Layer —</strong> Microsoft IQ is the unified retrieval endpoint for all enterprise data.</li>
    <li style="font-size:13.5px;color:#3A3228;font-family:sans-serif;padding:.3rem 0;border-bottom:0.5px solid #EDE9E0">▸ &nbsp;<strong style="color:#7BAE9E">Execution Layer —</strong> Copilot Studio's biggest updates shipped in May. Foundry closes the production gap.</li>
    <li style="font-size:13.5px;color:#3A3228;font-family:sans-serif;padding:.3rem 0;border-bottom:0.5px solid #EDE9E0">▸ &nbsp;<strong style="color:#AE7B7B">Economics Layer —</strong> Consumption pricing went live June 1. Governance starts here.</li>
    <li style="font-size:13.5px;color:#3A3228;font-family:sans-serif;padding:.3rem 0">▸ &nbsp;<strong style="color:#8B7BAE">Governance Layer —</strong> Responsible AI is now runtime architecture, not a checklist.</li>
  </ul>
</div>

<p style="font-size:12px;color:#888780;font-family:sans-serif;font-style:italic;margin:-.5rem 0 1.5rem">✨ <strong>Fun fact:</strong> The cover image for this post was generated using MAI-Image-2.5 — one of the very models announced at Build 2026.</p>

---

<p style="margin:2.5rem 0 .5rem"><span style="display:inline-block;background:#7B9EAE;color:#fff;font-size:10px;letter-spacing:.14em;text-transform:uppercase;font-family:sans-serif;font-weight:700;padding:3px 12px;border-radius:20px">● Intelligence Layer</span></p>

## Microsoft stopped reselling AI. They're building it now.

For years, Microsoft's AI story was simple: we have a deal with OpenAI, you get GPT. That changed at Build 2026. The MAI family is Microsoft's first in-house frontier model lineup — built for the Microsoft stack, available to everyone, and already quietly running inside products you use today.

![Microsoft Models]({{'/assets/posts/2026-06-06-microsoft-build-and-what-actually-matters/Microsoft7NewAIModels.jpeg' | prepend: site.baseurl}})

<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin:1.5rem 0">

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8">
    <div style="background:#7B9EAE;padding:.4rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:14px">🧠</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">MAI-Thinking-1</span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#EDF3F6 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .2rem;font-weight:600">Dedicated reasoning model</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">Comparable to o3 · Complex multi-step tasks</p>
    </div>
  </div>

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8">
    <div style="background:#7BAE9E;padding:.4rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:14px">💻</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">MAI-Code-1</span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#EDF5F2 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .2rem;font-weight:600">Built for GitHub — already live</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">Copilot + VS Code · Replacing GPT-4o for code</p>
    </div>
  </div>

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8">
    <div style="background:#B8845A;padding:.4rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:14px">🎨</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">MAI-Image-2.5</span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#F7EFE7 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .2rem;font-weight:600">Image editing and generation</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">Targeting Adobe's workflow territory</p>
    </div>
  </div>

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8">
    <div style="background:#9B8BAE;padding:.4rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:14px">🎙️</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">MAI-Transcribe-1.5</span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#F0EDF5 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .2rem;font-weight:600">Speech-to-text, 43 languages</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">Worth piloting for multilingual MEA deployments</p>
    </div>
  </div>

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8">
    <div style="background:#AE7B7B;padding:.4rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:14px">🔊</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">MAI-Voice-2</span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#F5EDED 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .2rem;font-weight:600">Voice synthesis</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">15+ additional languages beyond OpenAI's coverage</p>
    </div>
  </div>

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8">
    <div style="background:#8B7355;padding:.4rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:14px">🌍</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">Available Everywhere</span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#F2EDE6 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .2rem;font-weight:600">Not locked to Microsoft's platforms</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">Fireworks AI · Baseten · OpenRouter</p>
    </div>
  </div>

</div>


> **My take:** Microsoft is no longer a distribution layer for OpenAI — they're a model company now. When you pick a model in Copilot Studio or Foundry, you'll increasingly have a MAI option deeply integrated with Microsoft's data layer. For multilingual work across MEA, MAI-Transcribe-1.5 and MAI-Voice-2 are worth piloting the moment they're in your tenant.

---

<p style="margin:2.5rem 0 .5rem"><span style="display:inline-block;background:#9B8BAE;color:#fff;font-size:10px;letter-spacing:.14em;text-transform:uppercase;font-family:sans-serif;font-weight:700;padding:3px 12px;border-radius:20px">● Context Layer</span></p>

## Your agents finally have somewhere to look things up

Until now, every agent you built had to figure out context on its own — pull from M365 here, query Fabric there, maybe scrape the web if you were lucky. Microsoft IQ puts all of that behind one endpoint, and it's generally available across GitHub Copilot, Foundry, and Copilot Studio.

<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin:1.5rem 0">

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8">
    <div style="background:#7B9EAE;padding:.45rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:15px">🏢</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">Work IQ</span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#EDF3F6 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .25rem;font-weight:600">Live M365 signals — emails, meetings, docs</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">REST API · CLI · Remote MCP server<br>Replaces Power Automate connectors for external systems</p>
    </div>
  </div>

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8">
    <div style="background:#9B8BAE;padding:.45rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:15px">🔍</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">Foundry IQ</span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#F0EDF5 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .25rem;font-weight:600">One SLA-backed retrieval endpoint</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">Fabric · Azure SQL · File search<br>No more stitching RAG pipelines manually</p>
    </div>
  </div>

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8">
    <div style="background:#7BAE9E;padding:.45rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:15px">🌐</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">Web IQ</span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#EDF5F2 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .25rem;font-weight:600">Live web grounding</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">Model-agnostic · MCP-native<br>Already live in Microsoft Copilot and ChatGPT</p>
    </div>
  </div>

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8">
    <div style="background:#B8845A;padding:.45rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:15px">🤝</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">Work IQ A2A Spec</span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#F7EFE7 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .25rem;font-weight:600">Cross-vendor agent orchestration</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">Copilot · Claude · Gemini — shared tool surface<br>Multi-agent orchestration across vendors is real</p>
    </div>
  </div>

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8;grid-column:1/-1">
    <div style="background:#8B7BAE;padding:.45rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:15px">🧠</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">Frontier Tuning <span style="background:rgba(255,255,255,.18);border-radius:4px;padding:1px 6px;font-size:9px;margin-left:4px">Private Preview</span></span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#EEEAF6 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .25rem;font-weight:600">Agents learn your business context</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">Within your compliance guardrails<br>Data stays in your tenant</p>
    </div>
  </div>

</div>

> **My take:** For Copilot Studio builders, check whether Work IQ knowledge bases can replace your custom RAG pipelines. For compliance-heavy clients in aviation and government, the SLA-backed single endpoint changes the reliability story significantly. The A2A spec with Claude/Gemini compatibility is huge if you're building cross-platform agent architectures.

---

<p style="margin:2.5rem 0 .5rem"><span style="display:inline-block;background:#7BAE9E;color:#fff;font-size:10px;letter-spacing:.14em;text-transform:uppercase;font-family:sans-serif;font-weight:700;padding:3px 12px;border-radius:20px">● Execution Layer</span></p>

## The biggest Copilot Studio update shipped before Build. Did you catch it?

Microsoft released most of this in the May 2026 update — which means it's already in your tenant. If you haven't checked your Copilot Studio environment this week, do that before reading anything else here.

<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin:1.5rem 0">

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8">
    <div style="background:#7BAE9E;padding:.4rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:14px">🖥️</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">Computer-Using Agents <span style="background:rgba(255,255,255,.2);border-radius:4px;padding:1px 5px;font-size:9px;margin-left:3px">GA</span></span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#EDF5F2 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .2rem;font-weight:600">UI-layer automation — no API needed</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">Enterprise credentials built in · Adaptive interface recovery<br>RPA without brittle scripts</p>
    </div>
  </div>

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8">
    <div style="background:#9B8BAE;padding:.4rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:14px">🤝</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">Agent-to-Agent Comms <span style="background:rgba(255,255,255,.2);border-radius:4px;padding:1px 5px;font-size:9px;margin-left:3px">GA</span></span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#F0EDF5 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .2rem;font-weight:600">Multi-agent orchestration, no SDK required</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">Visual designer · Shared org context<br>SDK-built and Studio-built agents are wire-compatible</p>
    </div>
  </div>

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8">
    <div style="background:#B8845A;padding:.4rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:14px">🔄</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">Redesigned Workflows</span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#F7EFE7 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .2rem;font-weight:600">Unified canvas — one place for everything</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">Deterministic · Branching · AI steps<br>~20% better evals · ~50% lower token usage</p>
    </div>
  </div>

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8">
    <div style="background:#7B9EAE;padding:.4rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:14px">🛡️</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">Agent 365 <span style="background:rgba(255,255,255,.2);border-radius:4px;padding:1px 5px;font-size:9px;margin-left:3px">GA</span></span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#EDF3F6 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .2rem;font-weight:600">Control plane for governing agents</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">Security posture in authoring · Read-only Analytics Viewer role<br>Multi-agent systems GA since April 2026</p>
    </div>
  </div>

</div>

> **My take:** Computer-Using Agents removes the "our portal doesn't have an API" objection permanently. The unified workflow canvas kills the biggest debugging pain — the Power Automate/agent action split is gone. Agent 365's Analytics Viewer role is exactly what compliance teams have been asking for.

---

<p style="margin:2.5rem 0 .5rem"><span style="display:inline-block;background:#7BAE9E;color:#fff;font-size:10px;letter-spacing:.14em;text-transform:uppercase;font-family:sans-serif;font-weight:700;padding:3px 12px;border-radius:20px">● Execution Layer</span></p>

## The prototype-to-production gap just got a lot smaller

Everyone can build an agent demo. Getting it to production — isolated, governed, observable, connected to the right tools — is where projects stall. Foundry at Build 2026 is specifically about fixing that.

<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin:1.5rem 0">

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8">
    <div style="background:#7BAE9E;padding:.4rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:14px">⚡</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">Hosted Agents</span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#EDF5F2 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .2rem;font-weight:600">Sub-100ms cold starts · zero idle cost</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">GA in coming weeks</p>
    </div>
  </div>

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8">
    <div style="background:#9B8BAE;padding:.4rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:14px">🧠</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">Agent Memory <span style="background:rgba(255,255,255,.2);border-radius:4px;padding:1px 5px;font-size:9px;margin-left:3px">Public Preview</span></span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#F0EDF5 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .2rem;font-weight:600">Agents learn the "how", not just the "what"</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">Procedural memory across sessions · Public Preview</p>
    </div>
  </div>

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8">
    <div style="background:#7B9EAE;padding:.4rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:14px">🔗</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">Magentic-One Orchestration</span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#EDF3F6 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .2rem;font-weight:600">Mix SDK agents and Studio agents in one workflow</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">GitHub Copilot SDK · Claude Agent SDK · Orchestrator stays deterministic</p>
    </div>
  </div>

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8">
    <div style="background:#B8845A;padding:.4rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:14px">🎛️</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">Multi-Model Selection</span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#F7EFE7 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .2rem;font-weight:600">GPT-5.5 + Claude — selectable per agent</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">Sonnet 4.5 · Opus 4.5 · Haiku 4.5 · In Copilot Studio and M365 Copilot</p>
    </div>
  </div>

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8">
    <div style="background:#AE7B7B;padding:.4rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:14px">🐟</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">Project Rayfin <span style="background:rgba(255,255,255,.2);border-radius:4px;padding:1px 5px;font-size:9px;margin-left:3px">Preview</span></span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#F5EDED 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .2rem;font-weight:600">Prototype → production without rebuilding infra</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">Managed backend-as-a-service on Microsoft Fabric · Preview</p>
    </div>
  </div>

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8">
    <div style="background:#8B7BAE;padding:.4rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:14px">🚀</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">One-Click Publishing</span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#EEEAF6 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .2rem;font-weight:600">Publish directly to Teams and M365 Copilot</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">GA planned June 2026</p>
    </div>
  </div>

</div>

<div style="background:#FAF8F4;border-left:3px solid #B8845A;border-radius:0 8px 8px 0;padding:.75rem 1rem;margin:1.25rem 0;border:1px solid #E8E3D8;border-left-width:3px">
  <p style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#8B5E3C;font-weight:600;font-family:sans-serif;margin:0 0 4px">⚠ Availability caveat — check your tenant region</p>
  <p style="font-size:13px;color:#3A3228;font-family:sans-serif;margin:0;line-height:1.6">Anthropic models (Claude Sonnet 4.5, Opus 4.5, Haiku 4.5) are on by default for commercial customers but <strong>not available in EU, UK, or government tenancies</strong>. Verify tenant region behaviour before promising this capability to clients.</p>
</div>

> **My take:** Magentic-One is the one I keep coming back to. Copilot Studio agents are A2A-compatible and can coordinate with Foundry-hosted agents without custom adapters. For regulated industries, the built-in OpenTelemetry tracing pipeline is your audit trail — you don't have to build it yourself anymore.

---

<p style="margin:2.5rem 0 .5rem"><span style="display:inline-block;background:#7BAE9E;color:#fff;font-size:10px;letter-spacing:.14em;text-transform:uppercase;font-family:sans-serif;font-weight:700;padding:3px 12px;border-radius:20px">● Execution Layer</span></p>

## The M365 May wave: 53 features, a few that change everything

Microsoft's May 2026 M365 Copilot wave was one of the biggest single releases they've done. Most of it is already in your tenant. The ones that matter:

<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin:1.5rem 0">

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8;grid-column:1/-1">
    <div style="background:#7BAE9E;padding:.4rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:14px">🔌</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">Federated MCP Connectors <span style="background:rgba(255,255,255,.2);border-radius:4px;padding:1px 5px;font-size:9px;margin-left:3px">GA</span></span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#EDF5F2 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .2rem;font-weight:600">Data stays in the source — nothing indexed in Graph</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">Partners: Canva · HubSpot · Notion · LSEG · Moody's<br>Available in Copilot Chat · Researcher agent · Excel Agent Mode</p>
    </div>
  </div>

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8">
    <div style="background:#7B9EAE;padding:.4rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:14px">⚙️</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">Agent Mode — Now Default</span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#EDF3F6 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .2rem;font-weight:600">On by default — not an opt-in</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">Word · Excel · PowerPoint · Your users are already using it</p>
    </div>
  </div>

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8">
    <div style="background:#B8845A;padding:.4rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:14px">📊</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">Excel Plan Mode + Python</span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#F7EFE7 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .2rem;font-weight:600">The feature that lands hardest in enterprise demos</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">Plan Mode + Python-powered data analysis · Now in Excel</p>
    </div>
  </div>

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8;grid-column:1/-1">
    <div style="background:#9B8BAE;padding:.4rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:14px">🔭</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">Scout <span style="background:rgba(255,255,255,.2);border-radius:4px;padding:1px 5px;font-size:9px;margin-left:3px">Preview · US Frontier only</span></span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#F0EDF5 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .2rem;font-weight:600">Always-on background assistant for M365</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">Outlook · OneDrive · Teams · US Frontier only for now</p>
    </div>
  </div>

</div>

> **My take:** Federated MCP connectors quietly change everything for regulated clients. No data leaves the source system, permissions are inherited, nothing new to govern. For clients who've been nervous about Copilot touching sensitive data — this is the architecture that makes it safe to say yes.

---

<p style="margin:2.5rem 0 .5rem"><span style="display:inline-block;background:#AE7B7B;color:#fff;font-size:10px;letter-spacing:.14em;text-transform:uppercase;font-family:sans-serif;font-weight:700;padding:3px 12px;border-radius:20px">● Economics Layer</span></p>

## The billing shift happened the day before Build. Did you notice?

June 1 — the day before Build opened — Microsoft quietly flipped the switch on consumption-based pricing for agentic work. Copilot Credits are now the universal unit, and if you haven't been paying attention, your next invoice might be a surprise.

<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin:1.5rem 0">

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8">
    <div style="background:#AE7B7B;padding:.4rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:14px">🎯</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">Per-Action Billing</span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#F5EDED 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .2rem;font-weight:600">Pay per action, not per seat</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">Credits consumed per agent action · Effective June 1</p>
    </div>
  </div>

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8">
    <div style="background:#B8845A;padding:.4rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:14px">🏗️</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">Copilot Studio Pricing</span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#F7EFE7 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .2rem;font-weight:600">25,000 credits for $200/month standalone</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">Pay-as-you-go now available · No upfront commitment</p>
    </div>
  </div>

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8">
    <div style="background:#7BAE9E;padding:.4rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:14px">💻</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">GitHub Copilot Credits</span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#EDF5F2 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .2rem;font-weight:600">Moved to AI Credits — June 1</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">Code completions stay unlimited · Chat and agentic sessions burn credits at model API rates</p>
    </div>
  </div>

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8">
    <div style="background:#7B9EAE;padding:.4rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:14px">🔒</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">Work IQ APIs</span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#EDF3F6 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .2rem;font-weight:600">Off by default — activation sets your billing policy</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">Unused credits don't roll over · Month ends, they're gone</p>
    </div>
  </div>

</div>

> **My take — the Responsible AI angle nobody's talking about:** Consumption pricing is also a governance lever. Agent sprawl without a control layer is how bills double without anyone noticing. Before you enable credits for your org, write a one-pager — what agents are allowed to run, who approves new ones, how usage gets tracked. It's not just a finance conversation. It's an accountability one.

---

<p style="margin:2.5rem 0 .5rem"><span style="display:inline-block;background:#8B7BAE;color:#fff;font-size:10px;letter-spacing:.14em;text-transform:uppercase;font-family:sans-serif;font-weight:700;padding:3px 12px;border-radius:20px">● Governance Layer</span></p>

## Governance wasn't a track this year — it was baked into the architecture

I've been saying for a while that Responsible AI needs to move from a checkbox to a design constraint. Build 2026 is the first time I felt Microsoft actually shipped that idea, not just talked about it.

<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin:1.5rem 0">

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8">
    <div style="background:#8B7BAE;padding:.4rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:14px">📋</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">Agent Control Spec (ACS)</span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#EEEAF6 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .2rem;font-weight:600">Open standard for runtime governance</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">Every tool invocation checked against a policy engine<br>Least-privilege by default</p>
    </div>
  </div>

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8">
    <div style="background:#7BAE9E;padding:.4rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:14px">🔒</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">Azure AI Content Safety</span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#EDF5F2 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .2rem;font-weight:600">Multi-modal detection</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">Text · Images · Voice<br>Agents can't exfiltrate data across modalities</p>
    </div>
  </div>

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8">
    <div style="background:#9B8BAE;padding:.4rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:14px">🗂️</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">Microsoft Purview</span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#F0EDF5 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .2rem;font-weight:600">Audit trail in the runtime</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">Auto classification + labeling of agent-accessed data<br>Not a separate process bolted on later</p>
    </div>
  </div>

  <div style="background:#FAF8F4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);border:1px solid #E8E3D8">
    <div style="background:#7B9EAE;padding:.4rem .9rem;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:14px">🛡️</span>
      <span style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.85);font-family:sans-serif;font-weight:600">Agent 365 + Tracing</span>
    </div>
    <div style="padding:.8rem 1rem;background:linear-gradient(180deg,#EDF3F6 0%,#FAF8F4 70%)">
      <p style="font-size:12.5px;color:#3A3228;font-family:sans-serif;margin:0 0 .2rem;font-weight:600">Governance health visible while you build</p>
      <p style="font-size:12px;color:#6B6560;font-family:sans-serif;margin:0;line-height:1.5">Security posture in authoring · OpenTelemetry pipeline GA<br>Evals linked back to the trace that produced them</p>
    </div>
  </div>

</div>

> **My take:** ACS plus Purview together give you the architecture to walk into a regulated client and say "yes, we have controls" — and mean it with receipts. If you work in aviation, government, or healthcare, these aren't optional features to add later. They're the foundation. Everything in [the handbook](https://github.com/divyaakula/responsible-ai-in-practice) on intake and governance maps directly onto what Microsoft shipped here.

---

## Also worth knowing

These shipped at Build but don't need a deep dive today:

<div style="background:#FAF8F4;border:1px solid #E8E3D8;border-radius:12px;padding:1rem 1.25rem;margin:1.25rem 0">
  <ul style="margin:0;padding:0;list-style:none;columns:2;column-gap:1.5rem">
    <li style="font-size:13px;color:#3A3228;font-family:sans-serif;padding:.3rem 0;border-bottom:0.5px solid #EDE9E0;break-inside:avoid">▸ &nbsp;<strong>GitHub Copilot desktop app</strong> (preview) — standalone agentic coding</li>
    <li style="font-size:13px;color:#3A3228;font-family:sans-serif;padding:.3rem 0;border-bottom:0.5px solid #EDE9E0;break-inside:avoid">▸ &nbsp;<strong>Windows Agent Runtime</strong> + Agent Framework GA for .NET and Python</li>
    <li style="font-size:13px;color:#3A3228;font-family:sans-serif;padding:.3rem 0;border-bottom:0.5px solid #EDE9E0;break-inside:avoid">▸ &nbsp;<strong>WSL containers</strong> via <code>wslc.exe</code> — Linux natively on Windows</li>
    <li style="font-size:13px;color:#3A3228;font-family:sans-serif;padding:.3rem 0;border-bottom:0.5px solid #EDE9E0;break-inside:avoid">▸ &nbsp;<strong>Windows Dev Configurations</strong> (GA) — one file, ready-to-code machine</li>
    <li style="font-size:13px;color:#3A3228;font-family:sans-serif;padding:.3rem 0;border-bottom:0.5px solid #EDE9E0;break-inside:avoid">▸ &nbsp;<strong>Intelligent Terminal</strong> (experimental) — native agent integration</li>
    <li style="font-size:13px;color:#3A3228;font-family:sans-serif;padding:.3rem 0;border-bottom:0.5px solid #EDE9E0;break-inside:avoid">▸ &nbsp;<strong>Project Solara</strong> — Android-based OS for agents (Qualcomm/MediaTek)</li>
    <li style="font-size:13px;color:#3A3228;font-family:sans-serif;padding:.3rem 0;border-bottom:0.5px solid #EDE9E0;break-inside:avoid">▸ &nbsp;<strong>Surface RTX Spark Dev Box</strong> — 128GB unified memory, NVIDIA Arm</li>
    <li style="font-size:13px;color:#3A3228;font-family:sans-serif;padding:.3rem 0;break-inside:avoid">▸ &nbsp;<strong>Microsoft Command Line blog</strong> — new transparency-first technical blog</li>
  </ul>
</div>

---

## What changes for me, starting Monday

I've been building with Copilot Studio for a while now. Most of what was announced at Build 2026 doesn't change what I do — it changes what I can *promise*. And a few things change what I create.

**1. Repricing every active build.**
Credits went live June 1. I owe every client an honest conversation about what their agent costs to *run*, not just to build. That conversation starts this week.

**2. Reopening the "too complex" pile.**
Every client request I parked because it needed an API that didn't exist — Computer-Using Agents just unlocked most of them. I'm going back through that list.

**3. MAI is now part of my content workflow.**
The cover image for this post was generated using MAI-Image-2.5. Going forward, I'll be using MAI models for blog visuals and marking them transparently as AI-generated. It's the right thing to do — and frankly, it's a live demo of the stack I write about.

**4. The Responsible AI content I've been sitting on is coming out.**
I've had videos, frameworks, and walkthroughs parked because the tooling wasn't quite there yet. ACS, Purview, Agent 365 — Microsoft just shipped the architecture I've been drawing on whiteboards. The content is ready. The platform caught up. Expect that to surface soon.

---

Build 2026 didn't surprise me with *what* Microsoft is building. It surprised me with *how fast* it's here — and how much of it I can use this week, not next year.

---

## Before you close this tab

Five things to do before Friday:

<div style="background:#FAF8F4;border:1px solid #E8E3D8;border-radius:12px;overflow:hidden;margin:1.25rem 0">
  <div style="display:flex;align-items:stretch;border-bottom:1px solid #E8E3D8">
    <div style="background:#7BAE9E;color:#fff;font-size:13px;font-weight:700;font-family:sans-serif;padding:.7rem 1rem;min-width:2rem;display:flex;align-items:center;justify-content:center">1</div>
    <div style="padding:.7rem 1rem"><p style="font-size:13px;color:#3A3228;font-family:sans-serif;margin:0"><strong>Open Copilot Studio</strong> — Computer-Using Agents and A2A are live now. If clients have active builds, this changes what's possible today.</p></div>
  </div>
  <div style="display:flex;align-items:stretch;border-bottom:1px solid #E8E3D8">
    <div style="background:#9B8BAE;color:#fff;font-size:13px;font-weight:700;font-family:sans-serif;padding:.7rem 1rem;min-width:2rem;display:flex;align-items:center;justify-content:center">2</div>
    <div style="padding:.7rem 1rem"><p style="font-size:13px;color:#3A3228;font-family:sans-serif;margin:0"><strong>Check your M365 Admin Center</strong> — Agent Mode is default in Word, Excel, and PowerPoint. Your users are already using it.</p></div>
  </div>
  <div style="display:flex;align-items:stretch;border-bottom:1px solid #E8E3D8">
    <div style="background:#B8845A;color:#fff;font-size:13px;font-weight:700;font-family:sans-serif;padding:.7rem 1rem;min-width:2rem;display:flex;align-items:center;justify-content:center">3</div>
    <div style="padding:.7rem 1rem"><p style="font-size:13px;color:#3A3228;font-family:sans-serif;margin:0"><strong>Decide your Copilot Credits stance</strong> — Work IQ APIs are off by default. Activation is the moment you set policy.</p></div>
  </div>
  <div style="display:flex;align-items:stretch;border-bottom:1px solid #E8E3D8">
    <div style="background:#AE7B7B;color:#fff;font-size:13px;font-weight:700;font-family:sans-serif;padding:.7rem 1rem;min-width:2rem;display:flex;align-items:center;justify-content:center">4</div>
    <div style="padding:.7rem 1rem"><p style="font-size:13px;color:#3A3228;font-family:sans-serif;margin:0"><strong>Write a one-page agent publishing policy</strong> — colleagues will start dropping agents into Teams this week. Have an answer ready.</p></div>
  </div>
  <div style="display:flex;align-items:stretch">
    <div style="background:#8B7BAE;color:#fff;font-size:13px;font-weight:700;font-family:sans-serif;padding:.7rem 1rem;min-width:2rem;display:flex;align-items:center;justify-content:center">5</div>
    <div style="padding:.7rem 1rem"><p style="font-size:13px;color:#3A3228;font-family:sans-serif;margin:0"><strong>Read the Build Live blog</strong> for technical depth — <a href="https://news.microsoft.com/build-2026-live-blog/microsoft-build-2026-live?wt.mc_id=MVP_366830/" style="color:#8B7355">news.microsoft.com/build-2026-live-blog</a></p></div>
  </div>
</div>

