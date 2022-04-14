# React-Project
> [react-not-cra](https://github.com/deeeeno/react-not-cra)에서 공부한 토대로 react 프로젝트를 만들어보기.   

### 실행
```
npm install 
npm run build
npm rnu dev
```

### webpack, babel 설치 및 설정
```
npm i -D babel @babel/preset-env @babel/preset-react
npm i -D webpack webpack-cli webpack-dev-server
npm i -D babel-loader html-loader style-loader css-loader
```
```
//.babelrc
{
    "presets":[
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
//webpack.config.js 기본 설정
module.exports = {
  mode : "development",
  entry: "./src/app.js",
  output: {
    filename: "bundle_[hash].js",
    path: path.resolve("./dist"),
    clean: true,
  },
  devServer: {
    host: "localhost",
    port: 8080,
    open: true,
    watchFiles: "index.html",
    historyApiFallback: true,
  },
  module{
      rules:[
           {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: ["html-loader"],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"],
            },
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      inject: "body",
      title: "react-no-cra",
    }),
    
  ],
  optimization:{
      minimizer:[
        new cssMinimizerWebpackPlugin()
      ]
  }
}
```


### ESLint, Prettier, Husky 설정
```
npm i -D eslint prettier eslint-config-prettier
npm i -D husky lint-staged
```
ESLint 설정 -> `npx eslint --init 에서 리액트로`   
Prettier 설정 -> 공식문서의 디폴트 설정   
```
//husky설정
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"

//package.json
"lint-staged": {
    "src/*.js": "eslint --fix",
    "src/*.jsx": "eslint --fix"
},
```

### Trouble-Shooting
* webpack-dev-server의 라우팅 문제   
webpack-dev-server config인 devServer에 `historyApiFallback:true`를 추가 해야함. 이유는 가상의 서버를 띄운 것이기에 브라우저 입장에서는 서버가 없는 거임. 그래서 history API를 추가해주기!   
* style.css module import -> undefined   
이름 규칙이 있었었음. `{name}.module.css`로 이름을 지어야함..   
* `regeneratorRuntime is not defined` 발생   
원인 : react애서 `async/await`을 사용하는 경우 나타나는 에러.    
이유 : 어플리케이션이 컴파일 될 때 `regeneratorRuntime`이 문법을 번역하는데 이게 없어서 그럼   
해결 방법 : babel의 `@babel/plugin-transform-runtime` 플러그인을 추가한다.
```
npm install --save-dev @babel/plugin-transform-runtime
npm install --save @babel/runtime

//.babelrc
"plugins": ["@babel/plugin-transform-runtime"]
```