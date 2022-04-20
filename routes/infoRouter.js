const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('First Page')
})

router.get('/home', (req, res) => {
  res.send('Home Page')
})

router.get('/blog', (req, res) => {
  res.send('Blog Page')
})

router.get('/about-us', (req, res) => {
  res.send('About us Page')
})

module.exports = router
