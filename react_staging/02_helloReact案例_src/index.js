// 引入react核心库
import React from 'react'
// 引入react-dom，注意：react-dom已经不支持，需要引入react-dom/client
import ReactDOM from 'react-dom/client'
// 引入App组件,.js和.jsx都可以省略
import App from './APP'

// 渲染APP组件到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)