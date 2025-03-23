import { forwardRef } from 'react'

/**
 * React.forwardRef
 * 1. 可以将子组件的ref暴露给父组件
 * 2. 子组件必须是函数组件
 */

const MemoFon = forwardRef(function Son(props,ref) {
    return (
        <div>
            <input ref={ref} type="text" />
        </div>
    )
})

export default MemoFon;