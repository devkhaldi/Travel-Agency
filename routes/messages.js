const Router = require('express').Router()
const mongoose = require('mongoose')
const Message = require('../modules/Message')

Router.get('/', async (req, res) => {
  try {
    const messages = await Message.find()
    res.json({ messages })
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.post('/', async (req, res) => {
  const message = new Message({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    content: req.body.content,
  })
  try {
    const doc = await message.save()
    res.json({ message: doc })
  } catch (error) {
    res.status(500).json({ error })
  }
})
Router.put('/:id', (req, res) => {
  try {
    Message.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, message) => {
      if (error) res.status(500).json({ error })
      res.json({ message })
    })
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.delete('/:id', (req, res) => {
  Message.findByIdAndRemove(req.params.id, (error, result) => {
    if (!result) return res.status(404).json({ message: 'not found' })
    res.json({ message: 'deleted' })
  })
})

module.exports = Router
