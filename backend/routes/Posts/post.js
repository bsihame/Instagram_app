const posts = require("express").Router();
// const upload = require("express").Router();
//  const { isUserExisting } = require("../../queries/Users/Users");

const {
	addNewPost,
	getAllPosts,
	getSinglePost,
	// , addNewPicture
} = require("../../queries/Post/Post");

// posts.post("/", addNewPost)

posts.get("/:poster_id", getSinglePost);
posts.get("/:user_id", getAllPosts);
// upload.post("/:poster_id/upload",  addNewPicture)

module.exports = posts;
