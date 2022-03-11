---
slug: bitbucket-pipeline
title: Bitbucket Pipeline
# authors: [natarajan]
tags: [bitbucket, pipeline, bitbucket-pipeline]
sidebar_position: 1
---

## Generate BITBUCKET_ACCESS_TOKEN in Bitbucket

## Bitbucket pipeline Samples

### Simple Pipeline yml

```yml

```

### Template based Pipeline yml 1

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

### Template based Pipeline yml 2

It covers the following

1. Maven build
2. Enable the Maven Cache (ref)
3. Push the artifacts to github
4. How to skip build if we commit the verson change from CI process
5. Bitbucket shared/reuse stepes (ref) & scripts (ref)
6. Security Scan
7. File Upload and Download from Bitbucket download sections.
8. Install maven dependencies

```yml
image: maven:3.8.1-jdk-8

definitions:
  scripts:
    - script: &Build-Script
        mvn install
          
    - script: &CommitVersion-Script
        git add . &&
        git status && 
        git commit -m "[skip CI]" &&
        git push

    - script: &DependencyDownload-Script
        curl -s -S  --user "${BITBUCKET_ACCESS_TOKEN}" -L -O "https://api.bitbucket.org/2.0/repositories/${BITBUCKET_REPO_OWNER}/${BITBUCKET_REPO_SLUG}/downloads/AppEvaluateCore-5.0.${BITBUCKET_BUILD_NUMBER}-SNAPSHOT.jar" &&
        curl -s -S  --user "${BITBUCKET_ACCESS_TOKEN}" -L -O "https://api.bitbucket.org/2.0/repositories/${BITBUCKET_REPO_OWNER}/${BITBUCKET_REPO_SLUG}/downloads/app-authentication-2.0.0.jar" &&
        ls -ls 
      
    - script: &DependencyInstall-Script
        mvn install:install-file -Dfile=./mission-authentication-2.0.0.jar -DgroupId=com.Mission.authentication -DartifactId=mission-authentication -Dversion=2.0.0 -Dpackaging=jar -DgeneratePom=true &&
        mvn install:install-file -Dfile=./AppEvaluateCore-5.0.${BITBUCKET_BUILD_NUMBER}-SNAPSHOT.jar -DgroupId=com.mio -DartifactId=AppEvaluateCore -Dversion=5.0.${BITBUCKET_BUILD_NUMBER}-SNAPSHOT -Dpackaging=jar -DgeneratePom=true

  steps:
    - step: &Build-Authentication
        name: Build Authentication
        caches:
          - maven
        script:
          - pwd
          - ls -ls
          - git clone https://${BITBUCKET_ACCESS_TOKEN}@bitbucket.org/MissionOrg/mission-authentication.git
          - cd mission-authentication
          - git checkout develop
          - *Build-Script
          #- mvn install:install-file -Dfile=./target/mission-authentication-2.0.0.jar -DgroupId=com.Mission.authentication -DartifactId=mission-authentication -Dversion=2.0.0 -Dpackaging=jar -DgeneratePom=true
          - curl -X POST --user "${BITBUCKET_ACCESS_TOKEN}" "https://api.bitbucket.org/2.0/repositories/${BITBUCKET_REPO_OWNER}/${BITBUCKET_REPO_SLUG}/downloads" --form files=@"./target/mission-authentication-2.0.0.jar"
        artifacts:
          - target/**
    - step: &Build-Backend
        name: Build Backend
        caches:
          - maven
        script:
          - pwd
          - ls -ls
          - mkdir bin
          - cd bin
          - curl -s -S  --user "${BITBUCKET_ACCESS_TOKEN}" -L -O "https://api.bitbucket.org/2.0/repositories/${BITBUCKET_REPO_OWNER}/${BITBUCKET_REPO_SLUG}/downloads/mission-authentication-2.0.0.jar" &&
          - mvn install:install-file -Dfile=./mission-authentication-2.0.0.jar -DgroupId=com.Mission.authentication -DartifactId=mission-authentication -Dversion=2.0.0 -Dpackaging=jar -DgeneratePom=true &&
          - cd ..
          - git clone https://${BITBUCKET_ACCESS_TOKEN}@bitbucket.org/MissionOrg/application-cloud-transformation-evaluate-backend.git
          - cd application-cloud-transformation-evaluate-backend
          - git checkout develop
          - mvn versions:set -DnewVersion=5.0.${BITBUCKET_BUILD_NUMBER}-SNAPSHOT
          - *Build-Script
          - cd target
          - ls -ls
          - echo ${BITBUCKET_BUILD_NUMBER} 
          #- mvn install:install-file -Dfile=./target/MissionEvaluateCore-5.0.${BITBUCKET_BUILD_NUMBER}-SNAPSHOT.jar -DgroupId=com.mio -DartifactId=MissionEvaluateCore -Dversion=5.0.${BITBUCKET_BUILD_NUMBER}-SNAPSHOT -Dpackaging=jar -DgeneratePom=true
          - curl -X POST -s --user "${BITBUCKET_ACCESS_TOKEN}" "https://api.bitbucket.org/2.0/repositories/${BITBUCKET_REPO_OWNER}/${BITBUCKET_REPO_SLUG}/downloads" --form files=@"./target/MissionEvaluateCore-5.0.45-SNAPSHOT.jar"
          - *CommitVersion-Script
        artifacts:
          - target/**
    - step: &Build-UI
       name: Build UI
       caches:
          - maven
       script:
          - mkdir bin
          - cd bin
          - *DependencyDownload-Script
          - *DependencyInstall-Script
          - cd ..
          - *Build-Script
       after-script:
            # Collect checkstyle results, if any, and convert to Bitbucket Code Insights.
          - pipe: atlassian/checkstyle-report:0.3.0
       artifacts:
          - target/**
    - step: &Release-UI
        name: Release UI
        caches:
          - maven
        script:
          - pwd
          - ls -ls
          - mkdir bin
          - cd bin
          - *DependencyDownload-Script
          - *DependencyInstall-Script
          - cd ..
          - mvn release:update-versions --batch-mode
          - *Build-Script
          - *CommitVersion-Script
        after-script:
            # Collect checkstyle results, if any, and convert to Bitbucket Code Insights.
          - pipe: atlassian/checkstyle-report:0.3.0
        artifacts:
          - target/**
    - step: &Push-2-Github
        name: Push to Github
        deployment: Production
        script:
          - git config --global user.email "natarajang2@Mission.com"
          - git config --global user.name "Bitbucket Build Trigger"
          - git clone https://${GIT_ACCESS_TOKEN}@github.com/NatarajanGanapathi-Mission/MissionEvaluateWorkspace
          - ls -ls
          - cd MissionEvaluateWorkspace
          - git checkout main
          - cp ../target/MissionEvaluate-*-SNAPSHOT.jar .
          - cp ../README.md .
          - git add .
          - git status
          - git commit -m "Latest jar updated. Build Number ${BITBUCKET_BUILD_NUMBER}"
          - git push origin main
    - step: &Security-Scan
        name: Security Scan
        script:
          # Run a security scan for sensitive data.
          # See more security tools at https://bitbucket.org/product/features/pipelines/integrations?&category=security
          - pipe: atlassian/git-secrets-scan:0.5.1

pipelines:
  branches:
    develop:
      - step: *Build-Authentication
      - step: *Build-Backend
      - step: *Build-UI
      - step: *Security-Scan
    feature/cicd:
      - step: *Build-Authentication
      - step: *Build-Backend
      - step: *Build-UI
      - step: *Security-Scan

```