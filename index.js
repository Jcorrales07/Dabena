const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Home Page')
})


app.listen(port, () => {
  console.log(`This server is listen in localhost:${port}`)
})