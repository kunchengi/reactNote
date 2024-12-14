// 入口文件
// 引入react核心库
import React from 'react';
// 引入react-dom
import ReactDOM from 'react-dom/client';
// 引入通用样式
import './index.css';
// 引入App组件
import App from './App';
// 引入性能测试工具
import reportWebVitals from './reportWebVitals';

// 渲染App组件到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.StrictMode会检查被包裹的组件是否正确使用
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
