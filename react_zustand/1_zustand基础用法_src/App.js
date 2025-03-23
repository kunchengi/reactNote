import { create }  from 'zustand';
// 1. 创建stort

// 函数参数必须返回一个对象
// set是专门用来修改数据的方法，必须调用set方法来修改状态
const useStore = create((set) => ({
  // 2. 定义状态数据
  count: 0,
  // 3. 定义修改状态的方法
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  // Zustand异步支持
  // 直接在函数中编写异步逻辑，然后调用set方法修改状态即可
  // 直接添加异步方法
  asyncInc: async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    set((state) => ({ count: state.count + 1 })); 
  }
}));

function App() {
  // 4. 从store中获取数据和方法：
  const { count, inc, dec, reset, asyncInc } = useStore();
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={inc}>+1</button>
      <button onClick={dec}>-1</button>
      <button onClick={reset}>reset</button>
      <button onClick={asyncInc}>异步+1</button>
    </div>
  );
}

export default App;
