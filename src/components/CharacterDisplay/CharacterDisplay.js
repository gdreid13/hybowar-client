import React, { Component } from 'react';
import CharacterItem from '../CharacterItem/CharacterItem';
import CharacterContext from '../contexts/CharacterContext';
import CharacterService from '../../services/CharacterService';
import CharacterForm from '../../forms/CharacterForm';
import { Link } from 'react-router-dom';
import './CharacterDisplay.css'

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
        const characters = data
        this.setState({ characters: characters, shouldRender: true })
      })
      .catch(this.context.setError)
  }



  render() {
    if (!this.state.shouldRender) {
      return null
    }
    return (
      <>
        <section className="Character__section">
          <div className="Character_list__div">
            {this.state.characters.map(character => (
                <React.Fragment key={character.id}>
                  <CharacterItem
                    {...character} />
                </React.Fragment>
              )
            )}
          </div>
        </section>
        <section className="Character_entry__section">
          <h3>
            Enter a new character for this position:
          </h3>
          <CharacterForm {...this.props} />
        </section>
        <section className="Position_links__section">
          <Link to="/positions" state={
            { userId: this.props.userId }
          }>
            Click here to enter a new position
            </Link>
          <p></p>
          <Link to={{
            pathname: `/positions/${this.props.userId}`,
            state: {
              userId: this.props.userId,
              positionId: this.props.positionId
            }
          }}>
            Click here to see a list of your positions
            </Link>
        </section>
      </>
    )
  }
}
