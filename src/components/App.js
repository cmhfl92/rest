import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Layout from './Layout'
import Home from './Home'
import Menu from './Menu'
import MenuSection from './MenuSection'
import Contacts from './Contacts'
import Locations from './Locations'
import Location from './Location'
import Enter from './Enter'

class App extends Component {

  render () {
    return <Router history={browserHistory}>
      <Route component={Layout}>
        <Route path='/enter' component={Enter} />
        <Route path='/' component={Home} />
        <Route path='/menu' component={Menu}>
          <Route path=':slug' component={MenuSection} />
        </Route>
        <Route path='/contacts' component={Contacts} />
        <Route path='/locations' component={Locations} />
        <Route path='/locations/:slug' component={Location} />
      </Route>
    </Router>
  }
}

export default App
