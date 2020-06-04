const db = require("../../db/index");


const createNewUser = async (req, res, next) => {
  try {
    const newUser = await db.none(
      "INSERT INTO users( full_name, email, username) VALUES( ${full_name}, ${email}, ${username})", req.body
    );
    res.status(200).json({
      status: "ok",
      message: "New User Created",
      payload: newUser
    })
  } catch (error) {
    next(error);
  }
};

const getUserByEmail = async (req, res, next) =>{
  try{
      const user = await db.one('SELECT * FROM Users WHERE email= $1', [req.params.email]);
      res.status(200).json({
          status: 'success',
          message: 'retrieves single user by Email',
          payload: user
      })
  }catch(error){
      res.status(400).json({
          status: 'error',
          message: 'could not get single user by Email',
      })
  }
}

const getAllUsers = async (req, res, next) => {
  try {
    const users = await db.any("SELECT * FROM users ORDER BY id ASC");
    // if (users.length) {
      res.status(200).json({
        status: "ok",
        message: "Retrieved all users",
        payload: users
      });
    // } else {
    //   throw { status: 404, error: "No users found" };
    // }
  } catch (error) {
    next(error);
  }
};

const isUserExist = async (req, res, next) => {
  const getUserId = req.params.id;
  const postUserId = req.body.poster_id;

  const id = getUserId ? getUserId : postUserId;
  try {
    if (!id) {
      throw {
        status: 400,
        error: "There is no ID"
      };
    } else {
      user = await db.one("SELECT * FROM user WHERE id=$1", id);
      next()
    }
  } catch (error) {
    if (error.received === 0) {
      res.status(400).json({
        status: 404,
        error: "User ID doesn't exist"
      })
    } else {
      next(error)
    }
  }
};

const getUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    let user = await db.one("SELECT * FROM users WHERE id=$1", id);
    res.status(200).json({
      status: "Ok",
      user,
      message: "Retrieved user"
    })
  } catch (error) {
    next(error)
  }
};

const logIn = async (req, res, next) => {
  const { email } = req.body;
  try {
    let user = await db.any(`SELECT * FROM users WHERE email=$1`, email);
    res.status(200).json({
      status: "ok",
      user,
      message: "Retrieved user by email"
    });
  } catch (error) {
    if (error.received === 0) {
      res.status(404).json({
        status: 404,
        error: `Email doesn't exist`
      });
    }
    next(error);
  }
};



module.exports = { isUserExist, getAllUsers, logIn, createNewUser,getUserByEmail, getUserById };


