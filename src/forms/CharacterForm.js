import React, { Component } from 'react';
import CharacterContext from '../components/contexts/CharacterContext';
import CharacterService from '../services/CharacterService'
import ValidationError from '../components/ValidationError/ValidationError'
import './forms.css'

export default class CharacterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      character_id: {
        value: '',
        touch: false
      }
    }
  }

  static contextType = CharacterContext

  static defaultProps = {
    onCharacterEntrySuccess: () => {}
  }

  setCharacters = characters => {
    return this.setState({ characters: [...characters] })
  }

  componentDidMount() {
    CharacterService.getCharacters(
      this.props.location.state.userId,
      this.props.location.state.positionId)
      .then(data => {
        this.setCharacters(data)
      })
      .catch(this.setState.error)
  }

  validateCharacter(character_id = '') {
    for (let i = 0; i < this.state.characters.length; i++) {
      if (character_id == this.state.characters[i].character_id) {
        return `Can't have two characters with the same ID`;
      }
    }
    return null;
  }

  handleSubmitCharacter = ev => {
    ev.preventDefault()
    const {
      character_name,
      character_id,
      age,
      location,
      personal_combat,
      diplomacy,
      rulership,
      military_command,
      heroism,
      intrigue,
      magic,
    } = ev.target;
    const newCharacter = {
      character_name: character_name.value,
      character_id: character_id.value,
      status: "alive",
      age: age.value,
      location: location.value,
      personal_combat: personal_combat.value,
      diplomacy: diplomacy.value,
      rulership: rulership.value,
      military_command: military_command.value,
      heroism: heroism.value,
      intrigue: intrigue.value,
      magic: magic.value,
      position_id: this.props.match.params.positionId,
    }
    this.setState({ error: null })
    CharacterService.postCharacter(
      newCharacter,
      this.props.match.params.userId,
      this.props.match.params.positionId
    )
      .then(character => {
        character_id.value = ''
        this.props.onCharacterEntrySuccess(
          this.props.location.state.userId
        )
      })
      .catch(res => {
        this.setState({ error: res.error })
        alert(JSON.stringify(this.state.error))
      })
  }

  onChange = e => {
    const key = e.target.name;
    const newValue = e.target.value;
    this.setState({ [key]: { value: newValue, touch: true } });
  };

  render() {
    const { error, character_id } = this.state
    const charError = (!character_id.value)
      ? false
      : this.validateCharacter(character_id.value);

    return (
      <div className="Character-form">
        <div>
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
              <input
                name="character_id"
                placeholder="AQUI-999"
                required
                onChange={this.onChange} />
            </div>
            <div className="form-section">
              <label htmlFor="age">Character age:</label>
              <select name="age" id="age">
                <option value="youth">youth</option>
                <option value="young adult">young adult</option>
                <option value="prime of life">prime of life</option>
                <option value="middle-aged">middle aged</option>
                <option value="old">old</option>
                <option value="ancient">ancient</option>
              </select>
            </div>
            <div className="form-section">
              <label htmlFor="location">Present location:</label>
              <input type="text" name="location" placeholder="Tarantia" required />
            </div>
            <div className="form-section">
              <label htmlFor="personal-combat">Personal combat:</label>
              <select name="personal_combat" id="ability-score">
                <option value="NONE">NONE</option>
                <option value="POOR">POOR</option>
                <option value="ADEQUATE">ADEQUATE</option>
                <option value="GOOD">GOOD</option>
                <option value="EXCELLENT">EXCELLENT</option>
                <option value="SUPERIOR">SUPERIOR</option>
              </select>
            </div>
            <div className="form-section">
              <label htmlFor="diplomacy">Diplomacy:</label>
              <select name="diplomacy" id="ability-score">
                <option value="NONE">NONE</option>
                <option value="POOR">POOR</option>
                <option value="ADEQUATE">ADEQUATE</option>
                <option value="GOOD">GOOD</option>
                <option value="EXCELLENT">EXCELLENT</option>
                <option value="SUPERIOR">SUPERIOR</option>
              </select>
            </div>
            <div className="form-section">
              <label htmlFor="rulership">Rulership:</label>
              <select name="rulership" id="ability-score">
                <option value="NONE">NONE</option>
                <option value="POOR">POOR</option>
                <option value="ADEQUATE">ADEQUATE</option>
                <option value="GOOD">GOOD</option>
                <option value="EXCELLENT">EXCELLENT</option>
                <option value="SUPERIOR">SUPERIOR</option>
              </select>
            </div>
            <div className="form-section">
              <label htmlFor="military-command">Military command:</label>
              <select name="military_command" id="ability-score">
                <option value="NONE">NONE</option>
                <option value="POOR">POOR</option>
                <option value="ADEQUATE">ADEQUATE</option>
                <option value="GOOD">GOOD</option>
                <option value="EXCELLENT">EXCELLENT</option>
                <option value="SUPERIOR">SUPERIOR</option>
              </select>
            </div>
            <div className="form-section">
              <label htmlFor="heroism">Heroism:</label>
              <select name="heroism" id="ability-score">
                <option value="NONE">NONE</option>
                <option value="POOR">POOR</option>
                <option value="ADEQUATE">ADEQUATE</option>
                <option value="GOOD">GOOD</option>
                <option value="EXCELLENT">EXCELLENT</option>
                <option value="SUPERIOR">SUPERIOR</option>
              </select>
            </div>
            <div className="form-section">
              <label htmlFor="intrigue">Intrigue:</label>
              <select name="intrigue" id="ability-score">
                <option value="NONE">NONE</option>
                <option value="POOR">POOR</option>
                <option value="ADEQUATE">ADEQUATE</option>
                <option value="GOOD">GOOD</option>
                <option value="EXCELLENT">EXCELLENT</option>
                <option value="SUPERIOR">SUPERIOR</option>
              </select>
            </div>
            <div className="form-section">
              <label htmlFor="magic">Magic:</label>
              <select name="magic" id="ability-score">
                <option value="NONE">NONE</option>
                <option value="POOR">POOR</option>
                <option value="ADEQUATE">ADEQUATE</option>
                <option value="GOOD">GOOD</option>
                <option value="EXCELLENT">EXCELLENT</option>
                <option value="SUPERIOR">SUPERIOR</option>
              </select>
            </div>
            {character_id.touch && <ValidationError message={charError} />}
            {!charError && <button type='submit'>Submit</button>}
          </form>
        </div>
      </div>
    )
  }
}