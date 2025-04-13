---
slug: podman
title: PODMAN
# authors: [natarajan]
tags: [podman, kubernetes, container, pods, docker]
sidebar_position: 13
---

Podman (short for Pod Manager) is a container management tool developed by Red Hat. It allows the creation, management, and deployment of containers in a way that is similar to Docker, but with some key architectural and operational differences. Podman supports the OCI (Open Container Initiative) standards, making it compatible with tools and images designed for Docker.

Podman is an increasingly popular alternative to Docker, primarily because of its unique features, such as running containers without requiring a daemon (daemonless) and offering deeper integration with Linux features.

## Instalation in Windows

```sh

choco install podman-desktop
choco install podman-cli
```

## Prerequsites to run the podman

1. Enable Hyper-V

```ps1
# Powershell Script
# Verify Hyper-V Is Enabled
Get-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V
# Enable Hyper-V
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
```
or Switch to WSL2 Backend (Optional)

```sh
wsl --install
podman machine set --engine-option rootless=true
```

## Podman start

```sh
podman machine ls
podman machine stop
podman machine rm
podman machine init
podman machine start

```

## Running and Managing Containers

```sh
podman run -it --rm alpine
podman ps
podman stop <container-id>
```
