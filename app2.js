// app2.js
//this runs the server
//type npm start or npm run start
const express = require("express");
//const bodyParser = require("body-parser");

//db instance connection
require("./config/db");

const app2 = express(); //this file is app2?

const port = process.env.PORT || 3301;
//app2.use(bodyParser.urlencoded({ extended: true }));
//app2.use(bodyParser.json());

//API ENDPOINTS
// app2
//     .route("/tasks")
//     .get(taskController.listAllTasks)
//     .post(taskController.createNewTask);
//
// app2
//     .route("/tasks/:taskid")
//     .get(taskController.readTask)
//     .put(taskController.updateTask)
//     .delete(taskController.deleteTask);

app2.listen(port, () => {
    console.log('Server running at mongodb://localhost:${port}'); //changed to mongodb: from https:
});
