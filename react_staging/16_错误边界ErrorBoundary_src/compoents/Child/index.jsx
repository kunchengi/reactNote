import React, { Component } from 'react'

export default class Child extends Component {
    state = {
        // users: [
        //     { id:'1',name: '张三' },
        //     { id:'2',name: '李四' },
        //     { id:'3',name: '王五' },
        // ]
        users: ""
    }
    render() {
        return (
            <div>
                <h2>Child</h2>
                {
                    this.state.users.map(item => {
                        return <div key={item.id}>{item.name}</div>
                    })
                }
            </div>
        )
    }
}
