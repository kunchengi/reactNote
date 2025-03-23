import { useRef } from 'react'
import Son from '../Son'

export default function Father() {
    const sonInputRef = useRef(null)

    return (
        <div>
            <Son ref={sonInputRef} />
            <button onClick={() => {
                sonInputRef.current.input1.focus()
            }}>点我聚焦子组件输入框1</button>
            <button onClick={() => {
                sonInputRef.current.input2.focus()
            }}>点我聚焦子组件输入框2</button>
            <button onClick={() => {
                sonInputRef.current.setName('王五')
            }}>点我修改儿子名字</button>     
        </div>
    )
}
