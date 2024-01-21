require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const messageRoutes = require('./routes/messages')

// Express app
const app = express()

// Middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Routes
app.use('/api/messages', messageRoutes)

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB')

    // Listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Listening on port", process.env.PORT)
    })
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB', err)
  })
