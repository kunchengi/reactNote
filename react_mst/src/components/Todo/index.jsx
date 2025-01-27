import { observer } from 'mobx-react-lite';
import { values } from 'mobx';
import { nanoid } from 'nanoid'
import { undo, redo } from '../../store';
import TodoItem from '../TodoItem';
import TodoCounter from '../TodoCounter';

/**
 * 优化:引入TodoItem组件,提升渲染性能
 * Todo只会在todos的长度发生变化时重新渲染
 * TodoItem在todo的name/done发生变化时重新渲染
 */
const Todo = observer((props) => (
    <div>
        <button onClick={(e) => props.store.addTodo(nanoid(), '任务名')}>
            添加任务
        </button>
        <button onClick={(e) => undo()}>撤销</button>
        <button onClick={(e) => redo()}>恢复</button>
        {values(props.store.todos).map((todo,id) => (
            <TodoItem key={id} todo={todo} users={props.store.users} />
        ))}
        <TodoCounter store={props.store} />
    </div>
));

export default Todo;