const Router = require('express').Router()

Router.get('/', (req, res) => res.json({ message: 'Get all galleryImages' }))
Router.get('/:id', (req, res) => res.json({ message: 'Get single galleryImage' }))
Router.post('/', (req, res) => res.json({ message: 'Store galleryImage' }))
Router.put('/:id', (req, res) => res.json({ message: 'Update galleryImage' }))
Router.delete('/:id', (req, res) => res.json({ message: 'Delete galleryImage' }))

module.exports = Router
