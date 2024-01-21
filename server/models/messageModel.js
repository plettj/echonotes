const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reactionSchema = new Schema({
  emoji: String,
  count: {
    type: Number,
    default: 0
  }
})

const messageSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  thread: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  reactions: [reactionSchema]
}, {
  timestamps: true
})

module.exports = mongoose.model('Message', messageSchema)