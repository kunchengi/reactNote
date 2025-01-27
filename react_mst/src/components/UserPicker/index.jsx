import { observer } from 'mobx-react-lite';
import { values } from 'mobx';

/**
 * 用户选择器组件
 */
const UserPicker = observer((props) => (
    <div>
        <select
            value={props.user ? props.user.id : ''}
            onChange={(e) => props.setUser(e.target.value)}
        >
            <option value=''>未分配</option>
            {values(props.users).map((user) => (
                <option key={user.id} value={user.id}>{user.name}</option>
            ))}
        </select>
    </div>
));

export default UserPicker;