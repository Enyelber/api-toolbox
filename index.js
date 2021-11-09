require('dotenv').config()
const { reverseText } = require('./utils/custom')

const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

// ? Routes
app.get('/', (request, response) => {
  response.send('API TOOLBOX!')
})

// ? Enviar un Texto y Recibirlo al reves
app.get('/iecho', (request, response) => {
  const text = request.query.text

  if (text) {
    resp = {
      codigo: 200,
      text: reverseText(text),
    }
    return response.json(resp)
  } else {
    resp = {
      codigo: 400,
      error: 'no text',
    }
    return response.json(resp)
    //response.status(400).end()
  }
})

const PORT = process.env.PORT || 3001
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Listening to port:  ${PORT}`)
})

module.exports = { app, server }
