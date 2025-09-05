---
layout: page
title: Core Competencies
permalink: /core-competencies/
description: 
nav: true
nav_order: 6
display_categories:
horizontal: false
---

<style>
  .homepage-container {
    display: flex;
    min-height: 80vh;
    gap: 2rem;
  }

  .left-pane {
    flex: 0 0 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 2rem;
  }

  .left-pane .toc-header {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
  }

  .right-pane {
    flex: 1;
    padding-right: 2rem;
  }

  .right-pane > section {
    display: none; /* only one will be shown at a time */
  }

  .right-pane > section.active {
    display: block;
  }

  .toc-header.active {
    text-decoration: underline;
  }

  html[data-theme="dark"] .homepage-container .toc-header,
  html[data-theme="dark"] .homepage-container .toc-header-blank a {
    color: #4177A1 !important;
  }
</style>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll(".toc-header");
    const sections = document.querySelectorAll(".right-pane > section");
    const initSection = document.querySelector(".right-pane > section.active")

    if (initSection) {
      const initHeader = document.querySelector(`.toc-header[data-target="${initSection.id}"]`); 
      if (initHeader) {
        initHeader.classList.add("active"); 
      }
    }

    headers.forEach(header => {
      header.addEventListener("click", () => {
        // Remove 'active' from all sections
        sections.forEach(section => section.classList.remove("active"));

        headers.forEach(h => h.classList.remove("active")); 

        // Get target section ID from data attribute
        const targetId = header.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);

        // Activate the correct section
        if (targetSection) {
          targetSection.classList.add("active");
          header.classList.add("active"); 
        }
      });
    });
  });
</script>

