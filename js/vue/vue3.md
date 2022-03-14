## script 基本配置
```html
<template>
  <div class="index">
    <button @click="myfun(req)">
  </div>
</template>
```

```javascript
// javascript 區塊
import { ref } from 'vue';

export default {
  // 匯入components
  components: {
    VideoCard,
  },
  props: {
    title: String
  },
  // 對應vue2 的 created
  setup(props) {
    // 淺層判斷
    const Datas = ref([]);
    // 深層判斷
    const Datas2 = reactive([]);
    // title torefs = 雙向綁定 未使用html不會更新 也可用const title = toRef(props, 'title')
    const { title } = toRefs(props);

    // 宣告給html 用
    const myfun = (req) =>{
      // 取得參數
      console.log(req);
    }

    // 匯出到html
    return {
      Datas,
      Datas2,
      title,
      myfun,
    };
  },
}

```