---
layout: default
title: Home
description: "Welcome to Sidiko's TCG Archive."
---

<section class="scrapbook-page introduction">

    <div class="paperclip"></div>

    <div class="handwritten-note">
        <span>Currently under construction!</span>
        <br>
        There will probably be cards everywhere.
    </div>

</section>

<section id="updates" class="section update-log">

    <div class="section-heading">
        <p class="section-label">
            Site Updates
        </p>

        <h2>
            Update Log
        </h2>

        <p>
            News, changes, discoveries, and assorted archive progress.
        </p>
    </div>

    {% for post in site.posts limit:5 %}

    <article class="update-entry">

        <time datetime="{{ post.date | date: '%Y-%m-%d' }}">
            {{ post.date | date: "%B %-d, %Y" }}
        </time>

        <h3>
            <a href="{{ post.url | relative_url }}">
                {{ post.title }}
            </a>
        </h3>

        {% if post.description %}
        <p>
            {{ post.description }}
        </p>
        {% endif %}

        <a href="{{ post.url | relative_url }}" class="paper-link">
            Read the full update →
        </a>

    </article>

    {% endfor %}

    <p>
        <a href="{{ '/journal/' | relative_url }}" class="paper-link">
            Browse the complete update log →
        </a>
    </p>

</section>
