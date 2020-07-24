import React, { Component } from 'react';
import CharacterDisplay from './CharacterDisplay';
import PositionSelection from './PositionSelection';

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