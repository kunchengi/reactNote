import Todo from './components/Todo';
// 引入store
import store from './store';

function App() {
  return (
    <div className="App">
      {/* 将store传递给Todo组件 */}
      <Todo store={store} />
    </div>
  );
}

export default App;
