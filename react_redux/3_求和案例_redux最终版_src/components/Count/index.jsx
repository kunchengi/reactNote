import React, { useRef } from 'react';
// 10. 引入useSelector和useDispatch
import { useSelector, useDispatch } from 'react-redux';
// 11. 引入countStore的action
import { increment, decrement, incrementAsync } from '../../store/modules/countStore';

export default function Count() {
    const selectNumberRef = useRef();
    // 12. 获取state中的count数据
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    const onIncrement = () => {
        const selectNum = Number(selectNumberRef.current.value);
        // 13. 派发action，传递参数，通知reducer修改count
        dispatch(increment(selectNum));
    };

    const onDecrement = () => {
        const selectNum = Number(selectNumberRef.current.value);
        dispatch(decrement(selectNum));
    };

    const onIncrementIfOdd = () => {
        if (count % 2 !== 0) {
            const selectNum = Number(selectNumberRef.current.value);
            dispatch(increment(selectNum));
        }
    };

    const onIncrementAsync = () => {
        const selectNum = Number(selectNumberRef.current.value);
        // 14. 派发异步action，传递参数，通知reducer修改count
        dispatch(incrementAsync(selectNum, 1000)); // 1000毫秒后增加
    };

    return (
        <div>
            <h4>当前求和为：{count}</h4>
            <select ref={selectNumberRef}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
            <button onClick={onIncrementIfOdd}>当前求和为奇数再加</button>
            <button onClick={onIncrementAsync}>异步加</button>
        </div>
    );
}