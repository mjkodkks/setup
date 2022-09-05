---
layout: doc
---

### REF:

https://medium.com/@peerapats/host-%E0%B8%AB%E0%B8%A5%E0%B8%B2%E0%B8%A2-websites%E0%B9%83%E0%B8%99%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B8%A7-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-docker-nginx-b5002660f196

https://github.com/nginx-proxy/nginx-proxy

## Step 1 - Create Docker Network
```sh
$ docker network create sandbox_network
```
## Step 2 - Create Docker-Compose For hosting
```sh
version: '3'

services:
  nginx-proxy:
    image: jwilder/nginx-proxy
    container_name: 'nginx-proxy'
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - /var/run/docker.sock:/tmp/docker.sock:ro

  simpleweb:
    image: yeasy/simple-web:latest
    container_name: 'simpleweb'
    expose:
      - 80
    environment:
      - VIRTUAL_HOST=local.simpleweb.test

  simpleweb2:
    image: yeasy/simple-web:latest
    container_name: 'simpleweb2'
    expose:
      - 80
    environment:
      - VIRTUAL_HOST=local.simpleweb2.test

networks:
  default:
    external:
      name: sandbox_network
```

## Step 3 - Run 🚀
```
docker-compose up -d --build
```

## Step 4 - Test on local
```
edit hostfile add 'local.simpleweb.test' beside localhost

127.0.0.1       localhost local.simpleweb.test
```


## Done enjoy 👾