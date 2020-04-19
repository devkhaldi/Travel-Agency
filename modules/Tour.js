const mongoose = require('mongoose')

const programSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  startDay: { type: Number, required: true },
  endDay: { type: Number, required: true },
  cities: [String],
  description: { type: String, required: true },
})

const TourSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  country: { type: String, required: true, minLenmaxlength: 3, maxlength: 100 },
  price: { type: Number, required: true, min: 100 },
  duration: { type: Number, required: true },
  cities: [String],
  mainImage: { type: String },
  description: { type: String, required: true },
  tourTitle: { type: String, required: true },
  tourSubtitle: { type: String, required: true },
  dateStart: { type: String, required: true },
  category: { type: String, required: true },
  dateEnd: { type: String, required: true },
  numberPlaces: { type: String, required: true },
  placesAvailable: { type: Number, required: true, min: 0 },
  images: [String],
  program: [programSchema],
})

const Tour = mongoose.model('Tour', TourSchema)
module.exports = Tour
