const express = require('express')
const {
  getMessages,
  getMessage,
  createMessage,
  deleteMessage,
  editMessage
} = require('../controllers/messageController')

const router = express.Router()

// Get all messages
router.get('/', getMessages)

// Get a single message
router.get('/:id', getMessage)

// Post a new message
router.post('/', createMessage)

// Delete a message
router.delete('/:id', deleteMessage)

// Edit a message
router.patch('/:id', editMessage)

module.exports = router;
