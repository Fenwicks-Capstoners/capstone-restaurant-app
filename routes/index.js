var express = require('express');
var router = express.Router();

/* GET home page. */
//gets route index.js
 router.get('/', function(req, res, next) {
  //below renders view index.ejs
  res.render('index', { title: 'Add Employee' });
  //next();
 });

module.exports = router;

//Change index.js to export a module constructor which you call and pass app to:

// module.exports = function(app) {
//     app.get('/',(req,res) => {
//         res.render('template');
//     })
// }

//https://stackoverflow.com/questions/51179031/app-get-is-not-a-function-in-express-js
// var express = require('express');
// var app = require('express');
// //var router = express.Router();
//
// /* GET home page. */
// const uri = "mongodb+srv://Omar:George72@cluster0.cpwsq.mongodb.net/capstone_database?retryWrites=true&w=majority";
// app.get('/', (req, res) => {
//   res.sendFile(uri + '/index.html')
//   // Note: __dirname is the current directory you're in. Try logging it and see what you get!
//   // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
// })
//
// module.exports = app;

