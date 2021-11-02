var express = require("express"),
    app = express(),
    bodyparser = require("body-parser"),
    mongoose = require("mongoose");
const mongoAtlasUri =
"mongodb+srv://Omar:George72@cluster0.cpwsq.mongodb.net/capstone_database?retryWrites=true&w=majority";

try {
    // Connect to the MongoDB cluster
    mongoose.connect(
        mongoAtlasUri,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log(" Mongoose is connected")
    );

} catch (e) {
    console.log("could not connect");
}

app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var schema = new mongoose.Schema({
    Name : String,
    lname : String
    // route : String,
    // origin : String,
    // destination : String,
    // estimatedTimeOfArrival : String,
    // date : String,
    // time : String
})
var detailsModel = mongoose.model("userCollection", schema);
app.get("/", function (req, res) {
    res.render("index",{ details: null })
})
app.get("/getdetails", function (req, res) {
    detailsModel.find({}, function (err, allDetails) {
        if (err) {
            console.log(err);
        } else {
            res.render("index", { details: allDetails })
        }
    })
})
app.listen(3000, "localhost", function () {
    console.log("server has started");
})