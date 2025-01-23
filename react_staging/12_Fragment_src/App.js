import React, { Component,Fragment } from 'react'

/**
 * Fragment 组件
 *   Fragment 组件是一个虚拟的组件，它不会在浏览器中生成任何对应的标签
 *   Fragment 组件可以用于解决多个标签的嵌套问题
 *   Fragment 可以省略不写，直接<>内容</>
 *   Fragment 组件只能拥有key属性
 */
export default class App extends Component {
  render() {
    return (
      // <Fragment key={1}>
      //   APP...
      // </Fragment>
      <>
        APP...
      </>
    )
  }
}
