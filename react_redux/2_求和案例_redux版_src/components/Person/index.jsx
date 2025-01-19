/**
 * 1.可以使用 useRef 钩子 获取 DOM 元素，用法类似于之前的 createRef()
 */
import { nanoid } from '@reduxjs/toolkit';
import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addPerson } from '../../redux/actions/person'

export default function Person() {
    const nameInput = useRef();
    const ageInput = useRef();

    const count = useSelector(state => state.count);
    // 获取state中的persons数据
    const persons = useSelector(state => state.persons);
    const dispatch = useDispatch();

    // 添加人员
    const onAddPerson = () => {
        const id = nanoid();
        const name = nameInput.current.value;
        const age = ageInput.current.value;
        // 派发action
        dispatch(addPerson({ id, name, age }));
        // 清空输入框
        nameInput.current.value = '';
        ageInput.current.value = '';
    }
    return (
        <div>
            <h2>Person组件，当前求和为：{count}</h2>
            <input ref={nameInput} type="text" placeholder='姓名' />
            <input ref={ageInput} type="text" placeholder='年龄' />
            <button onClick={onAddPerson}>添加</button>
            <ul>
                {persons.map(person => <li key={person.id}>{person.name} - {person.age}</li>)}
            </ul>
        </div>
    )
}
