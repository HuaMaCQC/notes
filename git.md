# 指令

## **查看目前檔案狀態 暫存區狀態**

```bash
git status
```

## **提交暫存區**

```bash
git add 檔案名稱
```

## **branch 分支**

```bash
git branch "branch name"
```

- -a 查看
- -d 刪除
- -D 強制刪除

## **checkout 切換分支**

```bash
git checkout <branch>
```

## **commit 提交**

```bash
git commit -m "版本說明"
```

- git commit --amend 改寫上一個 commit

## **push 上傳**

```bash
git push
```

- 上傳目前 HEAD 指向的分支到線上 123 分支

```bash
git push origin HEAD:123
```

- -f 強制覆蓋

```bash
git push origin HEAD:123 -f
## 如果commit 是 commit --amend 需要用-f 強制上傳
```

## **pull 拉取**

```bash
git pull
```

- 衝突 1 顯示合併將會覆蓋擬修改的檔案

```bash
# 將修改檔案暫存起來
$ git stash

# 查看
$ git stash list

# 將檔案合併回來
$ git stash pop stash@{0}
```

## **reset 前往**

| 模式     | --mixed | --soft | --hard |
| -------- | ------- | ------ | ------ |
| 工作區域 | 不變    | 不變   | 捨棄   |
| 暫存區   | 丟掉    | 不變   | 丟掉   |

前往上一個 commit

```bash
git reset --hard
```

前往 master 的上一次

```bash
$ git reset master^
## 要上幾次就加幾次 ^
```

or

```bash
git reset master~1
```

前往 c8763 的 commit

```bash
git reset c8763
```

說明:

這個指令你原本可能會解讀成「請幫我拆掉某個 Commit」，但事實上並沒有真的把某個 Commit「拆掉」
正確的說，這個指令應該要解讀成「`我要前往某 Commit 之前的狀態`」或是「`我要變成某 Commit 之前的狀態`」，而隨著使用不同的參數模式，原本的這些檔案就會丟去不同的區域。

## **reflog 查看紀錄**

```bash
$ git reflog

or

$ git log -g
```

## 上傳至gitHub

1. 到專案首頁 點選 => clone or download ![image](https://github.com/HuaMaCQC/notes/blob/master/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7%202020-04-22%20%E4%B8%8B%E5%8D%884.30.50.png?raw=true)

2. 點選 use https (如果顯示use SSH 代表你目前顯示網址就是http了) => 複製網址

3. 打開cmd 指定要放在哪之後打上

```bash
git clone 網址
```

4. 將程式碼都複製進去資料夾

5. 輸入

``` bash
git add .

git commit -m "init"

git push origin master
```

**不負責任提示 如果還是衝突可以直接強制提交 git push origin master -f**
如果對git 不熟記得備份喔