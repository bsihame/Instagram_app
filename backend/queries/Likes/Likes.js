const db = require("../../db/index");




// const getAllLikes = async (req, res, next) => {
// 	try {
// 		const likes = await db.any("SELECT * FROM likes");
// 		if (likes.length) {
// 			res.status(200).json({
// 				status: "ok",
// 				message: "Retrieved all likes",
// 				payload: likes,
// 			});
// 		} else {
// 			throw { status: 404, error: "No likes found" };
// 		}
// 	} catch (error) {
// 		res.status(400).json({
// 			status: "error",
// 			message: "Could not retrieve all likes",
// 		});
// 	}
// };
const getAllLikes = async (req, res, next) => {
	try {
		let posts = await db.any("SELECT * FROM likes ");
		res.status(200).json({
			status: "ok",
			message: "Retrieve all likes",
			payload: likes,
		})
	} catch (error) {
		console.log(error);
		res.status(400).json({
			status: "error",
			payload: "Couldn't retrieve all likes",
		});
		next();
	}
}
const getAllLikesByPostId = async (req, res, next) => {
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


const createLikes= async (req, res, next) => {
	console.log('Router call')
	try {
		let post = await db.none(
			"INSERT INTO comments(liker_id, post_id, content) VALUES(${liker_id}, ${post_id})",
			req.body
		);
		res.status(200).json({
			status: "ok",
			message: "Create  a new like",
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			status: "error",
			message: "Could not like a user post",
		});
		next();
	}
};





module.exports = { getAllLikes,createLikes,getAllLikesByPostId }
