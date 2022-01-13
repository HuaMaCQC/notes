# javaScript

## 目錄
* 基本
    * [宣告](#var)
    * [型態](#Type)
    * [嚴謹模式](#strict)
    * [class](#classs)
    * [模板 module](#module)
    * [印出](#debug)
    * [教學網站](#url)
* [前端]()
    * [取得元素 **document**](#document)
* [套件]()
    * [服務端 **NODE.JS**](#NODE)
    * [套件管理系統 **npm**](#npm)
    * [資料庫 **mysql**](#mysql)
    * [定時器 **node-schedule**](#schedule)
    * [時鐘 **moment**](#moment)
    * [讀取env環境參數 **dotenv**](#dotenv)
* [API](#API)
    * [setInterval 計時器](#setInterval)
    * [Promise](#Promise)
    * [join](#join)
    * [split](#split)
* [框架]()
    * [koa](#koa)
    * [egg](#egg)
* [jQuery](#jQuery)
* [自訂方法](#code)
    * [格式化日期](#dateTOyyyymmdd)
    * [資料庫連線池](#sqlPool)
    * [建立http伺服器](#http)
    * [socket.io](#socketIo)

----
<p id = "var"></p>

# 基本

## 宣告

```javascript
    var a = 10 
    let a = 10 //es6宣告
    const a = 10 //不可變宣告

```
## 型態

<p id = "Type"></p>

```javascript
    Number
        let a = 10;
    Object 
        let a = {"key" = 10 };
    Boolean
        let a = true;
    String
        let a = "GGInInDer";
    Array
        let a = [];

```

<p id = "strict"></p>

## 嚴謹模式
```javascript
"use strict"
```
<p id = "class"></p>

## class
```javascript
    class a {
        constructor(
            b = {key : 10} //帶入b參數
        ){
            this.c = b.key || 0;  //如果b沒資料 c = 0;
        }
        functionA() {
            //......
        },
        functionB() {
            //......
        }
    }
```

<p id = "module"></p>

## module

### 方法一
```javascript
    module.exports = {
       functionA: (a)=>{
           //...
       } ,
       functionB: ()=>{
           //...
       }
    }
    //----
    exports class a {
        //....
    }
```
### 方法二
```javascript
        let a = ()=>{

        }
        module.exports = a();
```

## 印出
```javascript
    console.log("123");
```

<p id = "url"></p>

## 教學網站 
1. [w3shools](https://www.w3schools.com/js/js_examples.asp)

# 前端

<p id = "document"></p>

## document
```javascript
  var x =   document.getElementById("a");
```

# 套件

<p id = "NODE"></p>

## [NODE.js](https://nodejs.org/en/)

    安裝後即可以使用
    開啟檔案方式 : 開啟CMD
    $node 檔案名.js

<p id = "npm"></p>

## [npm](https://github.com/nodejs-tw/nodejs-wiki-book/blob/master/zh-tw/node_npm.rst)

    安裝node npm 會自動安裝
檢查 npm 是否正確安裝
    
    $npm -v
安裝套件

    $npm install 套件名
    npm install -g 套件名 //全局安裝
升級套件

    $npm update //升級所有套件
    $npm update 套件名 //升級指定套件
反安裝

    $npm uninstall 套件名

<p id ="mysql"></p>

## mysql

安裝套件

    $npm install mysql
    $npm install mysql - g

### 程式碼

建立連線池
```javascript
    const mysql = require('mysql'); //讀mysql

    const con = mysql.createPool({  //資料庫連線
    host: '127.0.0.1',     //網址
    user: 'user',     //使用者帳號
    password: '',  //密碼
    database: 'data'  //資料庫名稱
    });

    let con_query = (sql, callback) => {  //建立連線
        con.getConnection((err,connection) =>{ //取得連線
            if(err){ //如果錯誤
                callback(err);
            }else { //如果有連線到
                connection.query(sql,(err,result)=>{ //執行sql
                    connection.release(); //釋放連線
                    callback(err, result);
                }); 
            }
        });
    }


    //使用
    con_query(sql ,(err, result) => {
        if(err){
            //code..
        }else{
            //code..
        }
    })

```

建立一般連線
```javascript
    let con_query = (sql,callback) => {
        const con = mysql.createConnection({  //資料庫連線
            host: '127.0.0.1',     //網址
            user: 'user',     //使用者帳號
            password: '',  //密碼
            database: 'data'  //資料庫名稱
        });
        con.query(sql,(err, result) => {
            con.end(); //關閉連線
            callback(err,result);
        });
    }

    //使用
    con_query(sql ,(err, result) => {
        if(err){
            //code..
        }else{
            //code..
        }
    });
```

**重要** 在製作Web api時 一定要加防止別人傳入sql來非法讀取資料庫

### SQL注入攻擊

```javascript
    let sql =' SELECT * FROM user WHERE id = ' + con.escape(id); 
    
```

<p id ="schedule"></p>

## node-schedule
```
$ npm install node-schedule
```
### 程式碼

```javascript
let schedule = require('node-schedule');
let job =  schedule.scheduleJob({ second : 0 },()=>{ //定時任務 每分鐘0秒執行
    //code........
    job.reschedule({ hour : 0 , minute : 10 }); //修改定時器規則
});
```
### 規則定時器規則 程式碼

```javascript
    let rule = new schedule.RecurrenceRule(); //新增規則
    rule.second = [0,30]; //定義規則 每分鐘0、30秒
    rule.nextInvocationDate();//獲取下次產生亂數時間 
```

<p id = "moment"></p>

## moment

**功能** : 方便計算時間

### 安裝
```
npm install moment
```
程式碼

```javascript
var moment = require('moment');
console.log( moment().toDate() ); //印出現在時間 toData() => 轉成 Date();
```
API 用法請見官方[文檔](http://momentjs.cn/docs/)

<p id = "dotenv"></p>

## dotenv
**說明:** 可以用來讀取env(.env檔)環境變數。因為.env檔案不會上傳gitHub。

### 建立.env模板
* 用vs新增一個 .example.env 的檔案
* 打上要新增的環境變數
```
DB_HOST=HOST 
DB_USER=USER
DB_PASS=DB password
DB_DATABASE=DB NAME
```
* 用vs終端機打上
```
$ cp .example.env .env
```
**ps** 如果到其他電腦就複製.example.env這個模板 之後把需要的參數更新。

### 程式碼
```javascript
require('dotenv').config(); //引用

const con = mysql.createPool({  //資料庫連線
    host: process.env.DB_HOST,  //將該資料夾的.env檔裡面的DB_HOST傳入
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
});
```
<p id ="API"></p>

# API 

<p id = "setInterval"></p>

## setInterval

```javascript
    setInterval(() => {
        //code.....
    },1000); //1秒執行一次
```
<p id = "Promise"></p>

## Promise 

### 建立Promise

```javascript  
    let add  = (a,b) => { 
        return new Promise(function(resolve, reject) {
            //code.....
            if (err){
                reject(new Error(err)); //回傳錯誤訊息
            }
            resolve({"val_1":a,"val_2":b}); //正確 回傳
        });
    }
```
### 呼叫Promise
```javascript 
add(a,b).then( val => { //先做add()的promise的方法
    //code...
    return addPromise_2(val.val_1,val.val_2); //在做addPromise_2()的promise的方法
}).then( val2 => { //然後
    //code....
    console.log('全部都做完了');
}).catch( err => { //如果中間出錯的話
    //code.....
    console.log(err); //印出錯誤
})
```
<p id="join"></p>

## join
陣列轉字串，並在每個字串中間新增字
```javascript
    let a = [1,2,3,4,5];
    a =  a.join("-");
    console.log(a); //1-2-3-4-5
```
<p id = "split"></p>

## split

join相反，把字串轉陣列

```javascript
    let a = "1-2-3-4-5"
    a = a.split("-");
    console.log(a); //[1,2,3,4,5]
```

# 框架

<p id = "koa"></p>

## koa

### 安裝koa跟koa的router
```
$ npm intall koa
$ npm intall koa-router
```
### 程式碼

路由器
```javascript
const koa = require('koa');
const app = new koa();
const Router = require('koa-router');
const router = new Router();
const controller = require('./controller');

router.get('/:id', async (ctx) => { //取得網址後面的資料
     await controller.create(ctx); //導向控制器 
}
app.use(router.routes()); 
app.listen(3000); //監聽3000port
```

控制器
```javascript
module.exports = {
    create: async ctx => {
       let val = ctx.query.row; //取得傳入值row的值
       ctx.body = {'row' : val + 1 } ; //回傳
    }
}

```
<p id = "jQuery"> </p>

# jQuery

<p id = "code"></p>

# 自訂方法

<p id = "dateTOyyyymmdd"></p>

## 格式化日期 

```javascript
    /**
    * 轉換date格式資料 return string
    */
Date.prototype.yyyymmdd = function () { //日期排序
    let mm = this.getMonth() + 1; // getMonth() is 重0開始
    let dd = this.getDate();
    let h = this.getHours();
    let m = this.getMinutes();
    let s = this.getSeconds();

    return [this.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd
    ].join('-') + " " + [(h > 9 ? '' : '0') + h,
    (m > 9 ? '' : '0') + m,
    (s > 9 ? '' : '0') + s
    ].join(':');
}
```
<p id="sqlPool"></p>

## 資料庫連線池

```javascript
const con = mysql.createPool({  //資料庫連線
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
});

let con_query = (sql, callback) => {
    con.getConnection((err, connection) => {
        if (err) {
            callback(err);
        } else {
            connection.query(sql, (err, result) => {
                connection.release();
                callback(err, result);
            });
        }
    });
}
```
<p id = "http"></p>

## 建立http伺服器
```javascript
const http = require("http"); //定義連線
const server = http.createServer(function (request, response) { //如果伺服器接收到請求
  console.log('Connection');  //伺服器端顯示connection
});
server.listen(8001);
```

<p id = "socketIo"></p>

## socket.io
```javascript
//建立連線通道 #
io.listen(server); // 開啟 Socket.IO 的 listener
var serv_io = io.listen(server);


serv_io.set('log level', 1); // 關閉 debug 訊息


serv_io.sockets.on('connection',function(socket){}); 監聽
var socket = io.connect(); 觸發端 



socket.on('名稱',) 監聽
socket.emit 觸發
serv_io.sockets.emit('Time', add_array); 所有客戶端觸發
```