# Setup
-> [All Assets here](https://github.com/mjkodkks/setup/tree/main/docs/database/postgresql) <-
### docker-compose.yml
```
version: '3'

services:
  postgres:
    container_name: postgres
    image: postgres:14.1-alpine
    restart: always
    volumes:
      - postgres-data:/var/lib/postgresql/data/
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=postgres
    ports:
      - 5432:5432
      
volumes:
  postgres-data:
```

### Run
```sh
docker-compose up
```
### OR script.sh
```
#!/bin/sh
docker-compose down && docker-compose build --no-cache && docker-compose up -d
```

### dump
```sh
### for dump and import db
pg_dump -h {host} -U {user} {name} -O -x > ~/dump.sql
psql -h {host} -U {user} {name} < dump.sql
```