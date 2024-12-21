import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// 引入BrowserRouter路由管理器
import { BrowserRouter } from 'react-router-dom'
// import { HashRouter } from 'react-router-dom'

// 由于一个BrowserRouter/HashRouter只能管理被其包裹的路由，所以，在App外侧使用一个BrowserRouter/HashRouter包裹整个应用，这样，整个应用都被该路由管理
// 注意：BrowserRouter/HashRouter组件中不能再嵌套一个BrowserRouter/HashRouter
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // 使用BrowserRouter路由管理器
    <BrowserRouter>
        <App />
    </BrowserRouter>
    // 使用HashRouter路由管理器
    // <HashRouter>
    //     <App />
    // </HashRouter>
)