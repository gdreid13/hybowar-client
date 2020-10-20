import React, { Component } from 'react'
import PositionEntryForm from '../../forms/PositionEntryForm'
import { withRouter } from 'react-router-dom'

class PositionEntryPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  setUserId = (userId) => {
    return this.setState ({ user_id: userId })
  }

  setPosition = (positionId) => {
    return this.setState({ position_id: positionId })
  }

  handlePositionEntrySuccess = (userId, positionId) => {
    this.setUserId(userId)
    this.setPosition(positionId)
    this.props.history.push(`/positions/${userId}`)
  }

  render() {
    return (
      <section className='PositionEntryPage'>
        <PositionEntryForm 
        userId={this.props.userId}
        history={this.props.history}
        onPositionEntrySuccess={this.handlePositionEntrySuccess} />
      </section>
    )
  }
}

export default withRouter(PositionEntryPage);