import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthContext";
import { getAllUsers } from "../../util/getRequests";


export default function RandomUsers() {
	const { currentUser } = useContext(AuthContext);
	const [users, setUsers] = useState([]);
	let id = currentUser.id;
	const getUsers = async () => {
		try {
			const allUsers = await getAllUsers();
			const filtered = allUsers.filter((user) => user.id !== id);
			setUsers(filtered);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getUsers();
	}, []);

  return (
		<>
			<div className="suggestUsers">
				<div>
					<p className="suggest">Suggestions For You</p>
				</div>
				<div>
					<a className="seeAll">See All</a>
				</div>
			</div>
			<div className="exploreUsers">
				{users.map((user) => {
					return (
						<div className="explore" key={user.id}>
							<img
								width="100%"
								src={user.profile_pic}
								alt="User Profile"
								className="exploreImage"
							/>
							<span className="exploreName">{user.username}</span>
						</div>
					);
				})}
			</div>
		</>
	);
}
