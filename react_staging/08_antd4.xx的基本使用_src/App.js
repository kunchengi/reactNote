import React, { Component } from 'react'
// 引入antd的Button组件
import { Button } from 'antd'
// 引入antd的样式,5.xx版本后不需要引入样式文件
import 'antd/dist/antd.css'
// 引入icon
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
