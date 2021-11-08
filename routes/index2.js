var express = require('express');
var router = express.Router();

/* GET home page. */
//gets route index.js
router.get('/index2', function(req, res, next) {
 //below renders view index.ejs
 res.render('index2', { title: 'Express' });
 next();
});

module.exports = router;