import React from 'react'
// import { useParams, useMatch } from 'react-router-dom';
// import { useSearchParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

export default function ReactCom() {
  // // 3. 获取params参数
  // const { name, content } = useParams()
  // // useMatch可以通过path获取match对象
  // const match = useMatch('home/react/:name/:content')
  // console.log(match.params);//{"name": "React","content": "路由的使用"}

  // 2. 获取search参数
  // const [searchParams] = useSearchParams()

  // 2. 通过location.state获取到路由传参
  const location = useLocation()
  const { name, content } = location.state || {};
  return (
    <div>
      {/* <h2>{searchParams.get('name')}</h2>
      <h4>{searchParams.get('content')}</h4> */}
      <h2>{name}</h2>
      <h4>{content}</h4>
    </div>
  )
}
