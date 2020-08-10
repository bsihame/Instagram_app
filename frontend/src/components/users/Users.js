import React, { useEffect, useState, useContext } from "react";
import NavBar from "../navbar_footer/NavBar";
import Footer from "../navbar_footer/Footer";
import { getAllUsers } from "../../util/getRequests";
import "../../CSS/Users.css"
import User from "./User";

export default function Users() {
	
	const [users, setUsers] = useState([]);
	const getUsers = async () => {
		try {
			const res = await getAllUsers();
			debugger
			setUsers(res)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
    getUsers()
	},[]);
	return (
		<div className="UsersContainer" >
      <div className="displayAllUsers">
        {users.map((user) => {
          return <div key={user.id}>
            <img src={user.profile_pic} alt="User Profile" className="userProfile" />
            <p className="usersUserName">{user.username}</p>
                 </div> 
        })}
      </div>

		</div>
	);
}