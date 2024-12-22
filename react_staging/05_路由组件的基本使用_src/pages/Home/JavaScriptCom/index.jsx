import React, { Component } from 'react'
import qs from 'qs';

export default class JavaScriptCom extends Component {
  render() {
    // 接收params参数
    // const { content } = this.props.match.params

    // 接收search参数，并使用URLSearchParams解析
    // const result = new URLSearchParams(this.props.location.search);
    // const content = result.get('content');

    // 接收search参数，并使用qs解析
    const { content } = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });

    return (
      <div>{ content }</div>
    )
  }
}
