import config from '../config'
import TokenService from '../services/TokenService'

const CharacterService = {
  getCharacters(userId, positionId) {
    console.log("userId: " + userId, " positionId: " + positionId)
    return fetch(`${config.API_ENDPOINT}/characters/${userId}/${positionId}`, {
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

  postCharacter(newCharacter, userId, positionId) {
    return fetch(`${config.API_ENDPOINT}/characters/${userId}/${positionId}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({ newCharacter })
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default CharacterService