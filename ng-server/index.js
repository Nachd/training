//imports
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors');
var mongoose = require('mongoose');
//config


const app = express();
app.use(cors());
app.use(bodyParser.json()); //{limit: '50mb'}

//connect to db 
mongoose.connect('mongodb://127.0.0.1:27017/training' , { useNewUrlParser: true})

    .then(()=> console.log('MongoDB Connected...'))
    .catch(err=>console.log(err));

//routes

require('./routes/test.route')(app)


//run

app.listen(5000 , ()=>{
    console.log("ok")
})