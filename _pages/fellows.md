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

<!-- pages/fellows.md -->

<div class="projects">
  {% if site.enable_project_categories and page.display_categories %}
    {% for category in page.display_categories %}
      <a id="{{ category }}" href=".#{{ category }}">
        <h2 class="category">{{ category }}</h2>
      </a>
      {% assign fellows = site.fellows
      | where: "category", category
      | sort: "importance" 
    %}

      {% if page.horizontal %}
        <div class="container">
          <div class="row row-cols-1 row-cols-md-2">
            {% for fellow in fellows %}
              {% include projects_horizontal.liquid project=fellow %}
            {% endfor %}
          </div>
        </div>
      {% else %}
        <div class="row row-cols-1 row-cols-md-4">
          {% for fellow in fellows %}
            {% include projects.liquid project=fellow %}
          {% endfor %}
        </div>
      {% endif %}
    {% endfor %}
  {% else %}
    {% assign fellows = site.fellows
      | where: "category", category
      | sort: "importance" 
    %}

    {% if page.horizontal %}
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2">
          {% for fellow in fellows %}
            {% include projects_horizontal.liquid project=fellow %}
          {% endfor %}
        </div>
      </div>
    {% else %}
      <div class="row row-cols-1 row-cols-md-4">
        {% for fellow in fellows %}
          {% include projects.liquid project=fellow %}
        {% endfor %}
      </div>
    {% endif %}
  {% endif %}
</div>
