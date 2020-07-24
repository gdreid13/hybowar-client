import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <header className="App-header" role="banner">
          <Link to="/"><h1>Hyborian War Position Organizer</h1></Link>
          <h2>Log in, register, or sign into the demo account to get started</h2>
        </header>
        <section>
          <h2>Keep track of all your position's characters, provinces, and armies here</h2>
          <p>[<em>placeholder for screenshot of how position's assets are displayed</em>]</p>
        </section>

        <section>
          <p>Enter the information from your turns, and sort easily by traits and troop types</p>
          <p>[<em>placeholder for screenshot of position/character entry fields</em>]</p>
        </section>
      </>
    )
  }
}