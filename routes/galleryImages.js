const Router = require('express').Router()
const multer = require('multer')
const mongoose = require('mongoose')
const GalleryImage = require('../modules/GalleryImage')
const fs = require('fs')

// Handle file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/gallery/')
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
    const galleryImages = await GalleryImage.find()
    res.json({ images: galleryImages })
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.post('/', upload.single('image'), async (req, res) => {
  const galleryImage = new GalleryImage({
    _id: mongoose.Types.ObjectId(),
    image: req.file.path,
    location: req.body.location,
  })
  console.log(galleryImage)
  try {
    const savedImage = await galleryImage.save()
    res.json({ message: 'created', savedImage })
  } catch (error) {
    res.status(500).json({ error })
  }
})

// UPDATE A GALLERY IMAGE
Router.put('/:id', upload.single('image'), (req, res) => {
  try {
    GalleryImage.findByIdAndUpdate(
      req.params.id,
      { ...req.body, ...req.file.path },
      { new: true },
      (error, message) => {
        if (error) return res.status(500).json({ error })
        res.json({ message })
      }
    )
  } catch (error) {
    res.status(500).json({ error })
  }
})

// DELETE GALLERY IMAGE
Router.delete('/:id', (req, res) => {
  GalleryImage.findByIdAndRemove(req.params.id, (error, result) => {
    if (!result) return res.status(404).json({ message: 'not found' })
    res.json({ message: 'deleted' })
  })
})

module.exports = Router
