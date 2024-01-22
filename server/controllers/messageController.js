const mongoose = require('mongoose')
const Message = require('../models/messageModel')

// Get all messages
const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 })
    res.status(200).json(messages)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Get a single message
const getMessage = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid message ID: ' + id })
  }

  try {
    const message = await Message.findById(id)

    if (!message) {
      return res.status(404).json({ message: 'Could not find message by ID: ' + id })
    }

    res.status(200).json(message)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Create a new message
const createMessage = async (req, res) => {
  const {user, thread, content, reactions} = req.body

  try {
    const message = await Message.create({
      user,
      thread,
      content,
      reactions
    })
    res.status(200).json(message)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Delete a message
const deleteMessage = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid message ID: ' + id })
  }

  try {
    const message = await Message.findOneAndDelete({ _id: id })

    if (!message) {
      return res.status(404).json({ message: 'Could not find message for delete by ID: ' + id })
    }

    res.status(200).json(message)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Edit a message
const editMessage = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid message ID: ' + id })
  }

  try {
    const message = await Message.findOneAndUpdate({ _id: id }, {
      ...req.body
    })

    if (!message) {
      return res.status(404).json({ message: 'Could not find message for edit by ID: ' + id })
    }
    
    res.status(200).json(message)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

module.exports = {
  getMessages,
  getMessage,
  createMessage,
  deleteMessage,
  editMessage
}