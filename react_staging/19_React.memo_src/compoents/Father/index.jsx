import { useMemo, useState } from 'react'
import Son from '../Son'
import Phone from '../Phone'
import Car from '../Car'

export default function Father() {
    const [fatherData, setFatherData] = useState({ name: '张三', sonName: '李四', phone: { name: '苹果', type: 'iphone13' } })
    // const cars = ['奔驰', '宝马', '奥迪'];
    const cars = useMemo(() => ['奔驰', '宝马', '奥迪'], [])
    return (
        <div>
            <p>我是父亲，我的名字是：{fatherData.name}</p>
            <Son name={fatherData.sonName} />
            <Phone phone={fatherData.phone} />
            <Car cars={cars} />
            <button onClick={() => setFatherData({ ...fatherData, name: '王五' })}>把父亲名字改成王五</button>
            <button onClick={() => setFatherData({ ...fatherData, sonName: '赵六' })}>把儿子名字改成赵六</button>
            <button onClick={() => setFatherData({ ...fatherData, phone: { name: '华为', type: 'mate50' } })}>把手机换成华为</button>
        </div>
    )
}
