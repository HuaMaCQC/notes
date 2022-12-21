###  Serialisable
* public - 顯示在檢查器中並可由其他腳本訪問
* [SerializeField] 私有 - 顯示在檢查器中，其他腳本無法訪問
* [HideInInspector] public - 不在檢查器中顯示，可由其他腳本訪問
* private - 不在檢查器中顯示，其他腳本無法訪問

```cs
[SerializeField] private int A;
[HideInInspector] public int B;
```

## 生命週期

1. Awake: 腳本組件載入時 （調用一次）
1. OnEnable: 在遊戲對象可以調用時調用
1. Reset: 組件重設為默認值時（只用於編輯狀態）
1. start: 第一個Update發生之前 （調用一次）

1. OnApplicationPause 當玩家暫停時發送到所有的遊戲物體

1. FixedUpdate 固定時間調用，常用於物理相關的計算，比如對Rigidbody的操作

1. Update 大部分遊戲行為代碼被執行的地方，除了物理代碼
1. LateUpdate 每幀Update調用之後

1. OnLevelWasLoaded 當一個新關卡被載入時此函數會被調用

1. OnGUI 繪製GUI時調用
1. OnDestroy 组件销毁时调用
1. OnDisable 當對象設置為不可用時

## action 類似callback
```cs
    private Action<T> _conduct;
```