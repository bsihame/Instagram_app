const userPosts = require("express").Router({ mergeParams: true });

const { isUserExisting } = require("../../queries/users");

userPosts.get("/", isUserExisting, getPostByUser);

module.exports = userPosts;