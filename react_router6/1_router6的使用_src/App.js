import TopBar from './compoents/TopBar'
import { useRoutes, useInRouterContext } from 'react-router-dom'
import routes from './routes'

function App() {
  // 注册路由表
  const elements = useRoutes(routes)

  // 判断是否在路由上下文环境，只要被BrowserRouter/hashRouter包裹，都在路由上下文环境，都返回true
  // 返回一个布尔值
  console.log(useInRouterContext());

  return (
    <div className="App">
      <TopBar />
      {/* 使用路由表 */}
      {elements}
    </div>
  );
}

export default App;
