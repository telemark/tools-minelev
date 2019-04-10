(async () => {
  const lookupBuddy = require('../lib/lookup-buddy')
  const { USERNAME_STUDENT, USERNAME_TEACHER, BUDDY_SERVICE_URL } = require('../config')
  const url = `${BUDDY_SERVICE_URL}/students/${USERNAME_STUDENT}`
  const query = {
    url: url,
    data: '',
    userId: USERNAME_TEACHER
  }
  const data = await lookupBuddy(query)

  console.log(JSON.stringify(data, null, 2))
})()
