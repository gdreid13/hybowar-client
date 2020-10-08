import React, { Component } from 'react';
import TokenService from '../../services/TokenService';
import AuthHelperService from '../../services/AuthHelperService';
import { Link } from 'react-router-dom';

export default class LoginPage extends Component {

  static defaultProps = {
    onLoginSuccess: () => {}
  }



  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { user_name, password } = ev.target
    const login = {
      user_name: user_name.value,
      password:  password.value,
    }

    AuthHelperService.postLogin(JSON.stringify(login))
      .then(res => {
        TokenService.saveAuthToken(res.authToken)
        user_name.value = ''
        password.value = ''
        this.props.onLoginSuccess(res.userId)
      })
      .catch(res => {
        this.setState({ error: res.error })
        alert(JSON.stringify(this.state.error))
      })
  }


  render() {
    return (
      <>
        <section className='login-page'>
          <header>
            <h3>Login to your account</h3>
          </header>
          <form
            className='login-form'
            onSubmit={this.handleSubmitJwtAuth}
          >
            <div>
              <label htmlFor='user_name'>User name</label>
              <input 
              required
              name='user_name' 
              id='user_name' 
              />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input 
              required
              type='password' 
              name='password' 
              id='password' 
              />
            </div>
            <button type='submit'>Log in</button>
          </form>
          <p>Don't have an account? Register <Link to={'/register'}>here.</Link></p>
        </section>
      </>
    )
  }
}