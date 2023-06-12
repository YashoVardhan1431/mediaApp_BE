const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
     
       name:{
        type:String,
        required:true
       },
       password:{
        type:String,
        required:true,
        minlength: 5
       },
       email: {
        type:String,
        required:true,
        unique:true,
       },
       blogs:[{
                type:mongoose.Types.ObjectId,
                ref:'Blogs',
                required:true
              }]
});

module.exports = mongoose.model('User',userSchema)
