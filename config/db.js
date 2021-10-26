//javascript
const mongoose = require("mongoose");

const dbURI =
  "mongodb+srv://Omar:George72@cluster0.cpwsq.mongodb.net/test?authSource=admin&replicaSet=atlas-11llox-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

// require any models

require("../models/Task");