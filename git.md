# 指令

## **查看目前檔案狀態 暫存區狀態**
```
$ git status
```
## **提交暫存區**
```
$ git add 檔案名稱
```
## **branch 分支**
```
$ git branch "branch name"
```
* -a 查看
* -d 刪除
* -D 強制刪除

## **checkout 切換分支**
```
$ git checkout <branch>
```

## **commit 提交**
```
$ git commit -m "版本說明"
```
 * git commit --amend 改寫上一個commit
## **push 上傳**
```
$ git push
```
* 上傳目前HEAD指向的分支到線上123分支
```
$ git push origin HEAD:123
```
* -f 強制覆蓋
```
$ git push origin HEAD:123 -f 
## 如果commit 是 commit --amend 需要用-f 強制上傳
```

## **pull 拉取**
```
$ git pull
```
* 衝突1 顯示合併將會覆蓋擬修改的檔案
```
# 將修改檔案暫存起來
$ git stash

# 查看 
$ git stash list

# 將檔案合併回來
$ git stash pop stash@{0}
```

## **reset 前往**

 模式 | --mixed | --soft | --hard 
---|---|---|---
工作區域|不變|不變|捨棄
暫存區|丟掉|不變|丟掉

前往上一個commit
```
git reset --hard
```

前往 master 的上一次
```
$ git reset master^
## 要上幾次就加幾次 ^
```
or 
```
$ git reset master~1
```

前往c8763 的commit
```
git reset c8763
```
說明:

這個指令你原本可能會解讀成「請幫我拆掉某個 Commit」，但事實上並沒有真的把某個 Commit「拆掉」
正確的說，這個指令應該要解讀成「`我要前往某 Commit 之前的狀態`」或是「`我要變成某 Commit 之前的狀態`」，而隨著使用不同的參數模式，原本的這些檔案就會丟去不同的區域。

## **reflog 查看紀錄**
```
$ git reflog

or 

$ git log -g
```
