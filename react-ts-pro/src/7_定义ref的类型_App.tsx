import { useEffect, useRef } from "react"

function App() {
  // 定义一个ref对象，用于获取input元素，并指定类型为HTMLInputElement
  const inputRef = useRef<HTMLInputElement>(null)

  // 定义一个ref对象，用于存储定时器
  const timerRef = useRef<number>()
  useEffect(() => {
    // 定义一个定时器，用于每隔1秒更新input元素的值
    timerRef.current = setInterval(() => {
      inputRef.current!.value = 'Hello'
    }, 1000)
    // 返回一个清理函数，用于清除定时器
    return () => {
      clearInterval(timerRef.current)
    }
  }, [])
  
  return (
    <>
      <input ref={inputRef} type="text" />
      {/* 由于ref可能为null，所以需要使用可选链操作符?. */}
      <button onClick={() => inputRef.current?.focus()}>点我</button>
    </>
  )
}

export default App
