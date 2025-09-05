---
layout: page
permalink: /team/
title: Team
description: About the CIP Fellows Team, including PIs and Co-PIs.
nav: false
nav_order: 2
display_categories: ["Current Team Members", "Interns", "Past Team Members"]
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

{% comment %}
profiles:
  # If you want to include more than one profile, just replicate the following block
  # and create one content file for each profile inside _pages/
  - align: right
    image: MaryThomas.jpeg
    content: team/mary_thomas.md
    image_circular: false  # crops the image to make it circular
    more_info: 
  - align: right
    image: MartyKandes.jpeg
    content: team/marty_kandes.md
    image_circular: false  # crops the image to make it circular
    more_info: 
  - align: right
    image: AndyGoetz.jpg
    content: team/andreas_goetz.md
    image_circular: false  # crops the image to make it circular
    more_info: 
  - align: right
    image: PaulRodriguez.jpg
    content: team/paul_rodriquez.md
    image_circular: false  # crops the image to make it circular
    more_info: 
  - align: right
    image: MichaelFarley.jpg
    content: team/michael_farley.md
    image_circular: false  # crops the image to make it circular
    more_info: 
  - align: right
    image: CydBurrowsSchilling.jpg
    content: team/cyd_burrows-schilling.md
    image_circular: false  # crops the image to make it circular
    more_info: 
    more_info: 
  - align: right
    image: GerardAu.jpg
    content: team/gerard_au.md
    image_circular: false  # crops the image to make it circular
    more_info: 
  - align: right
    image: SusanRathbun.jpg
    content: team/susan_rathbun.md
    image_circular: false  # crops the image to make it circular
    more_info: 
  
student_profiles: 
  - align: right 
    image: AarushMehrotra.jpeg
    content: team/student/aarush_mehrotra.md
    image_circular: false 
    more_info: 

past_profiles: 
  - align: right
    image: RobertSinkovits.jpeg
    content: team/robert_sinkovits.md
    image_circular: false  # crops the image to make it circular
    more_info: 
  - align: right
    image: RickWagner.jpg
    content: team/rick_wagner.md
    image_circular: false 
    more info: 
---
{% endcomment %}