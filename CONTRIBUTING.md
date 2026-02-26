# Contributing

## Structure 
Top-level files in this repository focus on key roles related to the repository and documentation. These include the .gitignore, LICENSE, and main [README.md](README.md) that links to other pieces of documentation. 

## Website layout
### Includes and Layouts
This website is built on Liquid, a way to enhance and customize HTML templates with more logic that is processed into static HTML at build time. 

The folders `_includes` and `_layouts` contain the important files needed for this websites different layouts. In general, `_layouts` contains template pages such as a blog page, fellow page, etc. while `_includes` contains "drop-in" pieces like headers and footers. 

We can use liquid to insert the contents of a file like `header.liquid` with the following code block below: 

`{% include header.liquid %}` 

(This is why the drop in pieces of templates are inside the `_includes` folder while full pages are part of `_layouts`)

### Outcomes 
The `_outcomes` folder contains CIP Fellow outcomes and projects, with each outcome saved individually.

Use `---` to begin the markdown file. Add metadata that is used for tracking and internal organization here, and then close it with `---` again. For example: 

```md
---
layout: outcome-project
title: "Accessible AI and HPC Education for All" 
fellow: "Nabeel Alzahrani" 
summary: High-performance computing (HPC) and artificial intelligence (AI) are increasingly critical in research and industry, yet opportunities to learn these skills remain limited for many students and...
link: "https://dl.acm.org/doi/10.1145/3708035.3736048"
format: "Paper" 
date: 2025-07-18
tags: 
    - HPC
    - AI-ML
    - education
---
```

Here, we have added a layout to use, a title for the page, a fellow we are linking this outcome too (automatically tracked and added at build time), a summary of the page, supporting links, a format of hte outcome, the date of the outcome, and some tags. The text of the outcome itself is added underneath, outside the markdown front matter. 

### Pages
The Pages folder contains the main website pages. Front matter is simpler, with just the following fields: 

```md
---
layout: about
title: Program Overview
permalink: /
subtitle: 
news: false
selected_papers: false
social: false
---
```
You can insert the content of the website here and the template will cover the rest. 

For custom layouts, I recommend just updating the related liquid file for simplicity. See [TECH_DEBT.md](TECH_DEBT.md) and the index page for more info. 

### Plugins
I have never touched this folder, and it works, so I don't touch it. 

### Posts 
This folder holds posts for the news and events section of the site. Sample front matter is attached below. Beyond that, just add the markdown text for the news or event and it will be formatted at build time. 

```md
---
layout: post
title: NSF Award Announced for the CIP-Fellows Project 
date: 2022-08-30
description: "NSF Awards CyberTraining: CIP: Training and Developing a Research Computing and Data CI Professionals (RCD-CIP) Community to SDSC and collaborators"
tags: 
  - CIP-Fellows 
  - NSF 
  - SCIPE/CIP
  - CyberTraining
  - CyberInfrastructure
categories: 
typograms: true
---
```

### Projects 
This is confusingly named. Although the folder is named projects, it actually holds the individual pages for members of the team. Within this folder, top level markdown files hold the CIP Fellows' individual files, while subfolders exist for students and mentors. 

Sample front matter is as follows: 

```md
---
layout: fellow
title: Aram Valifar
institute: SDSU
description: 2025, SDSU
img: assets/img/AramValifar.jpg
importance: 2
category: "🎓 Cohort 2025"
fellow-type: "Faculty Fellow"
related_publications: false
outcomes: 
    - "teaching tech"
---
```

Given the layout of the team section of the website, it is important to call out some important parts of the front matter here: 

The "title" is the name of the Fellow, student, or team member. The description, while appearing repetitive, is what shows up on the card pages in the front facing website, so it is different from institute. img provides the relative link to the person's image, and importance is alphabetical based on their institution. CSUSB is 1, SDSU is 2, and UCSD is 3. Category must be exact and within quotations due to the emoji but it covers which year/portion of the front facing list the card appears in. Related publications can be left false for everyone right now. 

Finally, and most importantly, we must manually link back every outcome associated with the fellow, as seen in the example, so that it appears on their personal page as well. We only need to link it, the actual outcome file only appears in one place but will be visible from two places in the website. 

# Sasss, scripts, site, and all other folders 
Documentation under construction. 