import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
  render() {
    console.log(this.props.userId)
    return (
      <>
        <header className="App-header" role="banner">
          <Link to="/"><h1>Hyborian War Position Organizer</h1></Link>
          <h2>Log in or register to get started</h2>
        </header>
        {this.props.userId == true &&
        <section>
          <Link to="/positions" userId={this.props.userId}>
            Click here to enter a new position
          </Link>
        </section>
        }
        <section>
          <h2>Keep track of all your position's characters, provinces, and armies here</h2>
          <Link to="/positions/1">Click here to see a positions display</Link>
          <Link to="/characters/1/1">Click here to see a character display</Link>
        </section>

        <section>
          <p>Enter the information from your turns, and sort easily by traits and troop types</p>
          <p>[<em>placeholder for screenshot of position/character entry fields</em>]</p>
        </section>
      </>
    )
  }
}