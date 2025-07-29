---
layout: outcome-project 
title: "Singularity Conversion of NVIDIA Containers for Expanse NAIRR Expansion" 
fellow: "Victoria Nguyen" 
summary: This project will create Singularity containers for SDSC’s Expanse NAIRR Expansion, using NVIDIA’s published AI and ML Docker containers as a starting point. These Singularity containers are specifically intended for Expanse NAIRR users to utilize and accelerate their AI projects and jobs on Expanse’s NVIDIA H100 GPU nodes.
url: "https://github.com/vin011/NVIDIA-Singularity-Containers" 
format: "docker" 
date: 2025-03-31 
tags: 
---
## Proposal
This project will create Singularity containers for SDSC’s Expanse NAIRR Expansion, using NVIDIA’s published AI and ML Docker containers as a starting point. These Singularity containers are specifically intended for Expanse NAIRR users to utilize and accelerate their AI projects and jobs on Expanse’s NVIDIA H100 GPU nodes.

In addition to creating base Singularity containers, we will create documentation outlining the general container creation and conversion process for users to follow and create their own as the container software images, models, and drivers may be updated with time.

## Process
Following proposal approval, testing and conversation began on Jetstream2. There were some initial issues with determining the correct amount of disk space necessary and required rebuilding the Jetstream2 instances and containers various times. After building a few singularity images successfully on Jetstream2, there were challenges with trying to remotely transfer and copy the images to Expanse. With a few unsuccessful attempts, I instead opted to rebuild the containers on Expanse. Noting, pushing the images to an online repository was also considered but had limitations with public cloud storage quotas.

Expanse had shared Pytorch and Tensorflow examples in /cm/shared/examples/sdsc and /cm/shared/apps to which I used and tested against my singularity containers on the default V100 gpus and used to create example bash and batch scripts. The next step was to test against A100s, available on Jetstream and Expanse via special reservations. While it took a while for Expanse A100 access, I was able to test successfully against both supercomputers and their A100s. Unfortunately, the Expanse H100s were not installed by their estimated time due to delivery and installation issues. Testing the images among the various hardware required learning more about the different NVIDIA Drivers, CUDA versions and reading more about the NVIDIA container contents itself.

The Expanse support team had new benchmarks and examples created by students during the previous quarters. Borrowing and testing their work, I attempted to run them with my Singularity containers. There were some dependency issues and code adjustments, as well as service outages with the Lustre file system undergoing an unexpected extended maintenance, but eventually I was able to modify the tensorflow scripts to work with the containers. I similarly attempted to test the pytorch scripts but had various dependencies issues which required building the containers from scratch, beyond the intent of having easy creatable containers for users. All the python, bash and batch scripts have been uploaded to a github repository, alongside some general guides and documents.

## Challenges
As a newer Singularity and Jetstream2 user, ensuring I had enough storage was a challenge. Building the container images was not a relatively quick process, about 30 minutes, but would crash and fail due to inadequate disk space. I would have to rebuild the Jetstream2 instance, slowly incrementing the disk space each time, while trying to minimize overallocation of my credit hours. I also had issues when trying to create multiple images on one instance or trying to create datasets to test against. Unfortunately, I ended up running out of SU credits towards the end of my proposal and could not complete all the examples and tests intended.

Getting access to Expanse A100s was not intuitive. Thankfully my home institution is SDSC and I have many colleagues and mentors on the Expanse support team, but it still took a few weeks to finally get granted access to the A100s.

The Expanse lustre file system had a planned maintenance in mid-March which was postponed a few days later. The maintenance did not go well and caused Lustre and its objects to be unavailable for more than a week. The tensorflow datasets were stored in Lustre and I was unable to query or replicate on Jetstream2 as well. This impacted my ability to progress as efficiently and to test/create more items.

The Expanse H100s were not installed by the estimated date, due to longer delivery and incompatibilities with hardware parts. The system configuration and integration into the Expanse environment would have been completed at a much later date as well. Thus I was unable to fully prepare content for the H100s, but hopefully have enough documentation and examples for users to leverage and modify when the H100s are ready.

## Deliverables
Github repo: [https://github.com/vin011/NVIDIA-Singularity-Containers](https://github.com/vin011/NVIDIA-Singularity-Containers) 

### Docs:
- General Container Guide  
- Expanse Overview  
- JetStream2 Overview  

### Examples: bash, batch and python scripts
- PyTorch  
- Tensorflow
