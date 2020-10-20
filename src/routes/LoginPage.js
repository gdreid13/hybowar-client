import React, { Component } from 'react'
import LoginForm from '../forms/LoginForm'
import { withRouter } from 'react-router-dom'
import './routing.css'

class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = (userId) => {
    this.props.setUserId(userId)
    this.props.history.push('/')
  }

  render() {
    return (
      <section className='LoginPage'>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </section>
    )
  }
}

export default withRouter(LoginPage);