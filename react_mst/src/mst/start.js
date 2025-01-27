/**
 * 1. 起步，types的使用
 * 该mst学习教程要做的是一个TODO应用，所以需要考虑用到哪些数据，以及对应的数据结构
 * Todo对象
 *  name：名称
 *  done：是否完成
 * User对象
 *  name：名称
 */

// 引入mobx-state-tree
import { types, getSnapshot } from 'mobx-state-tree';

// types.model可以创建对象的type模型
// 给types.model传入一个带默认值的对象，可以限制对象的类型
// 创建Todo模型,定义Todo对象的类型
const Todo = types.model({
    name: '',
    done: false,
});

// 创建User模型,定义User对象的类型
const User = types.model({
    name: '',
});

// 创建User对象
const john = User.create();
// 创建Todo对象
const eat = Todo.create();

/**
 * 这里输出的是Proxy(Object)对象
 * 在MST中，RootStore.create() 创建的 store 是一个 MobX 的可观察对象（observable object），它是一个代理对象（Proxy）
 * 这种代理对象用于追踪状态的变化，以便 MobX 可以自动更新依赖于这些状态的视图。
 * 可以使用getSnapshot()转换为普通对象
 */
console.log(john);// 输出：Proxy(Object)

// getSnapshot可以获取对象的快照，即对象的值
console.log('用户:', getSnapshot(john));// 输出：用户: { name: '' }
console.log('任务:', getSnapshot(eat));// 输出：任务: { name: '', done: false }

// 创建对象时，可以传入一个对象，用来初始化对象的某些属性
// 传入一个对象
const zhangsan = User.create({ name: '张三' });
console.log('用户:', getSnapshot(zhangsan));// 输出：用户: { name: '张三' }

// 如果传入的初始值与定义的类型不一致，则会报错：
// Uncaught Error: [mobx-state-tree] Error while converting `{"name":"睡觉","done":1}` to `AnonymousModel`:
// 所以，传入的初始值必须与定义的类型一致
// const sleep = Todo.create({ name: '睡觉', done: 1 });
// console.log('任务:', getSnapshot(sleep));// 输出：任务: { name: '睡觉', done: true }

// 给types.model传入一个带默认值的对象，实际上用的是语法糖
// 还可以用以下方式限制对象的类型
const TodoObj = types.model({
    name: types.optional(types.string, '张三'),// 该方式可以设置属性的类型和默认值
    done: types.boolean,// 该方式可以设置属性的类型,但是没有默认值,在创建时必须传入.相当于必选
});

// 创建TodoObj对象
// 如果对象中有一个属性没值，则会报错
// 不传入任何参数，则使用默认值，但是done没有默认值，所以会报错
// const todo = TodoObj.create();// 输出：Uncaught Error: [mobx-state-tree] Error while converting `{}` to `AnonymousModel`:

const todo = TodoObj.create({ done: true });
console.log('任务:', getSnapshot(todo));// 输出：任务: { name: '张三', done: true }

/**
 * 常用类型
 * 1. types.optional(type, defaultValue)：设置属性的类型和默认值
 * 2. types.string：设置属性的类型为字符串
 * 3. types.number：设置属性的类型为数字
 * 4. types.boolean：设置属性的类型为布尔值
 * 5. types.array(type)：设置属性的类型为数组
 * 6. types.map(type)：设置属性的类型为mstMap,他的快照实际上是Object
 * 7. types.model(model)：设置属性的类型为另一个types.model
 * 8. types.union(type1, type2)：设置属性的类型为联合类型
 * 
 */

// 创建一个RootStore模型
const RootStore = types.model({
    users: types.map(User),// 用户map
    todos: types.optional(types.map(Todo), {}),// 任务map
});

// 创建一个RootStore对象
const store = RootStore.create({
    users: {},
});

// 输出RootStore对象
console.log(getSnapshot(store));// {"users": {},"todos": {}}