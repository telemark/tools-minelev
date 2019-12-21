(async () => {
  require('dotenv').config()
  const { writeFile } = require('fs').promises
  const mongo = require('../lib/mongo')
  const logger = require('../lib/logger')
  const db = await mongo()
  const tjommi = db.collection(process.env.MONGODB_COLLECTION_TJOMMI)
  const query = {
    type: 'student'
  }
  logger('info', ['reports', 'students-get-all', 'start'])
  try {
    const students = await tjommi.find(query).toArray()
    logger('info', ['reports', 'students-get-all', 'got', students.length, 'students'])
    const data = students.map(student => Object.assign({ username: student.username, mainGroupName: student.mainGroupName }))
    await writeFile('data/all-students.json', JSON.stringify(data, null, 2), 'utf-8')
    logger('info', ['reports', 'students-get-all', 'finished'])
  } catch (error) {
    logger('error', ['reports', 'students-get-all', error])
  }
  process.exit(0)
})()
