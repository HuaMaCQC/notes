# conf

## 基本
檔案位置: /etc/nginx/conf.d/default.conf

[官方doc](http://nginx.org/en/docs/)

docker copy
```
  $ docker cp CONTAINER_ID:/etc/nginx/conf.d/default.conf .
  
  # 拷貝 default.conf 到目前的位置
```

## 代理轉發
```
location ~ /api/ {
  proxy_pass host.com
}

# 將 location/api/* 轉發到 host.com/api/*
```

## GZ

### 檢查壓縮文件是否存在
```
 gzip_static on | off | always
```
* on 啟動
* off 禁用
* always gzip文件在所有情況下都使用，不檢查客戶端是否支持它

## SSL
### 啟動SSL
```
ssl on;
```

### 指定SSL位置
```
ssl_certificate /etc/nginx/certs/client.crt;
ssl_certificate_key /etc/nginx/certs/client.key;
```

nginx 

nginx -s stop

nginx -s reload

nginx -s quit


