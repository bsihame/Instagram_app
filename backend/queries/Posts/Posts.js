const db = require("../../db/index");

const getAllPosts = async (req, res, next) => {
	try {
		let posts = await db.any("SELECT * FROM posts ORDER BY id DESC");
		res.status(200).json({
			status: "ok",
			message: "Retrieve all friends posts",
			payload: posts,
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			status: "error",
			payload: "Couldn't retrieve all the posts",
		});
		next();
	}
};

const getUsersPosts = async (req, res, next) => {
	try {
		let posts = await db.any(
			`SELECT * FROM where poster_id=$1`,
			req.params.poster_id
		);
		res.status(200).json({
			status: "ok",
			message: "Get all users post",
			payload: posts,
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

const createPost = async (req, res, next) => {
	try {
		let post = await db.none(
			"INSERT INTO posts(poster_id, picture, content) VALUES(${poster_id}, ${picture}, ${content})",
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

const getSinglePost = async (req, res, next) => {
	try {
		let post = await db.any(
			"SELECT * FROM posts WHERE poster_id= $1",
			req.params.poster_id
		);
		res.status(200).json({
			status: "ok",
			message: "Display a user Postpost",
			payload: post,
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			status: "error",
			message: "Could not created the new post",
		});
		next();
	}
};

// const updatePosts = async (req, res, next) => {
// 	try {
// 		let { picture } = req.body;
// 		 let { posts } = req.body
// 		let { userId } = req.params;
// 		let post = await db.one("UPDATE posts SET picture= $1, post = $2, WHERE = $3", [picture, posts, userId])

// 	} catch (error) {
// 		console.log(error);
// 		res.status(400).json({
// 			status: "error",
// 			message: "Could not update posts",
// 		})
// 		next()
// 	}
// };

const deletePost = async (req, res, next) => {
	try {
		let { postsId } = req.params.id;
		let post = ("DELETE FROM posts WHERE id =$1 RETURNING *", postsId);
		res.status(200).json({
			status: "ok",
			message: "Delete post",
			payload: post,
		});
	} catch (err) {
		res.status(400).json({
			status: "error",
			message: "Could not delete posts",
		});
		next();
	}
};

module.exports = {
	createPost,
	getAllPosts,
	// updatePosts,
	getUsersPosts,
	deletePost,
	getSinglePost,
};
