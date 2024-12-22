import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import Sidebar from '../../compoents/Sidebar';
import JavaScriptCom from './JavaScriptCom';
import ReactCom from './ReactCom';
import './Home.css'; // 引入CSS文件

export default class Home extends Component {

  componentDidMount() {
    // 路由组件的props会默认传递一些路由相关的信息
    console.log(this.props);// { history: {…}, location: {…}, match: {…}}
  }
  render() {
    return (
      <div className="home-container">
        <Sidebar /> {/* 使用Sidebar组件 */}
        <div className="content">
          <Switch>
            {/* 在url后面加上/:content,会将url传过来的content参数存到组件的props.match.params.content中 */}
            <Route path="/home/javascript/:content" component={JavaScriptCom} />
            <Route path="/home/react/:content" component={ReactCom} />
            {/* 放最后面,如果没有匹配到,则重定向到/home/javascript */}
            <Redirect to="/home/javascript" />
          </Switch>
        </div>
      </div>
    )
  }
}