<div class="homepage-container">
<div class="left-pane">
    <!-- background logo behind the headers -->
    <img
      src="{{ site.baseurl }}/assets/img/ML_Icon_Opacity5.png"
      alt="An image of a brain that looks like a computer chip"
      class="bg-image-behind"
    >
    <div class="toc-header" data-target="technical-skills"> Technical CI Skills (HPC, Cloud Computing, Data Management) </div>
    <div class="toc-header" data-target="pedagogical-facilitation"> Pedagogical and Facilitation Skills </div>
    <div class="toc-header" data-target="professional-development"> Professional Development and Career Transition Support </div>
    <div class="toc-header" data-target="research-methods"> Interdisciplinary Research Methods </div>
    <div class="toc-header" data-target="community"> Community Building and Networking </div>
  </div>

  <!-- Right Pane Content -->
  <div class="right-pane">
    <h2>CIP Fellow Training - Some Core Competencies</h2>
    <section id="technical-skills" class="active">
        <h3>Technical CI Skills (HPC, Cloud Computing, Data Management)</h3>
        <h4>High-Performance Computing Keywords</h4>
        <ul>
        <li><strong>Parallel Computing</strong>: MPI, OpenMP, CUDA, OpenACC, multithreading, distributed computing</li>
        <li><strong>Job Schedulers</strong>: SLURM, PBS, SGE, LSF, Torque, resource allocation</li>
        <li><strong>Performance Optimization</strong>: profiling, benchmarking, scalability, load balancing</li>
        <li><strong>System Architecture</strong>: clusters, nodes, cores, memory hierarchy, interconnects</li>
        <li><strong>Programming Models</strong>: shared memory, distributed memory, hybrid programming</li>
        <li><strong>Workflow Management</strong>: pipelines, job dependencies, automation, orchestration</li>
        </ul>
        <h4>Cloud Computing Keywords</h4>
        <ul>
        <li><strong>Platform Services</strong>: IaaS, PaaS, SaaS, serverless, microservices</li>
        <li><strong>Container Technologies</strong>: Docker, Kubernetes, Singularity, Apptainer, orchestration</li>
        <li><strong>Infrastructure Management</strong>: provisioning, auto-scaling, load balancers, networking</li>
        <li><strong>Cost Optimization</strong>: resource monitoring, rightsizing, reserved instances, spot instances</li>
        <li><strong>Multi-Cloud Strategy</strong>: hybrid cloud, cloud migration, vendor lock-in, interoperability</li>
        <li><strong>DevOps Practices</strong>: CI/CD, infrastructure as code, configuration management</li>
        </ul>
        <h4>Data Management Keywords</h4>
        <ul>
        <li><strong>Storage Systems</strong>: parallel filesystems, object storage, block storage, archival systems</li>
        <li><strong>Data Transfer</strong>: high-throughput protocols, data staging, bandwidth optimization</li>
        <li><strong>Database Technologies</strong>: relational, NoSQL, graph databases, time-series, distributed</li>
        <li><strong>Data Lifecycle</strong>: ingestion, processing, analysis, archiving, retention policies</li>
        <li><strong>Metadata Standards</strong>: Dublin Core, DataCite, schema.org, provenance tracking</li>
        <li><strong>FAIR Principles</strong>: findable, accessible, interoperable, reusable data practices</li>
        </ul>
    </section>
    <section id="pedagogical-facilitation">
        <h3>Pedagogical and Facilitation Skills</h3>
        <h4>Adult Learning Theory Keywords</h4>
        <ul>
        <li><strong>Learning Models</strong>: experiential learning, constructivism, andragogy, transformative learning</li>
        <li><strong>Cognitive Load</strong>: scaffolding, chunking, prior knowledge activation, mental models</li>
        <li><strong>Learning Styles</strong>: visual, auditory, kinesthetic, multimodal approaches</li>
        <li><strong>Motivation Theory</strong>: self-determination, intrinsic motivation, goal orientation</li>
        <li><strong>Assessment Methods</strong>: formative, summative, authentic assessment, rubrics</li>
        <li><strong>Feedback Mechanisms</strong>: peer review, self-assessment, 360-degree feedback</li>
        </ul>
        <h4>Instructional Design Keywords</h4>
        <ul>
        <li><strong>Design Models</strong>: ADDIE, SAM, backward design, design thinking</li>
        <li><strong>Learning Objectives</strong>: Bloom's taxonomy, SMART goals, competency-based education</li>
        <li><strong>Content Development</strong>: multimedia learning, accessibility, universal design</li>
        <li><strong>Technology Integration</strong>: LMS, authoring tools, interactive media, gamification</li>
        <li><strong>Evaluation Methods</strong>: Kirkpatrick model, ROI analysis, learning analytics</li>
        <li><strong>Quality Assurance</strong>: peer review, pilot testing, continuous improvement</li>
        </ul>
        <h4>Facilitation Skills Keywords</h4>
        <ul>
        <li><strong>Group Dynamics</strong>: team formation, conflict resolution, consensus building</li>
        <li><strong>Communication</strong>: active listening, questioning techniques, nonverbal communication</li>
        <li><strong>Engagement Strategies</strong>: interactive methods, breakout sessions, collaborative learning</li>
        <li><strong>Virtual Facilitation</strong>: online platforms, digital tools, remote engagement</li>
        <li><strong>Cultural Competence</strong>: inclusive practices, bias awareness, diverse perspectives</li>
        <li><strong>Problem-Solving</strong>: critical thinking, creativity, decision-making processes</li>
        </ul>
    </section>
    <section id="professional-development">
        <h3>Professional Development and Career Transition Support</h3>
        <h4>Career Development Keywords</h4>
        <ul>
        <li><strong>Career Planning</strong>: career mapping, skills assessment, goal setting, career transitions</li>
        <li><strong>Professional Branding</strong>: personal brand, online presence, portfolio development</li>
        <li><strong>Networking</strong>: relationship building, professional associations, mentorship programs</li>
        <li><strong>Job Search</strong>: resume optimization, interview skills, salary negotiation, market analysis</li>
        <li><strong>Leadership Development</strong>: emotional intelligence, team management, strategic thinking</li>
        <li><strong>Entrepreneurship</strong>: innovation, business planning, risk assessment, startup culture</li>
        </ul>
        <h4>Project Management Keywords</h4>
        <ul>
        <li><strong>Methodologies</strong>: Agile, Scrum, Waterfall, Kanban, Lean, Six Sigma</li>
        <li><strong>Planning Tools</strong>: work breakdown structure, Gantt charts, resource allocation</li>
        <li><strong>Risk Management</strong>: risk assessment, mitigation strategies, contingency planning</li>
        <li><strong>Communication</strong>: stakeholder management, status reporting, change management</li>
        <li><strong>Quality Assurance</strong>: process improvement, performance metrics, deliverable standards</li>
        <li><strong>Software Tools</strong>: project management platforms, collaboration tools, tracking systems</li>
        </ul>
        <h4>Grant and Funding Keywords</h4>
        <ul>
        <li><strong>Proposal Writing</strong>: narrative development, budget preparation, compliance requirements</li>
        <li><strong>Funding Sources</strong>: federal agencies, foundations, industry partnerships, crowdfunding</li>
        <li><strong>Evaluation Criteria</strong>: intellectual merit, broader impacts, feasibility, innovation</li>
        <li><strong>Collaboration</strong>: multi-institutional partnerships, international cooperation, interdisciplinary teams</li>
        <li><strong>Compliance</strong>: regulatory requirements, reporting, financial management, auditing</li>
        <li><strong>Sustainability</strong>: long-term planning, diversified funding, scalability, impact measurement</li>
        </ul>
    </section>
    <section id="research-methods">
        <h3>Interdisciplinary Research Methods</h3>
        <h4>Research Methodology Keywords</h4>
        <ul>
        <li><strong>Study Design</strong>: experimental, observational, mixed methods, longitudinal, cross-sectional</li>
        <li><strong>Data Collection</strong>: surveys, interviews, ethnography, sensors, computational methods</li>
        <li><strong>Statistical Analysis</strong>: hypothesis testing, regression, machine learning, Bayesian methods</li>
        <li><strong>Reproducibility</strong>: open science, version control, documentation, replication studies</li>
        <li><strong>Ethics</strong>: IRB approval, informed consent, data privacy, responsible conduct</li>
        <li><strong>Literature Review</strong>: systematic review, meta-analysis, bibliometrics, knowledge synthesis</li>
        </ul>
        <h4>Convergence Research Keywords</h4>
        <ul>
        <li><strong>Systems Thinking</strong>: complexity science, network analysis, emergent properties, feedback loops</li>
        <li><strong>Transdisciplinary Methods</strong>: co-creation, participatory research, stakeholder engagement</li>
        <li><strong>Innovation Frameworks</strong>: design thinking, human-centered design, rapid prototyping</li>
        <li><strong>Collaboration Models</strong>: virtual teams, distributed research, cross-cultural communication</li>
        <li><strong>Problem-Solving</strong>: wicked problems, root cause analysis, scenario planning, foresight</li>
        <li><strong>Impact Assessment</strong>: theory of change, logic models, outcome measurement, evaluation</li>
        </ul>
        <h4>Data Science Keywords</h4>
        <ul>
        <li><strong>Machine Learning</strong>: supervised, unsupervised, reinforcement learning, deep learning, neural networks</li>
        <li><strong>Big Data</strong>: volume, velocity, variety, distributed computing, real-time processing</li>
        <li><strong>Analytics</strong>: descriptive, predictive, prescriptive, business intelligence, data mining</li>
        <li><strong>Visualization</strong>: dashboards, interactive graphics, storytelling with data, visual analytics</li>
        <li><strong>Modeling</strong>: mathematical models, simulation, optimization, predictive analytics</li>
        <li><strong>Tools and Platforms</strong>: programming languages, frameworks, cloud platforms, APIs</li>
        </ul>
    </section>
    <section id="community">
        <h3>Community Building and Networking</h3>
        <h4>Community Development Keywords</h4>
        <ul>
        <li><strong>Engagement Strategies</strong>: stakeholder mapping, outreach campaigns, grassroots organizing</li>
        <li><strong>Event Management</strong>: conference planning, workshops, networking events, virtual gatherings</li>
        <li><strong>Partnership Building</strong>: collaboration agreements, memorandums of understanding, consortiums</li>
        <li><strong>Volunteer Management</strong>: recruitment, training, retention, recognition programs</li>
        <li><strong>Resource Development</strong>: fundraising, sponsorship, grant writing, membership drives</li>
        <li><strong>Governance</strong>: board development, policy creation, strategic planning, organizational structure</li>
        </ul>
        <h4>Digital Community Keywords</h4>
        <ul>
        <li><strong>Social Media Strategy</strong>: content creation, engagement metrics, platform optimization</li>
        <li><strong>Online Platforms</strong>: forums, social networks, collaboration tools, community management systems</li>
        <li><strong>Digital Marketing</strong>: SEO, content marketing, email campaigns, analytics</li>
        <li><strong>Virtual Events</strong>: webinars, online conferences, hybrid events, streaming technology</li>
        <li><strong>Content Curation</strong>: knowledge management, resource sharing, best practice documentation</li>
        <li><strong>User Experience</strong>: interface design, accessibility, mobile optimization, user feedback</li>
        </ul>
        <h4>Professional Networks Keywords</h4>
        <ul>
        <li><strong>Association Management</strong>: membership development, program planning, professional standards</li>
        <li><strong>Mentorship Programs</strong>: matching systems, training mentors, program evaluation, succession planning</li>
        <li><strong>Knowledge Sharing</strong>: communities of practice, peer learning, expert networks, thought leadership</li>
        <li><strong>Advocacy</strong>: policy development, lobbying, public relations, coalition building</li>
        <li><strong>Diversity and Inclusion</strong>: equity initiatives, bias training, inclusive leadership, cultural competence</li>
        <li><strong>International Collaboration</strong>: global partnerships, cross-cultural communication, virtual exchanges</li>
        </ul>
        <h4>Measurement and Evaluation Keywords</h4>
        <ul>
        <li><strong>Community Metrics</strong>: engagement rates, growth indicators, participation levels, retention rates</li>
        <li><strong>Impact Assessment</strong>: outcome measurement, theory of change, social return on investment</li>
        <li><strong>Survey Methods</strong>: member satisfaction, needs assessment, program evaluation, feedback systems</li>
        <li><strong>Data Analysis</strong>: trend analysis, predictive modeling, segmentation, behavioral analytics</li>
        <li><strong>Reporting</strong>: dashboards, annual reports, impact stories, stakeholder communication</li>
        <li><strong>Continuous Improvement</strong>: iterative design, feedback loops, adaptive management, innovation cycles</li>
        </ul>
    </section>
</div>