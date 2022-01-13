# docker 指令


### **啟動docker**
```
$ sudo systemctl start docker
```

### **查看版本**
```
$ docker version
```

### **自動啟動**
```
$ systemctl enable docker
```

### **顯示images**
```
$ docker images
```

### **顯示啟動的容器**
```
$ docker ps
```
* `-a` 顯示全部

### **進入容器**
```
$ docker exec
```
* `-i -t` 可以用Linux 命令提示符

### **刪除容器**
```
$ docker rm 名稱(CONTAINER ID)
```
* 刪除全部  `docker rm $(docker ps -a -q)`(不會刪除正在運行的)
* 刪除全部(包含正在運行的) `docker rm $(docker ps -a -q) -f`

### **刪除images**
```
$ docker rmi 名稱(IMAGE ID)
```

### **將專案Dockerfile build成images**
```
$ docker build -t images名稱 .
``` 
* `-t` 標記
*  `--no-cache` 避免在 Build Docker image 時被 cache 住

### **啟動images**

```
$ docker run 名稱(IMAGE ID)
```

* `-p 3000:8000` 容器的8000port 對應到容器外的 3000port

### **啟動compose (.yml)**

```
$ docker-compose up
```
* -d 背景執行

### **暫停compose (.yml)**
```
$ docker-compose stop
```

### **刪除**
```
$ docker-compose down
```
* --volumes  刪除Redis容器使用的數據卷

### **複製**

複製 CONTAINER_ID這個容器的/etc/nginx 到當前目錄
```
$ docker cp CONTAINER_ID:/etc/nginx
```

## **地雷區**
1. 如果裝了docker windows版 會讓 vm虛擬機掛掉。 主要原因是Microsoft Hyper-V 無法與 vm相容 如果不小心裝了 docker windows可以到 cmd執行 `$ dism.exe /Online /Disable-Feature:Microsoft-Hyper-V` 關閉他。