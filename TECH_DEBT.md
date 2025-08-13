# Tech Debt on CIP Fellows Pages 
This file documents pages that differ from Al-Folio conventions, or otherwise differ from convention. You can go back to the main README [here](README.md).

# Index/Home page 
The home page has custom javascript functionality built in. As a result, this page exists largely on its own- there is no separation of concerns here, and instead, all content for the home page exists within [_layouts/about.liquid](_layouts/about.liquid). Although there is an about-index.md, only the front matter of that page is used. 

`about.liquid` contains page-level CSS and JS to handle the page's custom functionality and styling/design. The header and footer continue to be auto-inserted by Jekyll. 

Any edits to content, functionality, etc. should be made within `about.liquid`. 

Long-term, it would be nice to explore a more standard solution, such as a more robust liquid page that ties back to about-index.md for the content.

# Tagging system for outcomes 
The tagging system is set up using Jekyll archives, however, it coexists and is separate from the inbuilt tagging system for the blogs. As a result, when adding tags for posts in the `_outcomes` folder, please manually create a file with the name of the tag you are adding at [/outcomes/tag](outcomes/tag). It should follow the following format: 

```md 
---
layout: outcome-tag
title: AI-ML
permalink: /outcomes/tag/AI-ML/
---
```

In the example above, replace the 2 instances of "AI-ML" with the name of the tag you are adding. For example, to create a tag named tech-debt, create a file named tech-debt.md under [/outcomes/tag](outcomes/tag) that looks like this: 

```md 
---
layout: outcome-tag 
title: tech-debt
permalink: /outcomes/tag/tech-debt/ 
---
```

# Tracking and Analytics 
At the moment there is no tracking or analytics implemented, but that might be useful for the future. 

# CI/CD 
At the moment some initial steps have been made for a CI/CD pipeline. However, more work is left to be done. 
- Main branch protection exists 
- Some level of build protection exists but is not fully implemented yet 
- No deployment/build checks as part of merge process 
- No issue templates
- Branching could be better defined 