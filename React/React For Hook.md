useReducer
===

```javascript
// 初始化
const init = {
  user:'',
}

// 設定setUser() 編譯過程
// state 一開始參數
// action setUser(action) setUser傳入的參數
const userReducer(state, action) {
  if(action === '') {
    return 'is null';  
  }

  return action;
}

export default function App(){
  const [user, setUser] = useReducer(userReducer, init);

  console.log(user); // ''

  setUser('');
  console.log(user); // is null

  setUser('123');
  console.log(user); // 123
}
```
