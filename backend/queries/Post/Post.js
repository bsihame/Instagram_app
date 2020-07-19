const db = require("../../db/index");

const getAllPosts = async (req, res, next) => {
	try {
		let posts = await db.any("SELECT * FROM posts ORDER BY id DESC");
		res.status(200).json({
				status: "ok",
				message: "Retrieve all friends posts",
				payload: posts,
			});
		// console.log(3333);
		// let userId = req.params.user_id;
		// let posts = await db.any(
		// 	`
		// 	SELECT
		// 	DISTINCT 
		// 			posts.id, 
		// 			posts.picture, 
		// 			posts.content, 
		// 			users.full_name, 
		// 			users.profile_Pic 
		// 	FROM Posts 
		// 	    LEFT JOIN Users ON posts.poster_id = users.id
		// 	    JOIN friends ON users.id = friend_id
		// 	WHERE user_id = $1
		// 	ORDER BY created_at DESC
		// 	`,
		// 	[userId]
		// );
		// res.status(200).json({
		// 	status: "ok",
		// 	message: "Retrieve all friends posts",
		// 	payload: posts,
		// });
	} catch (error) {
		console.log(error);
		res.status(400).json({
			status: "error",
			message: "Couldn't retrieve all the posts",
		});
		next();
	}
};
const addNewPost = async (req, res, next) => {
	// 	console.log(req.body)
	try {
		await db.one(
			"INSERT INTO posts(poster_id, picture, content) VALUES($1, $2, $3)RETURNING *",
			[poster_id, picture, content]
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
		next();
	}
};
const addNewPicture = async (req, res, next) => {
	try {
		let displayPicture = await db.one("INSERt WHERE poster_id = $1", req.params);
		res.status(200).json({
			status: "ok",
			message: "Created a new picture",
			payload: displayPicture
		})
	} catch (error) {
		console.log(error);
		res.status(400).json({
			status: "error",
			message: "Could not display a picture"

		});
		next()
	}
}

const getSinglePost = async (req, res, next) => {
	try {
		let post = await db.any(
			"SELECT * FROM posts WHERE poster_id= $1",
			req.params.poster_id
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
		next();
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
		next()
	}
};
const getUsersPosts = async (req, res, next) => {
	try {
		let posts = await db.any(
			`SELECT * FROM where poster_id=$1`, [req.params.id]
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
		addNewPost,
		getAllPosts,
		getSinglePost,
		addNewPicture,
		updatePosts,
		getUsersPosts,
		deletePost
	};
