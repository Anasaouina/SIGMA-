
const mongoose = require('mongoose')
const Formation = require ('../models/formationModel')

// get all foramtion
const getAllFormation = async (req, res) => {
  

  const formations = await Formation.find().maxTimeMS(40000);;

  res.status(200).json(formations)
}
//get one formation
const getFormation = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such formation'})
  }

  const formation = await Formation.findById(id);
  console.log(formation.title)

  res.status(200).json(formation) 
}

// create new formation
const createFormation = async (req, res) => {
  const {title,  duree, prix , time ,students , image } = req.body

  let emptyFields = []

  if(!title) {
    emptyFields.push('title')
  }
  if(!duree) {
    emptyFields.push('duree')
  }
  if(!prix) {
    emptyFields.push('prix')
  }
  if(!time) {
    emptyFields.push('time')
  }
  if(!students) {
    emptyFields.push('students')
  }
  if(!image) {
    emptyFields.push('image')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    
    const formation = await Formation.create({title,duree, prix , time ,students , image})
    res.status(200).json(formation)
  } catch (error) {
    res.status(400).json({error: error.message})
  
  }
}

// delete a Formation
const deleteFormation = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Formation'})
  }

  const formation = await Formation.findOneAndDelete({_id: id})

  if (!formation) {
    return res.status(400).json({error: 'No such Formation'})
  }

  res.status(200).json(formation)
}

// update a Formation
const updateFormation = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Formation'})
  }

  const formation = await Formation.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!formation) {
    return res.status(400).json({error: 'No suchFormation'})
  }

  res.status(200).json(formation)
}


module.exports = {
  getAllFormation,
  getFormation,
  createFormation,
  deleteFormation,
  updateFormation
}