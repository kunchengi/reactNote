import { useRef, useState, forwardRef, useImperativeHandle } from 'react'

/**
 * React.useImperativeHandle
 * 1. 可以将子组件的实例对象暴露给父组件
 * 2. 一般用来暴露ref和方法给父组件
 */

const MemoSon = forwardRef(function Son(props, ref) {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const [name, setName] = useState('张三')

    // 返回一个对象给父组件使用
    useImperativeHandle(ref, () => ({
        // 暴露多个ref给父组件
        input1: inputRef1.current,
        input2: inputRef2.current,
        // 暴露一个方法给父组件
        setName(name) {
            setName(name)
        }
    }))

    return (
        <div>
            <p>我是儿子，我的名字是：{name}</p>
            <input ref={inputRef1} type="text" />
            <input ref={inputRef2} type="text" />
        </div>
    )
})

export default MemoSon;