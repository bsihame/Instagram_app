import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../util/getRequests";
import "../../CSS/Users.css";

export default function Users() {
	const [users, setUsers] = useState([]);
	const getUsers = async () => {
		try {
			const res = await getAllUsers();
			setUsers(res);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getUsers();
	}, []);
	return (
		<div className="UsersContainer">
			<div className="displayAllUsers">
				{users.map((user) => {
					return (
						<div key={user.id}>
							<img
								src={user.profile_pic}
								alt="User Profile"
								className="userProfile"
							/>
							<p className="usersUserName">{user.username}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
