import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// 引入react-redux的组件Provider组件，用于包裹整个应用
import { Provider } from 'react-redux';
// 引入store
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // 使用Provider组件包裹整个应用
    // 将store传给Provider组件，这样Provider组件下的所有组件都可以使用store
    <Provider store={store}>
        <App />
    </Provider>
);
