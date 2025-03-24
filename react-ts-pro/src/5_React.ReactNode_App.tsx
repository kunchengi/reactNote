import React from "react"

type Father = {
  name: string
  children: React.ReactNode// ReactNode 可以是元素、字符串、数字、数组、null、undefined、boolean、Fragment
}

const Father: React.FC<Father> = ({ name, children }) => {
  return (
    <>
      <h1>Father: {name}</h1>
      {children}
    </>
  )
}

function App() {
  return (
    <>
      {/* 传递元素给Father，类似插槽 */}
      <Father name="Jack">
        <h2>Son: Jack</h2>
      </Father>
    </>
  )
}

export default App
