const posts = require("express").Router();
const upload = require("express").Router();
 const { isUserExisting } = require("../../queries/Users/Users");

const {
	addNewPost,
	getAllPosts,
	getSinglePost,
	addNewPicture,
	updatePosts,
	getUsersPosts,
	deletePost
} = require("../../queries/Post/Post");

posts.post("/:poster_id", addNewPost);
posts.get("/:id", getUsersPosts);
posts.patch("/:id", updatePosts);
posts.get("/:poster_id", getSinglePost);
posts.get("/", getAllPosts);
upload.post("/:poster_id/upload", addNewPicture);
posts.delete("/:id", deletePost);

module.exports = posts;

		