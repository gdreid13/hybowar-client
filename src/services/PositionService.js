import config from '../config'
import TokenService from '../services/TokenService'

const PositionService = {
  getPositions() {
    return fetch(`${config.API_ENDPOINT}/positions/:userId`, {
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

export default PositionService