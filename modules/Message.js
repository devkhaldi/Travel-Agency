const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: { type: String, required: true, minlength: 2, maxlength: 120 },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  content: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 500,
  },
})

module.exports = Message = mongoose.model('Message', messageSchema)
