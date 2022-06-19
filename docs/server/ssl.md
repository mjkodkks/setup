# Setup SSL by Let's Encrypt
##  Certbot by Docker
```sh
## for create
docker run -it --rm -p 81:80 --name letsencrypt -v "/etc/letsencrypt:/etc/letsencrypt"  certbot/certbot certonly --standalone -d {HOST}

## {HOST} : mysite.com, example.com, www.example.coim
```
```sh
## for renew
docker run -it --rm -p 81:80 --name letsencrypt -v "/etc/letsencrypt:/etc/letsencrypt"  certbot/certbot renew
```
### if use nginx reload nginx config
```sh
docker exec {NGINX_CONTAINER_NAME} nginx -s reload
```