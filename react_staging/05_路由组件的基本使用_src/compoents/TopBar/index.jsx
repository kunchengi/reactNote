import React, { Component } from 'react';
import './TopBar.css'; // 引入CSS文件
import { NavLink } from 'react-router-dom';

export default class TopBar extends Component {
    render() {
        return (
            <div className="top-bar">
                <nav className="nav-links">
                    <ul>
                        {/* 点击时跳转到/home路由 */}
                        {/* 使用NavLink组件给组件添加点击后的效果,可以添加activeClassName属性指定css样式,如果没写,则默认为active样式*/}
                        <li><NavLink activeClassName="active" to="/home">首页</NavLink></li>
                        {/* 点击时跳转到/about路由 */}
                        <li><NavLink activeClassName="active" to="/about">关于我们</NavLink></li>
                    </ul>
                </nav>
            </div>
        );
    }
}