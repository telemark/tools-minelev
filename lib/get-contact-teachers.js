const axios = require('axios')
const generateToken = require('./generate-token')
const logger = require('./logger')

module.exports = async username => {
  const token = generateToken(process.env.LOGGED_IN_USER)
  const url = `${process.env.TJOMMI_SERVICE_URL}/students/${username}/contactteachers`
  axios.defaults.headers.common.Authorization = token
  logger('info', ['lib', 'get-contact-teachers', 'username', username, 'start'])
  try {
    const { data } = await axios.get(url)
    logger('info', ['lib', 'get-contact-teachers', 'username', username, 'got', data.length, 'success'])
    return data
  } catch (error) {
    logger('erro', ['lib', 'get-contact-teachers', 'username', username, error])
    throw error
  }
}
