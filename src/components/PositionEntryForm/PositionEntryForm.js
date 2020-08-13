import React, { Component } from 'react'
import config from '../../config'
import TokenService from '../../services/TokenService'
import AuthHelperService from '../../services/AuthHelperService'
import PositionService from '../../services/PositionService'

export default class PositionEntryForm extends Component {

  static defaultProps = {
    onLoginSuccess: () => {}
  }

  handleSubmitPosition = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { game_number, nation } = ev.target
    const newPosition = {
      game_number: game_number.value,
      nation: nation.value,
      user_id: this.props.user_id
    }
    
    PositionService.postPosition(JSON.stringify(newPosition))
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
        <section className='position-entry-page'>
          <header>
            <h3>Enter a position</h3>
          </header>
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
            <button type='submit'>Submit</button>
          </form>        
        </section>
    )
  }
}