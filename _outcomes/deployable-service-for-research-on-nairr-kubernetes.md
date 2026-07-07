---
layout: outcome-project
title: "Easily Deployable Service Stack for Research and Education on NAIRR Kubernetes Clusters" 
fellow: "Brendan Dennis" 
summary: This project will develop a stack of commonly used services (JupyterHub, Coder, Globus, shared storage, authentication, authorization, LLMs, graphical desktops) that research labs or training classes can deploy with relatively little effort to Kubernetes clusters.
link: "https://github.com/UCSD-SPS-IT/k8s-research-service-stack"
format: "Github"
date: 2026-02-01
tags: 
    - github
    - kubernetes
---

# Project Description:

This project will develop a stack of commonly used services (JupyterHub, Coder, Globus, shared storage, authentication, authorization, LLMs, graphical desktops) that research labs or training classes can deploy with relatively little effort to Kubernetes clusters. The deployment of this service stack can be easily customized for the particular research group, and should require little to no Kubernetes knowledge in order to execute. Automatic configuration for common Kubernetes research clusters (NRP, SDSC Voyager) will be built in, in addition to support for general Kubernetes. CI/CD pipelines will be automatically generated to facilitate deployment, and will support both GitHub and GitLab as a backend.

The primary audience for this project will be scientific researchers or educators who are new to Kubernetes, and wish to run common lab services on Kubernetes clusters. An emphasis will be placed on running on top of NRP and SDSC Voyager, with an intent to add in customizations for other well-known Kubernetes clusters at a later stage. Completion of the project will require access to NRP, an allocation on SDSC Voyager, and access to some manner of general Kubernetes cluster for development.

# NAIRR Impact:

This project aims to greatly simplify the process of getting a research group up and running on top of a Kubernetes cluster, in order to minimize the time it takes to go from an awarded allocation to starting research. Many of the services in the stack have a partial or total focus on running AI-centric workflows. With support for running on Kubernetes in general, it will be fairly easy to adapt to function on any other Kubernetes based NAIRR resource or at any other institution that has their own Kubernetes environments.

The main target of the project will be beginners to Kubernetes; those without much Kubernetes knowledge, that wish to start doing their science or teaching classes using tools like Jupyter notebooks without having to spend additional time learning the underlying platform. Secondary targets are intermediate and advanced Kubernetes users that also wish to use these services, but would rather devote their development time to adapting their dedicated research software to running on Kubernetes. Metrics will consist of the number of times the git repository for this project has been cloned, or number of times releases have been downloaded.

# Deliverables:

The deliverable will be a git repository containing configuration file templates (YAML), Ansible playbooks, and accompanying user documentation. The workflow for end users will be:
1. The end user clones the git repository locally.
2. The end user copies the configuration template to then modify.
3. The end user modifies their configuration to fit their desired deployment:
   
    a. The group/purpose the deployment is for, such as the "Jane Doe Lab" or a "Jupyter Notebooks 101" class.
   
    b. The services desired to be used with the deployment, such as "Jupyter" and "1TB of Shared Storage."
   
    c. The Kubernetes cluster(s) to run the deployment on, such as "NRP" or "SDSC Voyager."
   
    d. The git backend to use for running the deployment, either GitHub or GitLab.
4. The end user executes a command specified in the documentation to launch Ansible.
5. Ansible generates the deployment git repository CI/CD environment, and pushes it to either GitHub or GitLab.
6. The CI/CD environments of GitHub or GitLab spawns the requested services on the specified Kubernetes cluster(s).

This deliverable will be hosted on GitHub:
[https://github.com/UCSD-SPS-IT/k8s-research-service-stack](https://github.com/UCSD-SPS-IT/k8s-research-service-stack)

The code will be initially sustained by myself, stemming from an ongoing need to use it in support of multiple research labs at UCSD who wish to run on Kubernetes resources. The project will also be advertised to others working in the UCSD research IT community, including those working on the NRP and SDSC Voyager teams, with the hope that others will begin to contribute support efforts to it. Additionally, the open-source nature of the repository with permissive licensing will hopefully bring further contributions from other groups outside of UCSD.
