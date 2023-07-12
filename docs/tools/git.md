---
slug: git
title: Git
# authors: [natarajan]
tags: [git]
sidebar_position: 11
---

## Rollback last commit in a local git repository

```sh title="Revert the last commit in a local git repository"
git reset HEAD~1
```

## Revert the last commit from GitHub remote repository

```sh title="Revert the last commit from remote repository"
git checkout <branch-name>

# Revert 1 commit from remote
git push --force origin HEAD~1:<branch-name>

```


