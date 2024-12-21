import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // 如果包裹了StrictMode，会执行两次渲染
    // <React.StrictMode>
        <App />
    // </React.StrictMode>
)