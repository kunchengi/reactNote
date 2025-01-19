import React, { useState, useEffect, useCallback } from 'react'


/**
 * 函数式组件
 *  初次渲染调用一次，之后每次状态更新重新渲染组件调用一次
 */
// 接收unmount参数，用于在组件卸载时执行一些清理工作
export default function Count({ unmount }) {

    /**
     * 使用useState创建一个count状态
     * 传入初始值0，初次渲染时会将初始值赋值给count
     * count为状态值，setCount为修改count状态值的函数
     */
    const [count, setCount] = useState(0);

    /**
     * useEffect用于监听状态更新，初次渲染和状态更新都会执行
     * 当count状态更新时，执行回调
     * 第一个参数为回调函数
     * 第二个参数为监听的依赖项
     *  不传时，监听所有状态更新，当状态更新时都会执行回调
     *  为空数组时相当于componentDidMount，只在首次渲染时执行
     *  为依赖项数组时，监听数组中的状态更新，当数组中的状态更新时，执行回调
     *  依赖项数组中为函数时，执行函数，返回一个数组，数组中的元素为依赖项
     * 注意：只能监听setCount(preCount => preCount + 1)的更新，不能监听setCount(count + 1)的更新
     */

    // useEffect(() => {
    //     console.log('初次渲染');
    //     const timer = setInterval(() => {
    //         setCount(preCount => preCount + 1);
    //     }, 500);
    //     // 组件销毁前执行返回的回调函数
    //     return () => {
    //         console.log('组件销毁前');
    //         clearInterval(timer);
    //     }
    // }, [])

    // // 错误方式
    // const checkCount = () => {
    //     if (count > 5) {
    //         setCount(0);
    //     }
    // }

    // useEffect(() => {
    //     console.log('count更新');
    //     // 调用非useCallback声明的函数，会报警告，因为每次渲染都会重新声明checkCount函数，不能确保函数引用不变
    //     checkCount();
    // }, [count, checkCount])// 这里也要传checkCount，否则会警告

    /**
     * useCallback
     *  它用于缓存函数，避免在每次渲染时都创建新的函数实例。
     *  这对于传递给子组件的回调函数特别有用，可以防止子组件不必要的重新渲染。
     *  第一个参数为回调函数
     *  第二个参数为依赖项
     *      不传时，每次渲染都会创建新的函数实例，与不使用useCallback相同
     *      传空数组时，只在组件初始化时创建一次
     *      当回调函数需要使用某个状态或props时，需要将该状态或props作为依赖项传入
     */
    const checkCount = useCallback(() => {
        if (count > 5) {
            setCount(0);
        }
    },[count]);

    useEffect(() => {
        checkCount();
    }, [count, checkCount])

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
            <button onClick={unmount}>卸载组件</button>
        </div>
    )
}
