const db = require("../../db/index");

const getAllComments = async (req, res, next) => {
	try {
		let posts = await db.any("SELECT * FROM comments ORDER BY id DESC");
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

const getAllCommentsByPostId = async (req, res, next) => {
	try {
		const postId = req.params.post_id
		let posts = await db.any("SELECT * FROM comments WHERE post_id =$1 ORDER BY id DESC", postId);
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
	console.log('Router call')
	try {
		let post = await db.none(
			"INSERT INTO comments(post_id, poster_id, content) VALUES(${post_id}, ${poster_id}, ${content})",
			req.body
		);
		res.status(200).json({
			status: "ok",
			message: "Create  a new comment",
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			status: "error",
			message: "Could not add users comment",
		});
		next();
	}
};


module.exports = {
	createComment,
	getAllComments,
	getAllCommentsByPostId
};
