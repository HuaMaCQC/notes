## 引用jQuery 精簡版
```javascript
<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js"></script>  
```

## 先讀取網頁後執行function(){}內程式
$(document).ready(function(){} 

## 選擇
  * $("*")//全選 $(this)//目前的物件
  * $("p.X")p標籤裡 class是x的物件
  * $("p:first")由上往下p標籤第一個
  * $("ul li:first") 第一個ui標籤裡的 li標籤的第一個
  * $("ul li:first-child") 每一個ui標籤裡的第一個li標籤
  * $("[href]") 所有herf屬性的標籤
  * $("a[target='_blank']")選擇a標籤 裡面的target名子為_blank的
  * $("a[target!='_blank']")選擇a標籤 裡面的target名子不為_blank的
  * $("tr:even") 選擇所有奇數的tr $("tr:odd")偶數tr

## 滑鼠事件
 * click 點一下
 * dblclick 點兩下
 * mouseenter 碰觸到
 * mouseleave 碰觸後離開
## 鍵盤事件
  * keypress 鍵盤按一下
  * keydown 鍵盤按下去瞬間
  * keyup 鍵盤彈起瞬間
## Form事件
  * submit 提交時觸發
  * change 輸入結束後觸發(輸入後點擊任何地方或任何按鈕觸發)
  * focus  成為焦點時觸發
  * blur   失去焦點時觸發
## windows事件
  * scroll 卷軸滾動次數

**hide(給數字可以慢慢隱藏)隱藏 show()顯示**

## 設置內容
  * text() 設置或回傳元素內容(不含標籤)
  * html() 設置或回傳元素內容與標籤
  * val() 更改value裡面內容(不含標籤) 運用範圍:
  ```javascript
  <input type="" value="">
  ```

```javascript
$.ajax({
  url:'傳送網址',
  data:'傳送資料',
  type:"POST", //"GET"
  dataType:'接收資料格式',
  
  success:function(msg){
    //接收成功後
  },
  error:function(xhr,ajaxOptions,thrownError){
    //失敗所做的事
    alert(xhr.status);
    alert(thrownError);
  }
});
```


* dataType: 只能接收 xml,html,script,json,jsonp,text
* complete: 不論失敗或成功觸發
* beforeSend 發送前做的事情

* data:$(obj).serialize() 將form內input所有val資料傳送過去 接值
```php
<?php $_POST[$name]?>
```
