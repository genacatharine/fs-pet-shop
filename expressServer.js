'use strict'
var express = require('express');
var path = require('path');
var app = express();
let fs = require('fs')
let port = process.env.PORT || 8000
var petsPath=path.join(__dirname, 'pets.json')

app.get('/pets', function(req, res){
  fs.readFile(petsPath, 'utf8', function(err, data){
    if (err) {
      throw err
    }
    var pets= JSON.parse(data)
    res.send(pets)

  })
})

app.get('/pets/:id', function(req, res) {
  fs.readFile(petsPath, 'utf8', function(err, data) {
    if (err) {
      throw err
    }
    var id = Number.parseInt(req.params.id);
    var pets = JSON.parse(data);

    if (id < 0 || id >= pets.length || Number.isNaN(id)) {
      return res.sendStatus(404);
    }
    res.set('Content-Type', 'application/json')
    res.send(pets[id])

  })
})
app.use(function(req, res) {
  res.sendStatus = 404
  // res.setHeader('Content-Type', 'text/plain')
  // res.send('Not Found')
})

app.listen(port, function() {
  console.log('Listening on port', port)
})
module.exports = app
