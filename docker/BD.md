
## mariadb

```
docker run --name HuaMaDB -e MYSQL_ROOT_PASSWORD=123456 -p 3633:3306 -d mariadb:latest
docker run --name HuaMaBDAdmin -p 8099:80 --link HuaMaDB -e PMA_HOST="HuaMaDB" -d phpmyadmin/phpmyadmin
```

- --name 名稱
- -e 背景執行
- -p port號
- --link 容器連接
- PMA_HOST 容器