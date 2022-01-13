●NODE.JS●(nodejs)
//官方
http://nodejs.org

//centos安裝
yum -y install nodejs

//使用npm套件管理工具 安裝套件
https://www.npmjs.com/

  安裝 socket.io
  https://www.npmjs.com/package/socket.io
  >npm install socket.io

  安裝 mysql
  >npm install mysql
  https://www.npmjs.com/package/mysql#install

//在 Windows、Mac OS X 與 Linux 中安裝 Node.js 網頁應用程式開發環境
http://blogger.gtwang.org/2013/12/install-node-js-in-windows-mac-os-x-linux.html

//使用 Node.js 與 Socket.IO 建立即時性（Realtime）網頁應用程式 App
http://blogger.gtwang.org/2014/03/socket-io-node-js-realtime-app.html

//使用 NODE.JS 來達成電腦網頁與手機網頁即時互動 
http://patw.idv.tw/blog/archives/566/node-js-using-node-js-to-achieve-interaction-between-web-and-mobile-web-pages-in-real-time/

//node.js 基本教學
http://dreamerslab.com/blog/tw/node-js-basics/

//npm 基本指令
http://dreamerslab.com/blog/tw/npm-basic-commands/

//Javascript function scopes 和 closures
http://dreamerslab.com/blog/tw/javascript-function-scopes-and-closures/

//Javascript callbacks
http://dreamerslab.com/blog/tw/javascript-callbacks/

//node.js events
http://dreamerslab.com/blog/tw/node-js-events/

//Node.js 教學 - 陳鍾誠
http://www.codedata.com.tw/javascript/using-nodejs-to-learn-javascript/
http://www.codedata.com.tw/javascript/using-nodejs-to-learn-javascript-2-control-flow/

//socket io 傳送訊息方式整理
//https://gist.github.com/kejyun/7636628
socket.on('send', function(msg) {    
    // 廣播資訊給在socket.room的人，除了發送者自己
    socket.broadcast.to(socket.room).emit('updatechat', msg);
    // 傳送更新資訊給自己
    socket.emit('updatechat', msg);
    socket.to(socket.room).emit('updatechat', msg);
    // 傳送資訊給所有socket
    io.sockets.emit('updatechat', msg);
    // 傳送資訊給在socket.room的連線
    io.sockets.in(socket.room).emit('updatechat', msg);
});

//switch
switch(expression) {
    case n:
        code block
        break;
    case n:
        code block
        break;
    default:
        default code block
}

//foreach
  //先宣告物件
  var myobj = new Object();
  
  //給物件的屬性值
  myobj.color = 'red'; 
  myobj.name = 'hsin'; 
  myobj.nation = 'taiwan';
  
  //這邊展現如何用for - in 取出。
  var content='';
  for(var key in myobj){ 
         content +="屬性名稱："+ key+" ; 值： "+myobj[key]+"\n"; 
  }
  alert(content);

//Math.round() 四捨五入
alert(Math.round(12.3));  //12
alert(Math.round(12.5));  //13
alert(Math.round(12.52145)); //13

//Math.floor() //無條件捨去
//Math.ceil()  //無條件進位

//亂數取值
Math.random()  //0 ~ 0.9999999(無窮小數)
Math.random() * 3  //0 ~ 2.9999999(無窮小數)
var r = Math.floor(Math.random() * 10);  //取0~9整數值
  
//字串轉 Int
var n = "100";
var i = parseInt(n);
var j = parseInt(3.9);  //3(小數無條件捨去)

//json 轉字串 JSON.stringify()
var p_id = 1;
var j = { id: p_id, item : "img", value: "bb.png", x: 100, y: 100 };
console.log(JSON.stringify(j));

//字串轉 json
var j = "{\"protocol\":\"upSeat\",\"data\":{}}";
var inData = JSON.parse(j);

//陣列字串搜尋
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var idx = fruits.indexOf("Apple");  // idx 為 2
if(idx >= 0) 
  console.log("找到位置在" + idx);
  
