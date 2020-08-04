import React, { Component } from 'react';
import CharacterDisplay from '../CharacterDisplay/CharacterDisplay';
import PositionSelection from '../PositionSelection/PositionSelection';

export default class DemoPage extends Component {
  render () {
    return (
      <div className="demo-page">
        <PositionSelection />
        <CharacterDisplay />
      </div>
    )
  }
}