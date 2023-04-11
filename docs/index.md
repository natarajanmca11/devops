---
slug: introduction
title: Introduction
# authors: [natarajan]
tags: [azure, aws, gcp, dotnet, rust, java, ansible, nginx, nodejs]
sidebar_position: 1
---


## Identiy Provider

1. [Casbin](https://casbin.org/en/)
2. [Identity Server 4](https://identityserver4.readthedocs.io/en/latest/)
3. Keycloak
4. [Azure Active Directory](https://docs.microsoft.com/en-us/azure/active-directory-b2c/enable-authentication-web-api)

## Identity Broker

1. [Dex](https://github.com/dexidp/dex)

## Cloud & Tools


| Name          | Azure                 | AWS       | GCP       | Cloud Agnostic                      |
| -------       | -----------           |---------  |------     | ------                              |
| Authentication| Azure AD                                    ||| KeyClock, Casbin,                   |
|^^             |                       |           |           | IdentityServer 4                    |
|                               Infrastructure Monitoring                                          ||||
| Monitoring    | Monitor               |           |           | Promatheus                          |
|                               Application Monitoring                                             ||||
| Logging       | Application Insights  |           |           | Promatheus                          |
| ^^            |                       |           |           | Zipkin                              |
| -------       | -----------           |---------  |------     | ------                              |



## DevOps

1. [90 Days of DevOps](https://github.com/michaelcade/90daysofdevops)