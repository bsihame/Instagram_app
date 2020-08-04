const comments = require("express").Router();

const {
	getAllComments,
	getUsersComments,
	createComment,
	// updateComments,
	deleteComment,
	// getSinglePost,
} = require("../../queries/Comments/Comments");
const { post } = require("../Users/users");
const { checkFirebaseToken } = require("../../middleware/auth");

comments.get("/", getAllComments);
comments.get("/:id", getUsersComments);
// comments.get("/", getSinglePost)
comments.post("/", createComment);
// comments.patch("/:id", updateComments);
comments.delete("/:id", deleteComments);


module.exports = comments;

		