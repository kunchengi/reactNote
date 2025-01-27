import { observer } from 'mobx-react-lite';
import UserPicker from '../UserPicker';
import './todoItem.css'

/**
 * 单个todo项组件
 */
const TodoItem = observer((props) => (
    <div className='todoItem'>
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
        <UserPicker
            users={props.users} 
            user={props.todo.user} 
            setUser={props.todo.setUser} 
        />
    </div>
));

export default TodoItem;