import React,{useState} from 'react'
import { Navigate } from 'react-router-dom'
export default function Home() {
    const [count,setCount] = useState(0);
    return (
        <div>
            <h2>Home</h2>
            <h4>当前count的值是:{count}</h4>
            {/* 如果count的值是3，渲染Navigate组件,跳转到about页面
            Navigate有两个属性：to：跳转的路径，replace：是否替换当前路由，默认是false，如果为true，则替换当前路由，否则，跳转路由 */}
            {count===3&&<Navigate to="/about" replace={true}></Navigate>}
            <button onClick={()=>setCount(count+1)}>+1</button>
        </div>
    )
}
