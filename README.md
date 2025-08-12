# Repository for the Project: CyberTraining: CIP: Training and Developing a Research Computing and Data (RCD) CI Professionals Community. 
Website @ https://cip-fellows.sdsc.edu. Deployed through Github Pages/Actions. 

## Purpose
This repository contains code for a website for the CyberTraining: CIP: Training and Developing a Research Computing and Data (RCD) CI Professionals Community project funded by NSF grant #230127. 

This website is built using the Jekyll theme [Al-Folio](https://github.com/alshedivat/al-folio). There are a moderate number of modifications to the original theme in our final implementation. Cases where these modifications are janky or nonstandard are documented in [TECH_DEBT.md](TECH_DEBT.md). 

## Content Quickstart
Content-only (non-technical) updates can be made right from Github. Please save your commit in a new branch or fork and make a pull request to main. 

## Local Quickstart
To run the project locally, please follow the steps below. Reach out to one of the project maintainers or raise a Github issue if any step doesn't work. 

1. Clone the Github repository 
2. Using your terminal, navigate to the project folder. Run `bundle install` if you have Ruby 3.1.2p20 installed already 
    1. If you don't have Ruby installed, please follow the relevant steps for your OS/environment 
    2. If you run into issues on Mac, the following steps may help: 
        1. Run `eval "$(rbenv init -)"` 
        2. Run `source ~/.zshrc` 
        3. Run `ruby -v` to confirm, expect `ruby 3.1.2p20 (2022-04-12 revision 4491bb740a) [arm64-darwin24]` if you are using an Apple Silicon Mac
3. Run `bundle exec jekyll serve` to start the local server 

> Note: Technically, `jekyll serve` will also work, but it doesn't use the gemfiles from the folder/project you're in. It will instead use a global gemfile in your environment. We do not recommend it. 

## Contributing
Please open an issue before submitting a large pull request. For small changes, fork the repo, make edits, and submit a PR to `main`.