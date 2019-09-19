# 指令

## **$ ll**
查看檔案

## **$ ls** 
查看檔案
* -a 顯示隱藏檔
* -al 同時顯示隱藏檔與詳細資料  

## **$ cd 位置/資料夾**
 前往位置
 1. $cd .. 回上一層

## **$ ipconfig**
查看網路

## **$ rm**
刪除檔案
* -f 強制刪除檔案
* -i 刪除之前會詢問
* -r 遞迴刪除, 整個資料夾一起砍
## **$ cp**
複製檔案

## **產生SSL**
```
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout client.key -out client.crt
```
* `req` 處理證書簽署請求
* `-x509` 生成自簽名證書
* `-nodes` 跳過證書設置密碼的階段
* `-days 365` 證書有效期限365天
* `-newkey rsa:2048` 生成一個新的私鑰，用2048的RSA
* `-keyout` 新的私鑰要放在哪
* `-out` 新的證書要放在哪


## **$ netstat**
觀察網路狀況

## **$ vi**
開啟檔案
* :wq! 保存離開(強制)
* :wq 保存離開
* :q! 離開不保存
* :q 離開
* :w [filename] 另存新檔

# 待測試指令

1. $ route add -net 192.56.76.0 netmask 255.255.255.0 dev eth0
`將一個網路為 192.56.76.XXX 且子網路為 255.255.255.0 的位置加入你的 eth0`
[網址](http://linux.vbird.org/linux_basic/redhat6.1/linux_06command.php)

1. /etc/init.d/network restart 重新啟動整個網路的參數

# 檔案位置

## **/etc**
系統的設定
