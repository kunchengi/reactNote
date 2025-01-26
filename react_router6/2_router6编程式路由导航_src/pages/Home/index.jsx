import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate();
    const { account } = useLocation().state || {}
    const onClickGo = () => {
        navigate(-1)
    }
    return (
        <div>
            <h1>欢迎回来，{account}</h1>
            <button onClick={onClickGo}>返回</button>
        </div>
    )
}
