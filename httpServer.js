'use strict'
let http = require('http')
let fs = require('fs')
let port = process.env.PORT || 8000

let server = http.createServer(function(req, res) {
  if (req.method === 'GET' && req.url === '/pets') {
    fs.readFile('./pets.json', 'utf8', function(err, data) {
      if (err) {
        throw err
      }

      var pets = JSON.parse(data)
      var petJSON = JSON.stringify(pets)

      res.setHeader('Content-Type', 'application/json')
      res.statusCode = 200
      res.end(petJSON)

    })
  } else if (req.method === 'GET' && req.url === '/pets/0') {
    fs.readFile('./pets.json', 'utf8', function(err, data) {
      if (err) {
        throw err
      }
      var pets = JSON.parse(data)
      var petJSON = JSON.stringify(pets[0])

      res.setHeader('Content-Type', 'application/json')
      res.statusCode = 200
      res.end(petJSON)

    })
  } else if (req.method === 'GET' && req.url === '/pets/1') {
    fs.readFile('./pets.json', 'utf8', function(err, data) {
      if (err) {
        throw err
      }

      var pets = JSON.parse(data)
      var petJSON = JSON.stringify(pets[1])

      res.setHeader('Content-Type', 'application/json')
      res.statusCode = 200
      res.end(petJSON)

    })
  } else {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/plain')
    res.end('Not Found')
  }
})
server.listen(port, function() {
  console.log('Listening on port', port)
})

module.exports = server
