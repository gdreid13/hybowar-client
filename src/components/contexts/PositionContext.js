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
    return this.setState({ positions: [...positions] })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  
  setUser = (user) => {
		return this.setState({ user: user });
  };

  setUserId = (userId) => {
    return this.setState ({ user_id: userId, login: true })
  }

  render () {
    const value = {
      positions: this.state.positions,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setPositions: this.setPositions,
      setUser: this.setUser,
      setUserId: this.setUserId
    }
    return (
      <PositionContext.Provider value={value}>
        {this.props.children}
      </PositionContext.Provider>
    )
  }
  
}