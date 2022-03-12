---
slug: ssh
title: SSH
# authors: [natarajan]
tags: [ssh, ansible, azure, aws, gcp]
sidebar_position: 8
---

### Create SSH Key
1. [Youtube SSH Login in Ubuntu](https://www.youtube.com/watch?v=8QGpHQ2SyG8)
2. [Github SSH reference](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh)
3. [SSH Based Auth](https://www.digitalocean.com/community/tutorials/how-to-configure-ssh-key-based-authentication-on-a-linux-server)
4. [GCP Ref](https://cloud.google.com/compute/docs/connect/create-ssh-keys)



```shell title="Generate SSH key"

ssh-keygen -t rsa -f ~/.ssh/<ssh-file-name> -C <UserName> -b 2048

```
## SSH Login with Key

### Debian OS

```shell title="SSH Login"

ssh -i PATH_TO_PRIVATE_KEY USERNAME@EXTERNAL_IP

```


## Known Issues

### Issue 1: UNPROTECTED PRIVATE KEY FILE

```
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@         WARNING: UNPROTECTED PRIVATE KEY FILE!          @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Permissions for 'sshuser' are too open.
It is required that your private key files are NOT accessible by others.
This private key will be ignored.
Load key "sshuser": bad permissions
sshuser@135.97.89.129: Permission denied (publickey).
```
#### Solution for Windows SSH Client

Private key file should not have more than one user access. Removed other users from the property. [Ref](https://stackoverflow.com/questions/64687271/how-to-avoid-permission-denied-publickey-ssh-key-windows)

1. Right click the Key file first1.pem on explorer and Go to Properties > Security > Advanced > Disable Inheritance
2. Select "Convert inherited permissions into explicit permissions on this object"
3. Then delete everything there ( Including Administrator, User, User Groups ) and Click Add button.
4. Now select select a principal > Advanced > Find Now > [ Your User object ] > OK
5. Now you can tick "Full Control" then press OK

Now your key file is not accessible by others.

### Issue 2: 
