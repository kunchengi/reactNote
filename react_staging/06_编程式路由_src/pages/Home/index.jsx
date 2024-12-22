import React, { Component } from 'react'

export default class index extends Component {
  render() {
    const state = this.props.location.state || {};
    const account = state.account || ''

    return (
      <div>
        <h1>欢迎回来，{account}</h1>
        {/* 执行this.props.history.goBack方法能回退一步 */}
        <button onClick={this.props.history.goBack}>goBack返回</button>
        {/* 执行this.props.history.go方法能前进/回退指定的步数，以下是回退一步 */}
        <button onClick={this.props.history.go.bind(this,-1)}>go返回</button>
      </div>
    )
  }
}
