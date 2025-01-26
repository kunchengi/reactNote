import React,{useState} from 'react'
import { nanoid } from 'nanoid';
import { NavLink } from 'react-router-dom'
import './sidebar.css'

export default function Sidebar() {

    function getClassName(activeObj) {
        return activeObj.isActive ? 'active' : ''
    }

    const [courseList] = useState([
        { id: nanoid(), name: 'JavaScript', path: 'javascript', content: '数组的方法' },
        { id: nanoid(), name: 'React', path: 'react', content: '路由的使用' }
    ])

    return (
        <div className="sidebar">
            {/* 2. link标签,点击后跳转到对应路由 */}
            {/* to有三种写法
            to="javascript"会跳转到当前路径下的javascript页面,例如http://localhost:3000/home/javascript
            to="/javascript"会跳转到根路径下的javascript页面,例如http://localhost:3000/javascript
            to="./javascript"跟to="javascript"一样 */}
            {/* <NavLink to="javascript" className={getClassName}>javascript</NavLink>
            <NavLink to="react" className={getClassName}>react</NavLink> */}

            {/* 2. 在Link中携带params参数 */}
            {courseList.map(item => (
                <NavLink key={item.id} to={`${item.path}/${item.name}/${item.content}`} className={getClassName}>
                    {item.name}
                </NavLink>
            ))}
        </div>
    )
}
