import { observer } from 'mobx-react-lite';
import { values } from 'mobx';
import { nanoid } from 'nanoid'
import { undo, redo } from '../../store';

/**
 * observer 是 mobx-react-lite 库中的一个高阶组件
 * 它的主要作用是将 React 组件与 MobX 状态管理结合起来使组件能够自动响应 MobX 状态的变化。
 * 作用
 * 1. 自动响应状态变化：observer 使得组件在 MobX 状态发生变化时自动重新渲染，而不需要手动管理状态更新。
 * 2. 性能优化：通过 observer，只有在依赖的 MobX 状态发生变化时，组件才会重新渲染，从而提高性能
 * 该案例缺陷:
 * 1. 输入框每次改变都会触发 todo.setName 方法,导致撤销时，输入框的值会恢复每一次输入的值
 * 2. todo的子项改变时会触发整个Todo组件的重新渲染
 */
const Todo = observer((props) => (
    <div>
        <button onClick={(e) => props.store.addTodo(nanoid(), '任务名')}>
            添加任务
        </button>
        <button onClick={(e) => undo()}>撤销</button>
        <button onClick={(e) => redo()}>恢复</button>
        {values(props.store.todos).map((todo, id) => (
            <div key={id}>
                <input
                    type='checkbox'
                    checked={todo.done}
                    onChange={(e) => todo.toggle()}
                />
                <input
                    type='text'
                    value={todo.name}
                    onChange={(e) => todo.setName(e.target.value)}
                />
            </div>
        ))}
    </div>
));

export default Todo;