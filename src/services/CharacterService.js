import config from '../config'
import TokenService from '../services/TokenService'

const CharacterService = {
  getCharacters() {
    return fetch(`${config.API_ENDPOINT}/characters/:userId/:positionId`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
        )
  },
}

export default CharacterService