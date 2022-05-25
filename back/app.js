const express = require('express');
const app = express();
const mongoose = require("mongoose");
const db = mongoose.connection;
const { MongoClient, ServerApiVersion } = require('mongodb');
const config = require('./config/server');
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require("cors");
const PORT = process.env.PORT || 3001;
var ObjectId = require('mongodb').ObjectId;


app.use(cors());
app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.set('view engine', 'ejs');
mongoose.connect(config.DB_URI, function(err, db){
    if (err) throw err;
    console.log('Connected to database');
});


app.get('/', function(req, res){
    db.collection('websites').find({}).sort({ points: -1 }).toArray(function(err, data){
        if (err) throw err;
        res.json(data)
    })
})


app.post('/register', function(req, res){
    db.collection('users').insertOne({
       email : req.body.email,
       password : req.body.password,
   }, function(err, user){
       res.json(user.insertedId)
   })

})






app.listen(PORT, function(){
     console.log("Node Js Server is Running on port " + PORT);
 })