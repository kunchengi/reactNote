# React基础笔记

## JSX

JSX是一种语法扩展，它允许你在JavaScript中编写类似HTML的元素结构。JSX主要用于React等库中，使构建UI组件变得更加直观和简洁。以下是JSX的一些关键特点：

* **语法类似于HTML**：JSX的语法非常接近HTML，使得前端开发者更容易上手。
* **嵌入表达式**：可以在JSX中使用花括号 `{}` 嵌入JavaScript表达式。
* **返回单个根元素**：JSX表达式必须有一个根元素包裹所有子元素。
* **属性值**：属性值可以是字符串或用花括号包裹的JavaScript表达式
* **自闭合标签**：对于没有子元素的标签，可以使用自闭合形式。

```jsx
const name = 'Alice';
const element = (
  <div>
    <h1>Hello, {name}!</h1>
    <p>This is a paragraph.</p>
  </div>
);
```

1. **基本语法**：

   - JSX看起来像HTML，但实际上是在JavaScript中编写的。
   - 每个JSX表达式必须有一个根元素。

   ```jsx
   const element = <div>Hello, World!</div>;
   ```
2. **嵌入表达式**：

   - 使用花括号 `{}` 可以在JSX中嵌入JavaScript表达式。

   ```jsx
   const name = 'Alice';
   const element = <h1>Hello, {name}!</h1>;
   ```
3. **属性**：

   - 属性值可以是字符串或JavaScript表达式。
   - 属性名称使用驼峰命名法（camelCase）。

   ```jsx
   const element = <img src={profilePic} alt="Profile Picture" />;
   ```
4. **自闭合标签**：

   - 对于没有子元素的标签，可以使用自闭合形式。

   ```jsx
   const element = <img src="image.jpg" alt="Image" />;
   ```
5. **条件渲染**：

   - 可以使用三元运算符或逻辑运算符进行条件渲染。

   ```jsx
   const isLoggedIn = true;
   const element = (
     <div>
       {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
     </div>
   );
   ```
6. **列表渲染**：

   - 使用数组的 `map` 方法可以生成多个元素。

   ```jsx
   const items = ['Apple', 'Banana', 'Cherry'];
   const listItems = items.map((item, index) => <li key={index}>{item}</li>);
   const element = <ul>{listItems}</ul>;
   ```
7. **样式**：

   - 可以使用内联样式或CSS类。

   ```jsx
   const styles = {
     color: 'blue',
     fontSize: '20px'
   };

   const element = <div style={styles}>Styled Text</div>;
   ```
8. **事件处理**：

   - 事件处理函数使用驼峰命名法，并且需要绑定 `this`。

   ```jsx
   class Button extends React.Component {
     handleClick = () => {
       alert('Button clicked!');
     }

     render() {
       return <button onClick={this.handleClick}>Click me</button>;
     }
   }
   ```
9. **Fragment**：

   - 使用 `<></>` 或 `<React.Fragment>` 可以返回多个元素而不需要额外的包装元素。

   ```jsx
   const element = (
     <>
       <h1>Title</h1>
       <p>Paragraph</p>
     </>
   );
   ```

## 模块

JavaScript 模块是一种组织代码的方式，允许将相关的功能封装在一个单独的单元中

使用 `import` 和 `export` 关键字来导入和导出模块。

* 模块系统通过将代码封装在独立的作用域中，避免了全局变量的污染。
* 代码可以被多个文件或项目复用，提高了代码的可重用性。
* 提供了明确的依赖关系管理，使得代码的依赖关系更加清晰。
* 使得各个模块之间的耦合度降低，每个模块只关注自己的功能，减少了代码之间的相互影响。
* 每个模块可以独立进行单元测试，提高了代码的可测试性。
* 码结构更加清晰，便于阅读和维护。

## 模块化

模块化是一种软件设计方法，它将一个大的软件系统分解成若干个较小的、独立的模块。

每个模块负责完成特定的功能，模块之间通过明确的接口进行通信。

模块化设计的主要目的是提高代码的可读性、可维护性、可复用性和可测试性。

## 组件

组件是现代前端开发中的一种重要概念，特别是在使用框架和库（如React、Vue、Angular等）。

组件可以看作是一个独立的、可复用的 UI 构建块，它封装了特定的功能和样式。

* 可复用性：组件可以被多次复用，减少重复代码，提高开发效率。
* 封装性：组件将相关的逻辑、样式和模板封装在一起，形成一个独立的单元，对外隐藏实现细节，提高了代码的可维护性和安全性。
* 解耦：组件之间通过明确的接口（如属性和事件）进行通信，降低了组件之间的耦合度。
* 可组合性：组件可以嵌套和组合，形成复杂的 UI 结构。
* 状态管理：组件可以管理自己的状态，也可以接收来自父组件的状态。

