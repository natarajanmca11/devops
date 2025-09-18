---
slug: azure-devops
title: Microsoft Azure DevOps
authors: [natarajanganapathi]
tags: [devops, azure-devops, pipeline]
sidebar_position: 3
---

# Sample Azure DevOps Pipeline

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
1. Before CI (Tag Creation - Build Version, Environment, )
2. CI (Build)
3. After CI (Security Scan, SAST, DAST)
4. Before CD (Tag Creation - Deploy version, Environment)
5. CD (Including Canary/Blue-Green Deployment)
6. After CD (Smoke Tests, Health Checks, Load Testing, Functional/QA Testing, Tag Creation)
7. Finally (Monitoring, Notifications, Reporting, Clean-up, Tag Creation - Status)

# Tools
