const express = require('express');
const { signup ,login, addInfo  }= require('../controllers/userControllers')
const User = require('../models/User');
const requireAuth = require('../middleware/requireAuth');



const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
//router.use(requireAuth);
router.patch('/:id', addInfo);


//router.use(requireAuth);
router.get('/profile', async (req, res) => {
  try {
    const user = await User.findById(req.auth.userId);
    res.status(200).json({
      name: user.name,
      email: user.email
    });
  } catch (error) {
    res.status(400).json({ error }); 
  }
});
router.get('/getAllUsers',async (req , res)=>{
  try {
    const allUsers = await User.find({});
    res.status(200).json(allUsers) 

  } catch (error) {
    console.log(error);
  }
}),
router.post('/deleteUser', async (req, res) => {
  const { _id } = req.body;

 

  const user = await User.findOneAndDelete({_id})
  console.log("user deleted",_id )

  if (!user) {
    return res.status(400).json({error: 'No such user'})
  }

  res.status(200).json(user)
});

//const Ticket = require('../models/Ticket'); // Supposons que vous avez un modèle "Ticket" pour représenter les billets dans MongoDB


router.post('/tickets', async (req, res) => {
  try {
    // Créez un nouveau billet en utilisant les données reçues du client
    const { orderId, amount } = req.body;
    const ticket = new Ticket({
      orderId,
      amount
    }); 

    // Enregistrez le billet dans la base de données MongoDB
    const savedTicket = await ticket.save();

    res.status(200).json(savedTicket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la création du billet.' });
  }
});



module.exports = router;