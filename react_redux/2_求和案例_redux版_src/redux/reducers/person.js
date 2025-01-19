
import {ADD_PERSON} from '../constant'
/**
 * preState数据结构
 * [{name:'',age:''}]
 */
export default function PersonReducer(preState = [], action) {
    // 从action对象中获取：type、data
    const { type, personObj } = action;
    // 根据type决定如何加工数据
	switch (type) {
		case ADD_PERSON:
			return [personObj,...preState];
		default:// 如果没有匹配的type，就返回原数据，例如：初始化时
			return preState;
	}
}