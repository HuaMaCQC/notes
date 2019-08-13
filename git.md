# 指令

### **查看目前檔案狀態 暫存區狀態**
```
$ git status
```

### **提交暫存區**
```
$ git add 檔案名稱
```

### **commit**
```
$ git commit -m "版本說明"
```
 * git commit --amend 修改上一個commit
### **push**
```
$ git push
```

### **pull**
```
$ git pull
```

### **上傳目前的分支 到線上123-分支**
```
$ git push origin HEAD:123-
``` 
* -f 強制覆蓋

### **放弃本地的修改，直接覆盖**
```
$ git reset --hard
$ git pull origin
```
 * 其他衝突解決方法 [教學網站](https://blog.csdn.net/liuchunming033/article/details/45368237)



