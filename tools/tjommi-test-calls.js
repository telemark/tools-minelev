(async () => {
  require('dotenv').config()

  const axios = require('axios')
  const generateToken = require('./generate-token')
  const token = generateToken(process.env.LOGGED_IN_USER)
  axios.defaults.headers.common.Authorization = token
  // const url = '{process.env.TJOMMI_SERVICE_URL}/students?name={name}'
  // const url = '{process.env.TJOMMI_SERVICE_URL}/students/{id}'
  // const url = '{process.env.TJOMMI_SERVICE_URL}/students/{id}/contactteachers'
  // const url = '{process.env.TJOMMI_SERVICE_URL}/teachers'
  // const url = '{process.env.TJOMMI_SERVICE_URL}/teachers/{id}'
  // const url = '{process.env.TJOMMI_SERVICE_URL}/teachers/{id}/contactclasses'
  // const url = '{process.env.TJOMMI_SERVICE_URL}/classes'
  // const url = '{process.env.TJOMMI_SERVICE_URL}/classes/{id}'
  // const url = '{process.env.TJOMMI_SERVICE_URL}/classes/{id}/students'
  // const url = '{process.env.TJOMMI_SERVICE_URL}/classes/{id}/teachers'
  const url = '{process.env.TJOMMI_SERVICE_URL}/schools'
  // const url = '{process.env.TJOMMI_SERVICE_URL}/schools/{id}'
  // const url = '{process.env.TJOMMI_SERVICE_URL}/schools/{id}/teachers'
  // const url = '{process.env.TJOMMI_SERVICE_URL}/schools/{id}/students'

  try {
    const { data } = await axios.get(url)
    console.log(JSON.stringify(data, null, 2))
  } catch (error) {
    console.error(error)
  }
})()
