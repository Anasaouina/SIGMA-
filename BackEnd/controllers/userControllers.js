const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
  return jwt.sign({_id}, 'makeitouyofhere', { expiresIn: '3d' })
}

//signup a user
const signup = async (req, res) => {
  const {email,password,fname,lname }= req.body;
    
  try {
    const user = await User.signup(email, password, fname , lname)
    

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token ,fname, lname })
  } catch (error) {
    //console.log(error);
    res.status(400).json({error: error.message})
  }
}

// login a user
const login = async (req, res) => {
  const { email, password} = req.body

  try {
    const user = await User.login(email, password)
     
    // create a token
    const token = createToken(user._id)

    const name = user.name ;
    const userType = user.userType
    const lname = user.lname
    const fname = user.fname
    const _id = user._id
    const image= user.image


    res.status(200).json({ email,token,userType , lname,fname ,_id,image}) 
    console.log(name);
    console.log(userType);
  } catch (error) {
    res.status(400).json({error: error.message})
    console.log("ur err"); 
  }
}
// update a Info
const addInfo = async (req, res) => {
  const { id } = req.params

  

  const user = await User.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  

  res.status(200).json(user)
}
  module.exports = { signup , login, addInfo}