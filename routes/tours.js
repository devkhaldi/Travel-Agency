const Router = require('express').Router()
const mongoose = require('mongoose')
const Tour = require('../modules/Tour')
const multer = require('multer')
const http = require('http')

// Handle file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '_' + file.originalname),
})
// File Filter
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/png'
  )
    cb(null, true)
  else cb(null, false)
}

const upload = multer({ storage })

//Get all tours
Router.get('/', async (req, res) => {
  // Pagination
  const page = req.query.page || 1
  const limit = req.query.limit || 10
  const startIndex = (page - 1) * limit
  const endIndex = page * limit
  try {
    let tours = await Tour.find()
    res.json({ tours })
  } catch (error) {
    res.status(500).json({ error })
  }
})

//Filter tours
Router.post('/filter', async (req, res) => {
  const min_price = req.body.min_price || 1000
  const max_price = req.body.max_price || 10000
  const destination = req.body.destination || ''
  const categories = req.body.categories || [
    'sea',
    'romantic',
    'honeymoon',
    'country',
    'montain',
  ]
  // Pagination
  const page = req.query.page || 1
  const limit = req.query.limit || 10
  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  console.log(min_price)
  console.log(categories)

  try {
    let tours = await Tour.find({
      price: { $gt: min_price, $lt: max_price },
      category: { $all: categories },
      destination,
    })
      .skip(startIndex)
      .limit(endIndex)
    res.json({ tours })
  } catch (error) {
    res.status(500).json({ error })
  }
})

//Get single tour
Router.get('/:id', async (req, res) => {
  try {
    let tour = await Tour.findById(req.params.id)
    res.json({ tour })
  } catch (error) {
    res.status(500).json({ error })
  }
})

// Store tour
Router.post('/', upload.array('images', 10), async (req, res, next) => {
  let images = []
  req.files.map(file => {
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
    category: req.body.category,
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

// Update Tour

Router.put('/:id', (req, res) => {
  try {
    Tour.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, message) => {
      if (error) return res.status(500).json({ error })
      res.json({ message })
    })
  } catch (error) {
    res.status(500).json({ message: 'something wrong!' })
  }
})

// Delete Tour
Router.delete('/:id', (req, res) => {
  Tour.findByIdAndRemove(req.params.id, (error, result) => {
    if (!result) return res.status(404).json({ message: 'not found' })
    res.json({ message: 'deleted' })
  })
})

module.exports = Router
