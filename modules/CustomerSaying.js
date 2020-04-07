const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: { type: String, required: true, minlength: 2, maxlength: 120 },
  image: { type: String, required: true },
  content: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 200,
  },
})

module.exports = Message = mongoose.model('Message', messageSchema)
