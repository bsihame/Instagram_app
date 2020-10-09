const posts = require("express").Router();

const {
	getAllPosts,
	getUsersPosts,
	createPost,
	updatePosts,
	deletePost,
	getSinglePost,
} = require("../../queries/Posts/Posts");
const { post } = require("../Users/users");
const { checkFirebaseToken } = require("../../middleware/auth");

posts.get("/", getAllPosts);
posts.get("/post/:id", getSinglePost);
posts.get("/:id", getUsersPosts);
posts.post("/", createPost);
posts.patch("/:id", updatePosts);
posts.delete("/:id", deletePost);

module.exports = posts;
