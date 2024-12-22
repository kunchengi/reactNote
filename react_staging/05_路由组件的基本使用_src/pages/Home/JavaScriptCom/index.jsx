import React, { Component } from 'react'

export default class JavaScriptCom extends Component {
  render() {
    const { content } = this.props.match.params
    return (
      <div>{ content }</div>
    )
  }
}
