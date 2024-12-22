import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Redirect to="/login" />
        </Switch>
      </div>
    )
  }
}
