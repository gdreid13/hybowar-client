import config from '../config'
import TokenService from '../services/TokenService'

const CharacterService = {
  getCharacters(userId, positionId) {
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

  postCharacter(
    userId,
    positionId,
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
  ) {
    return fetch(`${config.API_ENDPOINT}/characters/${userId}/${positionId}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        character_name: character_name,
        character_id: character_id,
        status: status,
        age: age,
        location: location,
        personal_combat: personal_combat,
        diplomacy: diplomacy,
        rulership: rulership,
        military_command: military_command,
        heroism: heroism,
        intrigue: intrigue,
        magic: magic,
        position_id: positionId,
        user_id: userId
      })
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default CharacterService