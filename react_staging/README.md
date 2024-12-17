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

## 开发规范
* 先引入第三方的库，再引入自己写的文件

## 小知识
* 【子组件】给【父组件】传递数据：父组件通过props传递函数给子组件，子组件调用这个函数，把数据传给父组件
* checkbox中的defaultChecked只会在第一次渲染的时候生效，如果要动态控制，需要使用checked，且必须要绑定change事件，否则不会修改不了状态