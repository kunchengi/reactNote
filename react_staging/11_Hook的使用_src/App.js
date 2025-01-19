import React, { useState } from 'react'
import Count from './compoents/Count'

export default function App() {
  // 创建一个状态，用于控制Count组件的显示与隐藏
  const [isShowCount, setIsShowCount] = useState(true);

  // 卸载Count组件
  const unmount = () => {
    setIsShowCount(false);
  }

  return (
    <div>
      {/* 当isShowCount为true时，Count组件才渲染，传入unmount方法，让Count组件调用unmount方法，控制Count组件的卸载 */}
      {isShowCount && <Count unmount={unmount} />}
    </div>
  )
}
