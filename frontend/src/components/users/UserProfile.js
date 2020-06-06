import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

export default function UsersProfile() {
  const [users, setUsers] = useState([]);
 

  const getAllUsers = async () => {
    let res = await axios({
      method: "get",
      url: `/api/users`,
      
    })
  
    setUsers(res.data.users);
  }
  useEffect(() => {
    
    getAllUsers();
  },[]);
  return(
    <div>
      <h1>All users if logged in</h1>
      <ul>
        {users.map(user => {
          return <div key={user.id}>
            <li>
              {user.email}</li>
            <li>{user.full_name}</li>

              <li >
            {user.username}</li>
            <li>{user.bio}</li>
            <img>{user.profile_pic}</img>
          </div>
        })}
      </ul>
    </div>
  )
}
