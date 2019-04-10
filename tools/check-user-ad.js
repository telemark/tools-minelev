(async () => {
  const lookukupAD = require('../lib/lookup-ad')
  const { USERNAME_TEACHER } = require('../config')
  try {
    const result = await lookukupAD(USERNAME_TEACHER)
    console.log(result)
  } catch (error) {
    console.error(error)
  }
})()
