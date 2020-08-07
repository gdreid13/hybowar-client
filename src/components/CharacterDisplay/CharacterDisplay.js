import React, { Component } from 'react';
import CharacterItem from '../CharacterItem/CharacterItem';
import CharacterContext from '../contexts/CharacterContext';
import CharacterService from '../../services/CharacterService';

export default class CharacterDisplay extends Component {
  static contextType = CharacterContext
  state = {
    characters: [],
    shouldRender: false,
  }

  static defaultProps = {
    characters: [ ]
  }
  
  componentDidMount() {
    this.context.clearError()
    CharacterService.getCharacters()
      .then(data => {
        const characters = data.map(character => <CharacterItem {...character} />)
        this.setState({ characters: characters, shouldRender: true })
      })
      .catch(this.context.setError)
  }



  render() {

    if (!this.state.shouldRender) {
      return null
    }

    return (
      <div className="Character-section">
        {this.state.characters}
      </div>
    )

  }
}
