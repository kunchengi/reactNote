import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

  // 通过package.json中配置的proxy
  // 这里不能发送给http://localhost:5000/students，会跨域
  // 应该发送给3000，通过代理来解决
  // 如果请求的是http://localhost:3000/index.html，会返回public下的index.html文件
  // 所以并不是所有请求都会转发给5000的服务器，只有当请求了3000不存在的资源时，才会转发给5000（有限匹配前端资源）
  // getStudentData = () => {
  //   axios.get('http://localhost:3000/students').then(res => {
  //     console.log(res.data)
  //   },error=>{
  //     console.log(error)
  //   })
  // }

  // 通过setupProxy.js文件配置代理
  // 要加上指定的前缀
  getStudentData = () => {
    axios.get('http://localhost:3000/api/students').then(res=>{
      console.log(res.data)
    },error=>{
      console.log(error)
    })
  }

  getCars = () => {
    axios.get('http://localhost:3000/apc/cars').then(res=>{
      console.log(res.data)
    },error=>{
      console.log(error)
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>获取学生数据</button>
        <button onClick={this.getCars}>获取汽车数据</button>
      </div>
    )
  }
}
