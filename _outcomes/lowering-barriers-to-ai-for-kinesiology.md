---
layout: outcome-project
title: "Lowering Barriers to AI and Machine Learning for Kinesiology Researchers" 
fellow: "Christopher Hill" 
summary: This project will develop concise, discipline-specific training materials that enable kinesiology researchers—who rarely use high-performance computing—to adopt NAIRR-supported AI and machine-learning workflows on SDSC Expanse.
date: 2026-02-01
tags: 
    - AI-ML
---

# Project Summary

This project will develop concise, discipline-specific training materials that enable kinesiology researchers—who rarely use high-performance computing—to adopt NAIRR-supported AI and machine-learning workflows on SDSC Expanse. Contemporary kinesiology research increasingly involves large, complex datasets, including biomechanical time-series, wearable sensor streams, video-based movement analysis, physiological monitoring, and multimodal health data. These data routinely exceed the practical limits of local machines and consumer-grade GPUs, constraining both analytic scale and methodological innovation.

The proposed Resource will present a clear, end-to-end AI workflow tailored to kinesiology applications, beginning with interactive Jupyter-based model development and progressing to scalable, GPU-accelerated training using Singularity containers and Slurm on Expanse. Rather than introducing HPC concepts in isolation, the materials will explicitly connect Expanse capabilities to core kinesiology research tasks, such as deep learning for movement classification, injury-risk modeling, athlete performance prediction, and large-scale health behavior modeling.

The primary audience is kinesiology faculty, graduate students, and applied researchers who have experience with statistical analysis or machine learning but little or no exposure to HPC systems. The Resource will use discipline-accessible language, emphasize practical research decisions (e.g., when GPUs are necessary, how to size memory for time-series or video data, why node-local scratch improves throughput), and avoid unnecessary system-administration detail. Development will leverage existing Expanse infrastructure, validated workflows, and public documentation, with GitHub serving as the central platform for executable examples and instructional content.

# NAIRR Impact:

This project aligns strongly with NAIRR’s mission by bringing national AI research infrastructure to a research community that has historically been underrepresented in HPC usage. By lowering technical and conceptual barriers, the Resource enables kinesiology researchers to engage meaningfully with NAIRR resources rather than remaining limited by local computing constraints. The skills taught, including containerized AI environments, GPU-accelerated training, and scheduler-based scaling, are transferable across NAIRR systems and applicable to other data-intensive research domains.

The targeted community is beginner to intermediate, defined as researchers with foundational Python and machine-learning knowledge but minimal experience with HPC or NAIRR-supported platforms. Required expertise includes basic programming, familiarity with ML concepts, and introductory command-line use. Impact will be assessed through public availability and engagement with the GitHub repository, references from the SDSC Expanse User Guide, and adoption of the workflows in kinesiology research and training contexts.

# Deliverables:
- Written Guides (GitHub)
    - Why Expanse for Kinesiology? AI use-cases tied to biomechanics, wearable data, and performance analysis.
    - Getting Started on Expanse: ACCESS allocations, login, and Jupyter via Galyleo.
    - AI Workflows for Kinesiology Data: Containers, GPUs, Slurm, and interactive vs batch execution.
- Runnable Tutorials & Code (GitHub)
    - Launching GPU-backed Jupyter sessions on Expanse.
    - Verifying GPU and container configurations.
    - Single-GPU PyTorch training example using kinesiology-style datasets.
- Sustainability & Dissemination
    - Open-source, versioned GitHub repository.
    - Designed for incremental updates as Expanse evolves.
    - Community feedback encouraged via issues and pull requests.
