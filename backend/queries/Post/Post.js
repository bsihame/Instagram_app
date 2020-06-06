const db = require("../../db/index");

const leftJoinUsersPosts = async (req, res, next) => {
	try {
		let leftJoin = await db.any(
			"SELECT posts.id, posts.picture, posts.content, users.full_name, users.profile_Pic FROM Posts LEFT JOIN Users ON posts.poster_id = users.id ORDER BY created_at DESC"
		);
		res.status(200).json({
			status: "ok",
			message: "Left join was a success",
			payload: leftJoin,
		});
	} catch (error) {
		res.status(400).json({
			status: "error",
			message: "Left join was not success",
		});
	}
};
const addNewPost = async (req, res, next) => {
	try {
		let newPost = await db.one(
			`INSERT INTO Posts (poster_id, picture, content) VALUES('${req.body.poster_id}', '${req.body.picture}', '${req.body.content}')RETURNING *`
		);
		res.status(200).json({
			status: "ok",
			message: "Created a new post",
			payload: newPost,
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			status: "error",
			message: "Could not created the new post",
		});
	}
};

const getSinglePost = async (req, res, next) => {
	try {
		let singlePost = await db.one(
			"SELECT * FROM posts WHERE id= $1", [req.params.id]
		);
		res.status(200).json({
			status: "ok",
			message: "Created a new post",
			payload: newPost,
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			status: "error",
			message: "Could not created the new post",
		});
	}
};


module.exports = { addNewPost, leftJoinUsersPosts, getSinglePost };
