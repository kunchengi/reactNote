import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import { nanoid } from 'nanoid'

export default class CarList extends Component {
  state = {
    cars: [
      { id: nanoid(), name: "奔驰" },
      { id: nanoid(), name: "宝马" }
    ]
  }

  componentDidMount() {
    // 订阅消息
    this.addCarEvent = PubSub.subscribe('addCar', (msg, newCarName) => {
      console.log(msg);// addCar
      const newCar = { id: nanoid(), name: newCarName };
      // 1.获取老数据
      const { cars } = this.state;
      // 2.拼接新数据
      const newCars = [...cars, newCar];
      // 3.更新数据
      this.setState({ cars: newCars });
    })
  }

  componentWillUnmount() {
    // 取消订阅
    PubSub.unsubscribe(this.addCarEvent);
  }

  render() {
    return (
      <div>
        {
          this.state.cars.map((car) => {
            return <div key={car.id}>{car.name}</div>
          })
        }
      </div>
    )
  }
}
