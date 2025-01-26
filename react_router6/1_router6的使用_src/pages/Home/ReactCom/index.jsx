import React from 'react'
// import { useParams, useMatch } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom'

export default function ReactCom() {
  // // 3. 获取params参数
  // const { name, content } = useParams()
  // // useMatch可以通过path获取match对象
  // const match = useMatch('home/react/:name/:content')
  // console.log(match.params);//{"name": "React","content": "路由的使用"}

  // 2. 获取search参数
  const [searchParams] = useSearchParams()
  return (
    <div>
      <h2>{searchParams.get('name')}</h2>
      <h4>{searchParams.get('content')}</h4>
    </div>
  )
}
