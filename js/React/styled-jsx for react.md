# seyled-jsx

[github](https://github.com/zeit/styled-jsx)

### **安裝**

```
$ npm install --save styled-jsx
```

###  **設定webpack.config**
```javascript
{
 test: /\.(js|mjs|jsx|ts|tsx)$/,
 include: paths.appSrc,
 loader: require.resolve('babel-loader'),
 options: {
   customize: require.resolve(
     'babel-preset-react-app/webpack-overrides'

   plugins: [
     [
       require.r('babel-plugin-named-asset-import'),
       {
         loaderMap: {
           svg: {
               ReactComponent:'@svgr/webpack?+ref![path]',
           },
         },
       },
     ],
     "styled-jsx/babel"
   ],
}

```

### **設定 .styledJsx.css檔 的編譯方式**
```javascript
{
  test: /\.styledJsx.css$/,
  use: [{
    loader: 'babel-loader',
    options: {
      babelrc: false,
      plugins: [
        require.resolve('styled-jsx/babel'),
      ]
    }
  },
  {
    loader: require('styled-jsx/webpack').loader,
    options: {
      type: 'scoped'
    }
  }
  ]
},
```

### **將原本.css檔編譯改成 有.styledJsx.css 不編譯 只編譯 .css檔**

```javascript
{
	test:/^((?!\.styledJsx).)*\.css$/
	...
	...
	...
}
```

### **如果想編譯 scss 或 sass 只要改 scss|sass編譯檔就可以了**
```javascript
{
 test: /\.styledJsx.(scss|sass)$/,
 use: [
   {
   loader: 'babel-loader',
   options: {
     babelrc: false,
     plugins: [
       require.resolve('styled-jsx/babel'),
     ]
   }
 },
 {
   loader: require('styled-jsx/webpack').loader,
   options: {
     type: 'scoped'
   }
 }
 ,
 'sass-loader'
 ]
 },
```
