import React, { Component } from 'react'
import PositionService from '../services/PositionService'
import PositionContext from '../components/contexts/PositionContext'
import ValidationError from '../components/ValidationError/ValidationError'
import './forms.css'

export default class PositionEntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      game_number: {
        value: '',
        touch: false
      }
    }
  }

  static contextType = PositionContext

  static defaultProps = {
    onPositionEntrySuccess: () => {}
  }

  setPositions = positions => {
    return this.setState({ positions: [...positions] })
  }

  componentDidMount() {
    PositionService.getPositions(this.props.userId)
      .then(data => {
        this.setPositions(data)
      })
      .catch(this.setState.error)
  }

  validatePosition(game_number = '') {
    for (let i = 0; i < this.state.positions.length; i++) {
      if (game_number == this.state.positions[i].game_number) {
        return `Can't have more than one nation in a game`;
      }
    }
    return null;
  }

  handleSubmitPosition = ev => {
    ev.preventDefault()
    const { game_number, nation } = ev.target
    const newPosition = {
      game_number: game_number.value,
      nation: nation.value,
      user_id: this.props.userId
    }
    this.setState({ error: null })
    PositionService.postPosition(
      newPosition.user_id,
      newPosition.game_number,
      newPosition.nation)
      .then(position => {
        game_number.value = ''
        this.props.onPositionEntrySuccess(
          position.user_id, position.id
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
    const { error, game_number } = this.state
    const posError = (!game_number.value)
      ? false
      : this.validatePosition(game_number.value);
    return (
      <section className='position-entry-page'>
        <header>
          <h3>Enter a position</h3>
        </header>
        <div role='alert'>
        {error && <p className='red'>{error}</p>}
        </div>
        <form
          className='position-entry-form'
          id='position-entry'
          onSubmit={this.handleSubmitPosition}
        >
          <div>
            <label htmlFor='game_number'>Game number</label>
            <input
              required
              name='game_number'
              id='game_number'
              onChange={this.onChange}
            />
          </div>
          <div>
            <label htmlFor='nation'>Nation</label>
            <select name="nation" id="nation">
              <option value="Aquilonia">Aquilonia</option>
              <option value="Amazonia">Amazonia</option>
              <option value="Argos">Argos</option>
              <option value="Asgard">Asgard</option>
              <option value="Border Kingdom">Border Kingdom</option>
              <option value="Brythunia">Brythunia</option>
              <option value="Cimmeria">Cimmeria</option>
              <option value="Corinthia">Corinthia</option>
              <option value="Darfar">Darfar</option>
              <option value="Hyperborea">Hyperborea</option>
              <option value="Hyrkania">Hyrkania</option>
              <option value="Iranistan">Iranistan</option>
              <option value="Juma's Kingdom">Juma's Kingdom</option>
              <option value="Kambulja">Kambulja</option>
              <option value="Keshan">Keshan</option>
              <option value="Khauran">Khauran</option>
              <option value="Khitai">Khitai</option>
              <option value="Khoraja">Khoraja</option>
              <option value="Kosala">Kosala</option>
              <option value="Koth">Koth</option>
              <option value="Kusan">Kusan</option>
              <option value="Kush">Kush</option>
              <option value="Nemedia">Nemedia</option>
              <option value="Ophir">Ophir</option>
              <option value="Pictland">Pictland</option>
              <option value="Punt">Punt</option>
              <option value="Shem">Shem</option>
              <option value="Stygia">Stygia</option>
              <option value="Tombalku">Tombalku</option>
              <option value="Turan">Turan</option>
              <option value="Uttara Kuru">Uttara Kuru</option>
              <option value="Vanaheim">Vanaheim</option>
              <option value="Vendhya">Vendhya</option>
              <option value="Zamora">Zamora</option>
              <option value="Zembabwei">Zembabwei</option>
              <option value="Zingara">Zingara</option>
            </select>
          </div>
          {game_number.touch && <ValidationError message={posError} />}
          {!posError && <button type='submit'>Submit</button>}       
        </form>
      </section>
    )
  }
}