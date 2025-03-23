import { useState } from 'react'
// 定义user的类型
type User = {
  name: string
  age: number
}

function App() {
  // 当需要使用对象类型时，需要使用泛型来指定类型
  // 如果无初始值，那么user的类型为User | undefined
  // 如果有初始值，那么user的类型为User
  const [user, setUser] = useState<User>()

  const changeUser = () => {
    // 当使用setUser时，必须传入对应类型的参数，否则会报错
    // 传入undefined
    setUser(undefined)
    // 传入user对象
    setUser({
      name: '张三',
      age: 18,
    })
  }

  return (
    <>
      APP...
    </>
  )
}

export default App
