const { ENCRYPTOR_SECRET, LDAP_JWT_SECRET } = require('../config')
const jwt = require('jsonwebtoken')
const encryptor = require('simple-encryptor')(ENCRYPTOR_SECRET)

module.exports = userId => {
  const tokenOptions = {
    expiresIn: '1m',
    issuer: 'https://auth.t-fk.no'
  }
  const tokenData = {
    data: encryptor.encrypt({
      userId: userId
    })
  }

  const token = jwt.sign(tokenData, LDAP_JWT_SECRET, tokenOptions)

  return `${token}`
}
