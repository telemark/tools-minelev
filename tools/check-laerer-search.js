(async () => {
  const lookupBuddy = require('../lib/lookup-buddy')
  const { BUDDY_SERVICE_URL, USERNAME_TEACHER, SEARCH_PHRASE } = require('../config')
  const url = `${BUDDY_SERVICE_URL}/students?name=${SEARCH_PHRASE}`
  const query = {
    url: url,
    data: '',
    userId: USERNAME_TEACHER
  }
  const data = await lookupBuddy(query)

  console.log(JSON.stringify(data, null, 2))
})()
