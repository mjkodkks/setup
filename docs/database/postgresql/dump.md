```sh
### for dump and import db
pg_dump -h {host} -U {user} {name} -O -x > ~/dump.sql
psql -h {host} -U {user} {name} < dump.sql
```