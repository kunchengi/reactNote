import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './TopBar.css'; // 引入CSS文件

class TopBar extends Component {
    render() {
        return (
            <div className="top-bar">
                <nav className="nav-links">
                    <ul>
                        <li><div onClick={this.props.history.go.bind(this,-1)}>后退</div></li>
                        <li><div onClick={this.props.history.go.bind(this,1)}>前进</div></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

// 使用withRouter高阶组件包装TopBar组件，使其具有路由信息（this.props.history, this.props.location, this.props.match）
// withRouter方法会返回一个具有路由信息的新组件
export default withRouter(TopBar);