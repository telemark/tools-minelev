(async () => {
  const { Parser } = require('json2csv')
  const { writeFile } = require('fs').promises
  const students = require('../data/students-missing-contactteachers.json')
  const fields = ['skole', 'klasse', 'brukernavn', 'elev']
  const data = students.map(student => {
    const [skole, klasse] = student.mainGroupName.split(':')
    return {
      skole,
      klasse,
      brukernavn: student.username,
      elev: student.name
    }
  })
  const json2csvParser = new Parser({ fields })
  const csv = json2csvParser.parse(data)
  await writeFile('data/students-missing-contactteachers.csv', csv, 'utf-8')
  console.log('finished')
})()
