import React, { Component } from 'react';

export default class RegistrationPage extends Component {
  render () {
    return (
        <section className="registration-page">
          <header>
              <h3>Register for an account</h3>
          </header>
          <form class='signup-form'>
              <div>
                <label for="username">Email</label>
                <input type="text" name='username' id='username' />
              </div>
              <div>
                <label for="password">Password</label>
                <input type="password" name='password' id='password' />
              </div>
              <button type='submit'>Create an account</button>
          </form>
      </section>
    )
  }
}