import React, { Component,PureComponent } from 'react'

/**
 * 问题1：父组件state的更新，子组件不管有没有使用state的数据，都会重新渲染
 * 理想情况：父组件state的更新，子组件没有使用state的数据，不会重新渲染
 * 问题2：this.setState({})会触发组件的重新渲染
 * 理想情况：this.setState({})不会触发组件的重新渲染
 * 
 * 原因：Component的shouldComponentUpdate方法，默认返回true，会触发组件的重新渲染
 * 
 * 解决方式1：修改shouldComponentUpdate方法
 * 解决方式2：
 *  使用PureComponent，继承于Component，会自动实现shouldComponentUpdate方法，默认返回false，不会触发组件的重新渲染
 *  PureComponent用的是浅比较
 *      如果state中的引用类型的属性值发生改变，不会触发组件的重新渲染
 *      如果state中的属性的地址值发生变化，才会触发组件的重新渲染
 *      所以不要直接修改state中的数据，要先创建副本，再修改副本的值
 *  有个小问题：
 *      const obj = this.state;
 *      obj.carName = '比亚迪'
 *      this.setState(obj)
 *      以上的代码，修改了state，但是state没有发生变化，所以不会触发组件的重新渲染
 */

export default class Parent extends PureComponent {
    state = {carName: '保时捷',student: ['小明', '小红','小黄']}

    addStudent = () => {
        // 修改state中的引用类型属性值,不会触发组件的重新渲染
        const student = this.state.student;
        student[0] = '小蓝';
        this.setState({student});
    }
    changeCar = () => {
        this.setState({})
        this.setState({carName: '小米su7'})
    }

    // 解决1
    // shouldComponentUpdate(nextProps, nextState) {
    //     // 当之前的state和最新的state不一致时，才重新渲染组件
    //     return this.state.carName !== nextState.carName
    // }

    render() {
        return (
            <div>
                <h1>Parent</h1>
                <h2>{this.state.student}</h2>
                <button onClick={this.addStudent}>点我添加学生</button>
                <h2>{this.state.carName}</h2>
                <button onClick={this.changeCar}>点我换车</button>
                <Child carName='五菱'/>
            </div>
        )
    }
}

class Child extends PureComponent {
    // 解决1
    // shouldComponentUpdate(nextProps, nextState) {
    //     // 当之前的props和新的props不一致时，才重新渲染组件
    //     return this.props.carName !== nextProps.carName
    // }
    render() {
        return (
            <div>
                <h1>Child</h1>
                <h2>我爸给我的车是:{this.props.carName}</h2>
            </div>
        )
    }
}
