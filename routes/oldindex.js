var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//todo: index inside of render above does
// Failed to lookup view "oldindex" in views directory
module.exports = router;
