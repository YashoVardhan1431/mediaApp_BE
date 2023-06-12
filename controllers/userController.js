const User = require('../models/user');
const bcrypt = require('bcrypt');
const getAllUsers = async (req, res, next) => {
    let users;
    try {
         users = await User.find()
    } catch (error) {
       return console.log(error);
    }
    if(!users){
        return res.status(404).json({message: 'No users found'})
    }
    return res.status(200).json({
       users
    })
}

const signUp = async (req, res, next) => {
    const {name, email, password} = req.body
    let existingUser ; 
    try {
        existingUser = await User.findOne({email})
    } catch (error) {
      return error;

    } if(existingUser)
     return res.status(500).json({
        message: 'User already exist, Login instead'
     })
    //console.log(password)
     const encryptPassword = bcrypt.hashSync(password, 8)
     const user = new User({
        name,
        password:encryptPassword,
        email,
        blogs:[]
     })
       try {
        await user.save()
       } catch (error) {
       return error;
      }
      return res.status(201).json({user})
}
const signIn = async (req, res, next) => {
    const { email, password } = req.body
    let existingUser;
    try {
        existingUser = await User.findOne({email})
    } catch (error) {
      return error;

    } if(!existingUser)
     return res.status(404).json({
        message: 'User already exist with this email and password'
     })
    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password)
    if(!isPasswordCorrect){
        res.status(400).json({message: 'Password is incorrect'})
    }
    return res.status(200).json({
        message:'Sign in successfully',
        success: true
    })



    }
module.exports ={
    getAllUsers,
    signUp,
    signIn
}