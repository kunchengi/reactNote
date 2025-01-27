/**
 * 2. action的使用
 *  可以对model中的属性进行操作
 *  actions里的方法可以直接调用
 */
import { types, getSnapshot, onSnapshot, applySnapshot } from 'mobx-state-tree';
import { values } from 'mobx';

// 创建一个Todo模型
const Todo = types
    .model({
        name: types.optional(types.string, ''),
        done: types.optional(types.boolean, false),
    })
    // 调用actions,创建action
    // self: 永远指向当前的model
    .actions((self) => ({
        // 设置name
        setName(newName) {
            self.name = newName;
        },

        // 切换done状态
        toggle() {
            self.done = !self.done;
        },
    }));

// 创建一个User模型
const User = types.model({
    name: types.optional(types.string, ''),
});

const RootStore = types
    .model({
        users: types.map(User),
        todos: types.map(Todo),
    })
    .actions((self) => ({
        // 添加一个todo
        addTodo(id, name) {
            self.todos.set(id, Todo.create({ name }));
        },
    }));

// 创建一个RootStore对象
const store = RootStore.create({
    users: {},
});

// 调用action添加一个todo
store.addTodo('1', '');
// 调用action设置name
store.todos.get('1').setName('吃饭');
// 调用action切换done状态
store.todos.get('1').toggle();

console.log(getSnapshot(store));// {"users": {},"todos": {"1": {"name": "吃饭","done": true}}}

/**
 * 3. snapshot的使用
 */

/**
 * onSnapshot可以监听store的变化
 * 当store发生变化时，会触发onSnapshot的回调函数
 * snapshot: 当前store的快照
 */
onSnapshot(store, (snapshot) => {
    console.log(snapshot);
});

// 调用action添加一个todo
store.addTodo('2');
// 调用action设置name
store.todos.get('2').setName('睡觉');
// 调用action切换done状态
store.todos.get('2').toggle();


/**
 * applySnapshot
 * 可以恢复到某个快照
 * 它只会更新部分属性,原来的引用会保持不变
 * 会触发onSnapshot
 */
applySnapshot(store, {
    todos: {
        '1': { name: '做饭', done: false },
        '2': { name: '睡觉', done: false },
        '3': { name: '打游戏', done: false },
    },
});
// 还是可以调用action修改属性
store.todos.get('1').setName('吃饭');

/**
 * 4. mstMap的使用
 */
// 获取todos的值
const todo = store.todos.get('1');
console.log(todo.name);// 输出：吃饭

// forEach遍历todos
store.todos.forEach((todo, id) => {
    console.log(id, todo.name);
});
/**
 * 依次输出：
 * 1 吃饭
 * 2 睡觉
 * 3 打游戏
 */

// for of 遍历todos
for (const [id, todo] of store.todos) {
    console.log(id, todo.name);
}
/**
 * 依次输出：
 * 1 吃饭
 * 2 睡觉
 * 3 打游戏
 */

// map遍历todos
// store.todos没有map方法,需要借助mobx的values方法
const todos = values(store.todos).map((todo, id) => {
    return { id, name: todo.name };
});
console.log(todos);
/**
 * 输出：
 * [
 *   { id: '0', name: '吃饭' },
 *   { id: '1', name: '睡觉' },
 *   { id: '2', name: '打游戏' }
 * ]
 */

// filter方法
const pendingTodos = values(store.todos).filter((todo) => !todo.done);
pendingTodos.forEach((todo) => {
    console.log(getSnapshot(todo));
});
/**
 * 输出：
 * { name: '吃饭', done: false }
 * { name: '睡觉', done: false }
 * { name: '打游戏', done: false }
 */

// 其它数组相关方法也需要借助mobx的values方法