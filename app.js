
const express = require("express");
const connection = require("./connection");
const postModel = require("./postModel.js");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*
Reading or getting posts
To get all posts from your database, we define this route:
 */
app.get("/", async (req, res) => {
  try {
    const userCollection = await postModel.find();
    res.json(userCollection);
  } catch (e) {
    console.log(e);
  }
});

/*
    route for reading or getting only one post from the server:
 */
// app.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const post = await postModel.findById(id);
//     res.json(post);
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });

/*
Deleting a post
Finally, deleting a post follows the same procedure, but we use .delete():
 */
// app.delete("/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const post = await postModel.findById(id);
//     await post.remove();
//     res.json("deleted");
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });

/*
Updating a post
To update a post, you have the choice between the PUT and PATCH requests.
We use the PUT request in this case:
 */
// app.put("/:id", async (req, res) => {
//   const { id } = req.params;
//   const { admin, name } = req.body;
//   try {
//     const post = await postModel.findByIdAndUpdate(id, { title2, content2 });
//     res.json(post);
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });

/*
The first part of the CRUD operations is the creation of a new post.
For that, we add a new route like that:
 */
app.post("/", async (req, res) => {
  const {_id, admin, name} = req.body;
  try {
    const newPost = await postModel.create({
      _id,
      admin,
      name,
    });
    res.json(newPost);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(3000, () => {
  console.log("Listening at port 3000");
});


//The first part of the CRUD operations is the creation of a new post.
// For that, we add a new route like that:
// app.post("/", async (req, res) =>{
//   const {admin, name} = req.body;
//   try {
//     const newPost = await postModel.create({
//       admin,
//       name,
//     });
//   res.json(newPost);
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });

//To get all posts from your database, we define this route:


//try to print anything
// app.post(post);

// module.exports = app; //todo remove?

// app.listen(3000, () =>
// {
//   console.log("Listening at port 3000");
// });

