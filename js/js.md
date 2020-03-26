
# && , || , & , | 差別

## && 邏輯與
a && b ,如果 a 為true，直接返回b，而不管b為true或者false 。如果 a 為false 那麼直接返回a

## || 邏輯或
“||”運算遇到true就返回。例如：a || b ,如果 a 為false，直接返回b，而不管b為true或者false 。如果 a 為true，直接返回a

**&& (邏輯與) 優先順序高於||（邏輯或**

## & 按位與
  對每一組位元執行 AND 運算。a AND b 只在 a 和 b 同時為 1 時得到 1

  AND運算的真值表
  a|b|a & b|
  ---|---|---|
  0|0|0
  0|1|0
  1|0|0
  1|1|1
## | 按位或
對每一組位元執行 OR 運算。a OR b 在 a 和 b 有一者為 1 時得到 1。
OR運算的真值表
  a|b|a | b|
  ---|---|---|
  0|0|0
  0|1|1
  1|0|1
  1|1|1

**請注意，所有按位操作都是通過將任何操作數傳遞給內部函數ToInt32來對32位整數進行操作。**

__簡單說勁量別用 | &__
## 範例
```javascript
console.log( null || {} ); // {}
console.log( null | {} );  // 0

console.log( 1 | 2 ); // 3
console.log( 2 | 2 ); // 2

console.log( false | 2 ); // 2
console.log( false | true ); // 1
console.log( false || true ); // true

console.log( 1 && null );  // null
console.log( 1 & true ); // 1
console.log( 1 & null );  // null

console.log( 2 & true ); // 0
console.log( 2 && true ); // true
console.log( 2 && {} ); // {}

console.log( 2 && 1 );  // 1
console.log( 1 & null ); // 0
console.log( 1 & 2 );  // 0
console.log( false & false );  // 0
console.log( true & true ); // 1
```  

---