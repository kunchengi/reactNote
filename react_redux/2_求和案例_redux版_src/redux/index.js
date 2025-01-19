/**
 * 该文件用于汇总所有reducer
 */
import count from './reducers/count';
import persons from './reducers/person';

const reducer = {
    count,
    persons
}

export default reducer