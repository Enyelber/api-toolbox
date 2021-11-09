require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

// ? Routes
app.get('/', (request, response) => {
  response.send('API TOOLBOX!')
})

const PORT = process.env.PORT || 3001
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Listening to port:  ${PORT}`)
})

module.exports = { app, server }
