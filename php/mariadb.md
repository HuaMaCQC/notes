# mariabd or doecker 

## install images
```
docker pull mariadb
```

## run 
```
$ docker run --name DB -p 3306:3306 -e MYSQL_ROOT_PASSWORD=1234 -d mariadb:tag --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
```