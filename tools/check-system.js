(async () => {
  const getAllTeachers = require('../lib/get-all-teachers.js')
  const lookupBuddy = require('../lib/lookup-buddy')
  const randomEntry = require('../lib/random-entry')
  const { BUDDY_SERVICE_URL } = require('../config')
  const teachers = await getAllTeachers()
  const errors = []
  let counter = 0
  console.log(`Got ${teachers.length} teachers`)

  const next = async () => {
    if (teachers.length > 0) {
      const teacher = teachers.pop()
      console.log(`Checking ${teacher}`)
      const contactClassesUrl = `${BUDDY_SERVICE_URL}/teachers/${teacher}/contactclasses`
      const contactClassesQuery = {
        url: contactClassesUrl,
        data: ''
      }
      const contactClasses = await lookupBuddy(contactClassesQuery)
      console.log(`Got ${contactClasses.length} classes`)
      if (contactClasses.length > 0) {
        counter++
        const selectedClass = randomEntry(contactClasses).Id
        console.log(`Retrieve students for ${selectedClass}`)
        const studentsUrl = `${BUDDY_SERVICE_URL}/classes/${selectedClass}/students`
        const studentsQuery = {
          url: studentsUrl,
          data: ''
        }
        const students = await lookupBuddy(studentsQuery)
        console.log(`Got ${students.length} students`)
        if (students.length > 0) {
          const student = randomEntry(students).userName
          console.log(`Checking connection ${teacher} - ${student}`)
          const url = `${BUDDY_SERVICE_URL}/students/${student}`
          const query = {
            url: url,
            data: '',
            userId: teacher
          }
          const data = await lookupBuddy(query)
          if (Array.isArray(data)) {
            console.log(`Connection ${teacher} - ${student} OK`)
          } else {
            console.log(`ERROR ${teacher} - ${student} - No connection`)
            errors.push(`${teacher} - ${selectedClass} - ${student}`)
          }
        } else {
          console.log(`${selectedClass} got 0 students`)
        }
      } else {
        console.log(`${teacher} got 0 contact classes`)
      }
      await next()
    } else {
      console.log('Finished checking')
      console.log(`Checked ${counter} contact teachers`)
      console.log(`Got ${errors.length} ERRORS`)
      console.log(errors.join('\n'))
    }
  }
  await next()
})()
