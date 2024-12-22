import React, { Component } from 'react'

export default class JavaScriptCom extends Component {
  render() {
    // 接收params参数
    const { content } = this.props.match.params
    return (
      <div>{ content }</div>
    )
  }
}
