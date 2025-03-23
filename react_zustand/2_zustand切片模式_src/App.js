
import { create } from "zustand";
/**
 * zustand切片模式
 * 当单个store比较复杂时，可以使用切片模式进行模块拆分组合，类似于模块化
 */
// 用户信息，注意：这里不需要使用create创建store，只需要在根store中调用即可
const userStore = (set) => ({
  name: '张三',
  age: 18,
});

// 车辆信息
const carsStore = (set) => ({
  cars: ['奔驰', '宝马', '奥迪'],
  addCar: (car) => set((state) => ({ cars: [...state.cars, car] })), 
})

// 合并多个store
// 将接收的所有参数收集到args中
const rootStore = create((...args) => ({
  // 将接收到的参数展开传给子store
  ...userStore(...args),
  ...carsStore(...args),
}))

function App() {

  // 调用
  const { name, age, cars, addCar } = rootStore()

  return (
    <div className="App">
      <h1>我是{name}，今年{age}岁</h1>
      <h2>我的车有：</h2>
      <ul>
        {
          cars.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
      <button onClick={() => addCar('保时捷')}>再买一辆保时捷</button>
    </div>
  );
}

export default App;
