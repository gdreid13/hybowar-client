import React, { Component } from 'react'
import PositionEntryForm from '../PositionEntryForm/PositionEntryForm'

export default class PositionEntryPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handlePositionEntrySuccess = (userId, positionId) => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    this.props.setUserId(userId)
    this.props.setPosition(positionId)
    history.push(destination)
  }

  render() {
    return (
      <section className='PositionEntryPage'>
        <PositionEntryForm userId={this.props.userId}/>
      </section>
    )
  }
}