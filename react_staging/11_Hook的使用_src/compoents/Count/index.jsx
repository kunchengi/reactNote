import React, { useState } from 'react'

/**
 * 函数式组件
 *  初次渲染调用一次，之后每次状态更新重新渲染组件调用一次
 */
export default function Count() {

    /**
     * 使用useState创建一个count状态
     * 传入初始值0，初次渲染时会将初始值赋值给count
     * count为状态值，setCount为修改count状态值的函数
     */
    const [count, setCount] = useState(0)

    const increment = () => {
        // 传入最新状态，修改count状态值
        // setCount(count + 1);
        // 传入最新状态，修改count状态值，使用函数的形式，可以获取到最新的状态值
        // setCount没有修改完成后的回调，只能传入一个参数
        setCount(preCount => preCount + 1);
    }

    return (
        <div>
            <h2>当前求和为{count}</h2>
            <button onClick={increment}>点我+1</button>
        </div>
    )
}
