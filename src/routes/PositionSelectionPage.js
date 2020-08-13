import React, { Component } from 'react';
import PositionContext from '../components/contexts/PositionContext';
import PositionService from '../services/PositionService'
import OptionListItem from '../components/OptionListItem/OptionListItem'

export default class PositionSelectionPage extends Component {
  static contextType = PositionContext

  componentDidMount() {
    this.context.clearError()
    PositionService.getPositions()
      .then(data => {
        this.context.setPositions(data)
      })
      .catch(this.context.setError)

  }

  renderPositions() {
    const { positions = [] } = this.context
    return positions.map(position =>
      <OptionListItem
        userId = {this.props.userId}
        game = {position.game_number}
        nation = {position.nation}
      />
    )
  }

  render() {
    const { error } = this.context
    return (
      <div className="position-selection-page">
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderPositions()}
      </div>
  )}

}



