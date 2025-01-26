import React from 'react'
// import { useParams } from 'react-router-dom';
// import { useSearchParams,useLocation } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function JavaScriptCom() {
  // 3. 获取params参数
  // const { name, content } = useParams()

  // 2. 获取到的是[searchParams，setSearchParams]
  // searchParams是Map对象，可以获取对应参数值
  // setSearchParams用于更新search参数，类似setState
  // const [searchParams, setSearchParams] = useSearchParams()

  // 也可以通过useLocation获取到location对象，location对象中有search属性，
  const location = useLocation()
  // console.log(location.search);// 输出：?name=JavaScript&content=%E6%95%B0%E7%BB%84%E7%9A%84%E6%96%B9%E6%B3%95

  // 2. 通过location.state获取到路由传参
  const { name, content } = location.state || {};
  return (
    <div>
      {/* <h2>{searchParams.get('name')}</h2>
      <h4>{searchParams.get('content')}</h4>
      <button onClick={() => setSearchParams({ name: 'JavaScript', content: '异步编程' })}>修改课程</button> */}

      <h2>{name}</h2>
      <h4>{content}</h4>
    </div>
  )
}
