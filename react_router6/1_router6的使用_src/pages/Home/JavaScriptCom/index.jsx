import React from 'react'
import { useParams } from 'react-router-dom';

export default function JavaScriptCom() {
  // 3. 获取params参数
  const { name, content } = useParams()
  return (
    <div>
      <h2>{name}</h2>
      <h4>{content}</h4>
    </div>
  )
}
