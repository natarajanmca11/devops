---
slug: angular
title: Angular
# authors: [natarajan]
tags: [angular, javascript]
sidebar_position: 4
---


## Known compile/build Errors

### JavaScript heap out of memory Error

```shell
FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
```

Set the following environment variable to resolve the javascript heap out of memeory.

```shell
ENV NODE_OPTIONS=--max_old_space_size=2048
```
