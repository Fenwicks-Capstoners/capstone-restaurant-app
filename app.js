//todo: remember run nodemon www NOT app.js
var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var requireDir = require('require-dir');
//routes folder and index
var app = express();

var routes = requireDir('./routes'); // https://www.npmjs.org/package/require-dir
for (var i in routes) app.use('/', routes[i]);

// Make sure you place body-parser before your CRUD handlers!
// app.use(bodyParser.urlencoded({ extended: true }));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(function (req, res, next) {
  console.log(req.body); // populated!
  next();
});
//todo: here's where you'll add src scripts (stuff at the bottom of view files)
app.use("/assets", express.static('./assets/'));
app.use("/CFA", express.static('./CFA/'));
//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/', indexRouter);
// app.use('/index2', indexRouter2);
// app.use('/oldIndex', oldIndexRouter);
// app.use('/users', usersRouter);

// var mongoose = require("mongoose"),
//     passport = require("passport"),
//     LocalStrategy = require("passport-local"),
//     passportLocalMongoose = require("passport-local-mongoose"),
//     User = require("./models/user");

//
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);
// //Changed from mongoClient to mongooser
// mongoose.connect(uri);
var uri = "mongodb+srv://Omar:George72@cluster0.cpwsq.mongodb.net/capstone_database?retryWrites=true&w=majority";
MongoClient.connect(uri, (err, client) => {
  if (err) return console.log(err);
  db = client.db('capstone_database');
  uc = db.collection('userCollection');
});

//
// app.set("view engine", "ejs");
// app.use(bodyParser.urlencoded({ extended: true }));
//
// app.use(require("express-session")({
//   secret: "Rusty is a dog",
//   resave: false,
//   saveUninitialized: false
// }));
//
// app.use(passport.initialize());
// app.use(passport.session());
//
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.post('/test', (req, res) => {
//   uc.insertOne(req.body)
//       .then(result => {
//         console.log(result)
//         res.redirect('/');
//       })
//       .catch(error => console.error(error))
// })

// app.get('/', (req, res) => {
//   db.collection('userCollection').find().toArray().then(results => {
//         res.send(results);
//         console.log(results);
//       }).catch(error => console.error(error))
//   // ...
// });
//gets all http://localhost:3000/index3
// app.get('/index3', (req, res) => {
//     db.collection('userCollection').find().toArray().then(results => {
//         res.send(results);
//         console.log(results);
//     }).catch(error => console.error(error))
//     // ...
// }); //todo: change to 'index2'
// app.get('/', (req, res) => {
//   db.collection('userCollection').find().toArray((err, result) => {
//     if (err) return console.log(err);
//     res.render('index2.ejs', { quotes: result });
//   });
// });//reading

//todo: localhost:3000 is index
// and localhost:3000/users is from routers/users.js

// //=====================
// // ROUTES
// //=====================
//
// // Showing home page
// app.get("/home", function (req, res) {
//   res.render("home");
// });
//
// // Showing secret page
// app.get("/secret", isLoggedIn, function (req, res) {
//   res.render("secret");
// });
//
// // Showing register form
// app.get("/register", function (req, res) {
//   res.render("register");
// });
//
// // Handling user signup
// app.post("/register", function (req, res) {
//   var username = req.body.username
//   var password = req.body.password
//   User.register(new User({ username: username }),
//       password, function (err, user) {
//         if (err) {
//           console.log(err);
//           return res.render("register");
//         }
//
//         passport.authenticate("local")(
//             req, res, function () {
//               res.render("secret");
//             });
//       });
// });
//
// //Showing login form
// app.get("/login", function (req, res) {
//   res.render("login");
// });
//
// //Handling user login
// app.post("/login", passport.authenticate("local", {
//   successRedirect: "/secret",
//   failureRedirect: "/login"
// }), function (req, res) {
// });
//
// //Handling user logout
// app.get("/logout", function (req, res) {
//   req.logout();
//   res.redirect("/");
// });
//
// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) return next();
//   res.redirect("/login");
// }
//
// var port = process.env.PORT || 3000;
// app.listen(port, function () {
//   console.log("Server Has Started!");
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
  return;
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