## 组件化

将应用程序分解成多个独立的、可复用的组件。

每个组件负责完成特定的 UI 功能或业务逻辑，组件之间通过明确的接口进行通信。

组件化设计的主要目的是提高代码的可读性、可维护性、可复用性和可测试性。

## 组件三大属性

### state

在React组件中，`state` 是一个对象，用于存储组件的状态数据。

这些状态数据可以在组件的生命周期内发生变化

当 `state` 发生变化时，组件会自动重新渲染以反映最新的状态。

#### 主要特点

* **私有性**：每个组件的 `state` 都是私有的，不会影响其他组件。
* **动态性**：`state` 可以在组件的生命周期内动态改变。
* **触发重渲染**：当 `state` 发生变化时，React 会自动调用 `render` 方法重新渲染组件

#### 使用方法

1. 在类组件中，可以通过构造函数或直接在类中定义 `state` 来初始化`state`。可以通过 `this.state` 读取当前的状态。
   ```jsx
   class ExampleComponent extends React.Component {
     constructor(props) {
       super(props);
       // 在构造函数中定义
       this.state = {
         count: 0
       };
     }

     // 或者直接在类中定义
     state = {
       count: 0
     };

     render() {
       // 读取当前状态
       return <div>{this.state.count}</div>;
     }
   }
   ```
2. 使用 `setState` 方法来更新 `state`。`setState` 是异步的，React 会批量处理状态更新以提高性能。
   ```jsx
   class ExampleComponent extends React.Component {
     state = {
       count: 0
     };

     incrementCount = () => {
       this.setState(prevState => ({
         count: prevState.count + 1
       }));
     };

     render() {
       return (
         <div>
           <p>Count: {this.state.count}</p>
           <button onClick={this.incrementCount}>Increment</button>
         </div>
       );
     }
   }
   ```

#### 注意事项

* **避免直接修改 State**：直接修改 `state` 对象不会触发组件的重新渲染。应该始终使用 `setState` 方法来更新状态。
* **批量更新**：`setState` 是异步的，多次调用可能会被合并成一次更新，以提高性能。
* **函数形式的 setState**：当新的状态依赖于前一个状态时，建议使用函数形式的 `setState`，以确保状态更新的顺序正确。

### props

`props` 是组件间传递数据的一种方式。

* **定义与传递**

  * 父组件可以通过在子组件标签内设置属性的方式，将数据传递给子组件。
  * 例如，如果有一个名为 `ChildComponent` 的子组件，父组件可以向它传递一个名为 `name` 的 prop
  * `<ChildComponent name="张三" />`
* **接收与使用**

  * 子组件可以通过其函数参数或类组件的 `this.props` 来访问传递过来的 props。
  * 在函数组件中：

    ```jsx
    function ChildComponent(props) {
      return <h1>你好，{props.name}</h1>;
    }
    ```
  * 在类组件中：

    ```jsx
    class ChildComponent extends React.Component {
      render() {
        return <h1>你好，{this.props.name}</h1>;
      }
    }
    ```
* **Props 的不可变性**：在 React 中，props 被设计为只读的，即父组件传递给子组件的数据不应该被子组件修改。如果需要改变状态，应该使用 state 或者通过回调函数从父组件传递下来。
* **默认 Props**：可以通过 `defaultProps` 属性为组件设置默认的 props 值，当父组件没有传递相应的 prop 时，组件会使用这些默认值。

  ```jsx
  ChildComponent.defaultProps = {
    name: '未知姓名'
  };
  ```
* **Props 类型检查**：为了确保组件接收到的 props 类型正确，可以使用 `PropTypes` 库进行类型检查。这有助于在开发阶段捕获错误。

  ```jsx
  import PropTypes from 'prop-types';

  ChildComponent.propTypes = {
    name: PropTypes.string.isRequired
  };
  ```

### refs

#### 字符串形式的ref

* 给标签设置ref属性，值为字符串，可以通过this.refs.myInput属性获取到对应的真实dom元素
* 注意：这种写法不被react官方推荐使用，不建议使用，可能会在未来的版本中移除
* 因为ref属性无法获取组件对象，只能获取dom元素，而且ref属性无法动态修改，只能设置一次
  ```jsx
  class MyComponent extends React.Component{
      onBlurHandle = () => {
          console.log(this.refs.myInput)
          console.log(this.refs.myInput.value);
      }
      render(){
          return (
              <div>
                  <input type="text" ref="myInput" onBlur={this.onBlurHandle}/>
              </div>
          )
      }
  }
  ```

