import React, { Component } from 'react'
import TopBarNavLink from '../TopBarNavLink';
import './Sidebar.css';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <TopBarNavLink to="/home/javascript" className="nav-button">JavaScript</TopBarNavLink>
                <TopBarNavLink to="/home/react" className="nav-button">React</TopBarNavLink>
            </div>
        )
    }
}
