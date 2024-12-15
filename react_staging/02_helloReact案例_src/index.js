// 引入react核心库
import React from 'react'
// 引入react-dom
import ReactDOM from 'react-dom'
// 引入App组件,.js和.jsx都可以省略
import App from './APP'

// 渲染APP组件到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)