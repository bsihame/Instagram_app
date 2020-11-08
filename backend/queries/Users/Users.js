const db = require("../../db/index");

const createNewUser = async (req, res, next) => {
  try {
    const  {id, full_name, email, username,bio , profile_pic } = req.body
		let user = await db.none(
			// "INSERT INTO users(id, full_name, email, username) VALUES(${id}, ${full_name}, ${email}, ${username})", req.body
			`INSERT INTO users(id, full_name, email, username, bio, profile_pic) VALUES($1, $2, $3, $4, $5, $6)`, [id, full_name, email, username, bio, profile_pic]
      
		);
		res.status(200).json({
			status: "ok",
			message: "New User Created",
		});
	} catch (error) {
		res.status(400).json({
			status: "error",
			message: "Could not create user",
    });
    console.log(error);
    
	}
};

const getUserByEmail = async (req, res, next) => {
	try {
		const user = await db.one("SELECT * FROM Users WHERE email= $1", [
			req.params.email,
		]);
		res.status(200).json({
			status: "ok",
			message: "retrieves single user by Email",
			payload: user,
		});
	} catch (error) {
		res.status(400).json({
			status: "error",
			message: "Could not get single user by Email",
		});
	}
};

const getAllUsers = async (req, res, next) => {
	try {
		const users = await db.any("SELECT * FROM users ORDER BY id ASC");
		if (users.length) {
			res.status(200).json({
				status: "ok",
				message: "Retrieved all users",
				payload: users,
			});
		} else {
			throw { status: 404, error: "No users found" };
		}
	} catch (error) {
		res.status(400).json({
			status: "error",
			message: "Could not retrieve all users",
		});
	}
};


const getUserById = async (req, res, next) => {
	console.log("getUserById")
	try {
		const id = req.params.id;
		const singleUser = await db.one("SELECT * FROM users WHERE id=$1", id);
		res.status(200).json({
			status: "ok",
			message: "Retrieved user",
			payload: singleUser,
		});
	} catch (error) {
		res.status(400).json({
			status: "error",
			message: "Could not get single user by ID",
		});
		console.log(error)
	}
};

const getUserByUserName = async (req, res, next) => {
	try {
		const { username } = req.params;
		let user = await db.any("SELECT * FROM users WHERE username = $1", username)
		if (user.length) {
			res.status(200).json({
				status: "OK",
				message: "Retrieve user by username",
				payload: user[0],
			})
		} else {
			res.status(404).json({
				status: "Error",
				message: "User not found"
			})
		}
	} catch (error) {
		res.status(400).json({
			status: "error",
			message: "Could not get single user by username",
		});
	}
}

const logIn = async (req, res, next) => {
	const { email } = req.body;
	try {
		let user = await db.any("SELECT * FROM users WHERE email=$1", email);
		res.status(200).json({
			status: "ok",
			message: "Retrieved user by email",
			payload: user,
		});
	} catch (error) {
		if (error.received === 0) {
			res.status(404).json({
				status: 404,
				error: `Email doesn't exist`,
			});
		}
		next(error);
	}
};
const updateUser = async (req, res, next) => {
	try {
		const {
			full_name,
			username,
			bio,
			profile_pic
		} = req.body;

		const { id } = req.params;

		if (full_name) {
			let updated = await db.one("UPDATE users SET full_name=$1 WHERE id=$2 RETURNING *", [full_name, id]);
			user = updated
		}


		if(username) {
			let updated = await db.one("UPDATE users SET username=$1 WHERE id=$2 RETURNING *", [username, id]);
			user = updated;
		}

		if (bio) {
			let updated = await db.one("UPDATE users SET bio=$1 WHERE id=$2 RETURNING *", [bio, id]);
			user = updated;
		}

		if (profile_pic) {
			let updated = await db.one("UPDATE users SET profile_pic=$1 WHERE id=$2 RETURNING *", [profile_pic, id]);
			user = updated;
		}
		res.status(200).json({
			status: "ok",
			message: "Update user",
			payload: user,
		});
	} catch (error) {
		res.status(400).json({
			status: "error",
			message: "Could not update User",
		});
	}
};

const deleteUser = async (req, res, next) => {
	try {
		let deletedUser = await db.one(
			"DELETE FROM users WHERE id = $1 RETURNING *",
			[req.params.id]
		);
		res.status(200).json({
			status: "ok",
			message: "User is deleted",
			payload: deletedUser,
		});
	} catch (error) {
		res.status(400).json({
			status: "error",
			message: "Could not delete user",
		});
	}
};

module.exports = {
	getAllUsers,
	logIn,
	createNewUser,
	getUserByEmail,
	getUserById,
	updateUser,
	deleteUser,
	getUserByUserName,
};
