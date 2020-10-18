import React, { Component } from 'react'
import RegistrationForm from '../forms/RegistrationForm'
import { withRouter } from 'react-router-dom'
import './routing.css'

class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = user => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <section className='RegistrationPage'>
        <h2>Register for an account</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </section>
    )
  }
}

export default withRouter(RegistrationPage);