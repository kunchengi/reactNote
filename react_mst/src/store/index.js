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
        /**
         * 引用user模型，存的是User的id，读的时候会自动解析为User模型
         * types.maybe: 表示该属性是可选的，可以为null或undefined
         * types.reference: 用来引用其他模型，这里引用的是User模型
         * types.late: 
         *  表示该属性是一个延迟加载的模型，只有在需要时才会加载，这样能延迟User的解析，直到User被创建。
         *  如果不使用late，可能会引发以下问题
         *  1. 当前User未定义，报错：Cannot access 'User' before initialization
         *  2. 模型之间可能存在循环依赖，MST在解析时会因为无法处理循环依赖而抛出错误
         * 使用引用还有一个好处，如果你不小心删除了 model，而这个 model 被某个计算属性所引用，MST 会直接抛出一个错误！
         * 如果你试图移除一个被引用的 user，你会得到这样的结果:Failed to resolve reference of type <late>: '1'
         */
        user: types.maybe(types.reference(types.late(() => User)))
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
        /**
         * 设置user
         * 这里传入的是User的id
         * 将User的id赋值给self.user
         */
        setUser(userId) {
            if (userId) {
                self.user = userId;
            }
            else {
                self.user = undefined;
            }
        },
    }));

// 创建一个User模型
const User = types.model({
    id: types.identifier,// 定义User的标识符，也就是其它模型引用的值
    name: types.optional(types.string, ''),
});

const RootStore = types
    .model({
        todos: types.map(Todo),
        users: types.map(User),
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
        // 添加一个用户
        addUser(id, name) {
            self.users.set(id, User.create({ id, name }));// 必须传入id,否则会报错，且id不能修改
        },
    }));

// 创建并默认暴露一个RootStore对象
const store = RootStore.create();
export default store;

// 手动添加三个用户
store.addUser('1', '张三');
store.addUser('2', '李四');
store.addUser('3', '王五');

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