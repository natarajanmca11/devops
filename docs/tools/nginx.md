---
slug: nginx
title: NGINX
# authors: [natarajan]
tags: [nginx]
sidebar_position: 2
---

# NGINX

## NGINX Instalation

### Windows

### Ubuntu

## HTTPS
:::tip
Please ensure that `443` port is enabled in `VM's firewall` and cloud provider's `security group / Networking`. 
:::

### HTTPS Web Server Sample Config

```yml title="nginx.conf"
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    # HTTPS server
    #
    server {
       listen       443 ssl;
       server_name  localhost {{SUBDOMAIN}}.mission.io;

       ssl_certificate      cert.pem;
       ssl_certificate_key  cert.key;

       ssl_session_cache    shared:SSL:1m;
       ssl_session_timeout  5m;

       ssl_ciphers  HIGH:!aNULL:!MD5;
       ssl_prefer_server_ciphers  on;

       location / {
           root   html;
           index  index.html index.htm;
       }
    }

    server {
        listen 80;
        server_name {{SUBDOMAIN}}.mission.io;
        return 301 https://{{SUBDOMAIN}}.mission.io$request_uri;
    }
}
```
:::tip

Http to Https redirection

    server {
        listen 80;
        server_name {{SUBDOMAIN}}.mission.io;
        return 301 https://{{SUBDOMAIN}}.mission.io$request_uri;
    }
:::


### HTTPS Proxy Server Sample Configuration

```yml title="nginx.conf"
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    client_max_body_size 1000M;
    #gzip  on;

    # HTTPS server
    #
    server {
       listen       443 ssl;
       server_name  localhost {{SUBDOMAIN}}.mission.io;

       ssl_certificate      cert.pem;
       ssl_certificate_key  cert.key;

       ssl_session_cache    shared:SSL:1m;
       ssl_session_timeout  5m;

       ssl_ciphers  HIGH:!aNULL:!MD5;
       ssl_prefer_server_ciphers  on;

       client_max_body_size 1000M;

       location / {
           root   html;
           index  index.html index.htm;
       }
       
       location /mission-api/ {
            proxy_pass http://127.0.0.1:8081$request_uri;
            client_max_body_size 1000M;
       }
    }
}
```

## Sample nginx.config files

TODO:

