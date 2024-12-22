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
            {/* 声明params参数
            在url后面加上/:content,会将url传过来的content参数存到组件的props.match.params.content中 */}
            {/* <Route path="/home/javascript/:content" component={JavaScriptCom} />
            <Route path="/home/react/:content" component={ReactCom} />*/}
            {/* 这里也需要携带参数，由于是教学，先写死 */}
            {/* <Redirect to={`/home/javascript/${"数组的方法"}`} /> */}

            {/* search参数不需要声明，会自动添加到组件的props.location.search中 */}
            <Route path="/home/javascript" component={JavaScriptCom} />
            <Route path="/home/react" component={ReactCom} />
            <Redirect to={`/home/javascript?content=${"数组的方法"}`} />
          </Switch>
        </div>
      </div>
    )
  }
}
