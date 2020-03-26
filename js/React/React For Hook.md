Hook
===

useReducer
---

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

Effect
---

### 初始化 (對應 componentDidMount())

```javascript
//Class
componentDidMount() {
    user = '';
}

//Hooks
function init(){
  user = '';
}
useEffect(init, []);
```

### props更新 (對應 componentWillReceiveProps())

```javascript
//Class
componentWillReceiveProps(nextProps) {
    if (nextProps.count !== this.props.count) {
        console.log('count changed', nextProps.count);
    }
}

//Hooks
useEffect(() => {
    console.log('count changed', props.count);
}, [props.count])
```

### componentWillUnmount __(未驗證)__
```javascript
//Class
componentWillUnmount() {
    console.log('I am unmounting');
}

//Hooks
useEffect(() => {
    return () => console.log('I am unmounting');
}, [])
```

### componentDidUpdate __(未驗證)__

```javascript
//Class
componentDidUpdate() {
    console.log('Just updated..');
}

//Hooks
useEffect(() => {
    console.log('Just updated...');
})
```

DOM refs
---
```javascript
//Class
class InputWithFocus extends React.Component {
    constructor() {
        super();
        this.inputRef = null;
    }
    render() {
        return <>
            <input ref={inputRef => { this.inputRef = inputRef }} />
            <button onClick={() => this.inputRef.focus()}>
                Focus the input
            </button>
        </>

    }
}
```
```javascript
//Hooks
const InputWithFocus = (props) => {
    const inputRef = useRef();

    return <>
            <input ref={inputRef} />
            <button onClick={() => inputRef.current.focus()}>
                Focus the input
            </button>
        </>
}
```

ShouldComponentUpdate
---
```javascript
//Class
shouldComponentUpdate(nextProps) {
    return nextProps.count !== this.props.count
}

//memo
import React, { memo } from 'react';

const MyComponent = memo(
    _MyComponent, 
    (prevProps, nextProps) => nextProps.count !== prevProps.count
)
```