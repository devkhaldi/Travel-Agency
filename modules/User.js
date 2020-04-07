const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: { type: String, required: true, minlength: 2, maxlength: 120 },
  email: {
    type: String,
    required: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 100,
    match: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
  },
})

module.exports = User = mongoose.model('User', userSchema)
