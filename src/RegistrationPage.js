import React, { Component } from 'react';

export default class RegistrationPage extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => { }
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { user_name, password } = ev.target

    console.log('registration form submitted')
    console.log({ user_name, password })

//    user_name.value = ''
//    password.value = ''
    this.props.onRegistrationSuccess()
  }

  render() {
    const { error } = this.state

    return (
      <section className="registration-page">
        <header>
          <h3>Register for an account</h3>
        </header>
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
      </section>
    )
  }
}