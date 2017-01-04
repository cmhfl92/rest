import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Layout from './Layout'
import Home from './Home'
import Menu from './Menu'
import Contacts from './Contacts'
import Locations from './Locations'

class App extends Component {

  render () {
    return <Router history={browserHistory}>
      <Route component={Layout}>
        <Route path='/' component={Home} />
        <Route path='/menu' component={Menu} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/locations' component={Locations} />
      </Route>
    </Router>
  }
}

export default App
