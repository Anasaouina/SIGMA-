const mongoose = require('mongoose')

const Schema = mongoose.Schema

const formationSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  duree: {
    type: String,
    required: true
  },
  prix: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  students: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Formation', formationSchema)