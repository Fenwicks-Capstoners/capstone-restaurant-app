var express = require('express');
var MongoClient = require('mongodb').MongoClient
var router = express.Router();
var bodyParser = require('body-parser');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var requireDir = require('require-dir');
var PersonModel = require('../Schemas.js')
var ScheduleModel = require('../Schemas.js')
router.use(bodyParser.urlencoded({ extended: false }));

const uri = "mongodb+srv://Omar:George72@cluster0.cpwsq.mongodb.net/capstone_database?retryWrites=true&w=majority";
MongoClient.connect(uri, (err, client) => {
    if (err) return console.log(err);
    db = client.db('capstone_database');
    uc = db.collection('scheduleCollection');
});

router.get('/makescheduleroute',(req , res) =>{
    db.collection('scheduleCollection').find().toArray(function(err , i){
        if (err) return console.log(err)

        res.render('makescheduleview.ejs',{scheduleCollection: i})
    })
});

// /* GET home page. */
// router.get('/employeeRoute', function(req, res, next) {
//     //below renders view index.ejs
//     res.render('employeeView', { title: 'Express' });
//     next();
// });

// //gets all http://localhost:3000/index3
// router.get('/687687687', (req, res) => {
//     db.collection('userCollection').find().toArray().then(results => {
//         res.send(results);
//         console.log(results);
//     }).catch(error => console.error(error))
//     // ...
// }); //todo: change to 'employeeRoute'
router.get('/makescheduleview', function(req,res) {
    await
    ScheduleModel.find({}, function(err,data){
    res.render('makescheduleview.ejs', {
        user: req.user,
        schedules: data
        });
    });
});
module.exports = router;
