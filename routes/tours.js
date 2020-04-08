const Router = require('express').Router()
const mongoose = require('mongoose')
const Tour = require('../modules/Tour')
const multer = require('multer')

// Handle file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/')
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

const upload = multer({ storage })

// GET ALL TOURS
Router.get('/', async (req, res) => {
  try {
    const tours = await Tour.find()
    res.json({ tours })
  } catch (error) {
    res.status(500).json({ error })
  }
})

//GET SINGLE TOUR
Router.get('/:id', async (req, res) => {
  try {
    // const tour = await Tour.find({ _id: req.params.id })
    const tour = await Tour.findById(req.params.id)
    res.json({ tour })
  } catch (error) {
    res.status(500).json({ error })
  }
})

// STORE TOUR
Router.post('/', upload.array('images', 10), async (req, res, next) => {
  let images = []
  req.files.map((file) => {
    images.push(file.path)
  })
  const tour = new Tour({
    _id: mongoose.Types.ObjectId(),
    country: req.body.country,
    price: req.body.price,
    duration: req.body.duration,
    cities: req.body.cities,
    mainImage: req.files[req.body.mainImage].path,
    description: req.body.description,
    tourTitle: req.body.tourTitle,
    tourSubtitle: req.body.tourSubtitle,
    dateStart: req.body.dateStart,
    dateEnd: req.body.dateEnd,
    numberPlaces: req.body.numberPlaces,
    placesAvailable: req.body.placesAvailable,
    program: req.body.program,
    images,
  })
  try {
    const savedTour = await tour.save()
    res.json({ message: 'Tour created', tour: savedTour })
  } catch (error) {
    res.status(500).json({ error })
  }
})

// UPDATE TOUR

Router.put('/:id', (req, res) => {
  try {
    Tour.findByIdAndUpdate(
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

// DELETE TOUR
Router.delete('/:id', (req, res) => {
  Tour.findByIdAndRemove(req.params.id, (error, result) => {
    if (!result) return res.status(404).json({ message: 'not found' })
    res.json({ message: 'deleted' })
  })
})

module.exports = Router
