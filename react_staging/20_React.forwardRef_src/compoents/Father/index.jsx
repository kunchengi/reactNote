import { useRef } from 'react'
import Son from '../Son'

export default function Father() {
    const sonInputRef = useRef(null)
    return (
        <div>
            <Son ref={sonInputRef} />
            <button onClick={() => {
                sonInputRef.current.focus()
            }}>点我聚焦子组件输入框</button>
        </div>
    )
}
