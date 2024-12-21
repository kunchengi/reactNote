import React, { Component } from 'react'
import AddCar from './compoents/AddCar'
import CarList from './compoents/CarList'

export default class App extends Component {
  render() {
    return (
      <div>
        <AddCar />
        <CarList />
      </div>
    )
  }
}
