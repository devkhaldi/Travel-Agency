const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()

mongoose
  .connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(() => console.log('Failed to connect to MongoDB'))

app.use(express.json())

app.use('/api/tours', require('./routes/tours'))
app.use('/api/customerSayings', require('./routes/tours'))
app.use('/api/galleryImages', require('./routes/galleryImages'))
app.use('/api/messages', require('./routes/messages'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started at ${PORT}`))
