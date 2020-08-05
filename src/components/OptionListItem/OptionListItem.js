import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class OptionListItem extends Component {
  render () {
    const { position } = this.props
// replace "1" below with userId when you figure out how
    return (
      <Link to = {`/characters/1/1`} className='PositionLink'>
        <div>
          Game number: 986, Nation: Border Kingdom
        </div>
      </Link>
    )
  }
}