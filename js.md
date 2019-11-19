# js 常錯

## &&
``` javascript
  const a = 0;
  const b = false;

  a && b // 0
  !!a && b //false => 為了避免有些地方 是用0當作 false 所以 && 判斷時 都先轉型
```