const Router = require('express').Router()
const mongoose = require('mongoose')
const CustomerSaying = require('../modules/CustomerSaying')

// Handle file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/customerSayings/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '_' + file.originalname)
  },
})
// FILE FILTER
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/png'
  ) {
    cb(null, true)
  } else cb(null, false)
}
const upload = multer({ storage, fileFilter })

Router.get('/', async (req, res) => {
  try {
    const docs = await CustomerSaying.find()
    res.json({ customerSaying: docs })
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.post('/', upload.single('image'), async (req, res) => {
  const cutomerSaying = new GalleryImage({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    image: req.file.path,
    content: req.body.content,
  })
  try {
    const cs = await customerSaying.save()
    res.json({ message: 'created', customerSaying: cs })
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.put('/:id', (req, res) => {
  try {
    CustomerSaying.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, message) => {
      if (error) return res.status(500).json({ error })
      res.json({ customerSaying: message })
    })
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.delete('/:id', (req, res) => {
  CustomerSaying.findByIdAndRemove(req.params.id, (error, result) => {
    if (!result) return res.status(404).json({ message: 'not found' })
    res.json({ message: 'deleted' })
  })
})

module.exports = Router
