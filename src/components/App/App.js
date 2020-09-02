import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import CharacterDisplay from '../CharacterDisplay/CharacterDisplay';
import LandingPage from '../LandingPage/LandingPage';
import PositionSelectionPage from '../../routes/PositionSelectionPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import LoginPage from '../../routes/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage';
import PositionEntryPage from '../../components/PositionEntryPage/PositionEntryPage'
import TokenServices from '../../services/TokenService';
import config from '../../config';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      hasError: false,
      user: '',
      user_id: '',
      position_id: ''
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
    return this.setState({ user_id: userId, login: true })
  }

  setPositionId = (positionId) => {
    return this.setState ({ position_id: positionId })
  }

  componentDidMount() {
    const authToken = TokenServices.getAuthToken(config.TOKEN_KEY);
    if (authToken) {
      this.setState({ login: true });
    }
  }

  render() {
    console.log(this.state)
    const userId = this.state.user_id
    const positionId = this.state.position_id
    return (
      <div className="App">
        <nav className="App-nav">
          <Navbar {...this.state} />
        </nav>

        <main className="App-main">
          {this.state.hasError &&
            <p className='red'>
              An unknown error has occurred.
          </p>}
          <Switch>
            <Route
              exact
              path={'/'}
              render={() => <LandingPage userId={this.state.user_id} />}
            />
            <Route
              path={'/login'}
              render={() => <LoginPage setUserId={this.setUserId} />}
            />
            <Route
              path={'/register'}
              component={RegistrationPage}
            />
            <Route
              exact
              path={'/positions'}
              render={() => <PositionEntryPage userId={this.state.user_id} />}
            />
            <Route
              path={`/positions/:userId`}
              render={() => <PositionSelectionPage userId={this.state.user_id} />}
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
