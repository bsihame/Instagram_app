// const userPosts = require("express").Router({ mergeParams: true });
// const { isUserExisting } = require("../../queries/Users/Users");

const postsRouter = require("express").Router();
const { leftJoinUsersPosts, getSinglePost, addNewPost } = require("../../queries/Post/Post");

postsRouter.get('/', leftJoinUsersPosts);
postsRouter.get('/:id', getSinglePost);


postsRouter.post('/', addNewPost)

// userPosts.get("/", isUserExisting, getPostByUser);
module.exports = postsRouter;