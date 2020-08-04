import React, { Component } from 'react';

const PositionContext = React.createContext({
  positions: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setPositions: () => {},
})

export default PositionContext

export class PositionProvider extends Component {
  state = {
    positions: [],
    error: null,
  }

  setPositions = positions => {
    this.setState({ positions })
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
      positions: this.state.positions,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
    }
    return (
      <PositionContext.Provider value={value}>
        {this.props.children}
      </PositionContext.Provider>
    )
  }
  
}