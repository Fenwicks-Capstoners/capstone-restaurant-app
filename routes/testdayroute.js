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
    uc = db.collection('dayCollection');
    return;
})

/* GET home page. */
//gets route index.js
router.get('/testdayroute', function(req, res, next) {
    //below renders view index.ejs
    res.render('testdayview', { title: 'Express' });
    next();
});

router.post('/addDay', (req, res) => {
    uc.insertOne(req.body)
        .then(result => {
            console.log(result)
            res.redirect('/testdayroute'); //todo: change to emp view after submitting
        })
        .catch(error => console.error(error))
        return;
})

module.exports = router;