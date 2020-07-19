import axios from "axios";
import { apiURL } from "../util/apiURL";

const API = apiURL();

export const getUserById = async(id) => {
  try {
    let res = await axios.get(API + `/api/users/${id}`);
    return res.data
    debugger
  } catch (error) {
    console.log(error)
  }

}