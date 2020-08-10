const comments = require("express").Router();
const { checkFirebaseToken } = require("../../middleware/auth");

const {
	createComment,
	getAllComments,
	getAllCommentsByPostId
} = require("../../queries/Comments/Comments");

comments.post("/", createComment);
comments.get("/:post_id", getAllCommentsByPostId)


module.exports = comments;


		