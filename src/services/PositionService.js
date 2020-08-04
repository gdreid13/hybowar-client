import config from '../config'

const PositionService = {
  getPositions() {
    return fetch(`${config.API_ENDPOINT}/positions/:userId`, {
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

export default PositionService