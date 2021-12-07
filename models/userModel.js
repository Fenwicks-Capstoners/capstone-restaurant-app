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

var shiftSchema = new mongoose.Schema({
    Shift: { type: mongoose.Schema.Types.ObjectId, ref: 'Shift'},
    Shift2: Number,
    Managers: String,
    Employees: String,
});

shiftSchema.pre('findOne', function(next) {
    this.populate('Shift');
    next();
});

var DaySchema = mongoose.Schema({
    Date: {type: Date, index: true, required: true}, //might need to make a string or figure out the mongodb syntax
    Shift1: Object,
    Shift2: Object
});

var Model = mongoose.model("Shift", shiftSchema, "userCollection");

//var Model = mongoose.model("model", shiftSchema, "userCollection");
//var doc1 = new Model({ name: "John", age: 21 });
var doc1 = new Model({
    Shift1: 1, //might need to make a string or figure out the mongodb syntax
    Shift2: 2, //might need to make a string or figure out the mongodb syntax
    Managers: " x x",
    Employees: "E E E E"
});

doc1.save(function(err, doc) {
    if (err) return console.error(err);
    console.log("Document inserted successfully!");
});

//todo: C:\Users\omarn\Desktop\Workspace\capstone-restaurant-app>node models/savemodel.js
// Connection Successful!
// Document inserted succussfully!
// stopped here 11/30

/*
Reference to Other Schemas
We can expect that all middle sized applications will have more than one schema, and possibly those schemas will be linked in some way.

In our example, to represent a family tree we need to add two attributes to our schema:

const PersonSchema = new mongoose.Schema({
    // ...
    mother: { type: mongoose.Schema.Types.ObjectId, ref: 'Person' },
    father: { type: mongoose.Schema.Types.ObjectId, ref: 'Person' },
});
A person can have a mother and a father. The way to represent this in Mongoose is by saving the ID of the referenced document, mongoose.Schema.Types.ObjectId, not the object itself.
 */