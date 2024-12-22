import React, { Component } from 'react'

export default class ReactCom extends Component {
  render() {
    const { content } = this.props.match.params
    return (
      <div>{content}</div>
    )
  }
}
