require('dotenv').config()
const path = require('path')
const express = require('express')
const colors = require('colors')
const connectDB = require('./config/db')

const port = process.env.PORT || 5000

// Connect Database
connectDB()

const app = express()
app.use(express.json())

// // Define Routes
app.use('/api/contacts', require('./routes/contactRoutes'))

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('Server is running...')
  })
}

app.listen(port, () =>
  console.log(`Server is running on port ${port}`.yellow.bold)
)
