type FatherProps = {
  fatherName: string,
  age?: number// 可选参数可以不传递
}

// 直接定义形参的类型
function Father({ fatherName }: FatherProps) {
  return (
    <>
      <h1>我是父亲，我的名字是{fatherName}</h1>
      <Son sonName="李四" />
    </>
  )
}

// type SonProps = {
//   sonName: string
// }

// 也可以通过interface定义类型
interface SonProps {
  sonName: string
}

// 定义函数的类型
const Son: React.FC<SonProps> = ({ sonName }) => {
  return (
    <>
      <h1>我是儿子，我的名字是{sonName}</h1>
    </>
  )
}

function App() {
  return (
    <>
    {/* 必须传递指定参数，否则会提示：类型 "{}" 中缺少属性 "fatherName"，但类型 "FatherProps" 中需要该属性。 */}
      <Father fatherName="张三" />
    </>
  )
}

export default App
