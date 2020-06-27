const users = require("express").Router();
const {
  createNewUser,
  getAllUsers,
  getUserByEmail,
  isUserExist,
  logIn,
  // signUp,
  getUserById,
  updateUser,
  deleteUser
  
} = require("../../queries/Users/Users");
const { checkFirebaseToken } = require("../../middleware/auth")

users.get("/:id",checkFirebaseToken, getUserById);
users.get("/",checkFirebaseToken , getAllUsers);

// users.get("/", getAllUsers);
// users.get("/:id", isUserExist, getUserById);

users.get("/email/:email", getUserByEmail)

users.post("/", createNewUser);
users.patch("/:id", updateUser);
users.delete("/:id", deleteUser)
users.post("/login", logIn);
// users.post("/signUp, signUp")





module.exports = users;