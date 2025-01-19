import React, { useState, useCallback } from 'react'
import Count from './compoents/Count'

export default function App() {
  // 创建一个状态，用于控制Count组件的显示与隐藏
  const [isShowCount, setIsShowCount] = useState(true);

  // 卸载Count组件
  /**
   * 使用 useCallback传入空数组，只在组件初始化时创建一次
   * 可以确保 increment 函数在父组件重新渲染时不会被重新创建
   * 从而避免 ChildComponent 的不必要的重新渲染。
   */
  const unmount = useCallback(() => {
    setIsShowCount(false);
  },[])

  return (
    <div>
      {/* 当isShowCount为true时，Count组件才渲染，传入unmount方法，让Count组件调用unmount方法，控制Count组件的卸载 */}
      {isShowCount && <Count unmount={unmount} />}
    </div>
  )
}
