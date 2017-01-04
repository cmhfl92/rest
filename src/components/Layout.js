import React, { Component } from 'react'
import { Link } from 'react-router'

class Layout extends Component {

  static propTypes = {
    children: React.PropTypes.element.isRequired
  }

  render () {
    return <div>
      <h1>hRana</h1>
      <nav>
        <ul>
          <li>
            <Link to='/enter'>Enter</Link>
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/menu'>Menu</Link>
          </li>
          <li>
            <Link to='/contacts'>Contact Us</Link>
          </li>
          <li>
            <Link to='/Locations'>Locations</Link>
          </li>
        </ul>
      </nav>
      <main>
        {this.props.children}
      </main>
      <footer>
        <p>&copy; 2017 The hRana. Built with &hearts; at the Christa Yard, St. Petersburg, Florida.</p>
      </footer>
    </div>
  }
}

export default Layout
