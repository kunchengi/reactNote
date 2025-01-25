import { Navigate } from 'react-router-dom'
import About from "../pages/About"
import Home from "../pages/Home"
import JavaScriptCom from '../pages/Home/JavaScriptCom'
import ReactCom from '../pages/Home/ReactCom'

// 定义路由表
const routers = [
    {
        path: '/home',
        element: <Home />,
        // 1. 定义子路由
        children: [
            {
                path: 'javascript',
                element: <JavaScriptCom />
            },
            {
                path: 'react',
                element: <ReactCom />
            },
            {
                path: '/home',
                element: <Navigate to="/home/javascript" />
            }
        ]
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/',
        element: <Navigate to="/home" />
    }
]

export default routers