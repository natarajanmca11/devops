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

```shell
# Create the service Account ()
# Open the Service account and navigate to `KEYS` tab and click `AddKey` -> `Create new key` option.
# Select Json/P12 formate and click create button. It will download `serviceaccount.json` file.

# Login

gcloud auth activate-service-account --key-file serviceaccount.json

# List

gcloud auth list
```




