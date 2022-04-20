const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Send all users (only admin)')
})

router.get('/p/:userId', (req, res) => {
  const { userId } = req.params
  res.send(`Send user with id ${userId}`)
})

// Ya tengo GET
// Falta POST, PATCH, DELETE

module.exports = router
