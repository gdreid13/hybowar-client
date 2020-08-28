import React, { Component } from 'react';
import CharacterContext from '../contexts/CharacterContext';
import CharacterService from '../../services/CharacterService'

export default class CharacterForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      position_id: '',
      user_id: '',
    }
  };
  static contextType = CharacterContext

  handleSubmitCharacter = ev => {
    ev.preventDefault()
    const {
      character_name,
      character_id,
      status,
      age,
      location,
      personal_combat,
      diplomacy,
      rulership,
      military_command,
      heroism,
      intrigue,
      magic,
      positionId,
    } = ev.target;
    const newCharacter = {
      character_name: character_name.value,
      character_id:  character_id.value,
      status: status.value,
      age: age.value,
      location: location.value,
      personal_combat: personal_combat.value,
      diplomacy: diplomacy.value,
      rulership: rulership.value,
      military_command: military_command.value,
      heroism: heroism.value,
      intrigue: intrigue.value,
      magic: magic.value,
      userId: this.state.user_id,
      positionId: positionId.value,
    }

    console.log(this.props)

    CharacterService.postCharacter(
      newCharacter.character_name,
      newCharacter.character_id,
      newCharacter.status,
      newCharacter.age,
      newCharacter.location,
      newCharacter.personal_combat,
      newCharacter.diplomacy,
      newCharacter.rulership,
      newCharacter.military_command,
      newCharacter.heroism,
      newCharacter.intrigue,
      newCharacter.magic,
      newCharacter.userId,
      newCharacter.positionId,
    )
    .then(res => {
      console.log(res);
    })
    .catch(res => {
      this.setState({ error: res.error })
      alert(JSON.stringify(this.state.error))
    })
  }

  render() {
    return (
      <div className="Character-form">
        <section>
          <form 
            className='character-form'
            id='character-entry'
            onSubmit={this.handleSubmitCharacter}>
            <div className="form-section">
              <label htmlFor="character-name">Character name:</label>
              <input name="character_name" placeholder="Conan" required />
            </div>
            <div className="form-section">
              <label htmlFor="character-id">Character ID:</label>
              <input name="character_id" placeholder="AQUI-20" required />
            </div>
            <div className="form-section">
              <label htmlFor="age">Character age:</label>
              <select name="age" id="age">
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
              <select name="personal_combat" id="ability-score">
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
              <select name="diplomacy" id="ability-score">
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
              <select name="rulership" id="ability-score">
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
              <select name="military_command" id="ability-score">
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
              <select name="heroism" id="ability-score">
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
              <select name="intrigue" id="ability-score">
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
              <select name="magic" id="ability-score">
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