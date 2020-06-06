import React, { useState, useEffect } from "react";
import { apiURL } from "../../util/apiURL";
import axios from "axios";

export default function UsersProfile() {
  const [users, setUsers] = useState("");
  const API = apiURL();
  

  useEffect(() => {
    const getAllUsers = async () => {
      let res = await axios({
        method: "get",
        url: `${API}/api/users`,
      })
    setUsers(res.data.payload);
  
    }
    getAllUsers();
}, []);
    return(
      <div>
        <h1>All users if logged in</h1>
      </div>
    )
         
}
