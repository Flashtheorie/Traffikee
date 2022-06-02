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
const stripe = require('stripe')('sk_test_51L3TjKFkiBiEQqb0n6Vqk95NVCUfE6o09NyCSGOQTkqblDYF8VkxW37tZGNTzkzpygsCwq3A1jEbSHsqi5ZfWaR900ddEMnogp');

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


// homepage : Display the websites and update the rank
app.get('/api/sites', function(req, res){
rank = 0;

db.collection('websites').find({}).sort({  "points": -1 }).forEach(doc => {

  rank++;
  doc.rank = rank;
  //delete doc._id;
  //console.log(doc._id);

  db.collection('websites').updateOne({_id : doc._id},
    { $set: { rank: doc.rank } },
    { upsert: true }
)

})


    
    db.collection('websites').find({}).limit(50).sort({ rank: 1 }).toArray(function(err, data){
        if (err) throw err;
        res.json(data)
    })

    
      
}) 


// list all users
app.get('/api/allusers', function(req, res) {
  db.collection('users').find({}).sort({ points: -1 }).toArray(function(err, data){
    if (err) throw err;
    res.json(data)
})
 
})


// Register the user
app.post('/api/register', function(req, res){

  if (req.body.email.includes('@')){
    db.collection('users').findOne({ email: req.body.email}, function(err, data){
        if( data == null || data == '') {
            db.collection('users').insertOne({
                email : req.body.email,
                password : req.body.password,
                points: 0
            }, function(err, user){
                res.json(user.insertedId)
            })
        }
        else {
            res.json('error')
        }
    })
  } else {
      res.json('error')
  }
    
})

// Log in the user


app.post('/api/login', function(req, res){
    db.collection('users').find({ email: req.body.email, password: req.body.password}).toArray(function(err, user){
        if (err) throw err;
        if (user[0] != null)
        {
            console.error('found user : ' + user[0].email)
            res.json(user[0]._id)
        }
        else{
            errorMessage = "User doesnt exist" ;
            res.json('error')
            console.error(errorMessage)
        }
        
    })
})

 





// Fetch data from the connected user
 app.get('/api/users/:id', function(req, res){
    db.collection('users').find({ _id: ObjectId(`${req.params.id}`)}).toArray(function(err, user){
        if (err) throw err;
        res.json(user)
    })
})

// Fetch the websites from user
app.get('/api/websites/:id', function(req, res){
    db.collection('websites').find({ id: req.params.id }).sort({ points: -1 }).toArray(function(err, user){
        if (err) throw err;
        res.json(user)
    })
})


// Create new website

app.post('/api/createwebsite/:id', function(req, res){
    db.collection('websites').insertOne({
        url : req.body.url,
        points: 0,
        id: req.params.id
    })
})

// Delete website
app.get('/api/deletewebsite/:id', function(req, res){
    db.collection('websites').deleteOne({ _id: ObjectId(`${req.params.id}`)}, function(err, user){
        if (err) throw err;
        res.json(user)
    })
})

// add points to website
app.get('/api/addpoints/:id/:amount/:userid', function(req, res){
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

app.get('/api/visitlink/:userid', function(req, res){
    db.collection('users').updateOne({  _id: ObjectId(`${req.params.userid}`) },
    {
      $inc: {
        points: 1
      }
    })
})

// Delete user
app.get('/api/delete/:id', function (req, res) {
    db.collection('users').deleteOne({  _id: ObjectId(`${req.params.id}`) },
    {
      
    }, function(){
        res.json('deleted')
    })
})

// Payment :
app.get('/api/paymentsuccessredirect/:userid/:points', function(req, res){
    db.collection('users').updateOne({  _id: ObjectId(`${req.params.userid}`) },
    {
      $inc: {
        points: parseInt(req.params.points)
      }
    }, function(){
        db.collection('transactions').insertOne({
            amount: 1,
            id: req.params.userid,
            date: new Date ()

        })
    })
})


app.get('/api/paymentsuccessredirectcent/:userid/:points', function(req, res){
    db.collection('users').updateOne({  _id: ObjectId(`${req.params.userid}`) },
    {
      $inc: {
        points: parseInt(req.params.points)
      }
    }, function(){
        db.collection('transactions').insertOne({
            amount: 10,
            id: req.params.userid,
            date: new Date ()

        })
    })
})

app.get('/api/paymentsuccessredirectmille/:userid/:points', function(req, res){
    db.collection('users').updateOne({  _id: ObjectId(`${req.params.userid}`) },
    {
      $inc: {
        points: parseInt(req.params.points)
      }
    }, function(){
        db.collection('transactions').insertOne({
            amount: 80,
            id: req.params.userid,
            date: new Date ()

        })
    })
})



 app.get('/api/gettotaltransactions', function(req, res) {
    db.collection('transactions').aggregate([ {
        $group: {
           _id: null,
           total: {
              $sum: "$amount"
           }
        }
     } ] ).toArray(function (err,user){
         res.json(user);
     })
 })


 // fetch transactions data

 app.get('/api/transactions', function (req, res) {
     db.collection('transactions').find({}).toArray(function (err,transactionsData){
         res.json(transactionsData);
     })
 })



  
app.listen(PORT, function(){
     console.log("Node Js Server is Running on port " + PORT);
 })