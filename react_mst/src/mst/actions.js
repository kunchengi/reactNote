/**
 * 2. action的使用
 *  可以对model中的属性进行操作
 *  actions里的方法可以直接调用
 */
import { types, getSnapshot } from 'mobx-state-tree';

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