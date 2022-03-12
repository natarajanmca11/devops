---
slug: container
title: Container
# authors: [natarajan]
tags: [container, docker, podman, dotnet, angular, react, spring-boot, rust ]
sidebar_position: 3
---

## Docker


## Podman


## Dockerfile Samples

### Dotnet Smaller and Secure Container Image

```dockerfile

FROM mcr.microsoft.com/dotnet/sdk:5.0-alpine AS publish
WORKDIR /src
COPY ContainerSample.csproj ./

RUN dotnet restore "./ContainerSample.csproj" --runtime alpine-x64
COPY . .
RUN dotnet publish "ContainerSample.csproj" -c Release -o /app/publish \
  --no-restore \
  --runtime alpine-x64 \
  --self-contained true \
  /p:PublishTrimmed=true \
  /p:PublishSingleFile=true

FROM mcr.microsoft.com/dotnet/runtime-deps:5.0-alpine AS final

RUN adduser --disabled-password \
  --home /app \
  --gecos '' dotnetuser && chown -R dotnetuser /app

# upgrade musl to remove potential vulnerability
RUN apk upgrade musl

USER dotnetuser
WORKDIR /app
EXPOSE 5000
COPY --from=publish /app/publish .

ENTRYPOINT ["./ContainerSample", "--urls", "http://localhost:5000"]

```

:::tip Reference

1. [Build Smaller and Secure Docker Image`](https://thorsten-hans.com/how-to-build-smaller-and-secure-docker-images-for-net5) 
2. [Instrumenting ASP.NET Core Application For Exporting Metrics to Prometheus](https://www.c-sharpcorner.com/article/instrumenting-asp-net-core-application-for-exporting-metrics-to-prometheus/)
3. [Dockerfile Sample](https://medium.com/01001101/containerize-your-net-core-app-the-right-way-35c267224a8d)

:::tip

### Angular Container image

```dockerfile
FROM alpine:latest AS build

RUN apk update \\
    && apk add nodejs --no-cache && node -v \\
    && apk add npm --no-cache && npm -v 

WORKDIR /opt/ng
COPY package.json package-lock.json ./
ENV NODE_OPTIONS=--max_old_space_size=2048
RUN npm install
 
ENV PATH="./node_modules/.bin:$PATH" 
 
COPY . ./
RUN ng build --prod

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/nginx.conf
COPY --from=build /opt/ng/dist /usr/share/nginx/html
# RUN addgroup -S <group-name> && adduser -S <user-name> -G <group-name>
# USER <user-name>:<group-name>
RUN addgroup -S svc-group && adduser -S svc-user -G svc-group
USER svc-user:svc-group
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
```

### Spring Boot Container Image

```dockerfile
FROM maven:3.6.1 AS build
WORKDIR /opt/workspace
# Copy All source code to workspace
COPY . ./
RUN mvn install

FROM openjdk:8-jdk-alpine
RUN addgroup -S svc-group && adduser -S svc-user -G svc-group
USER svc-user:svc-group
COPY --from=build /opt/workspace/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]

```

### Rust Container Image

```dockerfile
FROM rust:latest as build
WORKDIR /ws
COPY . ./
RUN rustup default nightly && \
    rustup target add x86_64-unknown-linux-musl && \
    rustc --version && \
    cargo --version && \
    cargo build --release --target x86_64-unknown-linux-musl

FROM alpine:latest
COPY --from=build /ws/target/x86_64-unknown-linux-musl/release/<app-name> ./ 
COPY --from=build /ws/templates ./templates
EXPOSE 8000
CMD ["./<app-name>"]
```

