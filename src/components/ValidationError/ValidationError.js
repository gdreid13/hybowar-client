import React, { Component } from 'react';

export default class ValidationError extends Component {
  render() {
    if (this.props.message) {
      return <div className="error">
        <span>{this.props.message}</span>
        </div>
    }
    return (
      <div></div>
    )
  }
}