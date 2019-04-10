const csv = require('csvtojson')
const { DATA_DIRECTORY_PATH } = require('../config')

module.exports = async () => {
  const fileName = `${DATA_DIRECTORY_PATH}/teachers.csv`
  const data = await csv().fromFile(fileName)
  return data.map(item => item.userId)
}
