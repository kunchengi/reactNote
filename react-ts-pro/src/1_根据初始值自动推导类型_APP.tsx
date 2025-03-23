import { useState } from 'react'

function App() {
  // ts会自动将count的类型推导为初始值的类型number
  const [count, setCount] = useState(0)

  const changeCount = () => {
    // 当使用setCount时，必须传入对应类型的参数，否则会报错
    // setCount('1')
    // 正确的写法
    setCount(count + 1)
  }
  
  return (
    <div>
      APP...
    </div>
  )
}

export default App
