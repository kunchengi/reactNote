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

## MobX-State-Tree

### 文档

* [mobx官方文档](https://cn.mobx.js.org/)
* [mobx-state-tree官方文档](https://mobx-state-tree.js.org/)
* [mobx-state-tree中文文档](https://juejin.cn/post/7097755866543161351)

### 副作用

* 副作用是指在函数执行过程中，除了返回值之外，还对外部环境产生了影响
* 例如：修改全局变量、修改DOM、发送网络请求、打印日志等
* 在 React 中，副作用通常指的是组件渲染之外的操作，比如数据获取、订阅、手动更改 DOM 等

### 什么是MobX-State-Tree

* 是一个状态管理库
  * 集中存储数据
  * 数据是可修改且受保护的
  * 数据的变化是可序列化的、可追踪的，这使它拥有时间旅行功能
  * 拥有副作用管理，可以在不使用useEffect等钩子的情况下，也可以管理数据更新后执行的副作用
  * 运行时数据类型检查
  * 数据规范化：MST支持引用，可以在应用程序代码中规范化数据

### MST和MobX的关系

* MobX是一个状态管理“引擎”，而MobX- state - tree是一辆豪车
* MST为您提供了实现目标所需的结构、工具和其他功能
* MST在底层使用MobX，所以MobX- state - tree可以与React、React Native、Vue、Angular、Svelte甚至是JavaScript应用的MobX绑定一起工作
* 并需要知道如何使用MobX，就可以使用MST。就像你不需要知道你的汽车引擎是如何工作的，也成为一个优秀的司机

### 安装mobx、mobx-react-lite、mobx-state-tree

```bash
    npm i mobx mobx-react-lite mobx-state-tree
```

### 开发者工具

* mobx-devtools

### 类型文档

* [mobx-state-tree-types](https://mobx-state-tree.js.org/overview/types)
