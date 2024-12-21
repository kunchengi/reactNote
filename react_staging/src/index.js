import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

// 由于一个BrowserRouter只能管理被其包裹的路由，所以，在App外侧使用一个BrowserRouter包裹整个应用，这样，整个应用都被该路由管理
// 注意：BrowserRouter组件中不能再嵌套一个BrowserRouter
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)