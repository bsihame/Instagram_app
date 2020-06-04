const users = require("express").Router();
const {
  createNewUser,
  getAllUsers,
  getUserByEmail,
  isUserExist,
  logIn,
  getUserById,
} = require("../../queries/Users/Users");
// const { checkFirebaseToken } = require("../middleware/auth")

users.post("/", createNewUser);
// users.get("/", checkFirebaseToken, getAllUsers);
// userRouters.get('/email/:email', getUserByEmail)

users.get("/", getAllUsers);
users.post("/login", logIn);
users.get("/:id", isUserExist, getUserById);




module.exports = users;