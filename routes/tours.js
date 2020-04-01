const Router = require('express').Router()
const mongoose = require('mongoose')
const Tour = require('../modules/Tour')

Router.get('/', async (req, res) => {
  Tour.find()
    .exec()
    .then(tours => {
      res.json(tours)
    })
    .catch(error => res.status(500).json({ error }))
})

module.exports = Router
