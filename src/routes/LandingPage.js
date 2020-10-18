import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './routing.css'

export default class LandingPage extends Component {

  static defaultProps = {
    userId: false
  }

  renderNoUser() {
    return (
      <div className="intro">
        <section className="intro__section">
          <h2>To help those who play the game "Hyborian War" by RSI!</h2>
          <h4>Having problems keeping track of your characters for your positions?  Look no further!</h4>
          <h4>The HYBORIAN WAR HELPER can keep track of your characters for you!</h4>
          <h4>LOG IN ABOVE to the demo account and check it out!</h4>
            <p>Username: demo</p>
            <p> Password: password</p>
          <h4>If you don't know what Hyborian War is, click{' '}
            <a target="_blank"
                rel="noopener noreferrer"
                href="http://www.reality.com/hwpqa.htm">
                HERE
            </a>
            {' '}for the FAQ!
          </h4>
        </section>
      </div>
    )
  }

  renderUser() {
    return (
      <section className="position-links">
        <Link to="/positions" state={
          { userId: this.props.userId }
        }>
          Click here to enter a new position
        </Link>
        <p></p>
        <Link to={`/positions/${this.props.userId}`} userId={this.props.userId} position={this.props.positionId}>
          Click here to see a list of your positions
        </Link>
      </section>
    )
  }

  renderHeader() {
    return (
      <header className="App-header" role="banner">
        <Link to="/"><h1>Hyborian War Position Organizer</h1></Link>
        {this.props.userId == false &&
          <h2>Log in or register to get started</h2>
        }
      </header>
    )
  }

  render() {
    console.log(this.props.userId)
    const userId = this.props.userId
    const landingPage =
      userId == false
        ? this.renderNoUser()
        : this.renderUser()
    return (
      <>
        {this.renderHeader()}
        {landingPage}
      </>
    )
  }
}