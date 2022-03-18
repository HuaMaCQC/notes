## 基本配置
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

    // Datas更新時觸發
    watch(Datas, (nv,ov)=>{
      console.log('Datas 更新了')
    })

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

# vue-router

## 取得 router, route

```javascript
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()

    function pushWithQuery(query) {
      router.push({
        name: 'search',
        query: {
          ...route.query,
        },
      })
    }
  },
}

```