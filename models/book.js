const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
      title: {
            type: String,
            required: true
      },
      description: {
            type: String,
            required: true
      },
      year: {
            type: Number,
            required: true
      },
      quantity: {
            type: Number,
            required: true,
            min: 1
      },
      imageURL: {
            type: String
      }
})

module.exports = mongoose.model('book', bookSchema)
 