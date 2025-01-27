import { createSlice } from '@reduxjs/toolkit'

// 1. 创建countStore
const countStore = createSlice({
    // 命名
    name: 'count',
    // 初始值
    initialState: 0,
    // 修改状态的同步方法
    reducers: {
        // increment action
        increment(state, action) {
            return state + action.payload;
        },
        // decrement action
        decrement(state, action) {
            return state - action.payload;
        }
    }
})

// 2. 编写异步action
const incrementAsync = (data, time) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment(data));
        }, time);
    }
}

// 3. 生成action对象并导出
// 获取action对象
const { increment , decrement } = countStore.actions;
// 按需导出action对象
export { increment , decrement, incrementAsync };

// 4. 导出reducer
export default countStore.reducer;