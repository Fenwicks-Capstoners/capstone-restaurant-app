// Define schema
var mongoose = require("mongoose");

// const uri = "mongodb+srv://Omar:George72@cluster0.cpwsq.mongodb.net/capstone_database?retryWrites=true&w=majority";
// mongoose.connect(uri,{ useNewUrlParser: true });
//
// const connection = mongoose.createConnection(uri);
//
// mongoose.connection.on('error', (err) => {
//     console.error(`Mongoose connection error: ${err}`);
//     process.exit(1);
// });

var schema = mongoose.Schema({
    name: String,
    age: Number
});

var Model = mongoose.model("model", schema, "myCollection");




var SomeModelSchema = new Schema({
    a_date: Date,
    name: 'string'

});

const small = new SomeModelSchema({ name: 'jim'});
small.save(function(err){
    if(err) return handleError(err);
    //saved
});

module.exports = mongoose.model("Shifty", SomeModelSchema);

