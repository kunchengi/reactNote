import { Navigate } from 'react-router-dom'
import About from "../pages/About"
import Home from "../pages/Home"

// 定义路由表
const routers = [
    {
        path: '/home',
        element: <Home />
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