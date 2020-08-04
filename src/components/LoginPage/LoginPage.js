import React, { Component } from 'react';
import TokenService from '../../services/TokenService';
import AuthHelperService from '../../services/AuthHelperService';
import { Link } from 'react-router-dom';

export default class LoginPage extends Component {

  static defaultProps = {
    onLoginSuccess: () => { }
  }

  state = { error: null }

  handleSubmitBasicAuth = ev => {
    ev.preventDefault()
    const { user_name, password } = ev.target

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(user_name.value, password.value)
    )

    user_name.value = ''
    password.value = ''
    this.props.onLoginSuccess()
  }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { user_name, password } = ev.target
    console.log("user_name is: " + user_name)
    AuthHelperService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }


  render() {
    return (
      <>
        <section className="login-page">
          <header>
            <h3>Login to your account</h3>
          </header>
          <form
            className='login-form'
            onSubmit={this.handleSubmitJwtAuth}>
            <div>
              <label htmlFor="username">Email</label>
              <input type="text" name='username' id='username' />
            </div>
            <div>
              <label htmlFor="password">Password</label>
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