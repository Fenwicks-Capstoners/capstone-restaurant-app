// app.js
//this runs the server
//type npm start or npm run start
const express = require("express");

//db instance connection
require("./config/db");

const app = express(); //this file is app?

const port = process.env.PORT || 3301;

app.listen(port, () => {
    console.log(    'Server running at http://localhost:${port}');

});
