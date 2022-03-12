---
slug: kubernetes
title: Kubernetes
# authors: [natarajan]
tags: [kubernetes, container]
sidebar_position: 4
---

:::tip Reference

1. [Deployment Strategies In Kubernetes](https://auth0.com/blog/deployment-strategies-in-kubernetes/)
2. [A visual guide on troubleshooting Kubernetes deployments](https://learnk8s.io/troubleshooting-deployments)
3. [How to a pull Docker Image from GCR in any non-GCP Kubernetes cluster](https://medium.com/hackernoon/today-i-learned-pull-docker-image-from-gcr-google-container-registry-in-any-non-gcp-kubernetes-5f8298f28969)

:::tip

## Kubernetes Commands

```shell
kubectl exec -it <pod-name> -- [sh | bin/sh | bin/bash] # Execute a container

```

## Kubernetes Ingress

### NGINX Ingress Controller

```shell
kubectl get ingress
```
[NGINX Ingress Controller Annotations](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/)

## Minikube

### Start Minikube
```shell
minikube start --cpus=4 --memory=8g --disk-size=25g --container-runtime=[docker | crio]
```
### Access minikube docker environment
```shell
eval $(minikube docker-env)
```