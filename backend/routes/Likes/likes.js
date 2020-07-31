const likes = require("express").Router();
const {

	getAllLikes,

	
} = require("../../queries/Likes/Likes");


likes.get("/", getAllLikes);


module.exports = likes;

		