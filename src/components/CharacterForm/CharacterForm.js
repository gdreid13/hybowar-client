import React, { Component } from 'react';

export default class CharacterForm extends Component {
  render() {
    return (
      <div className="Character-form">
        <section>
          <form id="character-entry">
            <div className="form-section">
              <label htmlFor="character-name">Character name:</label>
              <input type="text" name="character-name" placeholder="Conan" required />
            </div>
            <div className="form-section">
              <label htmlFor="character-id">Character ID:</label>
              <input type="text" name="character-id" placeholder="AQUI-20" required />
            </div>
            <div className="form-section">
              <label htmlFor="character-age">Character age:</label>
              <select name="character-age" id="character-age">
                <option value="youth">Youth</option>
                <option value="young-adult">Young adult</option>
                <option value="prime">Prime of life</option>
                <option value="middle-aged">Middle aged</option>
                <option value="old">Old</option>
                <option value="ancient">Ancient</option>
              </select>
            </div>
            <div className="form-section">
              <label htmlFor="location">Present location:</label>
              <input type="text" name="location" placeholder="Tarantia" required />
            </div>
            <div className="form-section">
              <label htmlFor="personal-combat">Personal combat:</label>
              <select name="ability-score" id="ability-score">
                <option value="none">None</option>
                <option value="poor">Poor</option>
                <option value="adequate">Adequate</option>
                <option value="good">Good</option>
                <option value="excellent">Excellent</option>
                <option value="superior">Superior</option>
              </select>
            </div>
            <div className="form-section">
              <label htmlFor="diplomacy">Diplomacy:</label>
              <select name="ability-score" id="ability-score">
                <option value="none">None</option>
                <option value="poor">Poor</option>
                <option value="adequate">Adequate</option>
                <option value="good">Good</option>
                <option value="excellent">Excellent</option>
                <option value="superior">Superior</option>
              </select>
            </div>
            <div className="form-section">
              <label htmlFor="rulership">Rulership:</label>
              <select name="ability-score" id="ability-score">
                <option value="none">None</option>
                <option value="poor">Poor</option>
                <option value="adequate">Adequate</option>
                <option value="good">Good</option>
                <option value="excellent">Excellent</option>
                <option value="superior">Superior</option>
              </select>
            </div>
            <div className="form-section">
              <label htmlFor="military-command">Military command:</label>
              <select name="ability-score" id="ability-score">
                <option value="none">None</option>
                <option value="poor">Poor</option>
                <option value="adequate">Adequate</option>
                <option value="good">Good</option>
                <option value="excellent">Excellent</option>
                <option value="superior">Superior</option>
              </select>
            </div>
            <div className="form-section">
              <label htmlFor="heroism">Heroism:</label>
              <select name="ability-score" id="ability-score">
                <option value="none">None</option>
                <option value="poor">Poor</option>
                <option value="adequate">Adequate</option>
                <option value="good">Good</option>
                <option value="excellent">Excellent</option>
                <option value="superior">Superior</option>
              </select>
            </div>
            <div className="form-section">
              <label htmlFor="intrigue">Intrigue:</label>
              <select name="ability-score" id="ability-score">
                <option value="none">None</option>
                <option value="poor">Poor</option>
                <option value="adequate">Adequate</option>
                <option value="good">Good</option>
                <option value="excellent">Excellent</option>
                <option value="superior">Superior</option>
              </select>
            </div>
            <div className="form-section">
              <label htmlFor="magic">Magic:</label>
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