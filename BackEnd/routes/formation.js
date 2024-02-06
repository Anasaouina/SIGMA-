const express = require('express')
const {
  createFormation,
  getAllFormation,
  getFormation,
  deleteFormation,
  updateFormation
} = require('../controllers/formationControllers')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all event routes
//router.use(requireAuth)

// GET all Formation
router.get('/', getAllFormation)
//router.use(requireAuth)

router.get('/:id', getFormation)

// POST a new Formation
router.post('/', createFormation)

// DELETE a Formation 
router.delete('/:id', deleteFormation)

// UPDATE a Formation
router.patch('/:id', updateFormation)


module.exports = router