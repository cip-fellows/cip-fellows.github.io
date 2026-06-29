---
layout: outcome-project
title: "Scalable MATLAB on Expanse - Micro-Guides with Portable Best Practices" 
fellow: "Aram Valifar" 
summary: This project supports NAIRR’s mission to democratize AI research resources by removing HPC barriers for researchers using MATLAB in AI/ML workflows.
date: 2026-02-06
---

# NAIRR Pilot Alignment:

This project supports NAIRR’s mission to democratize AI research resources by removing HPC barriers for researchers using MATLAB in AI/ML workflows. By providing beginner-friendly onboarding for the MATLAB research community, prevalent in aerospace, robotics, and computational engineering, we enable broader participation in AI research beyond traditional CS/Python communities.

# Objective:

Ship a finite, beginner-safe onboarding package that takes new users from login → first MATLAB run → scalable job arrays for AI/ML workflows (deep learning, reinforcement learning, model deployment), while enforcing I/O patterns that protect Lustre (avoid small-file/metadata storms). The package is explicitly split into (a) Expanse-specific instructions and (b) portable MATLAB-on-Slurm practices reusable across NAIRR resources, with minimal duplicate artifacts.

# AI/ML Use Cases:

This project enables AI research workflows common in aerospace, robotics, and computational engineering:
- **General ANN Training:** MLP/fully connected networks, CNNs, RNN/LSTM/GRU, and custom dlnetwork models (including attention-based architectures) with hyperparameter sweeps via job arrays.
- **Reinforcement Learning:** Policy training for control systems; Monte Carlo simulations at scale.
- **Model Portability:** Import PyTorch/TensorFlow models into MATLAB via direct import (importNetworkFromPyTorch) or ONNX for deployment in existing simulations.
- **Hybrid Workflows:** Train in Python for performance, import to MATLAB for integration with domain-specific tools.

# Audience & Scope:

Linux-literate, HPC-novice researchers (NAIRR access community, aerospace/robotics/engineering) using MATLAB for AI/ML workflows. Expanse is the primary target resource; each artifact labels what is Expanse-specific vs resource-agnostic.

# Approach:

- **Primary: CLI on an interactive node (recommended for AI training).** Allocate with srun; run headless MATLAB (matlab -batch); use node-local scratch for temporaries (model checkpoints, temp datasets); stage-in → compute → single copy-back (archive small files into one tar).
- **Portal: MATLAB GUI (only for visualization/debugging).** Use Expanse User Portal for training curves, confusion matrices, network inspection; keep heavy compute/high-frequency I/O on the CLI path.
- **GUI → CLI bridge for beginners.** Include a short migration path that maps common GUI actions to equivalent
CLI/-batch commands so first-time MATLAB GUI users can move to scalable HPC workflows safely.

# Deliverables:

1. **Five Micro-Guides** (10–15 min each; copy/paste, expected outputs, pass/fail). Each guide has two tags: [Expanse-specific] and [Portable].
    - _M1_ Choose Path, Pre-flight, and GUI → CLI migration ([Expanse-specific] account/host/quota checks; [Portable]
    MATLAB CLI basics).
    - _M2_ Interactive CLI MATLAB ([Expanse-specific] module/account examples; [Portable] -batch version sanity
    and script patterns).
    - _M3_ Scalable Arrays (no MDCS) ([Expanse-specific] Slurm/account examples; [Portable] --array hyperparam-
    eter sweeps, isolated outputs, copy-back reserve).
    - _M4_ Storage & I/O Patterns ([Expanse-specific] Lustre and node-local conventions; [Portable] checkpoint ag-
    gregation and metadata-safe output strategy).
    - _M5_ Portal MATLAB (GUI/plots) ([Expanse-specific] User Portal path; [Portable] visualization/debug-only
    usage pattern).

2. **Best-Practices One-Pager (portable + Expanse notes), with embedded templates:**
    - Includes Template A: interactive CLI setup snippet.
    - Includes Template B: array sbatch with node-local scratch, timeout reserve, copy-back, and a general ANN sweep example (not limited to CNN/RNN).
    - Includes a short MATLAB Parallel Server pointer box with official docs ([mathworks.com/help/matlab-parallel- server/](mathworks.com/help/matlab-parallel- server/)) and when to use matlab -batch vs. parpool/batch.

3. **GPU & AI Workflow Addendum (lightweight, separate artifact):**
    - One copy/paste CPU baseline job and one copy/paste single-GPU job (--gpus=1, gpuDeviceCount==1) for MATLAB Deep Learning Toolbox.
    - One non-CNN ANN example (batch inference or training) to demonstrate broader ANN support.
    - One short verification checklist for expected GPU behavior and outputs.

4. 8–10 min pre-recorded walkthrough only (login → -batch version → submit AI training array → sacct verify); no live
presentation required.

5. **Acceptance Test Suite (separate from micro-guides):** concise pass/fail checks tied to all deliverables; used as
project quality gates, not as additional guide content.

# Guardrails:
- **No MATLAB inside containers.** If Python AI tooling is needed (e.g., training in PyTorch before importing to MATLAB), use Miniforge or SDSC-approved methods. Demonstrate model transfer workflows: direct PyTorch import (importNetworkFromPyTorch) and ONNX-based portability. Open-source channels only.
- Use Portal for visualization only; perform compute- and I/O-intensive work (model training, inference) in CLI jobs.
- Keep default workflows MDCS-free for broad portability; MATLAB Parallel Server references are optional extensions for users who have access.
- Reuse snippets across guides to minimize maintenance and preparation time.

# Acceptance Tests (separate deliverable):
- **AT-1** Headless sanity: matlab -batch "disp(version)" prints a version string on a compute node (exit code 0).
- **AT-2** Arrays: an N=5 array completes; sacct shows all COMPLETED; each output contains expected text.
- **AT-3** I/O discipline: node-local scratch used; small outputs aggregated and copied back; no small-file burst to Lustre.
- **AT-4** Portal: MATLAB GUI launches; a simple plot renders; a file saves to the recommended project path.
- **AT-5** AI/GPU workflow: run one non-CNN ANN example in batch mode; if a GPU job is requested, verify expected GPU behavior for --gpus=1.
- **AT-6** Scope clarity: artifacts clearly label Expanse-specific vs portable steps, and include MATLAB Parallel Server pointer guidance (matlab -batch baseline vs. parpool/batch path).
