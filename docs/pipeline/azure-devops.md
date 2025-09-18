---
slug: azure-devops
title: Microsoft Azure DevOps
authors: [natarajanganapathi]
tags: [devops, azure-devops, pipeline]
sidebar_position: 3
---

# Sample Azure DevOps Pipeline

## Azure DevOps Publishers
1. [Falcon Architecture](https://marketplace.visualstudio.com/manage/publishers/FalconArchitecture)
2. [Falcon DevOps](https://marketplace.visualstudio.com/manage/publishers/falcondevops)

## Azure DevOps Extensions
1. [Unified Pipelines]()

```yml 
# Sample Task

  steps:
    - task: MyTask@1           # Replace 'MyTask@1' with the actual task name/version
      name: compileTask        # Unique name for the task instance
      displayName: "Run MyTask with all properties"
      enabled: true            # Task is enabled (default is true, can also be omitted in this case)
      condition: succeeded()   # Run only if previous steps or jobs succeeded
      continueOnError: false   # Do not continue if the task fails
      alwaysRun: false         # Prevent this task from always running regardless of previous outcomes
      timeoutInMinutes: 30     # Task timeout (30 minutes maximum execution time)
      cancelTimeoutInMinutes: 5 # Graceful cleanup timeout (5 minutes) if the pipeline is canceled
      retryCountOnTaskFailure: 3 # Retry up to 3 times on task failure
      dependsOn: 
        - previousTask         # Task depends on a previously defined task (example name)
      inputs:
        input1: "value1"       # Replace with actual input keys and values required by the task
        input2: "value2"
      env:                     # Environment variables passed to the task
        MY_CUSTOM_VAR: "value"
        ANOTHER_VAR: "123"
```

# Stages
Pipeline Stages

### Prepare

* Initialize pipeline-level properties (e.g., global metadata).
* Set up shared resources (e.g., secrets vault, environment-specific parameters).
* Perform environment sanity checks or prepare reports.

### Before CI:

* Tag creation for build versioning.
* Environment setup for the build.

### CI:

* Build the application and generate necessary artifacts.


### After CI:

* Perform security scans (SAST, DAST).
* Validate build artifacts (ensure versioning, integrity, completeness).

### Before CD:

* Tag creation for deployment versioning.
* Setup the environment for deployment.
* Integration testing for interactions between services, APIs, or databases.

### CD:

* Deployment execution, including advanced strategies (e.g., Canary, Blue-Green).

### After CD:

* Perform post-deployment validations:
* Smoke tests
* Health checks
* Load testing
* Functional/QA testing
* Tag creation for version/status confirmation

### Finally:

* Monitoring and alerting for the deployment environment.
* Notifications (email, messaging, etc.).
* Reporting the deployment status.
* Cleanup and final tag creation.

# Refereces
1. [Azure DevOps Extension Creation](https://learn.microsoft.com/en-us/azure/devops/extend/get-started/node?view=azure-devops)
2. [Azure DevOps Extension Publish](https://learn.microsoft.com/en-us/azure/devops/extend/publish/overview?view=azure-devops)
3. [Azure DevOps Extension Sharing](https://learn.microsoft.com/en-us/azure/devops/extend/publish/overview?view=azure-devops#share-your-extension)
4. [Sample Extension](https://github.com/DataThirstLtd/databricks.vsts.tools)
