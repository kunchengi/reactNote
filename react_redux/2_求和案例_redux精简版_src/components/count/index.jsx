import React, { Component } from 'react'
// 引入store，用于获取store保存的数据
import store from '../../redux/store';

export default class Count extends Component {

    state = {
        name: 'count',
        count: store.getState().count // 初始化state中的count
    }

    componentDidMount() {
        // 监听store中的数据变化，并刷新页面
        // 只要store中的数据变化，就会执行subscribe中的回调函数，并把最新的数据传递给回调函数
        store.subscribe(()=>{
            this.setState({
                count: store.getState().count
            })
        })
    }

    increment = ()=>{
        const selectNum = Number(this.selectNumber.value);
        // 通知redux，将最新的count保存到store中，并刷新页面
        store.dispatch({
            type: 'increment',
            data: selectNum
        })
    }

    decrement = ()=>{
        const selectNum = Number(this.selectNumber.value);
        store.dispatch({
            type: 'decrement',
            data: selectNum
        })
    }

    incrementIfOdd = ()=>{
        const oldCount = this.state.count;
        if(oldCount % 2 !== 0)
        {
            const selectNum = Number(this.selectNumber.value);
            store.dispatch({
                type: 'increment',
                data: selectNum
            })
        }
    }
    incrementAsync = ()=>{
        const selectNum = Number(this.selectNumber.value);
        setTimeout(()=>{
            store.dispatch({
                type: 'increment',
                data: selectNum
            })
        })
    }
    render() {
        return (
            <div>
                <h1>当前求和为：{this.state.count}</h1>
                {/* 下拉框 */}
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}