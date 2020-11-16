import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthContext";
import { getAllUsers } from "../../util/getRequests";

export default function UsersCarousel() {
  	// const classes = useStyles();
	const { currentUser } = useContext(AuthContext);
	console.log(currentUser);
  const [users, setUsers] = useState([]);
  let id = currentUser.id;
	const getUsers = async () => {
		try {
			const allUsers = await getAllUsers();
      debugger;
      const filtered = allUsers.filter(user => (user.id !== id) )
			setUsers(filtered);
		} catch (error) {
			console.log(error);
    }
  };
  
	useEffect(() => {
		getUsers();
	}, []);

  return (
			<div className="displayAllUsers">
				{users.map((user) => {
					return (
						<div className="usersInfo random" key={user.id}>
							<img
								width="100%"
								src={user.profile_pic}
								alt="User Profile"
								className="userProfile"
							/>
							<p className="usersUserName">{user.username}</p>
						</div>
					);
				})}
			</div>
	);
}


