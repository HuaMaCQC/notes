```php
$link = mysqli_connect("連線主機","帳號","密碼","資料庫");  //連線
if(mysqli_connect_errno()) {echo '與資料庫連線失敗';exit;} //測試連線是否成功
if(!mysqli_set_charset($link,"utf8")){echo '設定失敗';} //設定萬國碼
```
## mysqli 類
```php
  mysqli_query($link,$sql); //執行一次sql
  mysqli_error($link); //回傳錯誤
```

## mysqli_result 類
```php
  mysqli_fetch_array(mysqli_query(),輸出選項)//回傳陣列 
    MYSQLI_NUM =>[數字]資料
    MYSQLI_ASSOC =>[欄位名]資料
    MYSQLI_BOTH  =>[數字]資料 [欄位名]資料
```
```php
<?php......?>
$變數 = array(); 陣列
```

## 印出
```php
 echo$變數; 
         //無法印出整個陣列 但可以印出 $變數[0]
         //變數or字串:內容

 print_r($變數);
        //可以印出陣列
        //陣列:       Array([0]=>內容 [1]=>內容2)
        //變數or字串: 內容

 var_dump($變數);
        //印出較詳細資料 
        //陣列: array(數量){[位置]=>string(位元)"內容" [位置]=>int(內容)}
        //變數: 型別(內容)
        //字串: string(位元)"內容"
        //只有字串才會印出(位元) 位元大小包含標籤
```

## 字串相加
```php
  echo'MY NAME'.$變數
``` 
* 單引號
  //看得懂標籤
  //看不懂變數,打甚麼給什麼
* 雙引號
  //看得懂標籤
  //看得懂變數,字串內有變數將自動將變數裡內容印出

```php
substr("內容",起始值,數量);//取其中某一段內容
  //substr("123_456",5)   輸出則是56
  //substr("123_456",-5)  輸出則是3_456
  //substr("123_456",1)   輸出則是23_456
  //substr("123_456",-1)  輸出則是6
  //數量為負值就是整個(字串長度-數量)=要取的字串長度

strpos('內容','要尋找的字串',在第幾位元後再尋找); //尋找
  //strpos('333333333','3','4') 輸出為4 (在33333333字串 從第四位元後開始尋找3 在第四位元後尋找到3)

explode('切割字元',內容||變數,數量); //分割字串存成陣列
  //數量=0 為存一個陣列 數量=2 為存2個陣列 數量=-1 為存成(全部-1)個陣列 預設為全部

implode('連接字元',陣列); //implode('<br>',$i) => i[0]<br>i[1]<br>i[2]

foreach($陣列 as $變數) //$變數=陣列 執行至最後一個陣列後結束

count($陣列) //取陣列的長度

$陣列名稱=array('陣列位置名稱'=>'內容')

empty() //如果是空物件=true;

isset() //bool 判斷變數是否設置

global $變數 //宣告變數可以在function裡用

error_reporting(0) //將錯誤顯示關閉

file() //讀取文件or網址內文 Array

array_pop() //陣列的最後一個回傳 陣列的最後一個會被刪除
array_shift() //陣列的最前一個回傳 陣列的最前一個會被刪除

array push($被存入的陣列 $存入變數) //陣列結尾插入多筆資料  說明:主要處理多個變數或者是陣列存入陣列尾端。如單一個'字串'要存入陣列可以用($陣列[]=字串)
array_unshift()    //在陣列開頭插入多筆資料


foreach($傳入陣列 as 存入$key =>存入內容 ){}
```