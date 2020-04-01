const Schema = require('mongoose').Schema
const Model = require('mongoose').model

const programSchema = new Schema({
  _id: Schema.Types.ObjectId,
  startDay: { type: Number, required: true },
  endDay: { type: Number, required: true },
  cities: [String],
  description: { type: Text, required: true }
})

const TourSchema = new Schema({
  _id: Schema.Types.ObjectId,
  country: { type: String, reqired: true, minLenmaxlength: 3, maxlength: 100 },
  price: { type: Number, reqired: true, min: 100 },
  duration: { type: Number, required: true },
  cities: [String],
  mainImage: { type: String, required: true },
  description: { type: String, required: true },
  tourTitle: { type: String, required: true },
  tourSubtitle: { type: String, required: true },
  dateStart: { type: String, required: true },
  dateEnd: { type: String, required: true },
  numberPlaces: { type: String, required: true },
  placesAvaible: { type: Number, required: true, min: 0 },
  images: [String],
  program: [programSchema]
})

const Tour = new Model('Tour', TourSchema)
module.exports = Tour
