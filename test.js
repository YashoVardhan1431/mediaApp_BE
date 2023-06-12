const User = require('./models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const login = async(req,res,next) =>{
  const {email, password} = req.body;
  if(!email || email.trim() === " " || !password || password.trim() === " "){
    return res.status(422).json({message:"fields required"})
  }
  let existingUser;
  try {
    existingUser = await User.findOne({email})

  } catch (error) {
    return console.log(error)
  }
  if(!existingUser){
    return res.status(404).json({message:"user not found, SIGNUP instead"})
  }
  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password)
  if (!isPasswordCorrect){
    return res.status(401).json({message:"incorrect password"})
  }
  const token = jwt.sign ({email}, process.env.SECRET_KEY, {expiresIn:'4d'})
}
