import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class AddCar extends Component {

  inputRef = React.createRef();
  addCar = () => {
    const carName = this.inputRef.current.value;
    PubSub.publish('addCar', carName);
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.addCar}>Add</button>
      </div>
    )
  }
}
