const mongoose = require('mongoose')

const GalleryImageSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  image: { type: String, required: true },
  location: { type: String, required: true },
})

const GalleryImage = mongoose.model('GalleryImage', GalleryImageSchema)
module.exports = GalleryImage
