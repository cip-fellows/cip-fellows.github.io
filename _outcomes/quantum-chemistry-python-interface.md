---
layout: outcome-project
title: "Democratizing access to Quantum Chemistry via a Python interface for GPU-accelerated open-source package QUICK" 
fellow: "Vikrant Tripathy" 
summary: Molecular simulations are key in diverse fields such as designing novel materials for applications such as energy storage and catalysis, pharmaceutical drug-design in computational biochemistry, etc...
link: "https://github.com/merzlab/QUICK"
format: "Github" 
date: 2026-02-01
tags: 
    - HPC
    - AI-ML
---
# Proposed contribution
Molecular simulations are key in diverse fields such as designing novel materials for applications such
as energy storage and catalysis, pharmaceutical drug-design in computational biochemistry, etc.
Methods such as Hartree-Fock, density functional theory (DFT), coupled cluster (CC), molecular
dynamics (MD) and monte-carlo (MC) simulations are often required to achieve the desired goal. A
plethora of softwares such as Gaussian, QChem, PSi4, Amber, Gromacs, etc. are available to meet
the various needs. However, no individual software can act as the panacea for all the problems.
Each software has its own merit requiring communication between softwares essential in modern
workflows.

The molecular sciences software institute (MolSSI) was recently formed with a goal to promote
user-friendly, open-source software solutions for molecular and materials science research. Efforts are
being made to improve interoperability between different codebases. The MolSSI Driver Interface
(MDI) project has created libraries which enable a wide variety of use cases which includes machine
learning. An alternative approach to building libraries for HPC applications is building Python
interface. This is particularly useful for machine learning and quantum computing applications as
a vast majority of the workflows are based on python.

Our, highly efficient, GPU-accelerated quantum chemistry package QUICK is open-source and
freely available to the scientific community. The ability to harness the power of GPUs makes QUICK
a valuable tool. However, it can primarily be accessed through file-based interface, where an input
file is parsed and an output file is generated. The file-based approach works well for standard
applications however, an API based approach is highly desirable in case of complex workflows.
Here, I propose to develop a python API for QUICK, using F2PY, to reduce the barrier for users
to integrate QUICK into their workflows.

# NAIRR impact

Chemistry is currently at the forefront of AI application as noted by the 2024 nobel prize in Chem-
istry for protein structure prediction. Further, one of the feature projects in NAIRR allocations

(NAIRR240031) is using NAIRR computational resources for training protein diffusion models
underscoring the need for large quantities of computational resources in training AI models for
applications related to Chemistry. Standard AI models in Chemistry are trained on one of the
available datasets, chosen according the problem under consideration. However, often data needs to be generated either due to non-availability of appropriate high quality data or to generate new
datasets.

This contribution aims to provide AI researchers in Chemistry and biochemistry easy access to
performing molecular simulations and obtaining molecular properties to either create or supplement
their dataset. The molecular simulations can be performed in NAIRR resources. We routinely
use HPC resources, specifically EXPANSE for our projects involving QUICK. Separate efforts are
underway to facilitate running QUICK on Kubernetes cluster based NAIRR resources.

# Deliverables

## Guide on the usage
- What capabilities of QUICK are accessible using Python interface
- Examples for how to perform energy calculation and geometry optimization
- How to use the serial, MPI and CUDA/HIP versions of QUICK
- Guide will form part of QUICK user manual

## Usage in NAIRR resources

- QUICK will be run in a container on Kubernetes clusters
- We will create a new container which will include QUICK, Python and other required
dependencies

## Sustainability and dissemination

- The code will be available as part of the open-source QUICK github repository at
[https://github.com/merzlab/QUICK](https://github.com/merzlab/QUICK)
- Modular development will facilitate future improvements by the ease of addition of more
features