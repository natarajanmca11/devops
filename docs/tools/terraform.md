---
slug: terraform
title: Terraform
# authors: [natarajan]
tags: [terraform, ansible, azure, aws, gcp]
sidebar_position: 5
---

Workspace based terraform automation project setup for multi-cloud.

## Cloud Module Reference

1. [Azure](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs)
2. [AWS](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
3. [GCP](https://registry.terraform.io/providers/hashicorp/google/latest/docs)

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
[Sample files shared below](./terraform.md?sample-terraform-scripts)

> **Note:** `terrafrom.tfvars` is default variable definition file. Custom name is acceptable. but need to spacify the file name in every execution liek `terraform apply var-file=test.env.tfvars`

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

## Init the terraform project

```shell

terraform init (or) terraform init --upgrade

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
1. [Store state in Azure Storage](https://www.terraform.io/language/settings/backends/azurerm)
2. [Store state in Azure Storage](https://docs.microsoft.com/en-us/azure/developer/terraform/store-state-in-azure-storage?tabs=azure-cli)
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

## GCP

### Authenticaton setup

### Secure state file in GCS (Google Cloud Storage)

```terraform 
terraform {
  backend "gcs" {
    bucket  = "tf-state-prod"
    prefix  = "terraform/state"
  }
}
```

:::tip Reference

1. [Store state in GCS](https://www.terraform.io/language/settings/backends/gcs)

:::tip

## Sample terraform scripts

Multi cloud terrafrom project

```terrafrom title="provider.tf"
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.2"
    }
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "2.98.0"
    }
    google = {
      version = "~> 3.8"
    }
    random = "~> 2.2"
    docker  = "~> 2.7"
  }
  backend "azurerm" {
        resource_group_name  = "tfstate"
        storage_account_name = "<storage_account_name>"
        container_name       = "tfstate"
        key                  = "terraform.tfstate"
  }
}

provider "aws" {
  profile    = var.aws.profile
  region     = var.aws.region
  access_key = var.aws.access_key
  secret_key = var.aws.secret_key
}

provider "azurerm" {
  subscription_id = var.azure.subscription_id
  # client_id       = var.azure.client_id
  # client_secret   = var.azure.client_secret
  tenant_id = var.azure.tenant_id
  features {}
}

provider "google" {
  credentials = file("account.json")
  project     = var.gcp.project_id
  region      = var.gcp.region
}

provider "docker" {
}
```

```terrafrom title="terraform.tfvars"

aws = {
  profile       = "default"             # ENV = AWS_PROFILE
  region        = "us-west-2"           # ENV = AWS_REGION 
  access_key    = "xxxxxxxxxxxxxxxxxxx" # ENV = AWS_ACCESS_KEY_ID 
  secret_key    = "xxxxxxxxxxxxxxxxxxx" # ENV= AWS_SECRET_ACCESS_KEY
}
azure = {
  subscription_id   = "xxxx-xxxxx-xxxxx-xxxxx-xxxx-xxxx"    # ENV = ARM_SUBSCRIPTION_ID 
  # client_id       = "xxxx-xxxxx-xxxxx-xxxxx-xxxx-xxxx"    # ENV = ARM_CLIENT_ID
  # client_secret   = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx"    # ENV= ARM_CLIENT_SECRET 
  tenant_id         = "xxxx-xxxxx-xxxxx-xxxxx-xxxx-xxxx"    # ENV = ARM_TENANT_ID 
  location          = "centralus"
}

gcp = {
  project_id = "<project_id>"
  region     = "us-east1"
}


```

```terrafrom title="variables.tf"
variable "aws" {
  type = object({
    profile = string
    region  = string
    access_key = string
    secret_key = string
  })
}

variable "azure" {
  type = object({
    subscription_id = string
    # client_id       = string
    # client_secret   = string
    tenant_id       = string
    location        = string
  })
}

variable "gcp" {
  type = object({
    project_id = string
    region     = string
  })
}
```

```terrafrom title="output.tf"
output "addresses" {
  value = {
    # aws          = module.aws.network_address
    # azure        = module.azure.network_address
    # gcp          = module.gcp.network_address
    # loadbalancer = module.loadbalancer.network_address
  }
}
```

:::tip Terraform Reference

1. [Terraform Workspace Tutorial](https://www.terraform.io/language/state/workspaces)
2. [IAC with Terraform for Mulitiple Environments](https://meirg.co.il/2020/12/10/infrastructure-as-code-with-terraform-for-multiple-environments/)
3. [Terraform wiht Ansible](https://www.digitalocean.com/community/tutorials/how-to-use-ansible-with-terraform-for-configuration-management)
4. [Terraform Available backends](https://www.terraform.io/language/settings/backends/local)

:::tip


## Landing Zone Creation

:::tip Best Practices Reference

1. [AWS](https://registry.terraform.io/modules/MitocGroup/landing-zone/aws/latest)

:::tip
