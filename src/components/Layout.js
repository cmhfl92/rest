import React, { Component } from 'react'
import { Link } from 'react-router'

class Layout extends Component {

  static propTypes = {
    children: React.PropTypes.element.isRequired
  }

  layoutClassName () {
    if (this.props.location.pathname === '/') {
      return 'home'
    } else {
      return this.props.location.pathname.split('/').join(' ')
    }
  }

  render () {
    return <div className={`layout ${this.layoutClassName()}`}>

      {/* <h1>Burton's Bar</h1> */}
      <nav className='navbar'>
        <ul>
          {/* <li>
            <Link to='/enter'>Enter</Link>
          </li> */}
          <li>
            <Link to='/'>Our Story</Link>
          </li>
          <li>
            <Link to='/menu'>Menu</Link>
          </li>
          <li>
            <Link to='/contacts'>Contact</Link>
          </li>
          <li>
            <Link to='/locations'>Locations</Link>
          </li>
        </ul>
      </nav>
      <div>
        <img className='logo' src='https://github.com/cmhfl92/rest/blob/master/Burtons%20bar.png?raw=true' />
      </div>
      <main>
        {this.props.children}
      </main>
      <footer>
        <p>&copy; 2017 Burton's Bar. Built with &hearts; at the Christa Yard, St. Petersburg, Florida.</p>
      </footer>
    </div>
  }
}

export default Layout
