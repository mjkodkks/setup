https://hashinteractive.com/blog/docker-multi-stage-build-for-nuxt-generate/

### Dockerfile
```sh
# pull official node base image
FROM node:16-alpine3.14 as builder

# set working directory all command COPY, RUN will take action in here.
WORKDIR /app
# app/


# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH
# ENV BUILD_PATH ./dist

# install app dependencies
COPY package.json .
COPY yarn.lock .
RUN corepack enable
RUN yarn install
# on docker will be like ... 
# app/
# ├─ package.json
# ├─ yarn.lock
# ├─ node_modules/

# copy all code to /app prepare to build 
COPY . .
# app/
# ├─ package.json
# ├─ yarn.lock
# ├─ node_modules/
# ├─ src/
# ├─ public/
# ...


# build app
RUN yarn generate
# app/
# ├─ ...
# ├─ build/
# ...

FROM nginx:1.21.0-alpine as production

# # copy build folder from /app to nginx web path
COPY --from=builder /app/dist /usr/share/nginx/html

# # Add your nginx.conf
# # COPY nginx.conf /etc/nginx/conf.d/default.conf

# # Expose port
# EXPOSE 80
# # Start nginx
CMD ["nginx", "-g", "daemon off;"]

```

### docker-compose.yml
```sh
version: "3.9"
services:
  # node:
  #   container_name: dkks-builder
  #   build: .

  web:
    container_name: dkks-nginx
    build: .
    restart: always
    ports:
      - "80:80"
```

Run
```
docker-compose down && docker-compose build --no-cache && docker-compose up -d
```