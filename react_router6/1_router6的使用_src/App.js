import TopBar from './compoents/TopBar'
import { useRoutes } from 'react-router-dom'
import routes from './routes'

function App() {
  // 注册路由表
  const elements = useRoutes(routes)

  return (
    <div className="App">
      <TopBar />
      {/* 使用路由表 */}
      {elements}
    </div>
  );
}

export default App;
