---
slug: go
title: Go Language
# authors: [natarajan]
tags: [go]
sidebar_position: 6
---

# Go Language

## Install Go Language

Download the [MSI](https://go.dev/doc/install) and install.

``sh
choco install golang
``

## Initialize Go Module

```sh
go version
go mod init <module-name>

```
## Go - Install dependency / Check for Unused Dependencies

```sh
go mod tidy
```

## Build the application

```sh
go build -ldflags="-s -w" -o myapp

# If you want to embed version info (optional):

go build -ldflags="-s -w -X main.version=1.2.3" -o myapp

```

## Go Run

```sh
go run main.go

```

## Upgrade the Go Lang Version

```sh

go version
```


## VS Code Plugin

1. [Go Lang](https://go.dev/)