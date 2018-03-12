---
layout: legal
title: Media Coverage
---

<div class="grid news">
    {% assign news-items = site.data.media | sort: 'date' | reverse %}{% for mention in news-items %}<div class="grid-cell mention">
        <a href="{{ mention.link }}"><span class="date">{{ mention.date }}</span> :: <span class="source">{{ mention.source }}</span> - <span class="title">{{ mention.title }}</span></a>
    </div>
    {% endfor %}
</div>
