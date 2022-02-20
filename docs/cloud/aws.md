---
slug: aws
title: Amazon Web Srvice (AWS)
# authors: [natarajan]
tags: [aws]
sidebar_position: 2
---

## Install AWS Cli

Install Latest version of AWS CLI( > 2.0)

## Generate Access key and Secret key in AWS Console

## Login

```shell title=Authenticate AWS Cli
aws configure set aws_access_key_id "${AWS_ACCESS_KEY_ID}"
aws configure set aws_secret_access_key "${AWS_SECRET_ACCESS_KEY}"
aws configure set region "${DEFAULT_REGION_NAME}"
```

or just run `aws configure` command in console. It will ask althe required values to authenticate.
