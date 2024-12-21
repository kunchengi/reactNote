import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class TopBarNavLink extends Component {
  render() {
    return (
      // 写法1
      // <NavLink activeClassName="active" to={this.props.to}>{this.props.children}</NavLink>
      // 写法2,这里会将children属性加到NavLink组件上,如果有children属性,则children属性的内容会被渲染到组件内部,不需要手动写标签体内容
      <NavLink activeClassName="active" {...this.props}/>
    )
  }
}
