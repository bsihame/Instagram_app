
 const db = require("../../db/index");

const getAllPosts = async (req, res, next) => {
	try {
		let posts = await db.any(
			"SELECT posts.id, posts.picture, posts.content, users.full_name, users.profile_Pic FROM Posts LEFT JOIN Users ON posts.poster_id = users.id ORDER BY created_at DESC"
		);
		res.status(200).json({
			status: "ok",
			message: "Retrieve all posts",
			payload: posts,
		});
	} catch (error) {
		res.status(400).json({
			status: "error",
			message: "Couldn't retrieve all the posts",
		});
		next()
	}
};
const addNewPost = async (req, res, next) => {
// 	console.log(req.body)
	try {
		await db.one(
			"INSERT INTO posts(poster_id, picture, content) VALUES(${poster_id}, ${picture}, ${content})RETURNING *",
			req.body
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
		next()
	}
};
// const addNewPicture = async (req, res, next) => {
// 	try {
// 		let displayPicture = await db.one("INSERt WHERE poster_id = $1", req.params);
// 		res.status(200).json({
// 			status: "ok",
// 			message: "Created a new picture",
// 			payload: displayPicture
// 		})
// 	} catch (error) {
// 		console.log(error);
// 		res.status(400).json({
// 			status: "error",
// 			message: "Could not display a picture"

// 		});
// 		next()
// 	}
// }


const getSinglePost = async (req, res, next) => {
	try {
		let post = await db.any(
			"SELECT * FROM posts WHERE poster_id= $1", req.params.poster_id
		);
		res.status(200).json({
			status: "ok",
			message: "Created a new post",
			payload: post,
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			status: "error",
			message: "Could not created the new post",
		});
		next()
	}
};






module.exports = {
	addNewPost, getAllPosts, getSinglePost
	// ,addNewPicture
};
