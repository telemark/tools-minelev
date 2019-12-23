(async () => {
  const students = require('../data/students-missing-contactteachers.json')
  const stats = students.reduce((accumulator, current) => {
    const { mainGroupName } = current
    const [school] = mainGroupName.split(':')
    if (!accumulator[school]) {
      accumulator[school] = 0
    }
    if (!accumulator[mainGroupName]) {
      accumulator[mainGroupName] = 0
    }
    accumulator[school] += 1
    accumulator[mainGroupName] += 1
    return accumulator
  }, {})
  console.log(JSON.stringify(stats, null, 2))
})()
