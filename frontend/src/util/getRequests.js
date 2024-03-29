import axios from "axios";

import { apiURL } from "../util/apiURL";

const API = apiURL();

export const getAllUsers = async () => {
	try {
		let res = await axios.get(API + "/api/users");
		return res.data.payload;
	} catch (error) {
		console.log(error);
	}
};

export const getUserById = async (id) => {
	try {
		let res = await axios.get(API + `/api/users/${id}`);
		return res.data.payload;
	} catch (error) {
		console.log("ERROR - get user by id");
	}
};

export const getUsersPosts = async () => {
	try {
		let res = await axios.get(API + `/api/posts`);
		return res.data.payload;
	} catch (error) {
		console.log(error);
	}
};

export const createPost = async (dataObj) => {
	try {
		const res = await axios.post(API + `/api/posts`, dataObj);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const getPostByPosterId = async (id) => {
	try {
		const res = await axios.get(API + `/api/posts/post/${id}`);
		return res.data.payload;
	} catch (error) {
		console.log(error);
	}
};
export const getPostsByUserName = async (username) => {
	try {
		const res = await axios.get(API + `/api/posts/username/${username}`);
		return res.data.payload;
	} catch (error) {
		console.log(error)
	}
};

export const getPostsById = async (id) => {
	try {
		const res = await axios.get(API + `/api/posts/${id}`);
		return res.data.payload;
	} catch (error) {
		console.log(error);
	}
};

export const createComments = async (dataObj) => {
	try {
		const res = await axios.post(API + `/api/comments`, dataObj);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const getCommentsByPostId = async (postId) => {
	try {
		const res = await axios.get(API + `/api/comments/${postId}`);
		return res;
	} catch (error) {
		console.log(error);
	}
};
export const createLikes = async (likeObj) => {
	try {
		const res = await axios.post(API + `/api/likes`, likeObj);
		return res;
	} catch (error) {
		console.log(error);
	}
};
export const getLikeCommentByPostId = async (postId) => {
	try {
		const res = await axios.get(API + `/api/likes/${postId}`);
		return res.data.payload;
	} catch (error) {
		console.log(error);
	}
};

export const updateUser = async (id, data, token) => {
	debugger
	try {
		let res = await axios({
			method: "PATCH",
			url: API + "/api/users/" + id,
			headers: {
				AuthToken: token,
			},
			data,
		});
		return res.data.payload;
	} catch (error) {
		console.log(error);
	}
};

// export const getUserByUserName = async (username) => {
// 	try {
// 		let res = await axios.get(API + "/api/users/username/" + username);
// 		debugger
// 		return res.data.payload;
// 	} catch (error) {
// 		console.log(error);
// 	}
// };
// export const getUserByUserName = async(username) => {
// 	try {
// 		let res = await axios.get(API + "/api/users/username/" + username);
// 		return res.data.payload;
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

export const getUserByUserName = async (username, token) => {
	try {
		let res = await axios({
			method: "get",
			url: API + "/api/users/username/" + username,
			headers: {
				AuthToken: token,
			},
		});
		return res.data.payload;
	} catch (error) {
		console.log(error);
	}
};
