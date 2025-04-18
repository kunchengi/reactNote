import React, { Component,lazy,Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
// import { Route, Redirect } from 'react-router-dom'
import TopBar from './compoents/TopBar'// 一般组件
// import Home from './pages/Home'// 路由组件
// import About from './pages/About'// 路由组件

// 懒加载路由组件，当路由匹配时才加载
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))

export default class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        {/* 当前url为 /home时显示 Home组件 */}
        {/* <Route path="/home" component={Home} /> */}
        {/* 当前url为 /about时显示 About组件 */}
        {/* <Route path="/about" component={About} /> */}

        {/* 如果同一个路由配置了多个组件，那么这些组件会同时展示 */}
        {/* <Route path="/home" component={Home} />
        <Route path="/home" component={About} /> */}

        {/* 如果外层包裹了Switch组件，那么只会渲染第一个匹配到的组件 */}
        {/* <Switch>
          <Route path="/home" component={Home} />
          <Route path="/home" component={About} />
        </Switch> */}

        {/* 如果加了exact属性，那么为精准匹配,只有当前url为 /home时才显示 Home组件 
        也可以只写exact
        精准匹配可能会导致无法匹配二级路由,非必要不使用精准匹配 */}
        {/* <Route exact={true} path="/home" component={Home} />
        <Route exact path="/about" component={About} /> */}

        {/* 使用Suspense包裹路由组件，在加载过程中显示fallback的内容 */}
        <Suspense fallback={<div>Loading...</div>}>
        {/* fallback也可以使用组件 */}
        {/* <Suspense fallback={<Loading />}> */}
          <Switch>
            {/* 注册路由 */}
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            {/* 放最后面,如果没有匹配到,则重定向到/home */}
            <Redirect to="/home" />
          </Switch>
        </Suspense>
      </div>
    )
  }
}
