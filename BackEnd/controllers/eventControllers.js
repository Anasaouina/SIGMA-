
const mongoose = require('mongoose')
const Event = require ('../models/eventModel')

// get all events
const getEvents = async (req, res) => {
  

  const events = await Event.find();

  res.status(200).json(events)
}
// get one event
const getEvent = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such event'})
  }

  const event = await Event.findById(id);
  console.log(event.title)

  res.status(200).json(event)

}

// create new event
const createEvent = async (req, res) => {
  const {title, presenter, description , time , place , image } = req.body
  console.log(req.body)
  let emptyFields = []

  if(!title) {
    emptyFields.push('title')
  }
  if(!presenter) {
    emptyFields.push('presenter')
  }
  if(!description) {
    emptyFields.push('description')
  }
  if(!time) {
    emptyFields.push('time')
  }
  if(!place) {
    emptyFields.push('place')
  }
  if(!image) {
    emptyFields.push('image')
  }
  if(emptyFields.length > 0) {
    console.log(emptyFields);
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    
  }

  // add doc to db
  try {
    
    const event = await Event.create({title, presenter, description , time , place ,image})
    res.status(200).json(event)
  } catch (error) {
    res.status(400).json({error: error.message})
  
  }
}

// delete a event
const deleteEvent = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such event'})
  }

  const event = await Event.findOneAndDelete({_id: id})

  if (!event) {
    return res.status(400).json({error: 'No such event'})
  }

  res.status(200).json(event)
}

// update a event
const updateEvent = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such event'})
  }

  const event = await Event.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!event) {
    return res.status(400).json({error: 'No such event'})
  }

  res.status(200).json(event)
}


module.exports = {
  getEvents,
  getEvent,
  createEvent,
  deleteEvent,
  updateEvent
}