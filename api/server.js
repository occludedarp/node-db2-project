const express = require('express')

const CarsRouter = require('../cars/car-router.js');

const server = express();

server.use(express.json());
// serve.use('api/cars', CarsRouter);

server.get('/', (req, res) => {
  res.status(200).json({"api": "up"})
})

module.exports = server;