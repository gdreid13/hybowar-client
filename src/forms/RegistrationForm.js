import React, { Component } from 'react';
import AuthHelperService from '../services/AuthHelperService';

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => { },
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { user_name, password } = ev.target

    this.setState({ error: null })
    AuthHelperService.postUser({
      user_name: user_name.value,
      password: password.value,
    })
      .then(user => {

        user_name.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.message })
        alert(JSON.stringify(this.state.error))
      })
  }

  render() {
    const { error } = this.state

    return (
        <form className='registration-form' onSubmit={this.handleSubmit}>
          <div role='alert'>
            {error && <p className='red'>{error}</p>}
          </div>
          <div>
            <label htmlFor="user_name">Email</label>
            <input
              type='text'
              name='user_name'
              required
              id='Registration_user_name'
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type='password'
              name='password'
              required
              id='Registration_password'
            />
          </div>
          <button type='submit'>Create an account</button>
          
        </form>
    )
  }
}