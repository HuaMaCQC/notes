# 增加一個別名ip
* 增加
```
sudo ifconfig lo0 alias 127.0.0.2
```
* 移除
```
sudo ifconfig lo0 -alias 127.0.0.2
```


# login hook 登入指令碼
[官方網站](https://support.apple.com/zh-cn/HT2420)


# 開機執行sh執行檔
* 新增.sh檔
* 檔案選擇用終端機開啟
* 系統偏好設定 > 登入項目 > 選擇剛剛新增的檔案

# 設定不必打密碼執行sudo
```
sudo visudo

>

user ALL=NOPASSWD:/sbin/ifconfig

```