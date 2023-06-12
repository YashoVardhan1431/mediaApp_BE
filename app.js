const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes')
const blogRoutes = require('./routes/blogRoutes')
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({ extended:  true }));
app.use( '/',userRoutes)
app.use('/', blogRoutes);
mongoose.set('strictQuery', true);
const PORT = 3002
mongoose.connect('mongodb://127.0.0.1/socialApp')
.then(()=>app.listen(PORT))
.then(()=>console.log('Server listening on port', PORT))

app.get('/home', ()=>{
    console.log('hello world')
})


    