# React学习笔记

## React简介

* 用于构建用户界面的javaScript库
* 是一个将数据渲染为HTML视图的开源JavaScript库

### 为什么要用react

* 原生JavaScript操作DOM繁琐、效率低（DOM-API操作UI）
* 使用JavaScript直接操作DOM，浏览器会进行大量的重绘重排
* 原生JavaScript没有组件化编码方案，代码复用率低

### React的特点

* 采用组件化模式、声明式编码，提高开发效率及组件复用率
* 在React Native中可以使用React语法进行移动端开发
* 使用虚拟DOM+优秀的Diffing算法，尽量减少与真实DOM的交互
* 笔记：https://github.com/TaoLoading/01-WebStudy/blob/master/18-React

## 虚拟DOM

虚拟DOM是一种轻量级的JavaScript对象，它是真实DOM的一种抽象表示。虚拟DOM的主要优点包括：

* **提高性能**：通过比较虚拟DOM的变化，减少对实际DOM的操作，从而提高应用性能。
* **跨平台**：虚拟DOM可以用于不同的渲染目标，如浏览器、服务器或原生应用。
* **简化开发**：框架可以自动管理DOM更新，开发者只需关注数据变化。

虚拟DOM的工作流程通常包括以下几个步骤：

* **创建**：根据组件的状态创建虚拟DOM树。
* **比较**：当状态发生变化时，生成新的虚拟DOM树，并与之前的虚拟DOM树进行比较，找出差异。
* **更新**：将差异应用到真实的DOM上，实现界面的更新。

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
