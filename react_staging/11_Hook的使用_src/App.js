import React, { useState, useCallback, useMemo } from 'react'
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

  /**
   * useMemo
   *  类似计算属性，会返回计算结果
   *  可以避免在每次渲染时都执行一些昂贵的计算或创建新的对象
   *  允许你缓存计算结果，只有在依赖项发生变化时才会重新计算。
   */
  const [ userList ] = useState([
    { id: 1, name: '张三', age: 15 },
    { id: 2, name: '李四', age: 19 },
    { id: 3, name: '王五', age: 20 },
  ]);
  // 计算出18岁以上的用户
  const adult = useMemo(() => {
    return  userList.filter(item => item.age >= 18)
  }, [userList]);
  console.log(adult);// [ { id: 2, name: '李四', age: 19 }, { id: 3, name: '王五', age: 20 } ]

  return (
    <div>
      {/* 当isShowCount为true时，Count组件才渲染，传入unmount方法，让Count组件调用unmount方法，控制Count组件的卸载 */}
      {isShowCount && <Count unmount={unmount} />}
    </div>
  )
}
