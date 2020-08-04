import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import CharacterDisplay from '../CharacterDisplay/CharacterDisplay';
import LandingPage from '../LandingPage/LandingPage';
import PositionSelectionPage from '../PositionSelectionPage/PositionSelectionPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import LoginPage from '../LoginPage/LoginPage';
import RegistrationPage from '../RegistrationPage/RegistrationPage';
import './App.css';

export default class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
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
