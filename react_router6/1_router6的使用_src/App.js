import { Routes, Route } from 'react-router-dom'
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
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
