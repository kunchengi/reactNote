# React学习笔记

## React简介

* 用于构建用户界面的javaScript库
* 是一个将数据渲染为HTML视图的开源JavaScript库

### 为什么要用react

* 原生JavaScript操作DOM繁琐、效率低（DOM-API操作UI）
* 使用JavaScript直接操作DOM，浏览器会进行大量的重绘重排
* 原生JavaScript没有组件化编码方案，代码复用率低

### React的特点

* 采用组件化模式、声明式编码，提高开发效率及组件复用率
* 在React Native中可以使用React语法进行移动端开发
* 使用虚拟DOM+优秀的Diffing算法，尽量减少与真实DOM的交互
* 笔记：https://github.com/TaoLoading/01-WebStudy/blob/master/18-React

## 工具

React Developer Tools

* 安装：谷歌浏览器 --> 扩展程序 --> 访问chrome应用商店 --> 搜索React Developer Tools --> 添加到扩展程序
* 使用：开发者模式 --> Components（查看react组件）和Profiler（记录网站的性能）

## 虚拟DOM

虚拟DOM是一种轻量级的JavaScript对象，它是真实DOM的一种抽象表示。虚拟DOM的主要优点包括：

* **提高性能**：通过比较虚拟DOM的变化，减少对实际DOM的操作，从而提高应用性能。
* **跨平台**：虚拟DOM可以用于不同的渲染目标，如浏览器、服务器或原生应用。
* **简化开发**：框架可以自动管理DOM更新，开发者只需关注数据变化。

虚拟DOM的工作流程通常包括以下几个步骤：

* **创建**：根据组件的状态创建虚拟DOM树。
* **比较**：当状态发生变化时，生成新的虚拟DOM树，并与之前的虚拟DOM树进行比较，找出差异。
* **更新**：将差异应用到真实的DOM上，实现界面的更新。

## react脚手架

* 脚手架：用来帮助我们快速创建一个基于xxx库的模板项目
  * 包含了项目所需的webpack配置、react配置、路由配置、jsx解析器等
  * 下载好了所有相关的依赖
  * 可以直接运行
* 常用的库：Vue-cli、Create React App（react脚手架）
* 项目的整体技术架构为: react + webpack + es6 + eslint
* 使用脚手架开发的项目的特点:
  * 模块化(js、css)
  * 组件化
  * 工程化

## 创建项目并启动

* 全局安装create-react-app
  * npm i -g create-react-app
* 切换到想创建项目的目录,创建项目
  * create-react-app react_staging
* 进入项目文件夹,启动项目
  * cd react_staging
  * npm start
* 可以通过以下步骤指定react版本
  * 打开 package.json 文件，找到 dependencies 部分，将 react 和 react-dom 的版本修改为 "18.2.0"，例如：
    ```json
    "dependencies": {
      "react": "18.2.0",
      "react-dom": "18.2.0",
      // 其他依赖...
    }
    ```
  * 保存文件后，删除 node_modules 文件夹
  * 重新安装依赖
    * npm i
* 如果运行项目报以下错误
  * 错误信息：
    * Module not found: Error: Can't resolve 'web-vitals' in 'D:\ckc\note\reactNote\react_staging\src'
ERROR in ./src/reportWebVitals.js 5:4-24
  * 解决方案：
    * npm i web-vitals
    * 重新启动项目
* 访问项目
  * http://localhost:3000/

## react脚手架的项目结构

* public：静态资源文件夹
* src：源码文件夹
* package.json：存储项目名称、版本、描述等配置
* README.md：项目的说明文档，markdown格式
