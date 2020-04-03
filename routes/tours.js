const Router = require('express').Router()
const mongoose = require('mongoose')
const Tour = require('../modules/Tour')
const multer = require('multer')

// Handle file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '_' + file.originalname)
  }
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

// GET SINGLE TOUR
// Route.get('/:id', async (req, res) => {
//   const tour = await Tour.find({_id : req.params.id})
// })

// STORE TOUR
Router.post('/', upload.single('mainImage'), async (req, res, next) => {
  const tour = new Tour({
    country: req.body.country,
    price: req.body.price,
    duration: req.body.duration,
    cities: req.body.cities,
    // mainImage: req.file.path,
    description: req.body.description,
    tourTitle: req.body.tourTitle,
    tourSubtitle: req.body.tourSubtitle,
    dateStart: req.body.dateStart,
    dateEnd: req.body.dateEnd,
    numberPlaces: req.body.numberPlaces,
    placesAvaible: req.body.placesAvaible,
    program: req.body.program
    // images: req.files
  })

  console.log(tour)
  // try {
  //   const savedTour = await tour.save()
  //   res.json({ message: 'Tour created', tour: savedTour })
  // } catch (error) {
  //   res.status(500).json({ error })
  // }
})

module.exports = Router
