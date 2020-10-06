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
		let posts = await db.any("SELECT posts.id, posts.picture, posts.content, users.username, users.profile_Pic FROM Posts LEFT JOIN Users ON posts.poster_id = users.id LEFT JOIN friends ON users.id = user_id ORDER BY created_at DESC WHERE posts.id= $1, posts.picture= $2, posts.content =$3, users.username =$4, users.profile_pic=$5 "); 
		console.log(posts)
			req.params.poster_id
			// `SELECT * FROM where poster_id=$1`,
		// console.log(posts)
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
		const poster_id = req.params.id;
		let post = await db.any(
			"SELECT username, bio, profile_pic, picture, content, created_at FROM users LEFT JOIN posts ON users.id= poster_id WHERE users.id= $1",
			poster_id
		);
		res.status(200).json({
			status: "ok",
			message: "Display a user Post",
			payload: post,
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			status: "error",
			message: "Could not created the new post",
		});
	}
};

const updatePosts = async (req, res, next) => {
	try {
		let { picture } = req.body;
		 let { posts } = req.body
		let { userId } = req.params;
		let post = await db.one("UPDATE posts SET picture= $1, post = $2, WHERE = $3", [picture, posts, userId])

	} catch (error) {
		console.log(error);
		res.status(400).json({
			status: "error",
			message: "Could not update posts",
		})
	}
};

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
	updatePosts,
	getUsersPosts,
	deletePost,
	getSinglePost,
};
