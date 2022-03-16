"use strict";(self.webpackChunkfacebook=self.webpackChunkfacebook||[]).push([[7222],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return u}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7194:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],s={slug:"terraform",title:"Terraform",tags:["terraform","ansible","azure","aws","gcp"],sidebar_position:5},l=void 0,c={unversionedId:"tools/terraform",id:"tools/terraform",title:"Terraform",description:"Workspace based terraform automation project setup for multi-cloud.",source:"@site/docs/tools/terraform.md",sourceDirName:"tools",slug:"/tools/terraform",permalink:"/devops/docs/tools/terraform",editUrl:"https://github.com/natarajanmca11/devops/blob/main/docs/tools/terraform.md",tags:[{label:"terraform",permalink:"/devops/docs/tags/terraform"},{label:"ansible",permalink:"/devops/docs/tags/ansible"},{label:"azure",permalink:"/devops/docs/tags/azure"},{label:"aws",permalink:"/devops/docs/tags/aws"},{label:"gcp",permalink:"/devops/docs/tags/gcp"}],version:"current",sidebarPosition:5,frontMatter:{slug:"terraform",title:"Terraform",tags:["terraform","ansible","azure","aws","gcp"],sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Kubernetes",permalink:"/devops/docs/tools/kubernetes"},next:{title:"Prometheus",permalink:"/devops/docs/tools/prometheus"}},p=[{value:"Cloud Module Reference",id:"cloud-module-reference",children:[],level:2},{value:"Folder structure of terrafrom project",id:"folder-structure-of-terrafrom-project",children:[],level:2},{value:"Terrafrom workspace",id:"terrafrom-workspace",children:[],level:2},{value:"Init the terraform project",id:"init-the-terraform-project",children:[],level:2},{value:"Plan",id:"plan",children:[],level:2},{value:"Apply",id:"apply",children:[],level:2},{value:"Azure",id:"azure",children:[{value:"Authenticaton setup",id:"authenticaton-setup",children:[],level:3},{value:"Secure State file in Azure Storeage",id:"secure-state-file-in-azure-storeage",children:[],level:3}],level:2},{value:"AWS",id:"aws",children:[{value:"Authenticaton Setup",id:"authenticaton-setup-1",children:[],level:3},{value:"Secure state file in AWS S3 Bucket",id:"secure-state-file-in-aws-s3-bucket",children:[],level:3}],level:2},{value:"GCP",id:"gcp",children:[{value:"Authenticaton setup",id:"authenticaton-setup-2",children:[],level:3},{value:"Secure state file in GCS (Google Cloud Storage)",id:"secure-state-file-in-gcs-google-cloud-storage",children:[],level:3}],level:2},{value:"Sample terraform scripts",id:"sample-terraform-scripts",children:[],level:2},{value:"Landing Zone Creation",id:"landing-zone-creation",children:[],level:2}],m={toc:p};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Workspace based terraform automation project setup for multi-cloud."),(0,o.kt)("h2",{id:"cloud-module-reference"},"Cloud Module Reference"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs"},"Azure")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs"},"AWS")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/google/latest/docs"},"GCP"))),(0,o.kt)("h2",{id:"folder-structure-of-terrafrom-project"},"Folder structure of terrafrom project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"TERRAFORM\n\u2502   .gitignore\n\u2502   .terraform.lock.hcl\n\u2502   main.tf             # Main terraform file\n\u2502   outputs.tf          # Output variables\n\u2502   provider.tf         # All providers with version number declaration\n\u2502   terrafrom.tfvars    # Terraform's default variables definitions.\n\u2502   variables.tf        # Terraform variables declarations\n\u2502   \n\u251c\u2500\u2500\u2500.terraform\n\u2502   \u2502   environment\n\u2502   \u2502   \n\u2502   \u251c\u2500\u2500\u2500modules\n\u2502   \u2502       modules.json\n\u2502   \u2502       \n\u2502   \u2514\u2500\u2500\u2500providers\n\u2502       \u2514\u2500\u2500\u2500registry.terraform.io\n\u2502                               \n\u2514\u2500\u2500\u2500terraform.tfstate.d\n    \u251c\u2500\u2500\u2500Test\n    \u251c\u2500\u2500\u2500Uat\n    \u2514\u2500\u2500\u2500Prod\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/devops/docs/tools/terraform?sample-terraform-scripts"},"Sample files shared below")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"terrafrom.tfvars")," is default variable definition file. Custom name is acceptable. but need to spacify the file name in every execution liek ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform apply var-file=test.env.tfvars"))),(0,o.kt)("h2",{id:"terrafrom-workspace"},"Terrafrom workspace"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Create workspace\nterrafrom workspace add Test\nterrafrom workspace add Uat\nterrafrom workspace add Prod\n\n# Select/Change workspace\nterraform workspace select Test\n\n# List all workspace\nterraform workspace list\n\n# Deelte workspace\nterraform workspace delete Test\n")),(0,o.kt)("h2",{id:"init-the-terraform-project"},"Init the terraform project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"\nterraform init (or) terraform init --upgrade\n\n")),(0,o.kt)("h2",{id:"plan"},"Plan"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"terraform plan  # terraform will take terraform.tfvars as default variable file.\nterraform plan var-file=test.evn.tfvars\n\n")),(0,o.kt)("h2",{id:"apply"},"Apply"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"\nterraform apply -y var-file=test.env.tfvars\n\n")),(0,o.kt)("h2",{id:"azure"},"Azure"),(0,o.kt)("h3",{id:"authenticaton-setup"},"Authenticaton setup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'export ARM_SUBSCRIPTION_ID="<azure_subscription_id>"\nexport ARM_TENANT_ID="<azure_subscription_tenant_id>"\nexport ARM_CLIENT_ID="<service_principal_appid>"\nexport ARM_CLIENT_SECRET="<service_principal_password>"\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," When authenticating as a Service Principal using a Client Secret, ",(0,o.kt)("inlineCode",{parentName:"p"},"client_secret")," fields need to be set. This can also be sourced from the ARM_CLIENT_SECRET Environment Variable.")),(0,o.kt)("p",null,"(or)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terraform"},'provider "azurerm" {\n  subscription_id   = var.azure.subscription_id\n  # client_id       = var.azure.client_id\n  # client_secret   = var.azure.client_secret\n  tenant_id         = var.azure.tenant_id\n  features {}\n}\n')),(0,o.kt)("h3",{id:"secure-state-file-in-azure-storeage"},"Secure State file in Azure Storeage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terraform"},'terraform {\n  required_providers {\n    azurerm = {\n      source  = "hashicorp/azurerm"\n      version = "=2.46.0"\n    }\n  }\n    backend "azurerm" {\n        resource_group_name  = "tfstate"\n        storage_account_name = "<storage_account_name>"\n        container_name       = "tfstate"\n        key                  = "terraform.tfstate"\n    }\n\n}\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Reference")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.terraform.io/language/settings/backends/azurerm"},"Store state in Azure Storage")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/developer/terraform/store-state-in-azure-storage?tabs=azure-cli"},"Store state in Azure Storage"))))),(0,o.kt)("h2",{id:"aws"},"AWS"),(0,o.kt)("h3",{id:"authenticaton-setup-1"},"Authenticaton Setup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'export AWS_ACCESS_KEY_ID="anaccesskey"\nexport AWS_SECRET_ACCESS_KEY="asecretkey"\nexport AWS_DEFAULT_REGION="us-west-2"\nterraform plan\n')),(0,o.kt)("h3",{id:"secure-state-file-in-aws-s3-bucket"},"Secure state file in AWS S3 Bucket"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terraform"},'terraform {\n  backend "s3" {\n    bucket = "mybucket"\n    key    = "path/to/my/key"\n    region = "us-east-1"\n  }\n}\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Reference")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.terraform.io/language/settings/backends/s3"},"Store state in AWS S3 Bucket"))))),(0,o.kt)("h2",{id:"gcp"},"GCP"),(0,o.kt)("h3",{id:"authenticaton-setup-2"},"Authenticaton setup"),(0,o.kt)("h3",{id:"secure-state-file-in-gcs-google-cloud-storage"},"Secure state file in GCS (Google Cloud Storage)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terraform"},'terraform {\n  backend "gcs" {\n    bucket  = "tf-state-prod"\n    prefix  = "terraform/state"\n  }\n}\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Reference")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.terraform.io/language/settings/backends/gcs"},"Store state in GCS"))))),(0,o.kt)("h2",{id:"sample-terraform-scripts"},"Sample terraform scripts"),(0,o.kt)("p",null,"Multi cloud terrafrom project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terrafrom",metastring:'title="provider.tf"',title:'"provider.tf"'},'terraform {\n  required_providers {\n    aws = {\n      source  = "hashicorp/aws"\n      version = "~> 4.2"\n    }\n    azurerm = {\n      source  = "hashicorp/azurerm"\n      version = "2.98.0"\n    }\n    google = {\n      version = "~> 3.8"\n    }\n    random = "~> 2.2"\n    docker  = "~> 2.7"\n  }\n  backend "azurerm" {\n        resource_group_name  = "tfstate"\n        storage_account_name = "<storage_account_name>"\n        container_name       = "tfstate"\n        key                  = "terraform.tfstate"\n  }\n}\n\nprovider "aws" {\n  profile    = var.aws.profile\n  region     = var.aws.region\n  access_key = var.aws.access_key\n  secret_key = var.aws.secret_key\n}\n\nprovider "azurerm" {\n  subscription_id = var.azure.subscription_id\n  # client_id       = var.azure.client_id\n  # client_secret   = var.azure.client_secret\n  tenant_id = var.azure.tenant_id\n  features {}\n}\n\nprovider "google" {\n  credentials = file("account.json")\n  project     = var.gcp.project_id\n  region      = var.gcp.region\n}\n\nprovider "docker" {\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terrafrom",metastring:'title="terraform.tfvars"',title:'"terraform.tfvars"'},'\naws = {\n  profile       = "default"             # ENV = AWS_PROFILE\n  region        = "us-west-2"           # ENV = AWS_REGION \n  access_key    = "xxxxxxxxxxxxxxxxxxx" # ENV = AWS_ACCESS_KEY_ID \n  secret_key    = "xxxxxxxxxxxxxxxxxxx" # ENV= AWS_SECRET_ACCESS_KEY\n}\nazure = {\n  subscription_id   = "xxxx-xxxxx-xxxxx-xxxxx-xxxx-xxxx"    # ENV = ARM_SUBSCRIPTION_ID \n  # client_id       = "xxxx-xxxxx-xxxxx-xxxxx-xxxx-xxxx"    # ENV = ARM_CLIENT_ID\n  # client_secret   = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx"    # ENV= ARM_CLIENT_SECRET \n  tenant_id         = "xxxx-xxxxx-xxxxx-xxxxx-xxxx-xxxx"    # ENV = ARM_TENANT_ID \n  location          = "centralus"\n}\n\ngcp = {\n  project_id = "<project_id>"\n  region     = "us-east1"\n}\n\n\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terrafrom",metastring:'title="variables.tf"',title:'"variables.tf"'},'variable "aws" {\n  type = object({\n    profile = string\n    region  = string\n    access_key = string\n    secret_key = string\n  })\n}\n\nvariable "azure" {\n  type = object({\n    subscription_id = string\n    # client_id       = string\n    # client_secret   = string\n    tenant_id       = string\n    location        = string\n  })\n}\n\nvariable "gcp" {\n  type = object({\n    project_id = string\n    region     = string\n  })\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terrafrom",metastring:'title="output.tf"',title:'"output.tf"'},'output "addresses" {\n  value = {\n    # aws          = module.aws.network_address\n    # azure        = module.azure.network_address\n    # gcp          = module.gcp.network_address\n    # loadbalancer = module.loadbalancer.network_address\n  }\n}\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Terraform Reference")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.terraform.io/language/state/workspaces"},"Terraform Workspace Tutorial")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://meirg.co.il/2020/12/10/infrastructure-as-code-with-terraform-for-multiple-environments/"},"IAC with Terraform for Mulitiple Environments")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-use-ansible-with-terraform-for-configuration-management"},"Terraform wiht Ansible")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.terraform.io/language/settings/backends/local"},"Terraform Available backends"))))),(0,o.kt)("h2",{id:"landing-zone-creation"},"Landing Zone Creation"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Best Practices Reference")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://registry.terraform.io/modules/MitocGroup/landing-zone/aws/latest"},"AWS"))))))}d.isMDXComponent=!0}}]);