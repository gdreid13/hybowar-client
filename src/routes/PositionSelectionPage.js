import React, { Component } from 'react';
import PositionContext from '../components/contexts/PositionContext';
import PositionService from '../services/PositionService'
import OptionListItem from '../components/OptionListItem/OptionListItem'
import './routing.css'

export default class PositionSelectionPage extends Component {
  static contextType = PositionContext
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    }
  }

  componentDidMount() {
    this.context.clearError()
    PositionService.getPositions(this.props.userId)
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
        positionId = {position.id}
        game = {position.game_number}
        nation = {position.nation}
      />
    )
  }

  render() {
    const { error } = this.context
    return (
      <section className="Position_selection__section">
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderPositions()}
      </section>
  )}

}



