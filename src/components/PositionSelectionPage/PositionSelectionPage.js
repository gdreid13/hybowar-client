import React, { Component } from 'react';
import PositionContext from '../contexts/PositionContext';
import PositionService from '../../services/PositionService'

export default class PositionSelectionPage extends Component {
  static ContextType = PositionContext

  componentDidMount () {
    this.context.clearError()
    PositionService.getPositions()

  }
   
  render() {
    const { positions } = this.props
    return (
      <form id="position-selection">
        <div className="form-section">
          <label htmlFor="position-selection">Game number</label>
          <select name="position" id="position">
            <PositionOption />
          </select>
        </div>
      </form>
    )
  }
}

function PositionOption({ position }) {
  return (
    <option className="position-option">Game {position.game_number}, Nation {position.position}</option>
  )
}