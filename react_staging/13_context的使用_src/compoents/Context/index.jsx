import React, { Component,createContext } from 'react'
import './index.css'

// 创建一个上下文
const MyContext = createContext();
const { Provider,Consumer } = MyContext;

export default class A extends Component {
    state = {userName: '大A', age: 18}
    render() {
        return (
            <div className='parent'>
                <h1>A</h1>
                {/* 使用Provider将数据传递给后代组件 */}
                {/* <Provider value={{userName:this.state.userName,age:this.state.age}}> */}
                <Provider value={this.state}>
                    <B />
                </Provider>
            </div>
        )
    }
}

export class B extends Component {
    render() {
        return (
            <div className='child'>
                <h1>B</h1>
                <C />
            </div>
        )
    }
}

export class C extends Component {
    // 方式1接收数据，方式2不需要接收
    static contextType = MyContext;

    render() {
        return (
            <div className='grand'>
                <h1>C</h1>
                {/* 方式1获取数据，this.context.xxx */}
                <h2>A组件的name为:{ this.context.userName }，age为:{this.context.age}</h2>
                {/* 方式2获取数据，使用 Consumer */}
                <Consumer>
                    {value => <h2>A组件的name为:{ value.userName }，age为:{value.age}</h2>}
                </Consumer>
                <D />
            </div>
        )
    }
}

// 函数式组件接收数据，只能使用 Consumer
function D() {
  return (
    <div className='grand2'>
        <h1>D</h1>
        <Consumer>
            {value => <h2>A组件的name为:{ value.userName }，age为:{value.age}</h2>}
        </Consumer>
    </div>
  )
}

// 在应用开发中一般不用context，而是使用context封装的组件库，如：react-redux