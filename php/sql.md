SELECT '欄位' FROM '表'; //查看

SELECT DISTINCT '欄位' FROM 'table_name'; //查看不同的(不同的)值

WHERE 條件
  WHERE 欄位 LIKE 'A%' //選擇所有A開頭的資料
  WHERE 欄位 BETWEEN value1 AND value2 //在value1與value2 之間
  WHERE 欄位 IN(value) //OR簡寫
  WHERE NOT  //條件不是
  WHERE 欄位 IS NULL //欄位資料空值那一筆資料 (IS NOT NULL)相反

ORDER BY 欄位  //排序 ASC升 DESC降

INSERT INTO 表 (欄位) VALUES(value) //插入

UPDATE 表 SET 欄位=內容 WHERE 條件  //條件符合的更改欄位的內容

DELETE FROM 表 WHERE 條件  //條件符合的刪除

SELECT * FROM 表 LIMIT 筆數; //前筆數的紀錄

SELECT MAX(欄位) AS 自訂欄位名稱 FORM 表 //取欄位最大值  MIN最小值