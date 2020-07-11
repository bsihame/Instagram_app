const posts = require("express").Router();
// const upload = require("express").Router();
//  const { isUserExisting } = require("../../queries/Users/Users");

const { addNewPost, getAllPosts, getSinglePost
  // , addNewPicture
} = require("../../queries/Post/Post");


// posts.post("/", addNewPost)

posts.get("/:poster_i", getSinglePost)
posts.get("/", getAllPosts)
// upload.post("/:poster_id/upload",  addNewPicture)

module.exports = posts; 
