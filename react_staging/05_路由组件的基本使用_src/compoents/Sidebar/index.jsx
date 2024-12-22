import React, { Component } from 'react'
import { nanoid } from 'nanoid';
import TopBarNavLink from '../TopBarNavLink';
import './Sidebar.css';

export default class Sidebar extends Component {

    state = {
        courseList: [
            { id: nanoid(), name: 'JavaScript', path: '/home/javascript' , content: '数组的方法'},
            { id: nanoid(), name: 'React', path: '/home/react' , content: '路由的使用'}
        ]
    }

    render() {
        return (
            <div className="sidebar">
                {/* <TopBarNavLink to="/home/javascript" className="nav-button">JavaScript</TopBarNavLink>
                <TopBarNavLink to="/home/react" className="nav-button">React</TopBarNavLink> */}

                {/* 在url后面加上content参数，当匹配到/home/javascript/:content时，会把content参数赋值给组件的props.match.params.content */}
                {this.state.courseList.map(item => (
                    <TopBarNavLink key={item.id} to={`${item.path}/${item.content}`} className="nav-button">
                        {item.name}
                    </TopBarNavLink>
                ))}
            </div>
        )
    }
}
