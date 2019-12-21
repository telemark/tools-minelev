(async () => {
  require('dotenv').config()
  const sleep = require('then-sleep')
  const { writeFile } = require('fs').promises
  const getContactTeachers = require('../lib/get-contact-teachers')
  const logger = require('../lib/logger')
  let students = []
  let missing = []
  logger('info', ['reports', 'students-get-missing-contactteacher', 'start'])
  try {
    const requiredStudents = require('../data/all-students-copy.json')
    students = requiredStudents
    logger('info', ['reports', 'students-get-missing-contactteacher', 'got required students'])
  } catch (error) {
    logger('warn', ['reports', 'students-get-missing-contactteacher', 'no required students'])
  }
  try {
    const requiredMissing = require('../data/students-missing-contactteachers.json')
    missing = requiredMissing
    logger('info', ['reports', 'students-get-missing-contactteacher', 'got required missing students'])
  } catch (error) {
    logger('warn', ['reports', 'students-get-missing-contactteacher', 'no required missing students'])
  }
  while (students.length > 0) {
    await sleep(1000)
    const student = students.pop()
    const contactteachers = await getContactTeachers(student.username)
    if (contactteachers.length === 0) {
      missing.push(student)
      logger('info', ['reports', 'students-get-missing-contactteacher', 'student', student.username, 'missing contact teachers'])
      await writeFile('data/students-missing-contactteachers.json', JSON.stringify(missing, null, 2), 'utf-8')
    }
    await writeFile('data/all-students-copy.json', JSON.stringify(students, null, 2), 'utf-8')
  }
  logger('info', ['reports', 'students-get-missing-contactteacher', 'got', missing.length, 'students without contact teachers'])
  logger('info', ['reports', 'students-get-missing-contactteacher', 'finished'])
})()
