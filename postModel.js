var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userCollectionSchema =
    new Schema({
            admin: "Boolean",
            name: "String",
        },
        {collection : "userCollection"});

module.exports = mongoose.model("userCollection", userCollectionSchema); //todo Post to userCollection

/*
Here we did the following things:..
Create a schema with a title and a content
Set a post model that uses this schema
Export the post to use it in your app.js file
Now you can use this Post model when you are about to create or update your blog posts.
 */