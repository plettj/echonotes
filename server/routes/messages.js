const express = require('express')
const Message = require('../models/messageModel')

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
router.post('/', async (req, res) => {
  const {profile, thread, content, reactions} = req.body

  try {
    const message = await Message.create({
      profile,
      thread,
      content,
      reactions
    })
    res.status(200).json(message)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
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
