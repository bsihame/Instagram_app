import React, { useState, useEffect, useContext } from "react";
import { apiURL } from "../../util/apiURL";
import { AuthContext } from "../../providers/AuthContext";
import axios from "axios";

export default function UsersProfile() {
  const [users, setUsers] = useState([]);
  const API = apiURL();
  const { token } = useContext(AuthContext);
  const getAllUsers = async () => {
    let res = await axios({
      method: "get",
      url: `${API}/api/users`,
      headers: {
        "AuthToken": token
      }
    })
    console.log(res)
    setUsers(res.data.users);
  }
  useEffect(() => {
    
    getAllUsers();
  },[API]);
  return(
    <div>
      <h1>All users if logged in</h1>
      <ul>
        {users.map(user => {
          // debugger
          return <div key={user.id}>
            <li>
              {user.email}</li>
            <li>{user.full_name}</li>

              <li >
            {user.username}</li>
            <li>{user.bio}</li>
            {/* <img>{user.profile_pic}</img> */}
          </div>
        })}
      </ul>
    </div>
  )
}
