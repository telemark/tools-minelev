const axios = require('axios')
const { BUDDY_JWT_SECRET } = require('../config')
const generateToken = require('./generate-system-jwt')

module.exports = async query => {
  const settings = { secret: BUDDY_JWT_SECRET }
  if (query.userId) {
    settings.userId = query.userId
  }
  const token = generateToken(settings)
  axios.defaults.headers.common.Authorization = token
  const { data } = await axios(query.url, query.data)
  return data
}
