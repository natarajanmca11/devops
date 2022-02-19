---
slug: azure
title: Microsoft Azure
# authors: [natarajan]
tags: [azure]
sidebar_position: 1
---

## Install Azure Cli

## Login

```sh title="Azure Cli command to login in azure cloud"
az login
(or)
az login -u <username> -p <password>
(or)
az login --service-principal -u <app-id> -p <password-or-cert> --tenant <tenant>
(or)
az login --identity
(or)
az login --identity --username <client_id|object_id|resource_id>
```

:::tip Reference

- [Authenticate Azure Cli](https://docs.microsoft.com/en-us/cli/azure/authenticate-azure-cli)
:::

## Create service principle







