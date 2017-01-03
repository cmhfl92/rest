import React, { Component } from 'react'

class Menu extends Component {

  render () {
    return <div>
      <h2>Our Menu</h2>

      <nav className='menu'>
        <ul>
          <li>Appetizers</li>
          <li>Entrees</li>
          <li>Desserts</li>
        </ul>
      </nav>

      <section>
        <h3>Appetizers</h3>

        <table>
          <tbody>
            <tr>
              <th>Spring Rolls</th>
              <td>Filled with Love</td>
              <td>$3.69</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  }
}

export default Menu
