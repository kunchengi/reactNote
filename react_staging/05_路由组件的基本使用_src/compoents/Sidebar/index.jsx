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

                {/* 向路由组件传递params参数
                在url后面加上content参数，当匹配到/home/javascript/:content时，会把content参数赋值给组件的props.match.params.content */}
                {/* {this.state.courseList.map(item => (
                    <TopBarNavLink key={item.id} to={`${item.path}/${item.content}`} className="nav-button">
                        {item.name}
                    </TopBarNavLink>
                ))} */}

                {/* 向路由组件传递search参数
                在url后面加上?id=xxx&content=xxx，当匹配到/home/javascript时，会把id和content参数赋值给组件的props.location.search */}
                {/* {this.state.courseList.map(item => (
                    <TopBarNavLink key={item.id} to={`${item.path}?content=${item.content}`} className="nav-button">
                        {item.name}
                    </TopBarNavLink>
                ))} */}

                {/* 其实也可以用这种方式传递search参数
                将对象{pathname: path, search: "?content=xxx"}赋值给to属性，当匹配到/home/javascript时，会把search参数赋值给组件的props.location.search */}
                {/* {this.state.courseList.map(item => (
                    <TopBarNavLink key={item.id} to={{ pathname: item.path, search: `?content=${item.content}` }} className="nav-button">
                        {item.name}
                    </TopBarNavLink>
                ))} */}

                {/* 向路由组件传递state参数
                将对象{pathname: path, state: {}}赋值给to属性，当匹配到/home/javascript时，会把state参数赋值给组件的props.location.state */}
                {this.state.courseList.map(item => (
                    <TopBarNavLink key={item.id} to={{ pathname: item.path, state: { content: item.content }}} className="nav-button">
                        {item.name}
                    </TopBarNavLink>
                ))}


            </div>
        )
    }
}
