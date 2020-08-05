import config from '../config'

const CharacterService = {
  getCharacters() {
    return fetch(`${config.API_ENDPOINT}/characters/:userId/:positionId`, {
      headers: {

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