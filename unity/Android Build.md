## Build 時設定問題


### Android 11 以上發布:
 - Build Settings => Player Settings => player => punlishing settings => Build => Custom Main Mabigest 打勾
 
 - 找到 AndroidManigest.xml

 - 修改
 ```xml
   <activity android:name="com.unity3d.player.UnityPlayerActivity"
                  android:theme="@style/UnityThemeSelector" android:exported="true">
 ```

 #### 設定 Android 版本 
   - Build Settings => Player Settings => player => Other Settings => Target API Level (目標 Android 版本) 選最高
   - Minimum APi LEVEl  最低Android版本 看情況選
