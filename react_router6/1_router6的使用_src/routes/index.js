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
                path: 'javascript/:name/:content',// 1. 声明params参数
                element: <JavaScriptCom />
            },
            {
                path: 'react/:name/:content',// 1. 声明params参数
                element: <ReactCom />
            },
            {
                path: '/home',
                element: <Navigate to='/home/javascript/JavaScript/数组的方法' />// 2. 携带params参数
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