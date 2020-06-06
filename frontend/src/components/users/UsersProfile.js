import React, { useState, useEffect } from "react";
import { apiURL } from "../../util/apiURL";
import { useHistory } from "react-router-dom";
import axios from "axios";
import DisplayUsers from "./DisplayUsers";

export default function UsersProfile() {
  const [users, setUsers] = useState("");
	const history = useHistory();

  const API = apiURL();
  

  useEffect(() => {
    const getAllUsers = async () => {
      let res = await axios({
        method: "get",
        url: `${API}/api/users`,
      });
      history.pushState("/users")
      setUsers(res.data.payload);
  
    }
    getAllUsers();
}, [API]);
    return(
      <div>
        <h1>All users if logged in</h1>
        <div>{DisplayUsers()}</div>
      </div>
    )
         
}
