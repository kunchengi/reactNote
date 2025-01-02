import React, { Component } from 'react'
// 引入antd的Button组件
import { Button } from 'antd'
import {WechatOutlined} from '@ant-design/icons'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 使用Button组件 */}
        <Button type="primary">按钮</Button>
        {/* 使用icon */}
        <WechatOutlined />
      </div>
    )
  }
}
