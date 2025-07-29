---
layout: page
title: CIP Fellows
permalink: /cip-fellows/
description: About the current CIP Fellows and alumni, along with links to their individual pages
nav: true
nav_order: 3
display_categories: ["🎓 Cohort 2025", "🎓 Cohort 2024", "🎓 Cohort 2023"]
horizontal: false
---

{% comment %} pages/fellows.md {% endcomment %}

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  {% comment %}   Display categorized projects {% endcomment %}  
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  {% comment %}   Generate cards for each project {% endcomment %}  
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-4">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

{% comment %}   Display projects without categories {% endcomment %}  

{% assign sorted_projects = site.projects | sort: "importance" %}

  {% comment %}   Generate cards for each project {% endcomment %}  

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-4">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
