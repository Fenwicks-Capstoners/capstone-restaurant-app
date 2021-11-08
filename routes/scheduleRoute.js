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

//gets route index.js
router.get('/scheduleRoute', function(req, res, next) {
    //below renders view index.ejs
    res.render('scheduleView', { title: 'Express' });
    next();
});
























module.exports = router;