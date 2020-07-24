import React, { useEffect, useState, useContext } from "react";
import NavBar from "../navbar_footer/NavBar";
import Footer from "../navbar_footer/Footer";
import { getAllUsers } from "../../util/getRequests";


export default function Users() {
	
	
	const [users, setUsers] = useState([]);
	const getUsers = async () => {
		try {
			const res = await getAllUsers();
			setUsers(res)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
    getUsers()
	},[]);
	return (
		<>
		
			<h1>This all user Profile</h1>
      <div>
        {users.map((user) => {
          return <div key={user.id}>
            <p>{user.username}</p>
            <p>{user.profile_picture}</p>
                 </div> 
        })}
      </div>
			{/* <p>{users.username}</p> */}


		</>
	);
}