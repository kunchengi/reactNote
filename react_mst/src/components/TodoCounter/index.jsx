import { observer } from 'mobx-react-lite';

/**
 * 单个计算结果组件
 */
const TodoCounter = observer((props) => (
    <div>
        {props.store.pendingCount} 条进行中, {props.store.completedCount} 条已完成
        {props.store.getCount(false)} 条进行中, {props.store.getCount(true)} 条已完成
    </div>
));

export default TodoCounter;