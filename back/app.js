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


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


// homepage : Display the websites
app.get('/', function(req, res){

    var current = null,
    rank = 0;

db.collection('websites').find({}).sort({  "points": -1 }).forEach(doc => {
    
  rank++;
  doc.rank = rank;
  delete doc._id;
  //console.log(doc)

  db.collection('websites')
  .updateOne( //update only one
  {rank: doc.rank}, //update the one where rank is the sent in parameter doc.rank
  { $set: { rank: doc.rank } } // if multiple docs have the same rank you should send in more parameters
)
})


    
    db.collection('websites').find({}).sort({ points: -1 }).toArray(function(err, data){
        if (err) throw err;
        res.json(data)
    })

    
      
})

// Register the user
app.post('/register', function(req, res){
    db.collection('users').insertOne({
       email : req.body.email,
       password : req.body.password,
       points: 0
   }, function(err, user){
       res.json(user.insertedId)
   })
})

// Log in the user






// Fetch data from the connected user
app.post('/login', function(req, res){
    db.collection('users').find({ email: req.body.email, password: req.body.password}).toArray(function(err, user){
        if (err) throw err;
        res.json(user[0]._id)
    })
})

 

 app.get('/users/:id', function(req, res){
    db.collection('users').find({ _id: ObjectId(`${req.params.id}`)}).toArray(function(err, user){
        if (err) throw err;
        res.json(user)
    })
})

// Fetch the websites from user
app.get('/websites/:id', function(req, res){
    db.collection('websites').find({ id: req.params.id }).sort({ points: -1 }).toArray(function(err, user){
        if (err) throw err;
        res.json(user)
    })





   


})




















// Create new website

app.post('/createwebsite/:id', function(req, res){
    db.collection('websites').insertOne({
        url : req.body.url,
        points: 0,
        id: req.params.id
    })
})

// Delete website
app.get('/deletewebsite/:id', function(req, res){
    db.collection('websites').deleteOne({ _id: ObjectId(`${req.params.id}`)}, function(err, user){
        if (err) throw err;
        res.json(user)
    })
})

// add points to website
app.get('/addpoints/:id/:amount/:userid', function(req, res){
    db.collection('websites').updateOne({  _id: ObjectId(`${req.params.id}`) },
    {
      $inc: {
        points: parseInt(req.params.amount)
      }
    })

    db.collection('users').updateOne({  _id: ObjectId(`${req.params.userid}`) },
    {
      $inc: {
        points: parseInt(-req.params.amount)
      }
    })
})

app.get('/visitlink/:userid', function(req, res){
    db.collection('users').updateOne({  _id: ObjectId(`${req.params.userid}`) },
    {
      $inc: {
        points: 1
      }
    })
})

app.listen(PORT, function(){
     console.log("Node Js Server is Running on port " + PORT);
 })