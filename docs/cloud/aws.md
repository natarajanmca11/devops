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

## Credentials profile

The credentials file uses a different naming format than the AWS CLI config file for named profiles. Do not use the word profile when creating an entry in the credentials file.

~/.aws/credentials (Linux & Mac) or %USERPROFILE%\.aws\credentials (Windows)

```ini

[default]
aws_access_key_id=AKIAIOSFODNN7EXAMPLE
aws_secret_access_key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

[user1]
aws_access_key_id=AKIAI44QH8DHBEXAMPLE
aws_secret_access_key=je7MtGbClwBF/2Zp9Utk/h3yCo8nvbEXAMPLEKEY

```

## Config profile

~/.aws/config (Linux & Mac) or %USERPROFILE%\.aws\config (Windows)

```ini
[default]
region=us-west-2
output=json

[profile user1]
region=us-east-1
output=text
```


