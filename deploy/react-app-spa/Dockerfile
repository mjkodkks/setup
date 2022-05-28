# pull official node base image
FROM node:16-alpine3.14 as builder

ENV NODE_ENV production

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
RUN yarn install --production
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
RUN yarn build
# app/
# ├─ ...
# ├─ build/
# ...

FROM nginx:1.21.0-alpine as production

# # copy build folder from /app to nginx web path
COPY --from=builder /app/build /usr/share/nginx/html

# # Add your nginx.conf
# # COPY nginx.conf /etc/nginx/conf.d/default.conf

# # Expose port
# EXPOSE 80
# # Start nginx
CMD ["nginx", "-g", "daemon off;"]