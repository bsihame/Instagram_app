import React, { useState, useEffect } from "react";
import { apiURL } from "../../util/apiURL";
import UsersList from "./UsersList"
// import { AuthContext, } from "../../providers/AuthContext"
// import { NavLink } from "react-router-dom";
import axios from "axios";
// import firebase from "../../firebase";
// import { useInputs } from "../../util/customHooks";

export default function UsersIndex() {
  const [users, setUsers] = useState([]);
  const API = apiURL();
  // const { token } = useContext(AuthContext);

  useEffect(() => {
    const getAllUsers = async () => {
      let res = await axios({
        method: "get",
        url: `${API}/api/users`,
        // headers: {
        //   'AuthToken': token
        // }
      });

      setUsers(res.data.payload);
    };
    getAllUsers();
  }, [API]);

  return (
    <>
      <div>
        <h1>All users if logged in</h1>
      </div>
      <ul>
        {users.map((user) => {
          return (
            <UsersList key={user.id} user={user}/>
          )
        })}
      </ul>
    </>
  )
}
  
