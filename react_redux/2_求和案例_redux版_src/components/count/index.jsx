import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/actions/count';

/**
 * useSelector、useDispatch钩子不能在类组件使用，只能使用函数式组件
 * useSelector
 *  用于在函数组件中从 Redux store 中选择并读取数据
 *  它使得组件可以订阅 Redux store 的状态变化，并在状态变化时重新渲染。
 *  通过 memoization（记忆化）技术避免不必要的重新渲染。
 *  相比于传统的 connect 方法，useSelector 使代码更加简洁和直观。
 * useDispatch
 *  用于获取 Redux store 的 dispatch 方法。
 */
export default function Count() {
    const selectNumberRef = useRef();
    // 获取state中的count数据
    const count = useSelector(state => state.count);
    const personsLen = useSelector(state => state.persons.length);
    // 获取state的dispatch方法
    const dispatch = useDispatch();

    const increment = () => {
        const selectNum = Number(selectNumberRef.current.value);
        dispatch(createIncrementAction(selectNum));
    };

    const decrement = () => {
        const selectNum = Number(selectNumberRef.current.value);
        dispatch(createDecrementAction(selectNum));
    };

    const incrementIfOdd = () => {
        if (count % 2 !== 0) {
            const selectNum = Number(selectNumberRef.current.value);
            dispatch(createIncrementAction(selectNum));
        }
    };

    const incrementAsync = () => {
        const selectNum = Number(selectNumberRef.current.value);
        dispatch(createIncrementAsyncAction(selectNum, 1000)); // 1000毫秒后增加
    };

    return (
        <div>
            <h2>Count组件，总人数为{personsLen}</h2>
            <h4>当前求和为：{count}</h4>
            <select ref={selectNumberRef}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={incrementIfOdd}>当前求和为奇数再加</button>
            <button onClick={incrementAsync}>异步加</button>
        </div>
    );
}