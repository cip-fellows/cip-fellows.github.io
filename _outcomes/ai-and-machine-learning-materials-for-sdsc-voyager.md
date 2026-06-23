---
layout: outcome-project
title: "Developing AI & Machine Learning Training Materials for NAIRR Researchers on SDSC Voyager" 
fellow: "Choonhan Yoon" 
summary: This project will develop practical, beginner-friendly training materials to guide NAIRR researchers in using SDSC Voyager, a Kubernetes-based system with Habana Gaudi accelerators.
link: "https://github.com/cdesyoun/voyager-nairr-tutorials"
format: "Github" 
tags: 
    - HPC
    - AI-ML
---
# Project Description

This project will develop practical, beginner-friendly training materials to guide NAIRR researchers in using SDSC Voyager, a Kubernetes-based system with Habana Gaudi accelerators. Unlike traditional HPC resources that rely on GPUs and batch schedulers, Voyager demands new strategies for resource requests, YAML job configuration, and framework tuning—topics not yet covered in a single, comprehensive resource. The materials will build on SDSC Voyager documentation, Intel Gaudi quick-start guides, and a curated GitHub repository of validated examples, including sanity checks, MNIST training, and distributed MPIJob workflows. 

The primary audience is researchers new to Voyager or Kubernetes/Habana, with secondary support for HPC users transitioning from Slurm to Kubernetes. Completion of the project will require access to Voyager’s Kubernetes environment and collaboration with SDSC staff to ensure accuracy and alignment with NAIRR policies, with GitHub serving as the central platform for both documentation and code.

# NAIRR Impact

This project reduces barriers to adopting SDSC Voyager by offering clear, step-by-step training materials that simplify onboarding for new researchers. It contributes to workforce development within NAIRR by teaching transferable skills in Kubernetes, containerization, and the Gaudi software stack that are applicable across diverse computing resources and cloud platforms. The provided patterns and YAML templates are designed for reuse and adaptation, making them relevant to other Kubernetes-based AI environments. 

The primary audience is beginner to intermediate users, with prerequisites in basic Python, machine learning, and command-line experience. Project impact will be assessed through the availability and uptake of tutorials published on the SDSC Voyager User Guide page [(https://www.sdsc.edu/systems/voyager/user_guide.html)](https://www.sdsc.edu/systems/voyager/user_guide.html).

# Deliverables

### 1. Written Guides (GitHub Markdown)

- **Voyager overview:** Architecture overview, how it differs from GPU+Slurm systems.
- **Access & Environment:** kubeconfig, namespaces, images, quotas, storage (Ceph), and scratch usage.
- **Kubernetes Basics for AI:** Pods, Jobs, MPIJob (Kubeflow MPI Operator), requests/limits (Gaudi devices, hugepages, memory), monitoring and logs.
- **Habana Runtime & Frameworks:** Using PyTorch on Gaudi/Goya, and key env vars.

### 2. Runnable Tutorials & Code (GitHub)
- How to port PyTorch code from GPU to HPU using the MNIST code.
- **Sanity Check:** hl-smi Pod/Job to verify Gaudi visibility and hugepages.
- **Single‑Pod Training:** MNIST on 1 HPU → scale to N HPUs on one node.
- **Distributed Training (Multi‑Server):** MPIJob for MNIST across 16 HPUs (2× nodes × 8 HPUs) with launcher/worker patterns.
- The examples reference the links below:
    - [https://github.com/javierhndev/Voyager-Reference-Models/tree/v1.21](https://github.com/javierhndev/Voyager-Reference-Models/tree/v1.21)
    - [https://docs.habana.ai/en/latest/Quick_Start_Guides/Kubernetes_Quick_Start.html?highlight=kubernates](https://docs.habana.ai/en/latest/Quick_Start_Guides/Kubernetes_Quick_Start.html?highlight=kubernates)
    - [https://github.com/HabanaAI/Model-References/tree/master/PyTorch/examples](https://github.com/HabanaAI/Model-References/tree/master/PyTorch/examples)
    - [https://github.com/HabanaAI/Gaudi-tutorials](https://github.com/HabanaAI/Gaudi-tutorials)

### 3. Material Location
GitHub: [https://github.com/cdesyoun/voyager-nairr-tutorials](https://github.com/cdesyoun/voyager-nairr-tutorials) (tutorials, YAML, scripts, and code examples).

### 4. Sustainability & Dissemination
- Open‑source repository; versioned examples tied to SynapseAI/Framework tags; issues/PRs welcome.
- Dissemination via the SDSC Voyager User Guide page [(https://www.sdsc.edu/systems/voyager/user_guide.html)](https://www.sdsc.edu/systems/voyager/user_guide.html).
