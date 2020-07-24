import React, { Component } from 'react';

export default class CharacterDisplay extends Component {
  render() {
    return (
      <div className="Character-display">
        <section>
          <form id="character-entry">
            <div class="form-section">
              <label for="character-name">Character name:</label>
              <input type="text" name="character-name" placeholder="Conan" required />
            </div>
            <div class="form-section">
              <label for="character-id">Character ID:</label>
              <input type="text" name="character-id" placeholder="AQUI-20" required />
            </div>
            <div class="form-section">
              <label for="character-age">Character age:</label>
              <select name="character-age" id="character-age">
                <option value="youth">Youth</option>
                <option value="young-adult">Young adult</option>
                <option value="prime">Prime of life</option>
                <option value="middle-aged">Middle aged</option>
                <option value="old">Old</option>
                <option value="ancient">Ancient</option>
              </select>
            </div>
            <div class="form-section">
              <label for="location">Present location:</label>
              <input type="text" name="location" placeholder="Tarantia" required />
            </div>
            <div class="form-section">
              <label for="personal-combat">Personal combat:</label>
              <select name="ability-score" id="ability-score">
                <option value="none">None</option>
                <option value="poor">Poor</option>
                <option value="adequate">Adequate</option>
                <option value="good">Good</option>
                <option value="excellent">Excellent</option>
                <option value="superior">Superior</option>
              </select>
            </div>
            <div class="form-section">
              <label for="diplomacy">Diplomacy:</label>
              <select name="ability-score" id="ability-score">
                <option value="none">None</option>
                <option value="poor">Poor</option>
                <option value="adequate">Adequate</option>
                <option value="good">Good</option>
                <option value="excellent">Excellent</option>
                <option value="superior">Superior</option>
              </select>
            </div>
            <div class="form-section">
              <label for="rulership">Rulership:</label>
              <select name="ability-score" id="ability-score">
                <option value="none">None</option>
                <option value="poor">Poor</option>
                <option value="adequate">Adequate</option>
                <option value="good">Good</option>
                <option value="excellent">Excellent</option>
                <option value="superior">Superior</option>
              </select>
            </div>
            <div class="form-section">
              <label for="military-command">Military command:</label>
              <select name="ability-score" id="ability-score">
                <option value="none">None</option>
                <option value="poor">Poor</option>
                <option value="adequate">Adequate</option>
                <option value="good">Good</option>
                <option value="excellent">Excellent</option>
                <option value="superior">Superior</option>
              </select>
            </div>
            <div class="form-section">
              <label for="heroism">Heroism:</label>
              <select name="ability-score" id="ability-score">
                <option value="none">None</option>
                <option value="poor">Poor</option>
                <option value="adequate">Adequate</option>
                <option value="good">Good</option>
                <option value="excellent">Excellent</option>
                <option value="superior">Superior</option>
              </select>
            </div>
            <div class="form-section">
              <label for="intrigue">Intrigue:</label>
              <select name="ability-score" id="ability-score">
                <option value="none">None</option>
                <option value="poor">Poor</option>
                <option value="adequate">Adequate</option>
                <option value="good">Good</option>
                <option value="excellent">Excellent</option>
                <option value="superior">Superior</option>
              </select>
            </div>
            <div class="form-section">
              <label for="magic">Magic:</label>
              <select name="ability-score" id="ability-score">
                <option value="none">None</option>
                <option value="poor">Poor</option>
                <option value="adequate">Adequate</option>
                <option value="good">Good</option>
                <option value="excellent">Excellent</option>
                <option value="superior">Superior</option>
              </select>
            </div>
            <button type='submit'>Submit</button>
          </form>
        </section>
      </div>
    )
  }
}