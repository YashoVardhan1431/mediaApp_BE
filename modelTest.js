const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1/Test")
const postSchema = require('./models/Post')
const userSchema = require('./models/User')

const User =  mongoose.model('User', userSchema)
const Post =  mongoose.model('Post', postSchema)


const UserDoc = new User({name:"relevel", email : "relevel@gmail.com", password : "relevel1234"})
const PostDoc = new Post({title:"28th May", description:"relevel test", user: UserDoc.id})
const PostDoc2 = new Post({title: "29th May", description:"relevel test2", user: UserDoc.id})
UserDoc.posts.push(PostDoc.id)
UserDoc.posts.push(PostDoc2.id)
console.log(UserDoc)
console.log(PostDoc)
console.log(PostDoc2)