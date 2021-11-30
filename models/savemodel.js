var mongoose = require("mongoose");
const uri = "mongodb+srv://Omar:George72@cluster0.cpwsq.mongodb.net/capstone_database?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
    console.log("Connection Successful!");
});

var schema = mongoose.Schema({
    name: String,
    age: Number
});

var Model = mongoose.model("model", schema, "myCollection");

var doc1 = new Model({ name: "John", age: 21 });

doc1.save(function(err, doc) {
    if (err) return console.error(err);
    console.log("Document inserted successfully!");
});

//todo: C:\Users\omarn\Desktop\Workspace\capstone-restaurant-app>node models/savemodel.js
// Connection Successful!
// Document inserted succussfully!
// stopped here 11/30