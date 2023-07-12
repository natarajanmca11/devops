---
slug: dotnet
title: Microsoft Dotnet
# authors: [natarajan]
tags: [dotnet, dotnetcore]
sidebar_position: 1
---

# Dotnet



# Compilation

### Single file

1. [Single File App in Dotnet 6](https://dotnetcoretutorials.com/2021/11/10/single-file-apps-in-net-6/)






## Awesome Dotnet

1. Query Builder [sqlkata](https://sqlkata.com/)
2. OPEN API [swashbuckle](https://docs.microsoft.com/en-us/aspnet/core/tutorials/getting-started-with-swashbuckle?view=aspnetcore-6.0&tabs=visual-studio)
3. Mediator [MediatR](https://github.com/jbogard/MediatR/wiki)
4. CQRS [CQRS](https://event-driven.io/en/cqrs_is_simpler_than_you_think_with_net6/)
5. Sample Dotnet Project [Best Practice](https://github.com/cwilby/acme-architecture)

## Github Actions to build Dotnet 7 project

:::info Operating System
This github actions runs on windows-latest OS.
:::info

```yml
name: SAST With Sonar Cloud

on:
  push:
    branches: ["feature/*"]
  pull_request:
    branches: ["main"]
  workflow_dispatch:

jobs:
  sast:
    name: Static Application Security Testing
    runs-on: windows-latest
    steps:
      - name: Set up JDK 11
        uses: actions/setup-java@v3
        with:
          distribution: "microsoft"
          java-version: 11

      - uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: Cache SonarQube packages
        uses: actions/cache@v3
        with:
          path: ~/sonar/cache
          key: ${{ runner.os }}-sonar
          restore-keys: ${{ runner.os }}-sonar

      - name: Cache SonarQube scanner
        id: cache-sonar-scanner
        uses: actions/cache@v3
        with:
          path: ./.sonar/scanner
          key: ${{ runner.os }}-sonar-scanner
          restore-keys: ${{ runner.os }}-sonar-scanner

      - name: Install SonarQube scanner
        shell: powershell
        run: dotnet tool update --global dotnet-sonarscanner  --version 5.12.0

      - name: Install Dotnet Coverage tool
        shell: powershell
        run: dotnet tool update --global dotnet-coverage --version 17.4.4

      - name: Build and analyze
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
        shell: powershell
        run: |
          dotnet tool list -g
          dotnet build --no-incremental
          dotnet coverage collect "dotnet test" -f xml -o "coverage.xml"
          dotnet sonarscanner begin /k:"<project-key>" /o:"<org-name>" /d:sonar.login="${{ secrets.SONAR_TOKEN }}" /d:sonar.cs.vscoveragexml.reportsPaths=coverage.xml /d:sonar.host.url="https://sonarcloud.io"
          dotnet build --no-incremental
          dotnet sonarscanner end /d:sonar.login="${{ secrets.SONAR_TOKEN }}"
```