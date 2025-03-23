import { useReducer } from 'react'

/**
 * useReducer
 * 1. 为了解决复杂的状态逻辑，useReducer 是 useState 的替代方案
 * 2. 类似redux，有一个state，通过dispatch来触发action，从而更新state
 */

// 1. 定义一个reducer，根据action的类型来更新state
function countReducer(state, action) {
    switch (action.type) {
        case 'increment':// 加1
            return { count: state.count + 1 }
        case 'decrement':// 减1
            return { count: state.count - 1 }
        case 'reset':// 重置
            return { count: 0 }
        case'setCount':// 设置值
            return { count: action.payload }
        default:
            throw new Error()
    }
}

export default function Count() {

    // 2. 使用useReducer, 接收一个reducer和初始值
    const [state, dispatch] = useReducer(countReducer, { count: 0 })

    // 3. 定义一个函数，用来触发dispatch
    function changeCount(type) {
        dispatch({ type })
    }

    // 可以传入payload设置值
    function setCount(count) {
        const newCount = Number(count);
        if (isNaN(newCount)) return;
        dispatch({ type: 'setCount', payload: newCount })
    }

    return (
        <div>
            <h2>当前求和为{state.count}</h2>
            <button onClick={() => changeCount('increment')}>点我+1</button>
            <button onClick={() => changeCount('decrement')}>点我-1</button>
            <button onClick={() => changeCount('reset')}>重置</button>
            <input type="text" value={state.count} onChange={(e) => setCount(e.target.value)} />
        </div>
    )
}
