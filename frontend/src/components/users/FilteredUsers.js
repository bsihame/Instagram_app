import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthContext";
import { getAllUsers } from "../../util/getRequests";
import { Paper } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import "../../CSS/FilteredUsers.css"


export default function FilteredUsers() {
	const { username } = useParams();
	const { currentUser } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  let id = currentUser.id;
	const history = useHistory();
	const getUsers = async() => {
		try {
			const allUsers = await getAllUsers(username);
			const filtered = allUsers.filter(user => (user.id !== id))
			// debugger

			setUsers(filtered);
		} catch (error) {
			console.log(error);
    }
	};
	const redirect = () => {
		history.push(`/${users.username}/profile`);
	};
	useEffect(() => {
		getUsers();
	}, [username]);

	return (
		<Paper className="displayUsersPaper">
			<div className="displayAllUsers">
				{users.map((user) => {
					return (
						<div className="userInfo random" key={user.id}>
							<img
								width="100%"
								src={user.profile_pic}
								alt="User Profile"
								className="userProfile"
								onClick={redirect}
							/>
							<p className="usersUserName" onClick={redirect}>
								{user.username}
							</p>
						</div>
					);
				})}
			</div>
		</Paper>
	);
}


