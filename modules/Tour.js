const mongoose = require('mongoose')

// const programSchema = new mongoose.Schema({
//   _id: mongoose.Schema.Types.ObjectId,
//   startDay: { type: Number, required: true },
//   endDay: { type: Number, required: true },
//   cities: [String],
//   description: { type: String, required: true }
// })

const TourSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  country: { type: String, reqired: true, minLenmaxlength: 3, maxlength: 100 },
  price: { type: Number, reqired: true, min: 100 },
  duration: { type: Number, required: true },
  // cities: [String],
  mainImage: { type: String, required: true },
  description: { type: String, required: true },
  tourTitle: { type: String, required: true },
  tourSubtitle: { type: String, required: true },
  dateStart: { type: String, required: true },
  dateEnd: { type: String, required: true },
  numberPlaces: { type: String, required: true },
  placesAvaible: { type: Number, required: true, min: 0 },
  // images: [String],
  program: [
    {
      _id: mongoose.Schema.Types.ObjectId,
      startDay: { type: Number, required: true },
      endDay: { type: Number, required: true },
      cities: [String],
      description: { type: String, required: true }
    }
  ]
})

const Tour = mongoose.model('Tour', TourSchema)
module.exports = Tour
