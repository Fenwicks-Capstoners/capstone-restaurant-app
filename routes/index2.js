var express = require('express');
var MongoClient = require('mongodb').MongoClient
var router = express.Router();
var bodyParser = require('body-parser');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var requireDir = require('require-dir');

router.use(bodyParser.urlencoded({ extended: false }));

const uri = "mongodb+srv://Omar:George72@cluster0.cpwsq.mongodb.net/capstone_database?retryWrites=true&w=majority";
MongoClient.connect(uri, (err, client) => {
 if (err) return console.log(err);
 db = client.db('capstone_database');
 uc = db.collection('userCollection');
})

/* GET home page. */
//gets route index.js
router.get('/index2', function(req, res) {
 //below renders view index.ejs
 res.render('index2');
 // next();
});

router.post('/addEmp', (req, res) => {
  uc.insertOne(req.body)
      .then(result => {
        console.log(result)
        res.redirect('/index2'); //todo: change to emp view after submitting
      })
      .catch(error => console.error(error))
})

module.exports = router;