//字串分割成陣列
var str = "How are you doing today?";
var res = str.split(" ");  // res[] 為 How,are,you,doing,today?

//取字串 substr
//http://www.w3school.com.cn/jsref/jsref_substr.asp
//第一個字是0  負數代表最後字(-1:最後一個字, -2倒數第二個字)
var str = "Hello world!";
var rst = str.substr(3,7);  //輸出 lo worl  (起始位置,取幾個字)

//陣列push
var a = [];
a.push(1);
a.push(2);

//刪除陣列某個項目
//http://www.w3schools.com/jsref/jsref_splice.asp
範例1
  var a = [0,1,2,3,4,5];
  var del = 3;
  a.splice(del,1);  //刪除3, 刪除後 a = [0,1,2,4,5]
範例2
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.splice(2, 2);  //結果: Banana,Orange

//在陣列中指定位置插入多個項目
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");  //2:位置  0:不刪除任何項目
結果:
  Banana,Orange,Lemon,Kiwi,Apple,Mango

//複製陣列
var clone = myArray.slice(0);  //只能用於陣列,不能用於 object(json) 物件

//去除陣列裡重複值
var arr = [1,1,2,3,3,5];
var arrUni = [];
for(var i=0; i<arr.length; i++) {
  if(arrUni.indexOf(arr[i]) < 0)
    arrUni.push(arr[i]);
}
arrUni.sort(function(a,b) { return a-b; });  //排序

//複製 object(json) 物件
  ※此一用法有一缺點，物件裡不能有 function，否則會出問題
var item = { id: 1, item : "img", value: "bb.png", x: 100, y: 100 };
var itemClone = JSON.parse(JSON.stringify(item));
  
//陣列排序
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(function(a,b) { return a-b; });  //由小到大 純數字/浮點數排序  結果 Apple,Banana,Mango,Orange
fruits.sort(function(a,b) { return -(a-b); });  //由大到小
//fruits.sort();  //避免使用 .sort() 直接排序，有時會有問題

//hash 排序
  範例1:
    betData = [{"id":1, "bet": 2000}, {"id":2, "bet": 1000}, {"id":4, "bet": 1200}, {"id":7, "bet": 2000}];
    betData.sort(function(a,b) {  //依 "bet" 值排序
      var aa = a["bet"];
      var bb = b["bet"];
      return aa-bb;
    });
  範例2:
    var myList = [ {"id": 1, "sortOrder": 4},
                   {"id": 2, "sortOrder": 2},
                   {"id": 3, "sortOrder": 3},
                   {"id": 4, "sortOrder": 1} ];
    myList = sortByKey(myList, "sortOrder");
    function sortByKey(array, key) {
      return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      });
    }
    
//時間 每隔多久跑一次
var n = 10;
var a = setInterval(function() {
    ....
    if (i == 0) {
     clearInterval(a);  //時間到將自己清除
    }
  }, 1000);  //每隔一秒跑一次


//時間計數器 timer
var rst = "五秒以內完成";
var a = setTimeout(function() {  //設定五秒後做的動作
    rst = "五秒內未做動作!";
  }, 5000);
...
clearTimeout(a);  //如果五秒內有做動作，則把timer清除

//callback 用法
//範例1:
//http://dreamerslab.com/blog/tw/javascript-callbacks/
  function do_a( callback ){
    setTimeout( function(){
      // 模擬一個需要長間的 function
      console.log( '`do_a`: 這個需要的時間比 `do_b` 長' );
   
      // 如果 callback 存在的話就執行他
      callback &amp;&amp; callback();
    }, 3000 );
  }
   
  function do_b(){
    console.log( '`do_b`: 現在我們就可以肯定 `do_b` 出現在 `do_a` 之後了' );
  }
   
  do_a( function(){
    do_b();
  });
