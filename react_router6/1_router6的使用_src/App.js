import { Routes, Route, Navigate } from 'react-router-dom'
import TopBar from './compoents/TopBar'
import Home from './pages/Home'
import About from './pages/About'
function App() {
  return (
    <div className="App">
      <TopBar />
      {/* 注册路由：必须使用Routes包裹路由组件，其它与Switch组件一样 */}
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* caseSensitive为是否区分大小写,默认为false,写了只会就会区分大小写 */}
        {/* <Route path="/ABOUT" caseSensitive element={<About />} /> */}
        <Route path="/about" element={<About />} />
        {/* 必须写重定向，否则会警告，重定向要使用组件Navigate
        Navigate组件必须要有to属性,否则会报错
        只要渲染Navigate组件，就会跳转到指定路由
        以下的意思是当路径为/时，渲染Navigate组件 */}
        <Route path="/" element={<Navigate to="/home"/>} />
      </Routes>
    </div>
  );
}

export default App;
