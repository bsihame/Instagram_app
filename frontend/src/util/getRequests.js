import react from "react"
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
    debugger
    console.log(res.data.payload);
    return res.data.payload
  } catch (error) {
    console.log(error)
  }

}

export const getUsersPosts = async() => {
  try {
    let res = await axios.get(API + `/api/posts`);
    debugger
    console.log(res.data.payload);
    return res.data.payload
  } catch (error) {
    console.log(error)
  }

}

export const createPost = async (postObject, user) => {
  const {
    // Poster_id: {}
    content: { value: content },
    picture: { value: picture },
    
    // Poster_id,
    // picture,
    // content,
  } = postObject;
  const poster_id = user.id;
  console.log(poster_id)
  const res = await axios.post(API + "/api/posts", { content, picture })
  debugger
}

export const ifUserNameExist = async (username) => {
  try {
    await axios.get(API + "/ api/users/username" + username)
    debugger
  } catch (error) {
    console.log(error)
  }
}