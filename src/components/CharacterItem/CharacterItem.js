import React, { Component } from 'react';
import CharacterContext from '../contexts/CharacterContext';

export default class CharacterItem extends Component {
  static contextType = CharacterContext
  static defaultProps = []
  
  render() {
    console.log(this.props)
    return (
      <div className="Character">
        <p>Name: {this.props.character_name}</p>
        <p>ID: {this.props.character_id}</p>
        <p>Status: {this.props.status}</p>
        <p>Age: {this.props.age}</p>
        <p>Location: {this.props.location}</p>
        <p>Personal combat: {this.props.personal_combat}</p>
        <p>Diplomacy: {this.props.diplomacy}</p>
        <p>Rulership: {this.props.rulership}</p>
        <p>Military command: {this.props.military_command}</p>
        <p>Heroism: {this.props.heroism}</p>
        <p>Intrigue: {this.props.intrigue}</p>
        <p>Magic: {this.props.magic}</p>
      </div>
    )
  }
}