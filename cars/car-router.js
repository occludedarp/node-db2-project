const express = require('express');

const db = require('../data/connection.js');

const router = express.Router();

router.get('/', (req, res) => {
  db('cars')
  .then( cars => {
    res.json(cars);
  })
  .catch( error => {
    res.status(500).json({"message": "error retrieving cars"})
  })
})