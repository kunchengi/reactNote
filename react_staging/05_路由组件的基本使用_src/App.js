import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import TopBar from './compoents/TopBar'
import Home from './compoents/Home'
import About from './compoents/About'

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
