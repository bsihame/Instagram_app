const posts = require("express").Router();

const {
	getAllPosts,
	getUsersPosts,
	createPost,
	// updatePosts,
	deletePost,
} = require("../../queries/Posts/Posts");

posts.get("/", getAllPosts);
posts.get("/:id", getUsersPosts);
posts.post("/", createPost);
// posts.patch("/:id", updatePosts);
posts.delete("/:id", deletePost);


module.exports = posts;

		