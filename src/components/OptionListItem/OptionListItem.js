import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class OptionListItem extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <Link to={{
        pathname: `/characters/${this.props.userId}/${this.props.positionId}`,
        state: {
          userId: this.props.userId,
          positionId: this.props.positionId
        }
      }

      } className='PositionLink'>
        <div>
          <p>Game: {this.props.game}, Nation: {this.props.nation}</p>
        </div>
      </Link>
    )
  }
}