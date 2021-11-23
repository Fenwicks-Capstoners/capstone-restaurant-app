var express = require('express');
var MongoClient = require('mongodb').MongoClient
var router = express.Router();
var bodyParser = require('body-parser');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var requireDir = require('require-dir');


//trying to add jquery for the calendar:
// var jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const { window } = new JSDOM();
// const { document } = (new JSDOM('')).window;
// global.document = document;
// var $ = require("jquery")(window);





router.use(bodyParser.urlencoded({ extended: false }));
//for json junk
router.use(express.static(__dirname +path.sep+ 'public'));

//gets route index.js
router.get('/scheduleRoute', function(req, res) {
    //below renders view index.ejs
    res.render('scheduleView', { title: 'Express' });
    //next();
});
























module.exports = router;