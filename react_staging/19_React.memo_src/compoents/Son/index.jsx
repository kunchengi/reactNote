import { memo } from 'react'

/**
 * React.memo
 * 1. 当组件的props发生变化时，组件才会重新渲染
 * 2. 如果props是基础类型，且对应数据发生变化，子组件会重新渲染
 */

const MemoFon = memo(function Son({ name }) {
    console.log('son组件重新渲染了');
    return (
        <div>
            <p>我是儿子，我的名字是：{name}</p>
        </div>
    )
})

export default MemoFon;