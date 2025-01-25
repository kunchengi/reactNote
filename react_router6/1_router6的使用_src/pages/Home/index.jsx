import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../../compoents/Sidebar';
import './Home.css';
export default function Home() {
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
