import React, { Component } from 'react'
import './index.css'
// 引入Count组件
import Count from '../Count'

/**
 * B和C有两种形式形成父子关系
 * 1. 直接在B组件中使用C组件
 * 2. B组件将C组件包裹起来，这样B组件的this.props.children为C组件，然后在B组件中使用this.props.children，但这种方式B组件的数据无法传递给C组件
 * 3. 使用RenderProps,应用场景：在B组件预留一个空位，可以直接引入任意组件显示,类似vue的插槽
 *      
 */
export default class A extends Component {
    render() {
        return (
            <div className='parent'>
                <h1>A</h1>
                {/* 2. 标签体的内容会被渲染到组件内部，要使用this.props.children属性来获取标签体内容，这种是childrenProps */}
                {/* <B>插槽内容</B> */}
                {/* <B>
                    <C />
                </B> */}

                {/* 3. 使用RenderProps，data为调用render时传过来的数据，将data传给C组件,类似vue的插槽 */}
                {/* <B render={(data)=><C data={data}/>}/> */}
                {/* 在B组件预留的位置渲染C组件 */}
                <B render={(data)=><Count/>}/>
            </div>
        )
    }
}

export class B extends Component {
    state = {name:'张三'}
    render() {
        return (
            <div className='child'>
                <h1>B</h1>
                {/* 1. 直接在B组件中使用C组件 */}
                {/* <C data={this.state}/> */}

                {/* 2. 显示插槽内容 */}
                {/* <h2>{this.props.children}</h2> */}

                {/* 2. 显示C组件，无法将state传给C组件 */}
                {/* { this.props.children } */}

                {/* 3. 预留位置，使用RenderProps，将state传给render函数 */}
                { this.props.render(this.state) }
            </div>
        )
    }
}

export class C extends Component {

    render() {
        return (
            <div className='grand'>
                <h1>C</h1>
                <h2>{this.props.data.name}</h2>
            </div>
        )
    }
}