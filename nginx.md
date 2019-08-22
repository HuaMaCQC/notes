# conf

## 基本
檔案位置: /etc/nginx/conf.d/default.conf

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

`未驗證`

```
# 開啟gzip
gzip off;

# 啟用gzip壓縮的最小檔案，小於設定值的檔案將不會壓縮
gzip_min_length 1k;

# gzip 壓縮級別，1-9，數字越大壓縮的越好，也越佔用CPU時間，後面會有詳細說明
gzip_comp_level 1

# 進行壓縮的檔案型別。javascript有多種形式。其中的值可以在 mime.types 檔案中找到。
gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png application/vnd.ms-fontobject font/ttf font/opentype font/x-woff image/svg+xml;

# 是否在http header中新增Vary: Accept-Encoding，建議開啟
gzip_vary on

# 禁用IE 6 gzip
gzip_disable "MSIE [1-6]\.";

# 設定壓縮所需要的緩衝區大小     
gzip_buffers 32 4k;

# 設定gzip壓縮針對的HTTP協議版本
gzip_http_version 1.0;


