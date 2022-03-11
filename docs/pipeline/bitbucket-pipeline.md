---
slug: bitbucket-pipeline
title: Bitbucket Pipeline
# authors: [natarajan]
tags: [bitbucket, pipeline, bitbucket-pipeline]
sidebar_position: 1
---

## Generate GIT_ACCESS_TOKEN in Bitbucket

## Simple Pipeline yml

```yml

```

## Templated based Pipeline yml 1

```yml

image: maven:3.8.1-jdk-8

definitions:
  steps:
    - step: &Build-App
        name: Build App
        caches:
          - maven
        script:
          - mvn install
        artifacts:
          - target/**
    - step: &Release-App
        name: Release App
        caches:
          - maven
        script:
          - mvn release:update-versions --batch-mode
          - mvn install
          - git add .
          - git commit -m "[skip CI]"
          - git push
        artifacts:
          - target/**
    - step: &Deploy-2-Github
        name: Deploy to Github
        deployment: Production
        script:
          - git config --global user.email "developer@mission.io"
          - git config --global user.name "BB Build Trigger"
          - git clone https://${GIT_ACCESS_TOKEN}@github.com/mission/Spacex
          - ls -ls
          - cd Spacex
          - git checkout main
          - cp ../target/Spacex-*-SNAPSHOT.jar .
          - cp ../README.md .
          - git add .
          - git status
          - git commit -m "Latest jar updated. Build Number ${BITBUCKET_BUILD_NUMBER}"
          - git push origin main
pipelines:
  branches:
    develop:
      - step: *Build-App
    release:
      - step: *Release-App
      - step: *Deploy-2-Github
    feature/cicd:
      - step: *Release-App
      - step: *Deploy-2-Github

```

:::tip Bitbucket Tips

  git commit -m "[skip CI]"  <!-- will skip the build trigger -->

:::tip