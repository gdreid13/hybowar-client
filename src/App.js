import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import DemoPage from './DemoPage';
import CharacterDisplay from './CharacterDisplay';
import LandingPage from './LandingPage';
import PositionSelection from './PositionSelection';
import config from './config';
import './App.css';

export default class App extends Component {

  renderNavRoutes() {
    return (
      <>
        <Route
          path="/login"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegistrationPage}
        />
        <Route
          path="/demo"
          component={DemoPage}
        />
        <ul className="Navbar">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/demo">Demo</Link></li>
        </ul>
      </>
    )
  }

  renderMainRoutes() {
    return (
      <>
        <Route
          path="/characters"
          component={CharacterDisplay}
        />
        <Route
          path="/"
          component={LandingPage}
        />
        <Route
          path="/position"
          component={PositionSelection}
        />
      </>
    )
  }

  render() {
    return (
      <div className="App">
        <nav className="App-nav">{this.renderNavRoutes()}</nav>

        <main className="App-main">
          {this.renderMainRoutes()}
        </main>
        
        

        <footer>Footer</footer>
      </div>
      )
    }
  }
