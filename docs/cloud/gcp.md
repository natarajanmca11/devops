---
slug: gcp
title: Google Cloud Provider (GCP)
# authors: [natarajan]
tags: [gcp]
sidebar_position: 3
---

## Install Google Cloud Cli



### Windows OS

```shell title="Run in Powershell"
(New-Object Net.WebClient).DownloadFile("https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe", "$env:Temp\GoogleCloudSDKInstaller.exe")

& $env:Temp\GoogleCloudSDKInstaller.exe
```

### Linux / Other OS

[Install GCP Cli in Linux](https://cloud.google.com/sdk/docs/install#linux)


## Login

### Console Login (Open Browser login window)
```shell

gcloud init 
gcloud init --console-only  # `--console-only` flag to prevent the command from launching a browser-based authorization flow, if required

```

### Login using Service Account

1. Create the service Account
2. Open the Service account and navigate to `KEYS` tab and click `AddKey` -> `Create new key` option.
3. Select `Json`/`P12` formate and click `create` button. It will download `serviceaccount.json` file.

```shell
# Login

gcloud auth activate-service-account --key-file serviceaccount.json

# List

gcloud auth list
```

:::tip

Before access any service in GCP, please enable the appropriate API and provide the required permission to service account

:::tip

## SSH Config

Copy the SSH Key from `GCP -> Compute Engine -> Settings -> Metadata -> SSH Keys`. If there no key available, generate new one with the below command and add the public key into SSH Keys.

```shell title="Generate SSH key"

ssh-keygen -t rsa -f ~/.ssh/<ssh-file-name> -C <UserName> -b 2048

```