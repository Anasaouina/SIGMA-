const express = require('express')
const {
  createColloc,
  getColloc,
  getCollocs,
  deleteColloc,
  updateColloc
} = require('../controllers/collocControllers')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all event routes
//router.use(requireAuth)

// GET all collocs
router.get('/', getCollocs)
// GET one colloc
router.get('/:id', getColloc)



// POST a new colloc
router.post('/', createColloc)

// DELETE a colloc 
router.delete('/:id', deleteColloc)

// UPDATE a colloc
router.patch('/:id', updateColloc)


module.exports = router