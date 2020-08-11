import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import CharacterDisplay from '../CharacterDisplay/CharacterDisplay';
import LandingPage from '../LandingPage/LandingPage';
import PositionSelectionPage from '../../routes/PositionSelectionPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import LoginPage from '../../routes/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage';
import tokenServices from '../../services/TokenService';
import config from '../../config';
import './App.css';

export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        login: false,
        hasError: false,
        user: '',
        user_id: ''
      }

  }
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  setUser = (user) => {
		return this.setState({ user: user });
  };

  setUserId = (userId) => {
    return this.setState ({ user_id: userId })
  }
  
	componentDidMount() {
		const authToken = tokenServices.getAuthToken(config.TOKEN_KEY);
		if (authToken) {
			this.setState({ login: true });
		}
	}

  render() {
    const userId = this.state.user
    return (
      <div className="App">
        <nav className="App-nav">
          <Navbar />
        </nav>

        <main className="App-main">
          {this.state.hasError && <p className='red'>An unknown error has occurred.</p>}
          <Switch>
            <Route
              exact
              path={'/'}
              component={LandingPage}
            />
            <Route
              path={'/login'}
              component={LoginPage}
            />
            <Route
              path={'/register'}
              component={RegistrationPage}
            />

            <Route
              path={'/positions/:userId'}
              component={PositionSelectionPage}
            />
            <Route
              path={'/characters/:userId/:positionId'}
              component={CharacterDisplay}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>



        <footer className="Footer">Footer</footer>
      </div>
    )
  }
}
