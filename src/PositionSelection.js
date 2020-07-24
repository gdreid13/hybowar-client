import React, { Component } from 'react';

export default class PositionSelection extends Component {
  render() {
    return (
      <form id="position-selection">
        <div class="form-section">
          <label for="game-number">Game number</label>
          <select name="game-number" id="game-number">
            <option value="first-game">345</option>
            <option value="second-game">367</option>
            <option value="third-game">411</option>
          </select>
        </div>
        <div class="form-section">
          <label for="position-number">Position number</label>
          <input type="number" name="game-number" min="1" max="36" placeholder="1" required />
        </div>
      </form>
    )
  }
}