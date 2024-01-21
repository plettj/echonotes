const express = require('express')
const {
  getMessages,
  getMessage,
  createMessage
} = require('../controllers/messageController')

const router = express.Router()

// Get all messages
router.get('/', getMessages)

// Get a single message
router.get('/:id', getMessage)

// Post a new message
router.post('/', createMessage)

// Delete a message
router.delete('/:id', (req, res) => {
  res.json({ message: 'DELETE a message' })
})

// Edit a message
router.patch('/:id', (req, res) => {
  res.json({ message: 'PATCH a message' })
})

module.exports = router;
