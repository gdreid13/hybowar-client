import React, { Component } from 'react';

const CharacterContext = React.createContext({
  characters: [{ }],
  error: null,
  setError: () => {},
  clearError: () => {},
  setCharacters: () => {},
})

export default CharacterContext

export class CharacterProvider extends Component {
  state = {
    positions: [],
    error: null,
  }

  setCharacters = characters => {
    this.setState({ characters })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render () {
    const value = {
      characters: this.state.characters,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setCharacters: this.setCharacters,
    }
    return (
      <CharacterContext.Provider value={value}>
        {this.props.children}
      </CharacterContext.Provider>
    )
  }
  
}

