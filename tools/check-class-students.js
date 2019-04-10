(async () => {
  const lookupBuddy = require('../lib/lookup-buddy')
  const { CLASS_ID, BUDDY_SERVICE_URL } = require('../config')
  const url = `${BUDDY_SERVICE_URL}/classes/${CLASS_ID}/students`
  const query = {
    url: url,
    data: ''
  }
  const data = await lookupBuddy(query)

  console.log(JSON.stringify(data, null, 2))
})()
