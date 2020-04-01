const Router = require('express').Router()

Router.get('/', (req, res) => res.json({ message: 'Get all messages' }))
Router.get('/:id', (req, res) => res.json({ message: 'Get single message' }))
Router.post('/', (req, res) => res.json({ message: 'Store message' }))
Router.put('/:id', (req, res) => res.json({ message: 'Update message' }))
Router.delete('/:id', (req, res) => res.json({ message: 'Delete message' }))

module.exports = Router
