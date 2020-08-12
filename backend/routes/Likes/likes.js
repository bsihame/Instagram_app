const likes = require("express").Router();
const { checkFirebaseToken } = require("../../middleware/auth")
const {

	getAllLikes, 
	createLikes,
	getAllLikesByPostId

	
} = require("../../queries/Likes/Likes");


likes.post("/", createLikes);
likes.get("/:post_id", getAllLikesByPostId)


module.exports = likes;

		