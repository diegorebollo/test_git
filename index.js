const express = require('express')
const app = express()
const port = 5302

app.get('/', (req, res) => {
  res.send('00000000000000000000000')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


