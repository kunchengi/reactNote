/**
 * 该文件专门为Count组件生成action对象
 */
import { INCREMENT, DECREMENT } from './constant'

// 同步action，返回对象
export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })


// 异步action，返回函数，该函数执行异步任务，一般会调用同步action
export const createIncrementAsyncAction = (data, time) => {
    return dispatch => {
        setTimeout(() => {
            // 通知redux执行对应的reducer
            dispatch(createIncrementAction(data))
        }, time)
    }
}