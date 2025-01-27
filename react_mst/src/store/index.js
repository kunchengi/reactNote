/**
 * 创建TodoStore
 */
import { types, onSnapshot, applySnapshot } from 'mobx-state-tree';
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

const RootStore = types
    .model({
        todos: types.map(Todo),
    })
    /**
     * views 是用于定义计算属性和派生状态的方法
     * 主要作用是根据模型的当前状态计算出一些值
     * views 中的计算属性是自动缓存的，只有在依赖的属性发生变化时才会重自动新计算。这提高了性能
     * views 中定义的属性是只读的，不能被直接修改。这确保了模型的状态只能通过 actions 来改变，从而保持状态管理的一致性。
     * 当计算值发生变化时，会触发组件的重新渲染，从而实现响应式更新。
     */
    .views((self) => ({
        /**
         * 计算属性
         * 写一个getter或者方法,返回一个值
         * 方法内所用到的属性发生变化时,会自动重新计算
         * 这里的属性并不会出现在快照中,也不会被onSnapshot监听到,也不能手动修改属性值
         */
        // 获取未完成todo的数量
        get pendingCount() {
            return values(self.todos).filter((todo) => !todo.done).length;
        },
        // 获取已完成todo的数量
        get completedCount() {
            return values(self.todos).filter((todo) => todo.done).length;
        },
        // 也可以写一个方法传入参数获取对应的值
        getCount(done) {
            return values(self.todos).filter((todo) => todo.done === done).length;
        },
    }))
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