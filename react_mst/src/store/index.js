/**
 * 创建TodoStore
 */
import { types, onSnapshot, applySnapshot } from 'mobx-state-tree';

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

const RootStore = types
    .model({
        todos: types.map(Todo),
    })
    .actions((self) => ({
        // 添加一个todo
        addTodo(id, name) {
            self.todos.set(id, Todo.create({ name }));
        },
    }));

// 创建并默认暴露一个RootStore对象
const store = RootStore.create();
export default store;

// 创建一个数组，用于存储快照(历史记录)
const states = [];
// 当前快照的索引
let currentFrame = -1;
// 用于标记是否是由 applySnapshot 触发的
let isApplyingSnapshot = false;

// 监听store的变化
onSnapshot(store, (snapshot) => {
    if (isApplyingSnapshot) {
        isApplyingSnapshot = false;
        return;
    }
    if (currentFrame === states.length - 1) {
        currentFrame++;
        states.push(snapshot);
    }
    else {
        states.splice(currentFrame + 1);
        currentFrame++;
        states.push(snapshot);
    }
});

// 撤销
const undo = () => {
    if (currentFrame === 0) return;
    currentFrame--;
    isApplyingSnapshot = true;
    applySnapshot(store, states[currentFrame]);
}

// 恢复
const redo = () => {
    if (currentFrame === states.length - 1) return;
    currentFrame++;
    isApplyingSnapshot = true;
    applySnapshot(store, states[currentFrame]);
}

// 分别暴露undo和redo
export { undo, redo };