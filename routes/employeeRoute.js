var express = require('express');
const {MongoClient} = require("mongodb");
var router = express.Router();

const uri = "mongodb+srv://Omar:George72@cluster0.cpwsq.mongodb.net/capstone_database?retryWrites=true&w=majority";
MongoClient.connect(uri, (err, client) => {
    if (err) return console.log(err);
    db = client.db('capstone_database');
    uc = db.collection('userCollection');
});

/* GET home page. */
//gets route index.js
router.get('/employeeRoute', function(req, res, next) {
    //below renders view index.ejs
    res.render('employeeView', { title: 'Express' });
    next();
});

//gets all http://localhost:3000/index3
router.get('/employeeRoute', (req, res) => {
    db.collection('userCollection').find().toArray().then(results => {
        res.send(results);
        console.log(results);
    }).catch(error => console.error(error))
    // ...
}); //todo: change to 'employeeRoute'

module.exports = router;