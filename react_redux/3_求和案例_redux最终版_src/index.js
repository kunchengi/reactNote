import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// 7. 引入react-redux的组件Provider组件，用于包裹整个应用
import { Provider } from 'react-redux';
// 8. 引入store
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // 9. 使用Provider组件包裹整个应用，将store传给Provider组件
    <Provider store={store}>
        <App />
    </Provider>
);
