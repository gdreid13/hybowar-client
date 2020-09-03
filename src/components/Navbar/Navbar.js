import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenServices from '../../services/TokenService'
import config from '../../config';

export default class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user_id: null
    }
  }
  componentDidMount() {
		const authToken = TokenServices.getAuthToken(config.TOKEN_KEY);
		if (authToken) {
			this.setState({ login: true });
		}
	}

  handleLogoutClick = () => {
    TokenServices.clearAuthToken()
    this.setState({ user_id: null })
    this.forceUpdate()
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link
          activeClassName={}
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


  render() {
    return (
      <nav className='Header'>
        <h1>
          <Link to='/'>
            {' '}
            Hyborian War Helper
          </Link>
        </h1>
        {!!this.props.user_id
          ? this.renderLogoutLink() 
          : this.renderLoginLink()}
      </nav>
    )
  }
}