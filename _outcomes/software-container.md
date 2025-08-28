---
layout: outcome-project
title: "Software Container for FourCastNet"
fellow: "Henry Li" 
summary: Researchers at San Diego State University wanted more computation power to train and run inference on FourCastNet.
link: "https://hub.docker.com/repository/docker/henrylisdsu/nvidia-cuda-12.4/general" 
format: "Docker" 
date: 2024-07-21 
tags: 
    - docker 
    - CUDA
---
## Abstract 
Researchers at San Diego State University wanted more computation power to train and run inference on FourCastNet. This is a popular climate prediction model created by Nvidia. However, they were having difficulty consolidating and maintaining the packages and software required to run the model. I created the container using the base Nvidia Cuda image, adding required software such as Nvidia Apex and Wandb. This image allows users to run FourCastNet on any cluster. It has been used numerous times by the SDSU researchers and have also been shared with researchers at the University of Hawaii. 