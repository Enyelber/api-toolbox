let chai = require('chai')
let chaiHttp = require('chai-http')
const expect = require('chai').expect

chai.use(chaiHttp)
const url = 'http://localhost:3001'

describe('Get the text that is entered from the path: ', () => {
  it('should get "arbalap"', (done) => {
    chai
      .request(url)
      .get('/iecho?text=palabra')
      .end(function (err, res) {
        console.log(res.body)
        expect(res.body).to.have.property('text').to.be.equal('arbalap')
        expect(res).to.have.status(200)
        done()
      })
  })
})

describe('send an empty string : ', () => {
  it('should receive an error', (done) => {
    chai
      .request(url)
      .post('iecho?text=')
      .send({ text: '' })
      .end(function (err, res) {
        console.log(res.body)
        expect(res).to.have.status(404)
        done()
      })
  })
})
