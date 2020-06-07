import React, { useState, useEffect, useContext } from "react";
import { apiURL } from "../../util/apiURL";
import { AuthContext, } from "../../providers/AuthContext"
// import { NavLink } from "react-router-dom";
import axios from "axios";
//  import firebase from "../../firebase";
// import { useInputs } from "../../util/customHooks";

export default function UsersProfile() {
  const [users, setUsers] = useState([]);
  const API = apiURL();
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const getAllUsers = async () => {
      let res = await axios({
        method: "get",
        url: `${API}/users`,
        headers: {
          'AuthToken': token
        }
      })
    debugger
    setUsers(res.data.users);
  }
   
      getAllUsers();
    }, [API]);
      // const displayUsers = () => {

    
      // const usersArray = res.data.payload
      // usersArray.forEach(array => {
        

        // return (
        //   <ul key={array.id}>
        //     <li>array.id</li>
        //     <li>array.full_name</li>
        //     <li>array.username</li>
        //     <li>array.bio</li>
        //     <li>array.profile_pic</li>
        //   </ul>
        // )
 
    return(
      <div>
        <h1>All users if logged in</h1>
        <div>
            {users.map(user => {
              return (
                
                <ul key={user.id}>
                  <li>{user.id}</li>
                  <li>{user.full_name}</li>
                  <li>{user.username}</li>
                  <li>{user.bio}</li>
                  <li>{user.profile_pic}</li>
          
                  </ul>
                  
              )
            })}
        </div>
       
          </div> 
    
    )
         
}
