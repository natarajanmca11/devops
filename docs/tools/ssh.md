---
slug: ssh
title: SSH
# authors: [natarajan]
tags: [ssh, ansible, azure, aws, gcp]
sidebar_position: 7
---

### Create SSH Key

1. [Github SSH reference](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh)
2. [SSH Based Auth](https://www.digitalocean.com/community/tutorials/how-to-configure-ssh-key-based-authentication-on-a-linux-server)
2. [GCP Ref](https://cloud.google.com/compute/docs/connect/create-ssh-keys)



```shell title="Generate SSH key"

ssh-keygen -t rsa -f ~/.ssh/<ssh-file-name> -C <UserName> -b 2048

```
## SSH Login with Key

### Debian OS

```shell title="SSH Login"

ssh -i PATH_TO_PRIVATE_KEY USERNAME@EXTERNAL_IP

```
