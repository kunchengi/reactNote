import React, { Component } from 'react'

export default class Home extends Component {

  componentDidMount() {
    // 路由组件的props会默认传递一些路由相关的信息
    console.log(this.props);// { history: {…}, location: {…}, match: {…}}
  }
  render() {
    return (
      <div>主页</div>
    )
  }
}
