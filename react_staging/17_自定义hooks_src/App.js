import React, { useState } from 'react'

// 自定义hooks，实现toggle的复用
const useToggle = () => {
  const [isShow, setIsShow] = useState(true);
  const toggle = () => {
    setIsShow(!isShow);
  }
  return [isShow, toggle];
}

export default function App() {

  const [ isShowH2, toggleH2 ] = useToggle();
  const [ isShowH4, toggleH4 ] = useToggle();

  return (
    <div>
      {isShowH2 && <h2>APP</h2>}
      <button onClick={toggleH2}>切换APP显隐</button>
      {isShowH4 && <h4>你好</h4>}
      <button onClick={toggleH4}>切换你好显隐</button>
    </div>
  )
}
