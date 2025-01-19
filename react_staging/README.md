# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# 项目文档

## 生成唯一id

* 安装uuid / nanoid，推荐使用nanoid，因为更加轻量级
  ```cmd
  npm i nanoid
  ```
* 使用nanoid生成id
  ```jsx
    import { nanoid } from 'nanoid'
    const id = nanoid()
  ```

## 类型限制

* 安装prop-types
    ```cmd
    npm i prop-types
    ```
* 使用PropTypes
  ```jsx
    import PropTypes from 'prop-types'
    class MyComponent extends React.Component {
        static propTypes = {
            name: PropTypes.string.isRequired,
        }
        render() {
            return <div>{this.props.name}</div>
        }
    }
  ```

## 网络请求
* axios
  * 轻量级的http请求库
  * 可以在浏览器端和nodejs服务端使用
* 安装axios
  ```cmd
  npm i axios
  ```

* 解决跨域问题
  * 配置代理-方式1，只能配置一个代理
    * 在package.json中配置proxy属性
    ```JSON
    "proxy":"http://localhost:5000"
    ```
  * 配置代理-方式2，可以配置多个代理
    * 在src/setupProxy.js中配置代理
    ```jsx
      const { createProxyMiddleware } = require('http-proxy-middleware')
      module.exports = function(app) {
        app.use()
      }
    ```
    * react脚手架会把这个文件的配置自动加到项目的webpack配置中
    * 这个文件要符合commonjs规范
    * 修改该文件后要重启服务

* github搜索用户的api
  * https://api.github.com/search/users?q=xxx
  * 请求频繁会被拒

## 消息订阅-发布机制
* 安装PubSubJS
  ```cmd
  cnpm i pubsub-js
  ```
* 使用
  ```jsx
    import PubSub from 'pubsub-js';// 引入
    PubSub.subscribe('xxx', (msg, data) => {}); // 订阅
    PubSub.publish('xxx', data); // 发布
    PubSub.unsubscribe('xxx'); // 取消订阅
  ```

## 路由
* 安装react-router-dom的5.x.x版本
  ```cmd
  npm i react-router-dom@5
  ```
## 路由组件与一般组件的区别(5.x.x版的react-router-dom)
* 写法不同
  * 一般组件：<Dome/>
  * 路由组件：<Route path="" component={Dome}/>
* 存放位置不同(开发规范)
  * 一般组件：src/components
  * 路由组件：src/pages
* 接收的props不同
  * 一般组件：传递了什么就收到什么
  * 路由组件：接到三个固定属性:{ history: {…}, location: {…}, match: {…}}

## 开发规范
* 先引入第三方的库，再引入自己写的文件
* 路由组件一般放在src/pages目录下

## 小知识
* 【子组件】给【父组件】传递数据：父组件通过props传递函数给子组件，子组件调用这个函数，把数据传给父组件
* checkbox中的defaultChecked只会在第一次渲染的时候生效，如果要动态控制，需要使用checked，且必须要绑定change事件，否则不会修改不了状态
* 如果包裹了StrictMode，会执行两次渲染

## 特殊问题
### 解决babel-preset-react-app 依赖警告问题
* 警告信息
  ``` cmd
    One of your dependencies, babel-preset-react-app, is importing the "@babel/plugin-proposal-private-property-in-object" package without declaring it in its dependencies. This is currently working because "@babel/plugin-proposal-private-property-in-object" is already in your node_modules folder for unrelated reasons, but it may break at any time.

    babel-preset-react-app is part of the create-react-app project, which is not maintianed anymore. It is thus unlikely that this bug will ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to your devDependencies to work around this error. This will make this message go away.
  ```
* 解决步骤
  * 安装 @babel/plugin-proposal-private-property-in-object：
    ```cmd
      npm i @babel/plugin-proposal-private-property-in-object
    ```
  * 配置 babel.config.js 文件,如果没有该文件,先在项目根目录创建
    ```js
      module.exports = {
        presets: ['react-app'],
        plugins: [
          ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
        ]
      };
    ```

## 解决多级路由刷新页面后资源丢失问题
* 原因
  * 浏览器会从[http](http://localhost:3000)请求资源,自动映射到project/public/目录
  * 如果请求[http](http://localhost:3000/favicon.ico)则会返回project/public/favicon.ico资源.如果没找到该资源,则会自动映射到project/src/index.html文件
  * 但是当多级路由[http](http://localhost:3000/user/ckc)刷新页面时,浏览器会请求[http](http://localhost:3000/user/favicon.ico),由于没有public/user/favicon.ico资源,此时会返回project/src/index.html文件,导致资源丢失
* 解决方法1
  * 加载资源时不要带./,如"./css/bootstrap.css"改为"css/bootstrap.css"
  * 因为带./会映射到当前路由的上一级目录,而不带./会映射到项目public根目录
* 解决方法2
  * 加载资源时写"%PUBLIC_URL%/css/bootstrap.css",会映射到项目public根目录
* 解决方法3
  * 使用hashRouter,因为hashRouter不会加载#号之后的路径,所以不会出现资源丢失问题

# React UI 组件库
* material-ui(国外)
  * 官网：https://material-ui.com/zh/
  * github：https://github.com/mui-org/material-ui
* ant-design(国内蚂蚁金服)
  * 官网：https://ant.design/index-cn
  * 按需引入参考文档：https://3x.ant.design/docs/react/use-in-typescript-cn
  * github：https://github.com/ant-design/ant-design
  * 安装
    ```cmd
      npm i antd
    ```
* UI 组件库的使用要学会查官方文档，不需要死记硬背
* 由于UI 组件库一直在更新，每个版本的用法都有所不同，具体要看项目使用版本的文档

## Hooks
* Hook是React 16.8版本引入的新特性，它可以让你在函数组件中使用 state 以及其他的 React 特性

### 三个常用的Hooks
* useState
* useEffect
* useRef
