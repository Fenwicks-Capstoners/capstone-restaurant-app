var express = require('express');
var MongoClient = require('mongodb').MongoClient
var router = express.Router();
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var requireDir = require('require-dir');

var
    passport = require("passport"),
    bodyParser = require("body-parser"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    User = require("../models/user");
    Shifty = require("../models/shiftModel")
const mongoose = require("mongoose");

router.use(bodyParser.urlencoded({ extended: false }));

const uri = "mongodb+srv://Omar:George72@cluster0.cpwsq.mongodb.net/capstone_database?retryWrites=true&w=majority";
MongoClient.connect(uri, (err, client) => {
    if (err) return console.log(err);
    db = client.db('capstone_database');
    uc = db.collection('userCollection');
});
mongoose.connect(uri).then((err, client) => {
    if (err) return console.log(err);
    db = client.db('capstone_database');
    uc = db.collection('userCollection');
});


router.use(require("express-session")({
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false
}));

router.use(passport.initialize());
router.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Showing login form
router.get("/loginRoute", function (req, res) {
    res.render("login");
});

//Handling user login
router.post("/loginRoute", passport.authenticate("local", {
    successRedirect: "/secretRoute",
    failureRedirect: "/loginRoute"
}), function (req, res) {
});
//todo: make a web push notification for invalid login

module.exports = router;