import React from 'react'
import { Outlet, useNavigationType, useOutlet, useResolvedPath } from 'react-router-dom';
import Sidebar from '../../compoents/Sidebar';
import './Home.css';
export default function Home() {
    /**
     * 返回当前的路由导航类型
     *  POP: 点击浏览器的刷新按钮、浏览器直接打开当前路由
     *  PUSH
     *  REPLACE
     */
    console.log(useNavigationType());

    /**
     * 获取当前路由的子路由组件对象
     * 如果嵌套路由没有挂载（渲染），返回null
     * 如果嵌套路由挂载（渲染），返回子路由组件对象
     */
    console.log(useOutlet());

    /**
     * 解析任意路径，返回一个对象
     */
    const { pathname , search } = useResolvedPath('/home/reactcom?id=123');
    console.log(`pathname=${pathname},search=${search}`);// 输出：pathname=/home/reactcom,search=?id=123

    return (
        <div className="home-container">
            <Sidebar />
            <div className="content">
                {/* 3. 显示Home的子路由组件 */}
                <Outlet />
            </div>
        </div>
    )
}
