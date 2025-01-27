import { observer } from 'mobx-react-lite';

/**
 * 单个todo项组件
 */
const TodoItem = observer((props) => (
    <div>
        <input
            type='checkbox'
            checked={props.todo.done}
            onChange={(e) => props.todo.toggle()}
        />
        <input
            type='text'
            value={props.todo.name}
            onChange={(e) => props.todo.setName(e.target.value)}
        />
    </div>
));

export default TodoItem;