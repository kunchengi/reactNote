import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import './TopBar.css'; // 引入CSS文件
import TopBarNavLink from '../TopBarNavLink';

export default class TopBar extends Component {
    render() {
        return (
            <div className="top-bar">
                <nav className="nav-links">
                    <ul>
                        {/* 点击时跳转到/home路由 */}
                        {/* 使用NavLink组件给组件添加点击后的效果,可以添加activeClassName属性指定css样式,如果没写,则默认为active样式*/}
                        {/* <li><NavLink activeClassName="active" to="/home">首页</NavLink></li> */}
                        {/* 点击时跳转到/about路由 */}
                        {/* <li><NavLink activeClassName="active" to="/about">关于我们</NavLink></li> */}


                        {/* 使用自定义组件,这个跟之前写法不一样,不是自结束标签,标签体的内容会被渲染到组件内部,所以要使用this.props.children属性来获取标签体内容 */}
                        {/* <li><TopBarNavLink to="/home" activeClassName="active">首页</TopBarNavLink></li>
                        <li><TopBarNavLink to="/about" activeClassName="active">关于我们</TopBarNavLink></li> */}

                        {/* 默认模糊匹配,先匹配/home,再匹配/home/a,最后匹配/home/a/b,所以能正常渲染/home路由的组件 */}
                        <li><TopBarNavLink to="/home/a/b" activeClassName="active">首页</TopBarNavLink></li>
                    </ul>
                </nav>
            </div>
        );
    }
}