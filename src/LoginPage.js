import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LoginPage extends Component {
  render () {

    return (
      <>
        <section className="login-page">
          <header>
              <h3>Login to your account</h3>
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
              <button type='submit'>Log in</button>
          </form>
          <p>Don't have an account? Register <Link to={"/register"}>here.</Link></p>
        </section>
      </>
    )
  }
}