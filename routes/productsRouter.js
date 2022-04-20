const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Send the products')
})

//route for browsing products with .filter() method
router.get('/filter', (req, res) => {
  res.send('This will be a input with a search')
})

router.get('/:productId', (req, res) => {
  res.send('Send product with id')
})

// Ya tengo GET
// Falta POST, PATCH, DELETE

module.exports = router
