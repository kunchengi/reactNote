import React, { useRef } from 'react'
import './login.css';
import { useNavigate } from 'react-router-dom'
export default function Login() {
    const refAccount = useRef();
    const refPassword = useRef();

    // 获取路由跳转的方法，第一个参数是path，第二个参数是配置对象
    const navigate = useNavigate();
    const onClickLogin = () => {
        const account = refAccount.current.value;
        const password = refPassword.current.value;
        if(account === 'admin' && password === '123456')
        {
            // 携带params参数
            // navigate(`/home/${account}`);
            // 携带search参数
            // navigate(`/home?account=${account}`);
            // 携带state参数
            navigate('/home', { state: { account } });
        }
    }

    const onClickGo = () => {
        navigate(1)
    }

    return (
        <div className="login-container">
            <div className="login-form">
                <input ref={refAccount} type="text" placeholder="账号" className="login-input" defaultValue="admin" />
                <input ref={refPassword} type="password" placeholder="密码" className="login-input" defaultValue="123456" />
                <button className="login-button" onClick={onClickLogin}>登录</button>
                <button className="login-button" onClick={onClickGo}>前进</button>
            </div>
        </div>
    )
}
