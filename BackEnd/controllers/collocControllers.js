
const mongoose = require('mongoose')
const Colloc = require ('../models/collocModel')

// get all collocs
const getCollocs = async (req, res) => {
  

  const collocs = await Colloc.find();

  res.status(200).json(collocs)
}
// get one colloc
const getColloc = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such colloc'})
  }

  const colloc = await Colloc.findById(id);
  console.log(colloc.title)

  res.status(200).json(colloc)

}

// create new colloc
const createColloc = async (req, res) => {
  const {title, description, image , more} = req.body

  let emptyFields = []

  if(!title) {
    emptyFields.push('title')
  }
  if(!description) {
    emptyFields.push('description')
  }
  if(!image) {
    emptyFields.push('image')
    if(!more) {
        emptyFields.push('more')
      }
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    
    const colloc = await Colloc.create({title, description, image , more})
    res.status(200).json(colloc)
  } catch (error) {
    res.status(400).json({error: error.message})
  
  }
}

// delete a  colloc
const deleteColloc = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such colloc'})
  }

  const colloc = await Colloc.findOneAndDelete({_id: id})

  if (!colloc) {
    return res.status(400).json({error: 'No such colloc'})
  }

  res.status(200).json(colloc)
}

// update a colloc
const updateColloc = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such colloc'})
  }

  const colloc = await Colloc.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!colloc) {
    return res.status(400).json({error: 'No such colloc'})
  }

  res.status(200).json(colloc)
}


module.exports = {
  getCollocs,
  getColloc,
  createColloc,
  deleteColloc,
  updateColloc
}