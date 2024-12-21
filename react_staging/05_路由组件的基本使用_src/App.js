import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import TopBar from './compoents/TopBar'// 一般组件
import Home from './pages/Home'// 路由组件
import About from './pages/About'// 路由组件

export default class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        {/* 当前url为 /home时显示 Home组件 */}
        <Route path="/home" component={Home} />
        {/* 当前url为 /about时显示 About组件 */}
        <Route path="/about" component={About} />
      </div>
    )
  }
}
