const db = require("../../db/index");



const getAllLikes = async (req, res, next) => {
	try {
		const likes = await db.any("SELECT * FROM likes");
		if (likes.length) {
			res.status(200).json({
				status: "ok",
				message: "Retrieved all likes",
				payload: likes,
			});
		} else {
			throw { status: 404, error: "No likes found" };
		}
	} catch (error) {
		res.status(400).json({
			status: "error",
			message: "Could not retrieve all likes",
		});
	}
};




module.exports = { getAllLikes }
