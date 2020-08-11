import config from '../config'
import TokenService from '../services/TokenService'

const PositionService = {
  getPositions(userId) {
    return fetch(`${config.API_ENDPOINT}/positions/${userId}`, {
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

  postPosition(userId, gameNumber, nation) {
    return fetch(`${config.API_ENDPOINT}/positions/${userId}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        user_id: userId,
        game_number: gameNumber,
        nation: nation,
      })
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

}

export default PositionService