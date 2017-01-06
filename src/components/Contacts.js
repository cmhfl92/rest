import React, { Component } from 'react'

class Contacts extends Component {

  render () {
    return <div>
      <h2>Contact Us</h2>
      {/* <p>Phone: (813) 326-4809
         Email: BurtonsBar@gmail.com */}
      {/* </p> */}
      <form>
        <p>
          <label htmlFor='fullname'>Name</label>
          <input name='fullname' type='text' />
        </p>
        <p>
          <label htmlFor='email'>Email</label>
          <input name='email' type='email' />
        </p>
        <p>
          <label htmlFor='message'>Message</label>
          <textarea cols='30' rows='10' />
        </p>
        <p>
          <button type='submit'>Submit</button>
        </p>
      </form>
      <p>You can also email us at
      <a href='mailto:BurtonsBar@gmail.com'>BurtonsBar@gmail.com</a></p>
    </div>
  }
}

export default Contacts
