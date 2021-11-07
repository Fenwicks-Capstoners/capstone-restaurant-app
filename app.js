//todo: remember run nodemon www NOT app.js
var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//routes folder and index
var indexRouter = require('./routes/index');
var oldIndexRouter = require('./routes/oldindex');
var usersRouter = require('./routes/users');
var app = express();

// Make sure you place body-parser before your CRUD handlers!
// app.use(bodyParser.urlencoded({ extended: true }));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

app.use(function (req, res, next) {
  console.log(req.body) // populated!
  next()
})
// All your handlers here...

//todo: maybe dont connect w/ mongoose
//const mongoose = require("mongoose");
//  const uri = "mongodb+srv://Omar:George72@cluster0.cpwsq.mongodb.net/capstone_database?retryWrites=true&w=majority";
// const connexion = mongoose
//     .connect(uri)
//     .then(() => {
//       console.log("Connected to database");
//     })
//     .catch((err) => {
//       console.log("Error connecting to the database", err);
//     });





//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/oldIndex', oldIndexRouter);
app.use('/users', usersRouter);

const uri = "mongodb+srv://Omar:George72@cluster0.cpwsq.mongodb.net/capstone_database?retryWrites=true&w=majority";
MongoClient.connect(uri, (err, client) => {
  if (err) return console.log(err);
  db = client.db('capstone_database');
  uc = db.collection('userCollection');
});

app.post('/test', (req, res) => {
  uc.insertOne(req.body)
      .then(result => {
        console.log(result)
        res.redirect('/');
      })
      .catch(error => console.error(error))
})
app.get('/', (req, res) => {
  db.collection('userCollection').find().toArray().then(results => {
        res.send(results);
        console.log(results);
      }).catch(error => console.error(error))
  // ...
});
// app.get('/', (req, res) => {
//   db.collection('userCollection').find().toArray((err, result) => {
//     if (err) return console.log(err);
//     res.render('index.ejs', { quotes: result });
//   });
// });

//reading

//todo: localhost:3000 is index
// and localhost:3000/users is from routers/users.js

//const uri = "mongodb+srv://Omar:George72@cluster0.cpwsq.mongodb.net/capstone_database?retryWrites=true&w=majority";


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// app.get('/', (req, res) => {
//   res.sendFile( '/index.html')
//   // Note: __dirname is the current directory you're in. Try logging it and see what you get!
//   // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
// })
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;