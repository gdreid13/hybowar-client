import React, { Component } from 'react';
import AuthHelperService from '../services/AuthHelperService';
import ValidationError from '../components/ValidationError/ValidationError'
import './forms.css'

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => { },
  }

  state = { 
    error: null,
    password: { value: '', touch: false }
   }

  validatePassword(password = '') {
    const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/;
    if (password.length === 0) {
      return 'Password is required';
    };
    if (password.length < 8) {
      return 'Password must be longer than 8 characters';
    };
    if (password.length > 72) {
      return 'Password must be shorter than 72 characters';
    };
    if (password.startsWith(' ') || password.endsWith(' ')) {
      return 'Password must not start or end with empty spaces';
    };
    if (!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password)) {
      return 'Password must contain 1 upper case,lower case,number and special character';
    };
    return null;

  };

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
        alert(this.state.error)
      })
  }

  onChange = e => {
    const key = e.target.name;
    const newValue = e.target.value;
    this.setState({ [key]: { value: newValue, touch: true } });
  };

  render() {
    const { error, password } = this.state
    const passwordError = (!password.value)
      ? false
      : this.validatePassword(password.value);

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
            onChange={this.onChange}
          />
          {password.touch && <ValidationError message={passwordError} />}
        </div>
        <button type='submit'>Create an account</button>

      </form>
    )
  }
}