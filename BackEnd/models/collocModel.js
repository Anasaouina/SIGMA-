const mongoose = require('mongoose');

const collocSchema = new mongoose.Schema({
  title : {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image:{
    type: String,
    required: true
  },
  more:{
    type: String,
    required: true
  }
});

 

module.exports = mongoose.model('Colloc', collocSchema);