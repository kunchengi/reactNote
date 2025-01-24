import React, { useState } from 'react'
export default function Count() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(preCount => preCount + 1);
    }

    return (
        <div>
            <h2>当前求和为{count}</h2>
            <button onClick={increment}>点我+1</button>
        </div>
    )
}
