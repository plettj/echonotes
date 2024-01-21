const express = require('express')

const router = express.Router()

// Get all messages
router.get('/', (req, res) => {
  res.json({ message: 'GET all messages' })
})

// Get a single message
router.get('/:id', (req, res) => {
  res.json({ message: 'GET a single message' })
})

// Post a new message
router.post('/', (req, res) => {
  res.json({ message: 'POST a new message' })
})

// Delete a message
router.delete('/:id', (req, res) => {
  res.json({ message: 'DELETE a message' })
})

// Edit a message
router.patch('/:id', (req, res) => {
  res.json({ message: 'PATCH a message' })
})

module.exports = router;
