import React, { Component } from 'react';
import CharacterItem from '../CharacterItem/CharacterItem';
import CharacterContext from '../contexts/CharacterContext';
import CharacterService from '../../services/CharacterService';
import CharacterForm from '../CharacterForm/CharacterForm';

export default class CharacterDisplay extends Component {
  static contextType = CharacterContext
  state = {
    characters: [],
    shouldRender: false,
  }

  static defaultProps = {
    characters: []
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
    console.log("character display props:" + JSON.stringify(this.props))
    if (!this.state.shouldRender) {
      return null
    }

    return (
      <section>
        <div className="Character-section">
          {this.state.characters}
        </div>
        <h3>
          Enter a new character for this position:
        </h3>
        <CharacterForm {...this.props}/>
      </section>

    )

  }
}
