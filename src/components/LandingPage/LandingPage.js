import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <header className="App-header" role="banner">
          <Link to="/"><h1>Hyborian War Position Organizer</h1></Link>
          {this.props.userId == false &&
            <h2>Log in or register to get started</h2>
          }
        </header>
        {this.props.userId == true &&
          <section>
            <Link to="/positions" state={
              {userId: this.props.userId}
              }>
              Click here to enter a new position
            </Link>
            <Link to={`/positions/${this.props.userId}`} userId={this.props.userId} position={this.props.positionId}>
              Click here to see a list of your positions
            </Link>
          </section>
        }
        {this.props.userId == false &&
          <section>
            <h2>Keep track of all your position's characters, provinces, and armies here</h2>
            <Link to="/positions/1">Click here to see a positions display</Link>
            <Link to="/characters/1/1">Click here to see a character display</Link>
          </section>
        }
        {this.props.userId == false &&
          <section>
            <p>Enter the information from your turns, and sort easily by traits and troop types</p>
            <p>[<em>placeholder for screenshot of position/character entry fields</em>]</p>
          </section>
        }
      </>
    )
  }
}