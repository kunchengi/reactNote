import { Component } from "react";
// import "./index.css"
// 引入css模块
import hello from "./index.module.css";

export default class Hello extends Component {
  render() {
    return (
      <h1 className={hello.title}>Hello, {this.props.name}</h1>
    );
  }
}

