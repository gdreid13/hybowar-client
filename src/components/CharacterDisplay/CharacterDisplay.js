import React, { Component } from 'react';
import CharacterItem from '../CharacterItem/CharacterItem';
import CharacterContext from '../contexts/CharacterContext';
import CharacterService from '../../services/CharacterService';
import CharacterForm from '../../forms/CharacterForm';

export default class CharacterDisplay extends Component {
  static contextType = CharacterContext
  state = {
    characters: [],
    shouldRender: false,
    userId: null,
    positionId: null
  }

  static defaultProps = {
    characters: [],
    userId: null,
    positionId: null
  }

  componentDidMount() {
    this.context.clearError()
    const userId = this.props.location.state.userId
    const positionId = this.props.location.state.positionId
    CharacterService.getCharacters(userId, positionId)
      .then(data => {
        const characters = data.map(character =>
          <CharacterItem {...character} />)
        this.setState({ characters: characters, shouldRender: true })
      })
      .catch(this.context.setError)
  }



  render() {
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
        <CharacterForm {...this.props} />
      </section>

    )

  }
}
