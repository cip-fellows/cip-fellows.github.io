---
layout: page
title: CIP Fellows
permalink: /cip-fellows/
description: About the current CIP Fellows and alumni, along with links to their individual pages
nav: false
nav_order: 3
display_categories: ["🎓 Cohort 2026",  "🎓 Cohort 2025", "🎓 Cohort 2024", "🎓 Cohort 2023"]
horizontal: false
---

{% comment %} pages/fellows.md {% endcomment %}

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <div class="cohort-filter" role="group" aria-label="Filter fellows by cohort year">
    <button type="button" class="cohort-filter-button active" data-cohort="all">All years</button>
    <button type="button" class="cohort-filter-button" data-cohort="2026">2026</button>
    <button type="button" class="cohort-filter-button" data-cohort="2025">2025</button>
    <button type="button" class="cohort-filter-button" data-cohort="2024">2024</button>
    <button type="button" class="cohort-filter-button" data-cohort="2023">2023</button>
  </div>
  {% comment %}   Display categorized projects {% endcomment %}  
  {% for category in page.display_categories %}
  {% assign cohort_year = category | split: ' ' | last %}
  <section class="cohort-section" data-cohort-year="{{ cohort_year }}">
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
  </section>
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

<script>
  (function () {
    var buttons = document.querySelectorAll('.cohort-filter-button');
    var sections = document.querySelectorAll('.cohort-section');

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var selectedYear = button.getAttribute('data-cohort');

        buttons.forEach(function (filterButton) {
          filterButton.classList.toggle('active', filterButton === button);
        });

        sections.forEach(function (section) {
          var showSection = selectedYear === 'all' ||
            section.getAttribute('data-cohort-year') === selectedYear;
          section.style.display = showSection ? '' : 'none';
        });
      });
    });
  }());
</script>
