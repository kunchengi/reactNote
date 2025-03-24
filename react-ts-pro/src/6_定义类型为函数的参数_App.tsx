
type FatherProps = {
  name: string
  callBack: (value: string) => void// 定义类型为函数的参数
}

const Father: React.FC<FatherProps> = ({ name, callBack }) => {
  return (
    <>
      <h1>Father: {name}</h1>
      <button onClick={() => callBack('Hello'+name)}>点我</button>
    </>
  )
}

function App() {
  // 定义一个具名函数，用于传递给Father组件，并指定参数类型
  const handleClick = (value: string) => {
    console.log(value)
  }
  return (
    <>
      {/* 通过内联函数传递回调函数时，会自动推断参数类型 */}
      <Father name="张三" callBack={(value) => console.log(value)} />
      {/* 通过具名函数传递回调函数时，需要手动指定参数类型 */}
      <Father name="李四" callBack={handleClick} />
    </>
  )
}

export default App
