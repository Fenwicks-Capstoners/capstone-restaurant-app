// const mongoose = require('mongoose');
// require("dotenv").config();
// //    const uri = "mongodb+srv://Omar:George72@cluster0.cpwsq.mongodb.net/capstone_database?retryWrites=true&w=majority
// const uri = "mongodb+srv://Omar:George72@cluster0.cpwsq.mongodb.net/capstone_database?retryWrites=true&w=majority
// const connexion = mongoose.connect(uri).then(() =>
//         {
//             console.log("Connected to database");
//         })
//     .catch((err) =>
//             {
//                 console.log("Error connecting to the database", err);
//             });
// module.exports = connexion;

//Let’s break this down:
// We require the dotenv module to avoid having our credentials exposed
// Define an object with the connection parameters. This is useful for connecting to our MongoDB Atlas server.
// Now we have a URI variable. This holds your MongoDB Atlas connection URL. I’ll show you where to get yours in a minute.
// Next, we establish the connection between the server and MongoDB Atlas. This is done through the command mongoose.connect(). The connection is an asynchronous operation. So we handle it with a .then() if the connection is established or .catch() if their are issues in our connection.
// Finally, we export our connection object using module.exports.


const mongoose = require("mongoose");
require("dotenv").config();
//todo: see if this looks better //const uri = "mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.cpwsq.mongodb.net/capstone_database?retryWrites=true&w=majority";
const uri = "mongodb+srv://Omar:George72@cluster0.cpwsq.mongodb.net/capstone_database?retryWrites=true&w=majority";

const connexion = mongoose
    .connect(uri)
    .then(() => {
        console.log("Connected to database");
    })
    .catch((err) => {
        console.log("Error connecting to the database", err);
    });

module.exports = connexion;