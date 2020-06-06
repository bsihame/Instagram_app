const users = require("express").Router();
const {
  createNewUser,
  getAllUsers,
  getUserByEmail,
  isUserExist,
  logIn,
  signUp,
  getUserById,
} = require("../../queries/Users/Users");
// const { checkFirebaseToken } = require("../middleware/auth")

users.post("/", createNewUser);
// users.get("/", checkFirebaseToken, getAllUsers);
users.get("/", getAllUsers);
// userRouters.get('/email/:email', getUserByEmail)

users.get("/", getAllUsers);
users.post("/login", logIn);
users.post("/signUp, signUp")
users.get("/:id", isUserExist, getUserById);




module.exports = users;