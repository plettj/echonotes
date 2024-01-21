require('dotenv').config()

const express = require('express')

// Express app
const app = express()

// TEMPORARY middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Echo Notes!'})
})

// Listen for requests
app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT)
})