//範例2:
//http://recurial.com/programming/understanding-callback-functions-in-javascript/
  function some_function(arg1, arg2, callback) {
      var my_number = Math.ceil(Math.random() * (arg1 - arg2) + arg2);
      callback(my_number);
  }
  
  some_function(5, 15, function(num) {
    console.log("callback called! " + num);
  });
  
  
//=== mysql ===
//GitHub - node-mysql
https://github.com/felixge/node-mysql

//npm - mysql
https://www.npmjs.com/package/mysql

//node.js教學－操作MySQL資料庫
https://blog.allenchou.cc/nodejs-tuts-5-use-mysql-db/

//mysql連線操作
var mysql = require('mysql');
var conn = mysql.createConnection({
    host			: "172.16.100.31",
		user			: "elin",
		password		: "elin",
		database		: "elin"
		//insecureAuth	: true                
});
conn.connect();
conn.query('SELECT * from oba', function(err, results) {
    if (err) 
      throw err;
    else
      console.log('執行sql語法');
    console.log('取得資料筆數: ', results.length);
});
....
conn.end();

//新增多筆資料 在判斷有無資料重複寫入時 會出現已存在資料 確判斷出沒資料問題。  解決方法:
//Howard培皓範例
//a.架構說明
function writeDB (data) {
	var arr = [];
	var update = function(callback) {
		for( var i = 0; i < data.length; i++) {
			(function(i){
				//check exist
					//if exist
						//update
						//callback(data)
					//if not exist
						//insert or push "(" + data...... + ")"
						//callback(data)
			})(i)
      ;
		}
	}
	
	update(function(data) {
		//join arr (,)
		//batch insert arr
	});
}
//b.實際範例程式
function writeinDB(data) {  //writeDB函數(資料): 寫入資料庫
    var writeData = function(callback) { ///attention callback
        var insdata = [];
        //var updata = [];
        for(var i = 0; i < data.length; i++) {
            //以事件驅動的nodejs來說,普通的執行會有運行問題
            //必須以特別的方式在for裡進行處理: (function(i){....do something....})(i);
            (function (i) {
                var row  = data[i];     //宣告row為data[i]
                //使用Mysql套件的query,與資料庫做溝通
                //語法: 找出gameevent資料表中是否有相同的team值、dates值
                conn.query('SELECT team, dates FROM ?? WHERE team = ? AND dates = ?', [ 'gameevent', row['team'], row['dates'] ], function(err, results) {
                    //results.length為影響筆數
                    if(results.length) {   //如果有結果
                        //執行語法: team、dates match到的欄位,將其資料列number、dtime的值更新為最新值
                        conn.query('UPDATE ?? SET number = ? , dtime = ? WHERE (team = ? AND dates = ?)' ,
                                [ 'gameevent', row['number'], row['dtime'], row['team'], row['dates'] ] ,
                                function(err, results) {
                                    if(err) {   console.log(err); }
                                    //console.log(results);
                                    //如果在for loop最後callback並帶入引數insdata，需要這樣做
                                    if(i == (data.length - 1)) {    callback && callback(insdata); }
                                }
                        );
                    } else {               //如果沒有結果
                        //執行語法: 串接資料列
                        var str = '"'+ row['event'] +'","'+ row['team'] +'","'+ row['time'] +'","'+ row['odds'] +'","'+ row['options'] +'","'+ row['number'] +'","'+ row['dates'] +'","'+ row['dtime'] +'"';
                        insdata.push('('+str+')');
                        //如果在for loop最後callback並帶入引數insdata，需要這樣做
                        if(i == (data.length - 1)) {    callback && callback(insdata);}
                    }
                });
            })(i);
        }
        //console.log(insdata);
    }
    writeData(function(insdata) {
        if(insdata != '') {
            conn.query('INSERT INTO gameevent (event, team, time, odds, options, number, dates, dtime) VALUES '+ insdata.join(), function(err, results) {
                if(!err) {
                    console.log(results);
                }
            });
        }
    });
}