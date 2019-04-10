(async () => {
  const lookupBuddy = require('../lib/lookup-buddy')
  const { USERNAME_STUDENT, BUDDY_SERVICE_URL } = require('../config')
  const url = `${BUDDY_SERVICE_URL}/students/${USERNAME_STUDENT}/contactteachers`
  const query = {
    url: url,
    data: ''
  }
  const data = await lookupBuddy(query)

  console.log(JSON.stringify(data, null, 2))
})()
