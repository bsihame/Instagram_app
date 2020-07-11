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
const { checkFirebaseToken } = require("../../middleware/auth");
const { getAllUsersFirebase } = require("../../firebaseUtil/firebaseUtil");

users.get("/:id",checkFirebaseToken, getUserById);
users.get("/",checkFirebaseToken , getAllUsersFirebase);

// users.get("/", getAllUsers);
// users.get("/:id", isUserExist, getUserById);

users.get("/email/:email", getUserByEmail)

users.post("/", createNewUser);
users.patch("/:id", updateUser);
users.delete("/:id", deleteUser)
users.post("/login", logIn);
// users.post("/signUp, signUp")





module.exports = users;