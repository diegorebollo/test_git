const express = require('express')
const app = express()
const port = 5302

app.get('/', (req, res) => {
  res.send('Holaaaaaaaaaaaaaaa')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


