const Router = require('express').Router()

Router.get('/', (req, res) => res.json({ message: 'Get all customerSyaings' }))
Router.get('/:id', (req, res) => res.json({ message: 'Get single customerSyaing' }))
Router.post('/', (req, res) => res.json({ message: 'Store customerSyaing' }))
Router.put('/:id', (req, res) => res.json({ message: 'Update customerSyaing' }))
Router.delete('/:id', (req, res) => res.json({ message: 'Delete customerSyaing' }))

module.exports = Router
