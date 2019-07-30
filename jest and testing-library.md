# jest $ 指令

### **`備註`**
範例的 `$ npm test = $ jest`  

package.json 設定如下
```javascript
"scripts": {
    "test": "jest",
    "coverage": "npm test -- --coverage",
}
```

## 測試某個資料夾(文件)
```
$ npm test src/js/lohin
```

## 測試某個資料夾 並且輸出覆蓋率
```
$ npm test -- --coverage --collectCoverageFrom=src/js/login/* src/js/login
```

## 監聽
```
$ npm test --watch
```

# jest api

## mock
模擬 import 的檔案
```javascript
jest.mock( fs , path )
```
* fs 要模擬的位置 (必須)
* path 代替的檔案 (可選) 格式 () => require('path')

## mockImplementation
模擬fn
```javascript
import { apigetuser } from '../api'

// 先截斷 但先不模擬
jest.mock('../api');

it('api' , ()=>{
    const apigetuserMock = jest.fn();
    // 所有的從../api import的 apigetuser 都改成 apigetuserMock
    apigetuser.mockImplementation(apigetuserMock);
    
    // 執行 apigetuser...
    
    // 檢查apigetuserMock執行次數為1
    expect(apigetuserMock).toHaveBeenCalledTimes(1);
})
```

# expect 檢查
## toHaveBeenCalledTimes
 fn 執行次數

## toHaveBeenCalledWith
 fn 傳入參數

## toHaveTextContent (jest-dom)
 Content 有啥資料
 ```javascript
toHaveTextContent('content') // 模糊搜尋
toHaveTextContent('/^Text Content$/') //  全部匹配
```

## toHaveLength
**`npm 更新資訊`**

2019/07/09
* jest-dom已經轉移到@ testing-library / jest-dom。請卸載jest-dom並安裝@ testing-library / jest-dom，或使用舊版本的jest-dom。