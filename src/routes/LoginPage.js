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
  //  const { location, history } = this.props
  //  const destination = (location.state || {}).from || '/'
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