/**
 * 该文件是用于创建一个为count组件服务的reducer纯函数模块
 * reducer函数会接收到两个参数，分别为：
 *      preState：之前的状态值
 *      action：动作对象{type:'increment',data:1}
 */
import { INCREMENT, DECREMENT } from '../constant'

// 如果preState没有传，即初始化时，默认为0
const initState = 0;
export default function countReducer(preState = initState, action) {
    // 从action对象中获取：type、data
    const { type, data } = action;
    // 根据type决定如何加工数据
	switch (type) {
		case INCREMENT:
			return preState + data;
		case DECREMENT:
			return preState - data;
		default:// 如果没有匹配的type，就返回原数据，例如：初始化时
			return preState;
	}
}