import React, { Component } from 'react';
import './TopBar.css'; // 引入CSS文件
import { Link } from 'react-router-dom';

export default class TopBar extends Component {
    render() {
        return (
            <div className="top-bar">
                <nav className="nav-links">
                    <ul>
                        {/* 点击时跳转到/home路由 */}
                        <li><Link to="/home">首页</Link></li>
                        {/* 点击时跳转到/about路由 */}
                        <li><Link to="/about">关于我们</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}