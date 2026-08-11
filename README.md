# tcg
Sidiko's Pokemon TCG Collection

## Cheat Sheet
All files are in folders:
<code>
section-name/
  file-name.html
</code>

Front matter for all pages, switch default to post for journal entries
<code>
---
layout: default
title: Page Title
description: Short description of this page.
---
</code>

Page Html, General
<code>
<p class="section-label">
    Section Label
</p>

<h2>
    Page Title
</h2>

<p>
    Introductory description of the page.
</p>

<!-- Page content goes here -->
</code>

Card / Grid page:
<code>
---
layout: default
title: Page Title
description: Short description of this page.
---

<p class="section-label">
    Section Label
</p>

<h2>
    Page Title
</h2>

<p>
    Introductory description of the page.
</p>

<div class="project-grid">

    <article class="project-card">

        <h3>
            Card Title
        </h3>

        <p>
            Description of the collection, binder,
            or project.
        </p>

        <a href="{{ '/section-name/example/' | relative_url }}" class="paper-link">
            View details →
        </a>

    </article>

</div>
</code>

Journal posts specific
<code>
_posts/
└── 2026-08-09-building-the-archive.html
</code>
<code>
---
layout: default
title: "Building the Archive"
date: 2026-08-09
---

<p class="section-label">
    Field Journal
</p>

<h2>
    Building the Archive
</h2>

<p class="journal-date">
    August 9, 2026
</p>

<p>
    Journal entry content goes here.
</p>
</code>
Field journal index
<code>
  ---
layout: default
title: Field Journal
description: Collection updates, discoveries, projects, experiments, preservation work, binder reorganizations, and assorted cardboard rabbit holes.
---

<p class="section-label">
    Field Journal
</p>

<h2>
    Collection Notes
</h2>

<p>
    Collection updates, discoveries, projects, experiments,
    preservation work, binder reorganizations, and assorted
    cardboard rabbit holes.
</p>

<div class="journal-list">

{% for post in site.posts %}

<article class="journal-entry">

    <p class="journal-date">
        <time datetime="{{ post.date | date: '%Y-%m-%d' }}">
            {{ post.date | date: "%B %-d, %Y" }}
        </time>
    </p>

    <h3>
        <a href="{{ post.url | relative_url }}">
            {{ post.title }}
        </a>
    </h3>

    <div class="journal-content">
        {{ post.content }}
    </div>

</article>

{% else %}

<p>
    The Field Journal is waiting for its first entry.
</p>

{% endfor %}

</div>
</code>
Homepage journal preview
<code>{% for post in site.posts limit:3 %}

<time datetime="{{ post.date | date: '%Y-%m-%d' }}">
    {{ post.date | date: "%B %-d, %Y" }}
</time>

<h3>
    <a href="{{ post.url | relative_url }}">
        {{ post.title }}
    </a>
</h3>

<p>
    {{ post.excerpt }}
</p>

<a href="{{ post.url | relative_url }}" class="paper-link">
    Read the full entry →
</a>

{% endfor %}</code>
</code>
