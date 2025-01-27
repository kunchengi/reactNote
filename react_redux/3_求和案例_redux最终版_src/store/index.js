

import { configureStore } from '@reduxjs/toolkit';
// 5. 引入count的reducer
import count from './modules/countStore';

// 6. 创建store并暴露出去
const store = configureStore({
  reducer: {
    count
  }
});

export default store;
