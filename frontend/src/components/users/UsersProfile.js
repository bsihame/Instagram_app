import React, { useState, useEffect, useContext } from "react";
import { apiURL } from "../../util/apiURL";
import { AuthContext, } from "../../providers/AuthContext"
import { NavLink } from "react-router-dom";
import axios from "axios";
import firebase from "../../firebase";
import { useInputs } from "../../util/customHooks";

export default function UsersProfile() {
  const [users, setUsers] = useState([]);
 
  const API = apiURL();
  

  useEffect(() => {
    const getAllUsers = async () => {
      let res = await axios({
        method: "get",
        url: `${API}/api/users`,
      })
     

      const displayUsers = () => {

    
      const usersArray = res.data.payload
      usersArray.forEach(array => {
        

        return (
          <ul key={array.id}>
            <li>array.id</li>
            <li>array.full_name</li>
            <li>array.username</li>
            <li>array.bio</li>
            <li>array.profile_pic</li>
          </ul>
        )
        });
     }
    setUsers(res.data.payload);
    }
    
    getAllUsers();
}, []);
    return(
      <div>
        <h1>All users if logged in</h1>
        
         
          {/* <div>
            {users.map(array => {
              return (
                <ul key={array.id}>
                  <li>array.id</li>
                  <li>array.full_name</li>
                  <li>array.username</li>
                  <li>array.bio</li>
                  <li>array.profile_pic</li>
          
                </ul>
              )
            })}
          </div> */}
      </div>
    )
         
}
