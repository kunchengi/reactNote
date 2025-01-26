import React from 'react'
import { Outlet, useNavigationType } from 'react-router-dom';
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
