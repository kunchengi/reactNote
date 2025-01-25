import React from 'react'
import { NavLink } from 'react-router-dom'
import './TopBar.css'
export default function TopBar() {
    // 获取类名
    function getClassName(activeObj) {
        return activeObj.isActive ? 'active' : ''
    }
    return (
        <div className="top-bar">
            <nav className="nav-links">
                <ul>
                    {/* 点击时跳转到/home路由 */}
                    {/* NavLink的className属性指定css样式,如果没写,则默认为active样式
                    属性值为函数,函数的参数是active对象,有isActive和isPending和isTransitioning参撒
                    isActive为true时,表示当前路由是激活的,否则不是激活的
                    初次渲染时,会调用该函数,以后每次点击任意路由时,也会调用该函数 */}
                    {/* <li><NavLink className={(activeObj) => activeObj.isActive ? 'active' : ''} to="/home">首页</NavLink></li> */}
                    {/* 如果加了end属性,则跳转到子路由时,这个按钮不会变为激活状态 */}
                    {/* <li><NavLink className={getClassName} to="/home" end>首页</NavLink></li> */}
                    <li><NavLink className={getClassName} to="/home">首页</NavLink></li>
                    {/* 点击时跳转到/about路由 */}
                    <li><NavLink className={getClassName}  to="/about">关于我们</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
