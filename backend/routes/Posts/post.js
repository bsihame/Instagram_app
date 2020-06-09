const posts = require("express").Router();
//  const { isUserExisting } = require("../../queries/Users/Users");

const { addNewPost , getAllPosts, getSinglePost  } = require("../../queries/Post/Post");


posts.post("/", addNewPost)

posts.get("/:poster_id", getSinglePost)
posts.get("/:poster_id",getAllPosts)

module.exports = posts; 
