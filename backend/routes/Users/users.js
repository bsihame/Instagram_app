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
// const { getAllUsersFirebase } = require("../../firebaseUtil/firebaseUtil");

//  users.get("/:id", checkFirebaseToken, getUserById);
// users.get("/",checkFirebaseToken , getAllUsersFirebase);

// users.get("/", getAllUsers);

users.post("/", createNewUser);
users.post("/login", logIn);

users.get("/:id", getUserById);
users.get("/email/:email", getUserByEmail)
users.patch("/:id",checkFirebaseToken, updateUser);
users.delete("/:id", checkFirebaseToken, deleteUser)
// users.post("/signUp, signUp")





module.exports = users;