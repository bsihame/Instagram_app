import React from "react"
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API = apiURL();
export const getAllUsers = async () => {
  try {
      let res = await axios.get(API + "/api/users");
      return res.data;
  } catch (error) {
      throw error;
  }
}

export const getUserById = async(uid) => {
  try {
    let res = await axios.get(API + `/api/users/${uid}`);
    console.log(res);
    return res.data
  } catch (error) {
    console.log(error)
  }

}