import React, { Component } from 'react';
import PositionContext from '../contexts/PositionContext';
import PositionService from '../../services/PositionService'

export default class PositionSelectionPage extends Component {
  static ContextType = PositionContext

  componentDidMount() {
    this.context.clearError()
    PositionService.getPositions()
      .then(this.context.setPositions)
      .catch(this.context.setError)

  }

  renderPositions() {
    const { positions = [] } = this.context
    return positions.map(positions =>
      <option value={position.game_number}>
        Game {position.game-number}, Nation {position.position}
      </option>
    )
  }

  render() {
    return (
      <form className="position-selection-page">
        <select name="position" id="position">
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderPositions()}
        </select>
      </form>
  )}

}



