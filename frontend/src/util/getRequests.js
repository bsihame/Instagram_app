import React from "react"
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API = apiURL();
export const getAllUsers = async () => {
  try {
    let res = await axios.get(API + "/api/users");
    debugger
    console.log(res.data.payload)
    return res.data.pay;
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