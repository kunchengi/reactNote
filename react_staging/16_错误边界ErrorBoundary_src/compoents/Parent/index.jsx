import React, { Component } from 'react'
import Child from '../Child'

export default class Parent extends Component {

    state = {
        errorInfo: null// 用于存储子组件抛出的异常信息
    }

    /**
     * 当后代组件抛出异常时，会调用getDerivedStateFromError()方法，并传递错误对象
     * 要返回新的状态，会自动更新状态，并重新渲染组件
     * 只在生产环境生效，开发环境只会在第一次错误时生效，下次更新又会报错
     * 只能捕获后代组件生命周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误
     */
    static getDerivedStateFromError(error) {
        return {
            errorInfo: error
        }
    }

    /**
     * 渲染组件出错时执行
     * 一般在这里埋点统计错误次数，反馈给服务器，通知编码人员进行排查
     * 只能捕获后代组件生命周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误
     */
    componentDidCatch(error, errorInfo) {
        console.log("统计错误次数")
    }
    render() {
        return (
            <div>
                <h2>Parent</h2>
                {this.state.errorInfo ? <h2>{this.state.errorInfo.message}</h2> : <Child />}
            </div>
        )
    }
}
