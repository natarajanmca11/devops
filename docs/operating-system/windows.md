---
slug: windows
title: Windows
# authors: [natarajan]
tags: [windows]
sidebar_position: 4
---


## Domain Controller Creation

1. Server Manager -> Add Roles and Features -> Instalation Type -> Role based or feature based Instalation -> Server Roles -> Active Directory Domain Services -> Add Features -> Restart the detination server if required -> Install

## Active Directory Domain Controller Configuration


## Enable Multiple RDP Sessions in Windows Server OS
1. Windows Run -> `gpedit.msc`
3. Go to Computer Configuration > Administrative Templates > Windows Components > Remote Desktop Services > Remote Desktop Session Host > Connections.
4. Set `Restrict Remote Desktop Services user to a single Remote Desktop Services session` to Disabled.
5. Double click `Limit number of connections` and set the RD Maximum Connections allowed to 999999.

## Windows Commands

```shell

ping google.com         # lookup domain name
nslookup google.com     # Reverse lookup domain name

```