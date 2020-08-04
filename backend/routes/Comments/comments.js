const comments = require("express").Router();
const { checkFirebaseToken } = require("../../middleware/auth");

const {
	createComment,
	getAllComments,
} = require("../../queries/Comments/Comments");

comments.post("/:post_id", checkFirebaseToken,createComment);
comments.get("/:post_id", getAllComments)


module.exports = comments;

		