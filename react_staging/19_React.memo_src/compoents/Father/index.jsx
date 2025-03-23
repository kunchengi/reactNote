import { useState } from 'react'
import Son from '../Son'

export default function Father() {
    const [fatherData, setFatherData] = useState({ name: '张三', sonName: '李四' })
    return (
        <div>
            <p>我是父亲，我的名字是：{fatherData.name}</p>
            <Son name={fatherData.sonName} />
            <button onClick={() => setFatherData({ ...fatherData, name: '王五' })}>把父亲名字改成王五</button>
            <button onClick={() => setFatherData({...fatherData, sonName: '赵六' })}>把儿子名字改成赵六</button>
        </div>
    )
}
