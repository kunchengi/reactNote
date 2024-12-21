import React, { Component } from 'react'
import { Route,Switch } from 'react-router-dom'
import TopBar from './compoents/TopBar'// 一般组件
import Home from './pages/Home'// 路由组件
import About from './pages/About'// 路由组件

export default class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        {/* 当前url为 /home时显示 Home组件 */}
        {/* <Route path="/home" component={Home} /> */}
        {/* 当前url为 /about时显示 About组件 */}
        {/* <Route path="/about" component={About} /> */}

        {/* 如果同一个路由配置了多个组件，那么这些组件会同时展示 */}
        {/* <Route path="/home" component={Home} />
        <Route path="/home" component={About} /> */}

        {/* 如果外层包裹了Switch组件，那么只会渲染第一个匹配到的组件 */}
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/home" component={About} />
        </Switch>
      </div>
    )
  }
}
