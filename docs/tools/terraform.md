---
slug: terraform
title: Terraform
# authors: [natarajan]
tags: [terraform]
sidebar_position: 4
---

## Cloud Module Reference

1. [Azure](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs)
2. [AWS](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)


## Azure Authenticaton setup

When authenticating as a Service Principal using a Client Secret, `client_secret` fields need to be set. This can also be sourced from the ARM_CLIENT_SECRET Environment Variable.


## AWS Authenticaton Setup

$ export AWS_ACCESS_KEY_ID="anaccesskey"
$ export AWS_SECRET_ACCESS_KEY="asecretkey"
$ export AWS_DEFAULT_REGION="us-west-2"
$ terraform plan

:::tip Reference

1. [Terraform Workspace Tutorial](https://www.terraform.io/language/state/workspaces)

2. [IAC with Terraform for Mulitiple Environments](https://meirg.co.il/2020/12/10/infrastructure-as-code-with-terraform-for-multiple-environments/)

:::tip
