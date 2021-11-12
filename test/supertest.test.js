const request = require('supertest')
const app = require('../index')
const express = require('express')

const api = express()

describe('Send word and get result palindrome', function () {
  it('responds with json', function (done) {
    request(app)
      .get('http://localhost:3001/iecho?text=asa')
      .set('Accept', 'application/json')
      .expect(200, done)
  })
})
