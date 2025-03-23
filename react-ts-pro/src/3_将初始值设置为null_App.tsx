import { useState } from'react'

type User = {
  name: string
  age: number
}

function App() {
  // 当需要把初始值设为null时，可以把泛型设置为<指定类型 | null>
  const [user, setUser] = useState<User | null>(null)
  const changeUser = () => {
    // 可以将值设为null
    setUser(null)
  }
  return (
    <>
      {/* 当值有null时，会报错，所以需要使用可选链 */}
      {/* APP...{user.name} */}
      APP...{user?.name}
    </>
  )
}

export default App
