const db = require("../../db/index");

const getAllComments = async (req, res, next) => {
	try {
		let posts = await db.any("SELECT * FROM posts ORDER BY id DESC");
		res.status(200).json({
			status: "ok",
			message: "Retrieve all friends comments",
			payload: posts,
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			status: "error",
			payload: "Couldn't retrieve all the comments",
		});
		next();
	}
};


const createComment = async (req, res, next) => {
	try {
		let post = await db.none(
			"INSERT INTO posts(post_id, poster_id, content, created_at) VALUES(${poste_id}, ${poster_id}, ${comment}, ${created_at})",
			req.body
		);
		res.status(200).json({
			status: "ok",
			message: "Create  a new post",
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			status: "error",
			message: "Could not get users posts",
		});
		next();
	}
};


module.exports = {
	createComment,
	getAlComments,
};