#### 回调形式的ref

* 给标签设置ref属性，值为回调函数，回调函数的第一个参数为对应的dom元素
* 内联函数在创建组件时执行一次，往后每次更新会执行两次，第一次传入参数Null，第二次才传入DOM元素，不过这是无关紧要的，开发时推荐使用内联函数
  ```jsx
  class MyComponent extends React.Component{
      onBlurHandle = () => {
          console.log(this.inputDom);
          console.log(this.inputDom.value);
      }
      refCallback = (inputDom) => {
          this.inputDom = inputDom;
      }
      render(){
          return (
              <div>
                  <input type="text" ref={(inputDom)=>{this.inputDom = inputDom}} onBlur={this.onBlurHandle}/>
                  <input type="text" ref={this.refCallback} onBlur={this.onBlurHandle}/>
              </div>
          )
      }
  }
  ```

#### createRef的使用

* React.createRef()调用后返回一个ref对象,该对象上拥有current属性，该属性的值为对应的dom元素
* ref对象只能存一个dom元素，如果有多个元素使用看相同的ref对象，则存储最后一个元素
* 该方式是官方最推荐的方法，但能通过其它方式获取dom元素，就不要使用ref
  ```jsx
  class MyComponent extends React.Component{
      myInput = React.createRef();
      onBlurHandle = () => {
          console.log(this.myInput.current);
          console.log(this.myInput.current.value);
      }
      render(){
          return (
              <div>
                  <input type="text" ref={this.myInput} onBlur={this.onBlurHandle}/>
              </div>
          )
      }
  }
  ```

## 受控组件和非受控组件

### **非受控组件** (Uncontrolled Components):

* 非受控组件是指表单元素的状态不由React管理，而是由DOM本身维护。
* 使用非受控组件时，通常会通过`ref`来获取DOM元素的当前值。
* 这种方式更接近传统的JavaScript处理表单的方式，但在React应用中使用较少，因为它们不如受控组件那样易于管理和测试。
  ```jsx
  class MyComponent extends React.Component{
      inputRef = React.createRef();
      spanRef = React.createRef();
      onChangeHandle = () => {
          this.spanRef.current.innerHTML = this.inputRef.current.value;
      }
      render(){
          return (
              <div>
                  <input ref={this.inputRef} type="text" onChange={this.onChangeHandle}/>
                  <span ref={this.spanRef}></span>
              </div>
          )
      }
  }
  ```

### **受控组件** (Controlled Components)

* 在React中，当表单元素的状态由React组件的state管理时，这样的表单元素被称为受控组件。
* 受控组件的值由React组件通过`value`属性控制，并且通过`onChange`事件处理器来响应用户的输入。
* 每当用户输入数据时，组件的状态会更新，从而触发重新渲染，使表单元素显示最新的状态。
  ```jsx
  class MyComponent extends React.Component{
      state={
          value: ""
      }
      onChangeHandle = (e) => {
          const value = e.target.value;
          this.setState((prevState,props)=>{
              return {value:value};
          });
      }
      render(){
          return (
              <div>
                  <input type="text" onChange={this.onChangeHandle}/>
                  <span>{this.state.value}</span>
              </div>
          )
      }
  }
  ```

## 高阶函数

* 高阶函数是指至少满足下列一个条件的函数：

  * 接收一个或多个函数作为参数
  * 返回一个函数

* 高阶函数可以用于实现函数式编程中的函数组合、柯里化、偏函数等技术。

* 常见的高阶函数有： Promise、setTimeout、Array.map等

## 旧生命周期（React 16.3 之前）

* 组件挂载时，会依次调用以下方法：

  * constructor
  * componentWillMount
  * render
  * componentDidMount ---- 一般在这做一些初始化的操作，例如：发送ajax请求、启动定时器、订阅消息

* 父组件render再次触发（更新）时，会依次调用以下方法：

  * componentWillReceiveProps
  * shouldComponentUpdate
  * componentWillUpdate
  * render
  * componentDidUpdate

* 执行setState时，会依次调用以下方法：

  * shouldComponentUpdate
  * componentWillUpdate
  * render
  * componentDidUpdate

* 执行forceUpdate时，会依次调用以下方法：

  * componentWillUpdate
  * render
  * componentDidUpdate

* 组件卸载时，会依次调用以下方法：

  * componentWillUnmount ---- 一般在这做一些清理操作，例如：取消订阅、清除定时器、移除事件监听器等
