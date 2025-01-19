/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */

// 引入createStore，专门用于创建redux中最为核心的store对象
import { configureStore } from '@reduxjs/toolkit';
// 引入所有组件的reducer
import reducer from './index';

const store = configureStore({
  reducer,
});

export default store;
