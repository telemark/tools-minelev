const axios = require('axios')
const generateToken = require('../lib/generate-ad-jwt')
const { ENCRYPTOR_SECRET, LDAP_LOOKUP_URL } = require('../config')
const encryptor = require('simple-encryptor')(ENCRYPTOR_SECRET)

module.exports = async userId => {
  const token = generateToken(userId)
  axios.defaults.headers.common.Authorization = token
  try {
    const result = await axios.get(LDAP_LOOKUP_URL)
    return encryptor.decrypt(result.data.data)
  } catch (error) {
    console.error(error)
    throw error
  }
}
