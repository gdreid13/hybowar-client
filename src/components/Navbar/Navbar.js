import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenServices from '../../services/TokenService'
import config from '../../config';

export default class Navbar extends Component {
  componentDidMount() {
		const authToken = TokenServices.getAuthToken(config.TOKEN_KEY);
		if (authToken) {
			this.setState({ login: true });
		}
	}

  handleLogoutClick = () => {
    TokenServices.clearAuthToken()
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link
          to='/login'>
          Log in
        </Link>
        <Link
          to='/register'>
          Register
        </Link>
      </div>
    )
  }

  renderPositionsLink() {
    return (
      <div className='Header__link-to-app'>
        <Link
        to={`/positions/${this.props.user_id}`}>
          List of your positions
        </Link>
      </div>
    )
  }


  render() {
    return (
      <nav className='Header'>
        <h1>
          <Link to='/'>
            {' '}
            Hyborian War Helper
          </Link>
        </h1>
        {!!this.props.login
          ? this.renderLogoutLink() 
          : this.renderLoginLink()}
      </nav>
    )
  }
}