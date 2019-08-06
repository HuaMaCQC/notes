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

# mock

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
模擬 非截斷fn
```javascript
  import { Cookies } from '../../utils';

  it('mock cookies' , () => {
    Cookies.get = jest.fn()
      .mockImplementation(() => true);
  });

  // 使用Cookies.get(''); 就會回傳 true
```
## requireActual
 繞開模擬

```javascript
import {
  forward,
  classNames,
} from 'Utils';

// mock Utils 這隻檔案
jest.mock('Utils');

// 獲取原本的Utils
const utils = require.requireActual('Utils');

// 將原本的Utils.classNames 放回 classNames
// 我要mock Utils這隻檔案 但 classNames除外
classNames.mockImplementation(utils.classNames);
```
## genMockFromModule
模擬樣板
``` javascript
const mockAxios = jest.genMockFromModule('axios');

mockAxios.create = jest.fn(() => mockAxios);

export default mockAxios;
```

## jest.fn()
回傳一個 測試fn
 * 預設return undefined
 * 回傳 true 的寫法如下
 ```javascript
 jest.fn(() => true);
 ``` 

# expect 檢查
##  toHaveBeenCalledTimes
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
  陣列長度

# 重製

##  cleanup();  (testing-library)
  清除渲染(render)
## jest.clearAllMocks();
  清除模擬  

# 執行

## beforeEach
  每個測試前

## afterEach
 每個測試後

## beforeAll
  全部執行前
## afterAll
  全部執行後


# **`npm 更新資訊`**

2019/07/09
* jest-dom已經轉移到@ testing-library / jest-dom。請卸載jest-dom並安裝@ testing-library / jest-dom，或使用舊版本的jest-dom。

test
