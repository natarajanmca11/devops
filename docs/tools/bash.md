---
slug: bash
title: Bash
# authors: [natarajan]
tags: [bash]
sidebar_position: 10
---

## Docs

```sh 
man bash
info bash
```

## Bash Script file
```sh title="Common usage"
#!/bin/bash
```
(or)
```sh
#!/usr/bin/env bash
```

## Execute

```sh
chmod +x script.sh
./script.sh
```

## Variables

```sh
# Declare variable
variableName="value"
export variableName2="value2"
declare -x variableName3="value3"

# Access the variable
echo $variableName
echo $variableName2
echo $variableName3
```

## Grouping
```sh
() -> scope clear
{} -> scope extend
```
## Bash Commands

```sh
time find / -name core


```