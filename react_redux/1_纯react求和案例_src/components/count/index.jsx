import React, { Component } from 'react'

export default class Count extends Component {

    state = {
        count: 0
    }
    increment = ()=>{
        const oldCount = this.state.count;
        const selectNum = Number(this.selectNumber.value);
        this.setState({
            count: oldCount + selectNum
        })
    }

    decrement = ()=>{
        const oldCount = this.state.count;
        const selectNum = Number(this.selectNumber.value);
        this.setState({
            count: oldCount - selectNum
        })
    }

    incrementIfOdd = ()=>{
        const oldCount = this.state.count;
        if(oldCount % 2 !== 0)
        {
            const selectNum = Number(this.selectNumber.value);
            this.setState({
                count: oldCount + selectNum
            })
        }
    }
    incrementAsync = ()=>{
        const oldCount = this.state.count;
        const selectNum = Number(this.selectNumber.value);
        setTimeout(()=>{
            this.setState({
                count: oldCount + selectNum
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
