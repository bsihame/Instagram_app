import React from "react"
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

export const createPost = async (dataObj, url) => {
  
  try {
    const res = await axios.post(API + `/api/posts`, dataObj, url)
    debugger
    return res
    

  } catch (error) {
    console.log(error)
  }
}

export const ifUserNameExist = async (username) => {
  try {
    await axios.get(API + "/ api/users/username" + username)
    debugger
  } catch (error) {
    console.log(error)
  }
}