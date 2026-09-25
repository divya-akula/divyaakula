---
layout: editorial
title: Ideas & writing
permalink: /posts/
main_nav: true
description: Articles, practical guides, and field notes on enterprise AI, Copilot Studio, Power Platform and responsible innovation.
---
<section class="wrap section library">
  <span class="eyebrow">The notebook</span><h1>Ideas built on<br><em>experience.</em></h1><p class="intro">What I’m building, learning, and thinking about.</p>
  <div class="library-controls" hidden><label for="article-search">Find an article</label><input id="article-search" type="search" placeholder="Search titles, topics, or dates…" autocomplete="off"><div class="topic-filters" role="group" aria-label="Filter articles by topic"><button type="button" data-topic="" aria-pressed="true">All articles</button>{% assign categories = site.categories | sort %}{% for category in categories %}<button type="button" data-topic="{{ category[0] | escape }}" aria-pressed="false">{{ category[0] | replace: 'ResponsibleAI', 'Responsible AI' | replace: 'CopilotStudio', 'Copilot Studio' | replace: 'PowerPlatform', 'Power Platform' | replace: 'SharePointPremium', 'SharePoint Premium' | replace: 'MicrosoftGraph', 'Microsoft Graph' | replace: 'PnPPowerShell', 'PnP PowerShell' | replace: 'MSEvents', 'Microsoft events' | replace: 'cloud-monitoring', 'Cloud monitoring' }}</button>{% endfor %}</div><p id="result-count" class="article-meta" role="status" aria-live="polite"></p></div>
  <div class="article-list">{% for post in site.posts %}{% include editorial/article-card.html post=post %}{% endfor %}</div><p id="no-results" hidden>No articles match this search. Try another phrase or choose All articles.</p>
  <div class="archive-years"><span>Browse by year</span>{% assign years = site.posts | group_by_exp: 'post', "post.date | date: '%Y'" %}{% for year in years %}<a href="{{ '/year/' | append: year.name | append: '/' | relative_url }}">{{ year.name }}</a>{% endfor %}</div>
</section>
