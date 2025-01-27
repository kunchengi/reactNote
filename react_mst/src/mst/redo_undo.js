/**
 * 5. 利用applySnapshot, onSnapshot实现撤销恢复机制
 */
import { types, getSnapshot, onSnapshot, applySnapshot } from 'mobx-state-tree';

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

// 创建一个RootStore对象
const store = RootStore.create();

// 创建一个数组，用于存储快照(历史记录)
const states = [];
// 当前快照的索引
let currentFrame = -1;
// 用于标记是否是由 applySnapshot 触发的
let isApplyingSnapshot = false;

// 监听store的变化
onSnapshot(store, (snapshot) => {
    if (isApplyingSnapshot) {
        // 如果是由 applySnapshot 触发的,重置标记并退出
        isApplyingSnapshot = false;
        return;
    }
    // 如果当前快照的索引为最后一次快照
    if (currentFrame === states.length - 1) {
        // 更新当前快照的索引
        currentFrame++;
        // 将快照添加到数组中
        states.push(snapshot);
    }
    else {
        // 删掉当前快照之后的快照
        states.splice(currentFrame + 1);
        // 更新当前快照的索引
        currentFrame++;
        // 将快照添加到数组中
        states.push(snapshot);
    }
});

// 撤销
function undo() {
    // 如果当前快照的索引为0,不能撤销
    if (currentFrame === 0) return;
    // 更新当前快照的索引
    currentFrame--;
    // 设置标志
    isApplyingSnapshot = true;
    // 应用快照
    applySnapshot(store, states[currentFrame]);
}

// 恢复
function redo() {
    // 如果当前快照的索引为最后一次快照,不能恢复
    if (currentFrame === states.length - 1) return;
    // 更新当前快照的索引
    currentFrame++;
    // 设置标志
    isApplyingSnapshot = true;
    // 应用快照
    applySnapshot(store, states[currentFrame]);
}

store.addTodo('1', '吃饭');
store.todos.get('1').toggle();
store.addTodo('2', '睡觉');
store.todos.get('2').toggle();
console.log('当前数据:', getSnapshot(store));// 当前数据: {"todos": {"1": {"name": "吃饭","done": true},"2": {"name": "睡觉","done": true}}}   
undo();
console.log('撤销后数据:', getSnapshot(store));// 撤销后数据: {"todos": {"1": {"name": "吃饭","done": true},"2": {"name": "睡觉","done": false}}}
undo();
console.log('撤销后数据:', getSnapshot(store));// 撤销后数据: {"todos": {"1": {"name": "吃饭","done": true}}}
redo();
console.log('恢复后数据:', getSnapshot(store));// 恢复后数据: {"todos": {"1": {"name": "吃饭","done": true},"2": {"name": "睡觉","done": false}}}
redo();
console.log('恢复后数据:', getSnapshot(store));// 恢复后数据: {"todos": {"1": {"name": "吃饭","done": true},"2": {"name": "睡觉","done": true}}}
