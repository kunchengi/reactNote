import React from 'react'
import { NavLink } from 'react-router-dom'
import './TopBar.css'
export default function TopBar() {
    return (
        <div className="top-bar">
            <nav className="nav-links">
                <ul>
                    {/* 点击时跳转到/home路由 */}
                    <li><NavLink to="/home">首页</NavLink></li>
                    {/* 点击时跳转到/about路由 */}
                    <li><NavLink to="/about">关于我们</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
