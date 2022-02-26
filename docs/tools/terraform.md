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
3. [GCP]()


## Folder structure of terrafrom project
```shell
TERRAFORM
│   .gitignore
│   .terraform.lock.hcl
│   main.tf             # Main terraform file
│   outputs.tf          # Output variables
│   provider.tf         # All providers with version number declaration
│   terrafrom.tfvars    # Terraform's default variables definitions.
│   variables.tf        # Terraform variables declarations
│   
├───.terraform
│   │   environment
│   │   
│   ├───modules
│   │       modules.json
│   │       
│   └───providers
│       └───registry.terraform.io
│                               
└───terraform.tfstate.d
    ├───Test
    ├───Uat
    └───Prod
```

> **Note:** `terrafrom.tfvars` is default variable definition file. Custom name is acceptable. but need to spacify the file name in every execution liek `terraform apply var-file=test.env.tfvars`

## Init

```shell

terraform init (or) terraform init --upgrade

```

## Terrafrom workspace

```shell
# Create workspace
terrafrom workspace add Test
terrafrom workspace add Uat
terrafrom workspace add Prod

# Select/Change workspace
terraform workspace select Test

# List all workspace
terraform workspace list

# Deelte workspace
terraform workspace delete Test
```

## Plan

```shell
terraform plan  # terraform will take terraform.tfvars as default variable file.
terraform plan var-file=test.evn.tfvars

```
## Apply

```shell

terraform apply -y var-file=test.env.tfvars

```


## Azure 

### Authenticaton setup

```shell
export ARM_SUBSCRIPTION_ID="<azure_subscription_id>"
export ARM_TENANT_ID="<azure_subscription_tenant_id>"
export ARM_CLIENT_ID="<service_principal_appid>"
export ARM_CLIENT_SECRET="<service_principal_password>"
```
> **Note:** When authenticating as a Service Principal using a Client Secret, `client_secret` fields need to be set. This can also be sourced from the ARM_CLIENT_SECRET Environment Variable.

(or)
```terraform
provider "azurerm" {
  subscription_id   = var.azure.subscription_id
  # client_id       = var.azure.client_id
  # client_secret   = var.azure.client_secret
  tenant_id         = var.azure.tenant_id
  features {}
}
```

### Secure State file in Azure Storeage


```terraform 
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=2.46.0"
    }
  }
    backend "azurerm" {
        resource_group_name  = "tfstate"
        storage_account_name = "<storage_account_name>"
        container_name       = "tfstate"
        key                  = "terraform.tfstate"
    }

}
```

:::tip Reference
1. [Store state in Azure Storage](https://docs.microsoft.com/en-us/azure/developer/terraform/store-state-in-azure-storage?tabs=azure-cli)
:::

## AWS 

### Authenticaton Setup

```shell
export AWS_ACCESS_KEY_ID="anaccesskey"
export AWS_SECRET_ACCESS_KEY="asecretkey"
export AWS_DEFAULT_REGION="us-west-2"
terraform plan
```


### Secure state file in AWS S3 Bucket

```terraform
terraform {
  backend "s3" {
    bucket = "mybucket"
    key    = "path/to/my/key"
    region = "us-east-1"
  }
}
```

:::tip Reference
1. [Store state in AWS S3 Bucket](https://www.terraform.io/language/settings/backends/s3)
:::

:::tip Reference

1. [Terraform Workspace Tutorial](https://www.terraform.io/language/state/workspaces)

2. [IAC with Terraform for Mulitiple Environments](https://meirg.co.il/2020/12/10/infrastructure-as-code-with-terraform-for-multiple-environments/)

:::tip
