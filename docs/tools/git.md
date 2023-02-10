---
slug: git
title: Git
# authors: [natarajan]
tags: [git]
sidebar_position: 11
---

## Rollback last commit in local git repository

```sh title="Revert last commit in local git repository"
git reset HEAD~1
```

## Revert last commit from github remote repository

```sh title="Revert last commit from remote repository"
git checkout <branch-name>
git reset --hard <commit-hash> (or) git reset --hard HEAD~1
git push -f origin <branch-name>
```