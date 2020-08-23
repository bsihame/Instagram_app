
import axios from "axios";


import { apiURL } from "../util/apiURL";

const API = apiURL();
export const getAllUsers = async () => {
  try {
    let res = await axios.get(API + "/api/users");
    console.log(res.data.payload)
    return res.data.payload;
  } catch (error) {
      console.log(error);
  }
}

export const getUserById = async(id) => {
  try {
    let res = await axios.get(API + `/api/users/${id}`);
    console.log(res.data.payload);
    return res.data.payload
  } catch (error) {
    console.log(error)
  }
}

export const getUsersPosts = async() => {
  try {
    let res = await axios.get(API + `/api/posts`);
    // console.log(res.data.payload);
    return res.data.payload
  } catch (error) {
    console.log(error)
  }

}

export const createPost = async (dataObj) => {
  
  try {
    const res = await axios.post(API + `/api/posts`, dataObj)
    return res
  } catch (error) {
    console.log(error)
  }
}
export const getPostByPostId = async (id) => {
  try {
    const res = await axios.get(API + `/api/posts/${id}`)
    return res
  } catch (error) {
    console.log(error)
  }
}

export const createComments = async (dataObj) => {
  try {
    const res = await axios.post(API + `/api/comments`, dataObj)
    return res
  } catch (error) {
    console.log(error)
  }
}

export const getCommentsByPostId = async (postId) => {
  try {
    const res = await axios.get(API + `/api/comments/${postId}`)
    return res
  } catch (error) {
    console.log(error)
  }
}
export const createLikes = async (postId) => {
  try {
    const res = await axios.post(API + `/api/likes`)
    return res
  } catch (error) {
    console.log(error)
  }
}
export const getLikeCommentByPostId = async (postId) => {
  try {
    const res = await axios.get(API + `/api/likes/${postId}`)
    return res
    debugger
  } catch (error) {
    console.log(error)
   }
 }

// export const getAllLikes = async (url) => {
//   try {
//     const res = await axios.get(API + `api/likes`, url);
//     debugger
//     return res.data.payload
//   } catch (error) {
//     console.log(error)
//   }
// }

export const ifUserNameExist = async (username) => {
  try {
    await axios.get(API + "/ api/users/username" + username)
    debugger
  } catch (error) {
    console.log(error)
  }
}