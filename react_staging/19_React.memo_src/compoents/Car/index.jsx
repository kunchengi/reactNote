import { memo } from 'react'
/**
 * 如果props是引用类型，且props是父组件直接声明的
 * 1. 当父组件的其他数据发生变化时，都会重新渲染父组件，导致cars重新创建，props的引用地址发生变化，子组件会重新渲染
 * 2. 解决：把cars放到useMemo中缓存
 */
const MemoCar = memo(function Car({ cars }) {
    console.log('car组件渲染了')
    return (
        <div>
            {cars.map(item => <p key={item}>{item}</p>)}
        </div>
    )
})

export default MemoCar;
