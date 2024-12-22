import React, { Component } from 'react';
import './Login.css'; // 引入CSS文件

export default class Login extends Component {

    refAccount = React.createRef();
    refPassword = React.createRef();
    onClickLogin = () => {
        console.log('onClickLogin');
        console.log(this.refAccount.current.value);
        console.log(this.refPassword.current.value);
        const account = this.refAccount.current.value;
        const password = this.refPassword.current.value;
        if(account === 'admin' && password === '123456')
        {
            console.log('登录成功', this.props);
            // 使用push方法跳转到home页面
            // 携带params参数
            // this.props.history.push(`/home/${account}`);
            // 携带search参数
            // this.props.history.push(`/home?account=${account}`);
            // 携带state参数
            this.props.history.push('/home', { account });

            // 使用replace方法跳转到home页面
            // 携带params参数
            // this.props.history.replace(`/home/${account}`);
            // 携带search参数
            // this.props.history.replace(`/home?account=${account}`);
            // 携带state参数
            // this.props.history.replace('/home', { account });
        }
        else {
            alert('账号或密码错误');
        }
    }
    render() {
        return (
            <div className="login-container">
                <div className="login-form">
                    <input ref={this.refAccount} type="text" placeholder="账号" className="login-input" defaultValue="admin" />
                    <input ref={this.refPassword} type="password" placeholder="密码" className="login-input" defaultValue="123456" />
                    <button className="login-button" onClick={this.onClickLogin}>登录</button>
                    {/* 执行this.props.history.goForward方法能前进一步 */}
                    <button className="login-button" onClick={this.props.history.goForward}>goForward前进</button>
                    {/* 执行this.props.history.go方法能前进/回退指定的步数，以下是回退一步 */}
                    <button className="login-button" onClick={this.props.history.go.bind(this,1)}>go前进</button>
                </div>
            </div>
        );
    }
}